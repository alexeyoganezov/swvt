import { Model, Collection } from '../utils/framework';
import { SpecialAbilityCollection } from './SpecialAbility';
import { SpellCollection } from './Spell';
import { ItemCollection } from './Item';

export type Character = {
  _id: string;

  player: string,

  strength: string,
  dexterity: string,
  constitution: string,
  intelligence: string,
  wisdom: string,
  charisma: string,

  name: string,
  class: string,
  race: string,
  gender: string,
  alignment: string,
  deity: string,
  age: string,
  level: string,
  experiencePoints: string,

  bonusToHit: string,
  openDoors: string,
  damageBonus: string,
  carryModifier: string,
  armorBonus: string,
  bonusToMissiles: string,
  hitPointBonus: string,
  raiseDeadSurvival: string,
  experiencePointBonus: string,

  hitPoints: string,
  savingThrow: string,
  armorClass: string,
  goldPieces: string,

  spells: SpellCollection,
  specialAbilities: SpecialAbilityCollection,
  items: ItemCollection,

  notes1: string,
  notes2: string,
  notes3: string,
}

export function getCharacterDefaults() {
  return {
    player: "",

    strength: "",
    dexterity: "",
    constitution: "",
    intelligence: "",
    wisdom: "",
    charisma: "",

    name: "",
    class: "",
    race: "",
    gender: "",
    alignment: "",
    deity: "",
    age: "",
    level: "",
    experiencePoints: "",

    bonusToHit: "",
    openDoors: "",
    damageBonus: "",
    carryModifier: "",
    armorBonus: "",
    bonusToMissiles: "",
    hitPointBonus: "",
    raiseDeadSurvival: "",
    experiencePointBonus: "",

    hitPoints: "",
    savingThrow: "",
    armorClass: "",
    goldPieces: "",

    notes1: "",
    notes2: "",
    notes3: "",
  }
}

export class CharacterModel extends Model<Character> {
  constructor(character: Character) {
    super(Object.assign({}, {
      ...getCharacterDefaults(),
      specialAbilities: new SpecialAbilityCollection(),
      spells: new SpellCollection(),
      items: new ItemCollection(),
    }, character));
  }
  getId(): string {
    return this.attrs._id;
  }
}

export class CharacterCollection extends Collection<CharacterModel> {

}
