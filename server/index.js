/* eslint-disable no-console */
const localtunnel = require('localtunnel');
const open = require('open');
const logger = require('./logger');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () => {
  logger.info('Local server started: http://%s:%d', app.get('host'), port);
  localtunnel(port, {
    host: 'http://tun.swvt.net',
  }, (err, tunnel) => {
    if (err) {
      throw err;
    } else {
      logger.info(`Tunnel opened: ${tunnel.url}`);
      app.set('tunnel', tunnel.url);
      app.service('campaigns').patch(null, { host: tunnel.url });
      open(`http://${app.get('host')}:${port}`);
    }
  });
});
