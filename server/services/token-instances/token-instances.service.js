// Initializes the `token-instances` service on path `/token-instances`
const { TokenInstances } = require('./token-instances.class');
const createModel = require('../../models/token-instances.model');
const hooks = require('./token-instances.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: false,
    multi: true,
  };

  // Initialize our service with any options it requires
  app.use('/token-instances', new TokenInstances(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('token-instances');

  service.hooks(hooks);
};
