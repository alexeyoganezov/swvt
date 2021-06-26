import { CampaignModel } from '../../entities/Campaign';
import { PlayerCollection } from '../../entities/Player';
import { CharacterCollection } from '../../entities/Character';
import { DiceRollCollection } from '../../entities/DiceRoll';
import { Model } from '../../utils/framework';
import { ImageInstanceCollection } from '../../entities/imageInstance';
import { TokenInstanceCollection } from '../../entities/TokenInstance';
import { ImageCollection } from '../../entities/Image';
import { TokenCollection } from '../../entities/Token';

export interface GamePageData {
  playerId?: string;
  isGameMaster: boolean,
  campaign: CampaignModel,
  players: PlayerCollection,
  characters: CharacterCollection,
  images: ImageCollection,
  imageInstances: ImageInstanceCollection,
  tokens: TokenCollection,
  tokenInstances: TokenInstanceCollection,
  dicerolls: DiceRollCollection,
}

export class GameModel extends Model<GamePageData> {
  constructor() {
    super({
      isGameMaster: window.location.hostname === 'localhost',
      campaign: new CampaignModel(),
      players: new PlayerCollection(),
      characters: new CharacterCollection(),
      images: new ImageCollection(),
      imageInstances: new ImageInstanceCollection(),
      tokens: new TokenCollection(),
      tokenInstances: new TokenInstanceCollection(),
      dicerolls: new DiceRollCollection(),
    });
  }
}
