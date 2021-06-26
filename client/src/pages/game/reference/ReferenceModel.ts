import { Model, Collection } from '../../../utils/framework';
import { IAttribute, attributes } from './data/attributes';
import { IClass, classes } from './data/classes';
import { IRace, races } from './data/races';
import { ISpell, spells } from './data/spells';
import { IMonster, monsters } from './data/monsters';
import { IArmor, armor } from './data/armor';
import { IMelee, melee } from './data/melee';
import { IMissile, missile } from './data/missile';
import { IEquipment, equipment } from './data/equipment';
import { ITransport, transport } from './data/transport';

interface Reference {
  attributes: Collection<Model<IAttribute>>,
  classes: Collection<Model<IClass>>,
  races: Collection<Model<IRace>>,
  spells: Collection<Model<ISpell>>,
  monsters: Collection<Model<IMonster>>,
  armors: Collection<Model<IArmor>>,
  melee: Collection<Model<IMelee>>,
  misslile: Collection<Model<IMissile>>,
  equipment: Collection<Model<IEquipment>>,
  transport: Collection<Model<ITransport>>,
}

export class ReferenceModel extends Model<Reference> {
  constructor() {
    super({
      attributes: new Collection<Model<IAttribute>>(attributes.map(attr => new Model<IAttribute>(attr))),
      classes: new Collection<Model<IClass>>(classes.map(klass => new Model<IClass>(klass))),
      races: new Collection<Model<IRace>>(races.map(race => new Model<IRace>(race))),
      spells: new Collection<Model<ISpell>>(spells.map(spell => new Model<ISpell>(spell))),
      monsters: new Collection<Model<IMonster>>(monsters.map(monster => new Model<IMonster>(monster))),
      armors: new Collection<Model<IArmor>>(armor.map(a => new Model<IArmor>(a))),
      melee: new Collection<Model<IMelee>>(melee.map(a => new Model<IMelee>(a))),
      misslile: new Collection<Model<IMissile>>(missile.map(a => new Model<IMissile>(a))),
      equipment: new Collection<Model<IEquipment>>(equipment.map(a => new Model<IEquipment>(a))),
      transport: new Collection<Model<ITransport>>(transport.map(a => new Model<ITransport>(a))),
    });
  }
}
