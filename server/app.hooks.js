const createdAt = (context) => {
  context.data.createdAt = Date.now();
  return context;
};

const updatedAt = (context) => {
  context.data.updatedAt = Date.now();
  return context;
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [createdAt],
    update: [updatedAt],
    patch: [updatedAt],
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
