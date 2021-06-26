import { Model, Collection } from '../utils/framework';

export type ImageInstance = {
  _id: string,
  url: string,
  offsetX: number,
  offsetY: number,
  campaignId: string,
  createdAt: string,
  updatedAt: string,
}

export class ImageInstanceModel extends Model<ImageInstance> {
  getId(): string {
    return this.attrs._id;
  }
}

export class ImageInstanceCollection extends Collection<ImageInstanceModel> {

}
