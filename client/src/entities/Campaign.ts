import { Model, Collection } from '../utils/framework';

export type Campaign = {
  _id: string,
  name: string,
  isActive: boolean,
  host: string,
  url: string,
  createdAt: string,
  updatedAt: string,
}

export class CampaignModel extends Model<Campaign> {
  constructor(campaign?: Campaign) {
    super(campaign || {
      _id: '',
      name: '',
      isActive: false,
      host: '',
      url: '',
      createdAt: '',
      updatedAt: '',
    });
  }
  getId(): string {
    return this.attrs._id;
  }
}

export class CampaignCollection extends Collection<CampaignModel> {

}
