import { Model, Collection } from '../utils/framework';

export type Player = {
  _id: string,
  name: string,
  campaignId: string,
  createdAt: string,
  updatedAt: string,
}

export class PlayerModel extends Model<Player> {
  getId(): string {
    return this.attrs._id;
  }
}

export class PlayerCollection extends Collection<PlayerModel> {

}
