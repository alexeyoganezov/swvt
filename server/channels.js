module.exports = function(app) {
  if(typeof app.channel !== 'function') {
    return;
  }

  app.on('connection', connection => {
    app.channel('anonymous').join(connection);
  });

  // eslint-disable-next-line no-unused-vars
  app.publish((data, hook) => {
    return app.channel('anonymous');
  });
};
