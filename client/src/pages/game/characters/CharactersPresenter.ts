import { Presenter } from '../../../utils/framework';
import { CharactersView } from './CharactersView';
import { GameModel } from '../GameModel';
import { Character, CharacterModel, getCharacterDefaults } from '../../../entities/Character';
import { Player, PlayerModel } from '../../../entities/Player';
import { client } from '../../../utils/client';

const debounce = require('lodash/debounce');

export class CharactersPresenter extends Presenter<GameModel, CharactersView> {
  model: GameModel;
  view: CharactersView;
  constructor(gameModel: GameModel) {
    super();
    this.model = gameModel;
    this.view = new CharactersView(this.model);
  }
  async beforeInit() {
    const characters = await client.service('characters').find({
      query: {
        campaignId: this.model.attrs.campaign.getId(),
        $sort: {
          createdAt: 1,
        },
      },
    });
    const players = await client.service('players').find({
      query: { campaignId: this.model.attrs.campaign.getId() },
    });
    const characterModels = characters.map((c: Character) => new CharacterModel(c));
    this.model.attrs.characters.set(characterModels, true);
    this.model.attrs.players.set(players.map((p: Player) => new PlayerModel(p)));
  }
  async afterInit() {
    client.service('characters').on('created', (character: Character) => {
      this.model.attrs.characters.add(new CharacterModel(character));
    });
    client.service('characters').on('patched', (character: Character) => {
      const characterModel = this.model.attrs.characters.get(character._id);
      if (characterModel) {
        characterModel.set(character);
      }
    });
    client.service('characters').on('removed', (character: Character) => {
      this.model.attrs.characters.remove(character._id);
    });
    this.view.on('create-character', async () => {
      await client.service('characters').create({
        ...getCharacterDefaults(),
        campaignId: this.model.attrs.campaign.getId(),
      });
    });
    const updateValues = debounce(async (payload: unknown) => {
      const character = <Character>payload;
      await client.service('characters').patch(character._id, character);
    }, 400);
    this.view.on('update-value', updateValues);
    this.view.on('delete-character', async (characterId) => {
      await client.service('characters').remove(characterId);
    });
  }
}
