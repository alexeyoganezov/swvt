import { Model, Collection } from '../utils/framework';
import { Player } from './Player';

export type DieRoll = {
  die: number,
  value: number,
}

export type DiceRoll = {
  _id: string,
  player: Player,
  dice: DieRoll[],
  total: number,
  campaignId: string,
  createdAt: string,
  updatedAt: string,
}

export class DiceRollModel extends Model<DiceRoll> {
  getId(): string {
    return this.attrs._id;
  }
}

export class DiceRollCollection extends Collection<DiceRollModel> {

}
