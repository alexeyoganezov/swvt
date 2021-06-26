export interface IClassAbility {
  name: string;
  description: string;
}

export interface IClass {
  name: string;
  primeAttribute: string;
  hd: string;
  armorAndShield: string;
  weapons: string;
  alignment: string;
  race: string;
  magicItems: string;
  abilities: IClassAbility[];
  notes: string[];
}

export const classes: IClass[] = [
  {
    name: 'Assassin',
    primeAttribute: 'Str/Dex/Int',
    hd: '1d6 (+1 hp/level after 13th.)',
    armorAndShield: 'Leather armor, shield',
    weapons: 'Any',
    alignment: 'Neutral, Chaotic',
    race: 'Humans',
    abilities: [
      {
        name: 'Disguise',
        // FIXME reformulate
        //  add rule/descr: blend into other groups without causing suspicion
        description: 'Disclosure chance: 5-10% vs average Int/Wis, minus 1-2% vs low, plus 1-3% vs high',
      },
      {
        name: 'Poison',
        // FIXME ose
        description: '',
      },
      {
        name: 'Backstab',
        description: '+4 to hit and x2 damage (x3 if level >= 5, x4 if level >= 8) when attacking with surprise from behind',
      },
      {
        name: 'Thieving Skills (3)',
        description: '',
      },
      {
        name: 'Establish Guild (14)',
        description: '',
      },
    ],
    magicItems: 'Any weapon, leather armor, shields',
    notes: [],
  },
  {
    name: 'Cleric',
    primeAttribute: 'Wis',
    hd: '1d6 (+1 hp/level after 9th.)',
    armorAndShield: 'Any',
    weapons: 'Blunt (club, flail, hammer, mace, staff, etc.), oil, slings',
    alignment: 'Lawful, Chaotic',
    race: 'Humans, Half-elves',
    abilities: [
      {
        name: 'Spell Casting',
        description: '',
      },
      {
        name: 'Banishing Undead',
        description: '',
      },
      {
        name: 'Saving Throw Bonus',
        description: '+2 on saving throws against paralysis and poisons',
      },
      {
        name: 'Religious Stronghold (9)',
        description: '',
      },
    ],
    magicItems: '',
    notes: [],
  },
  {
    name: 'Druid',
    primeAttribute: 'Wis/Cha',
    hd: '1d6 (+1 hp/level after 9th.)',
    armorAndShield: 'Leather armor, wooden shield',
    weapons: 'Dagger, sickle-shaped sword (treat as short sword), spear, sling, oil',
    alignment: 'Neutral',
    race: 'Humans',
    abilities: [
      {
        name: 'Spell Casting',
        description: '',
      },
      {
        name: 'Saving Throw Bonus',
        description: '+2 on saving throws against fire',
      },
      {
        name: 'Secret Language',
        description: '',
      },
      {
        name: 'First Mysteries (2)',
        description: 'determine whether water is pure, identify any type of\n' +
          'normal plant, move easily through non-\n' +
          'magical undergrowths, including thorns or heavy vines',
      },
      {
        name: 'Shape Change (5)',
        description: 'change shape into\n' +
          'the form of an animal,  can change into as many as three different animal forms per\n' +
          'day – one from each category of reptile, mammal, and bird – but only\n' +
          'once for each form within a single day. When the Druid shapeshifts,\n' +
          '1d6 x 10% of any lost hit points are cured in the transformation.',
      },
      {
        name: 'Immunity to Fey Charms (5)',
        description: ' immune to the charms of dryads, naiads, satyrs,\n' +
          'and other such fey creatures of the wild woods and rivers',
      },

      {
        name: 'Druidic Stronghold (11)',
        description: '',
      },
    ],
    magicItems: 'Any usable by Clerics except Clerical-spell scrolls', // FIXME
    notes: [],
  },
  {
    name: 'Fighter',
    primeAttribute: 'Str',
    hd: '1d8 (+2 hp/level after 9th.)',
    armorAndShield: 'Any',
    weapons: 'Any',
    alignment: 'Any',
    race: 'Any',
    abilities: [
      {
        name: 'Multiple Attacks',
        description: 'Additional attack per level against creatures with 1HD or less',
      },
      {
        name: 'Parry',
        description: 'Penalty to enemy attacks (Table #10: Fighter Parrying Ability)',
      },
      {
        name: 'Strength Bonuses',
        description: 'To-Hit and Damage bonuses (Table 1: Strength)',
      },
      {
        name: 'Establish Stronghold (9)',
        description: '',
      },
    ],
    magicItems: '',
    notes: [],
  },
  {
    name: 'Magic-User',
    primeAttribute: 'Int',
    hd: '1d4 (+1 hp/level after 11th.)',
    armorAndShield: 'None',
    weapons: 'Dagger, Staff, Darts',
    alignment: 'Any',
    race: 'Humans, Elves, Half-elves',
    abilities: [
      {
        name: 'Spell Casting',
        description: '',
      },
      {
        name: 'Knowing Spells',
        description: '',
      },
      {
        name: 'Saving Throw Bonus',
        description: '+2 on saving throws against spells',
      },
      {
        name: 'Wizard’s Tower (11)',
        description: '',
      },
    ],
    magicItems: '',
    notes: [],
  },
  {
    name: 'Thief',
    primeAttribute: 'Dex',
    hd: '1d4 (+1 hp/level after 10th.)',
    armorAndShield: 'Leather armor only, no shield',
    weapons: 'Any, magical weapons are limited to daggers and swords',
    alignment: 'Neutral, Chaotic',
    race: 'Any',
    abilities: [
      {
        name: 'Thieving Skills',
        description: '',
      },
      {
        name: 'Backstab',
        description: '+4 to hit and x2 damage (x3 if level >= 5, x4 if level >= 8) when attacking with surprise from behind',
      },
      {
        name: 'Saving Throw Bonus',
        description: '+2 on saving throws against devices',
      },
      {
        name: 'Read Normal Languages (3)',
        description: '',
      },
      {
        name: 'Read Magical Writings (9)',
        description: '',
      },
    ],
    magicItems: '',
    notes: [
      'Some non-human Thieves gain bonuses to certain thieving abilities',
    ],
  },
  {
    name: 'Ranger',
    primeAttribute: 'Str',
    hd: '2d8 at first level, 1d8 after (2 hp/level after 9th.)',
    armorAndShield: 'Any',
    weapons: 'Any',
    alignment: 'Lawful',
    race: 'Humans',
    abilities: [
      {
        name: 'Charity',
        description: '',
      },
      {
        name: 'Tracking',
        description: '',
      },
      {
        name: 'Alertness',
        description: '1-in-6 chance to be surprised',
      },
      {
        name: 'Giants and Goblin-types',
        description: '+1 damage per level against giants, trolls, ogres, orcs, goblins, and kobolds',
      },
      {
        name: 'Scholar of Healing Magic (8)',
        description: '',
      },
      {
        name: 'Scholar of Scrying Magic (9)',
        description: '',
      },
      {
        name: 'Scholar of Travel Magic (9)',
        description: '',
      },
      {
        name: 'Fortress (9)',
        description: '',
      },
    ],
    magicItems: 'Any usable by Fighters',
    notes: [],
  },
  {
    name: 'Paladin',
    primeAttribute: 'Str',
    hd: '1d8 (+2 hp/level after 9th.)',
    armorAndShield: 'Any',
    weapons: 'Any',
    alignment: 'Lawful',
    race: 'Humans',
    abilities: [
      {
        name: 'Charity',
        description: '',
      },
      {
        name: 'Divine Favor',
        description: '',
      },
      {
        name: 'Lay on Hands',
        description: 'Cure 2 HP per level or cure disease (once per day)',
      },
      {
        name: 'Immune to Disease',
        description: '',
      },
      {
        name: 'Warhorse',
        description: '',
      },
      {
        name: 'Dispel Evil (8)',
        description: '',
      },
      {
        name: 'Detect Evil (8)',
        description: '',
      },
      {
        name: 'Stronghold (9)',
        description: '',
      },
    ],
    magicItems: 'May own a suit of magic armor, a magic shield, up to 3 magical weapons, no more than four additional magic items, can use any magic items that can be used by Fighters',
    notes: [],
  },
  {
    name: 'Monk',
    primeAttribute: 'Wis',
    hd: '1d4 (+1 hp/level after 16th level.)',
    armorAndShield: 'None',
    weapons: 'All',
    alignment: 'Any',
    race: 'Humans',
    abilities: [
      {
        name: 'Charity',
        description: '',
      },
      {
        name: 'Deadly Strike',
        description: 'If attack is 5 higher than the required: 75% chance to stun for 2d6 rounds, <br /> 25% chance to kill if Enemy HD <= Monk HD + 1',
      },
      {
        name: 'Multiple Attacks',
        description: 'Additional melee attack when unarmed',
      },
      {
        name: 'Alertness',
        description: '1-in-6 chance to be surprised',
      },
      {
        name: 'Deflect Missiles',
        description: '',
      },
      {
        name: 'Slow Falling',
        description: '',
      },
      {
        name: 'Saving Throw Bonus',
        description: '+2 against paralysis and poisons',
      },
      {
        name: 'Thieving Skills',
        description: '',
      },
      {
        name: 'Weapon Damage Bonus (2)',
        description: '+1 to damage when armed (+2 on lvl 4, +3 on lvl 6, +4 on lvl 8, +5 on lvl 10)',
      },
      {
        name: 'Speak with Animals (4)',
        description: '',
      },
      {
        name: 'Speak with Animals (4)',
        description: '',
      },
      {
        name: 'Mastery of Silence (5)',
        description: '',
      },
      {
        name: 'Mastery of Mind (6)',
        description: '',
      },
      {
        name: 'Mastery of Body (7)',
        description: '',
      },
      {
        name: 'Mastery of Self (8)',
        description: '',
      },
      {
        name: 'Oneness with Self (10)',
        description: '',
      },
      {
        name: 'Harmonic Touch (13)',
        description: '',
      },
    ],
    magicItems: 'Weapons and magic rings, cannot use potions',
    notes: [],
  },
];
