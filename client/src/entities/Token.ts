import { Model, Collection } from '../utils/framework';

export type Token = {
  _id: string,
  url: string,
  filename: string,
  path: string,
  createdAt: string,
  updatedAt: string,
}

export class TokenModel extends Model<Token> {
  getId(): string {
    return this.attrs._id;
  }
}

export class TokenCollection extends Collection<TokenModel> {

}
