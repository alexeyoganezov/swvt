import { Model, Collection } from '../utils/framework';

export type Item = {
  _id: string,
  name: string,
  characterId: string,
  campaignId: string,
  createdAt: string,
  updatedAt: string,
}

export class ItemModel extends Model<Item> {
  getId(): string {
    return this.attrs._id;
  }
}

export class ItemCollection extends Collection<ItemModel> {

}
