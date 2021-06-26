import { Model, Collection } from '../utils/framework';

export type SpecialAbility = {
  _id: string,
  name: string,
  characterId: string,
  campaignId: string,
  createdAt: string,
  updatedAt: string,
}

export class SpecialAbilityModel extends Model<SpecialAbility> {
  getId(): string {
    return this.attrs._id;
  }
}

export class SpecialAbilityCollection extends Collection<SpecialAbilityModel> {

}
