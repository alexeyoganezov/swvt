import { Model, Collection } from '../utils/framework';

export type TokenInstance = {
  _id: string,
  url: string,
  offsetX: number,
  offsetY: number,
  label: string,
  campaignId: string,
  createdAt: string,
  updatedAt: string,
}

export class TokenInstanceModel extends Model<TokenInstance> {
  getId(): string {
    return this.attrs._id;
  }
}

export class TokenInstanceCollection extends Collection<TokenInstanceModel> {

}
