import { Model, Collection } from '../utils/framework';

export type Image = {
  _id: string,
  url: string,
  filename: string,
  path: string,
  createdAt: string,
  updatedAt: string,
}

export class ImageModel extends Model<Image> {
  getId(): string {
    return this.attrs._id;
  }
}

export class ImageCollection extends Collection<ImageModel> {

}
