import { Model, Collection } from '../utils/framework';

export type Spell = {
  _id: string,
  name: string,
  characterId: string,
  campaignId: string,
  createdAt: string,
  updatedAt: string,
}

export class SpellModel extends Model<Spell> {
  getId(): string {
    return this.attrs._id;
  }
}

export class SpellCollection extends Collection<SpellModel> {

}
