const characters = require('./characters/characters.service.js');
const dicerolls = require('./dicerolls/dicerolls.service.js');
const campaigns = require('./campaigns/campaigns.service.js');
const imageInstances = require('./image-instances/image-instances.service.js');
const images = require('./images/images.service.js');
const players = require('./players/players.service.js');
const tokenInstances = require('./token-instances/token-instances.service.js');
const tokens = require('./tokens/tokens.service.js');
const spells = require('./spells/spells.service.js');
const abilities = require('./abilities/abilities.service.js');
const items = require('./items/items.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(characters);
  app.configure(dicerolls);
  app.configure(campaigns);
  app.configure(imageInstances);
  app.configure(images);
  app.configure(players);
  app.configure(tokenInstances);
  app.configure(tokens);
  app.configure(spells);
  app.configure(abilities);
  app.configure(items);
};
