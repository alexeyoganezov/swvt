// Initializes the `image-instances` service on path `/image-instances`
const { ImageInstances } = require('./image-instances.class');
const createModel = require('../../models/image-instances.model');
const hooks = require('./image-instances.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: false,
    multi: true,
  };

  // Initialize our service with any options it requires
  app.use('/image-instances', new ImageInstances(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('image-instances');

  service.hooks(hooks);
};
