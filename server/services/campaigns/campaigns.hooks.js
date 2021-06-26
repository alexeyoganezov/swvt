const setHost = async (context) => {
  context.data.host = context.app.get('tunnel');
  return context;
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [setHost],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
