// Initializes the `spells` service on path `/spells`
const { Spells } = require('./spells.class');
const createModel = require('../../models/spells.model');
const hooks = require('./spells.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: false,
    multi: true,
  };

  // Initialize our service with any options it requires
  app.use('/spells', new Spells(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('spells');

  service.hooks(hooks);
};
