import { client } from '../../utils/client';
import { Presenter } from '../../utils/framework';
import { Campaign } from '../../entities/Campaign';
import { DiceRoll, DiceRollModel, DieRoll } from '../../entities/DiceRoll';
import { CharacterModel } from '../../entities/Character';
import { GameView } from './GameView';
import { GameModel } from './GameModel';
import { Character } from '../../entities/Character';
import { Token } from '../../entities/Token';
import { Image } from '../../entities/Image';
import { Player, PlayerModel } from '../../entities/Player';
import { ImageInstance, ImageInstanceModel } from '../../entities/imageInstance';
import { TokenInstance, TokenInstanceModel } from '../../entities/TokenInstance';
import { SpecialAbility, SpecialAbilityCollection } from '../../entities/SpecialAbility';

export class GamePresenter extends Presenter<GameModel, GameView> {
  model = new GameModel();
  view = new GameView(this.model);
  campaignId: string;
  constructor(campaignId: string) {
    super();
    this.campaignId = campaignId;
  }
  async beforeInit() {
    // Load campaign
    const campaign = await client.service('campaigns').get(this.campaignId);
    this.model.attrs.campaign.set(campaign);
    // Mark campaign as active
    if (this.model.attrs.isGameMaster && !campaign.url) {
      const gameUrl = `${campaign.host}/#!/game/${campaign._id}`;
      await client.service('campaigns').patch(null, {
        isActive: false,
      });
      await client.service('campaigns').patch(this.campaignId, {
        url: gameUrl,
        isActive: true,
      });
      this.model.attrs.campaign.setAttribute('url', campaign.host);
    }
    // Load campaign data
    const filter = {
      query: { campaignId: this.campaignId },
    };
    const players = await client.service('players').find(filter);
    const playerModels = players.map((p: Player) => new PlayerModel(p));
    this.model.attrs.players.set(playerModels);
    const abilities = await client.service('abilities').find(filter);
    const characters = await client.service('characters').find(filter);
    const characterModels = characters.map((c: Character) => {
      const characterAbilities = abilities.filter((a: SpecialAbility) => a.characterId === c._id);
      return new CharacterModel({
        ...c,
        specialAbilities: new SpecialAbilityCollection(characterAbilities),
      });
    });
    this.model.attrs.characters.set(characterModels);
    const imageInstances = await client.service('image-instances').find(filter);
    const imageModels = imageInstances.map((i: ImageInstance) => new ImageInstanceModel(i));
    this.model.attrs.imageInstances.set(imageModels);
    const tokenInstances = await client.service('token-instances').find(filter);
    const tokenModels = tokenInstances.map((t: TokenInstance) => new TokenInstanceModel(t));
    this.model.attrs.tokenInstances.set(tokenModels);
    const dicerolls = await client.service('dicerolls').find({
      query: {
        campaignId: this.campaignId,
        $sort: {
          createdAt: -1,
        },
      },
    });
    const dicerollModels = dicerolls.map((d: DiceRoll) => new DiceRollModel(d));
    this.model.attrs.dicerolls.set(dicerollModels);
  }
  async afterInit() {
    client.service('campaigns').on('patched', (campaign: Campaign) => {
      if (campaign._id !== this.model.attrs.campaign.attrs._id) return;
      this.model.attrs.campaign.set(campaign);
    });
    client.service('image-instances').on('created', (imageInstance: ImageInstance) => {
      this.model.attrs.imageInstances.add(new ImageInstanceModel(imageInstance));
    });
    client.service('image-instances').on('patched', (imageInstance: ImageInstance) => {
      const image = this.model.attrs.imageInstances.get(imageInstance._id);
      if (image) {
        image.set(imageInstance);
      }
    });
    client.service('image-instances').on('removed', (imageInstance: ImageInstance) => {
      this.model.attrs.imageInstances.remove(imageInstance._id);
    });
    client.service('token-instances').on('created', (tokenInstance: TokenInstance) => {
      this.model.attrs.tokenInstances.add(new TokenInstanceModel(tokenInstance));
    });
    client.service('token-instances').on('patched', (tokenInstance: TokenInstance) => {
      const token = this.model.attrs.tokenInstances.get(tokenInstance._id);
      if (token) {
        token.set(tokenInstance);
      }
    });
    client.service('token-instances').on('removed', (tokenInstance: TokenInstance) => {
      this.model.attrs.tokenInstances.remove(tokenInstance._id);
    });
    client.service('dicerolls').on('created', (diceRoll: DiceRoll) => {
      this.model.attrs.dicerolls.add(new DiceRollModel(diceRoll));
    });
    this.view.on('token-move', async (payload: unknown) => {
      const token = <Token>payload;
      await client.service('token-instances').patch(token._id, token);
    });
    this.view.on('delete-token', async (payload: unknown) => {
      const tokenId = <string>payload;
      await client.service('token-instances').remove(tokenId);
    });
    this.view.on('image-move', async (payload: unknown) => {
      const image = <Image>payload;
      await client.service('image-instances').patch(image._id, image);
    });
    this.view.on('delete-image', async (payload: unknown) => {
      const imageId = <string>payload;
      await client.service('image-instances').remove(imageId);
    });
    this.view.on('rolled', async (data) => {
      const dieroll = <DieRoll[]>data;
      const playerId = sessionStorage.getItem('playerId');
      let player;
      if (playerId) {
        const playerModel = this.model.attrs.players.get(playerId);
        if (playerModel) {
          player = playerModel.attrs;
        }
      } else if (this.model.attrs.isGameMaster) {
        player = { name: 'Game Master' };
      } else {
        player = { name: 'Someone' };
      }
      await client.service('dicerolls').create({
        campaignId: this.campaignId,
        player: player,
        dice: dieroll,
        total: dieroll.reduce((acc, roll) => acc + roll.value, 0),
      });
    });
  }
}
