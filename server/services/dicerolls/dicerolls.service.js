// Initializes the `dicerolls` service on path `/dicerolls`
const { Dicerolls } = require('./dicerolls.class');
const createModel = require('../../models/dicerolls.model');
const hooks = require('./dicerolls.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: false,
    multi: true,
  };

  // Initialize our service with any options it requires
  app.use('/dicerolls', new Dicerolls(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('dicerolls');

  service.hooks(hooks);
};
