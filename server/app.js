const path = require('path');
const glob = require('glob');
const favicon = require('serve-favicon');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./logger');

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');

const app = express(feathers());

app.set('host', 'localhost');
app.set('port', 3030);
app.set('public', path.join(__dirname, '../client/dist'));
app.set('nedb', `${path.dirname(process.execPath)}/data`);

app.use(helmet());
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
app.use('/', express.static(app.get('public')));

const dir = path.dirname(process.execPath);
app.use('/', express.static(dir));

app.configure(express.rest());
app.configure(socketio());

app.configure(middleware);
app.configure(services);
app.configure(channels);

app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

// Load images
glob(`${dir}/images/**/*.{jpg,png}`, {}, async (err, files) => {
  const existingImages = await app.service('images').find();
  const removals = [];
  existingImages.forEach((image) => {
    if (!files.includes(image.path)) {
      app.service('images').remove(image._id);
    }
  });
  await Promise.all(removals);
  files.forEach(async path => {
    const image = await app.service('images').find({ query: { path } });
    if (image.length === 0) {
      app.service('images').create({
        url: path.replace(dir, ''),
        filename: path.replace(`${dir}/images/`, ''),
        path: path,
      });
    }
  });
});

// Load tokens
glob(`${dir}/tokens/**/*.{jpg,png}`, {}, async (err, files) => {
  const existingTokens = await app.service('tokens').find();
  const removals = [];
  existingTokens.forEach((token) => {
    if (!files.includes(token.path)) {
      app.service('tokens').remove(token._id);
    }
  });
  await Promise.all(removals);
  files.forEach(async path => {
    const token = await app.service('tokens').find({ query: { path } });
    if (token.length === 0) {
      app.service('tokens').create({
        url: path.replace(dir, ''),
        filename: path.replace(`${dir}/tokens/`, ''),
        path: path,
      });
    }
  });
});

app.service('campaigns').patch(null, { url: '', host: '', isActive: false });

module.exports = app;
