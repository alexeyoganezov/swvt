export interface IAttribute {
  name: string;
  description: string;
  affects: string[];
  primeFor: string[];
  notes: string[];
}

export const attributes: IAttribute[] = [
  {
    name: 'Strength',
    description: 'Muscle power',
    affects: [
      'Bonus to Hit',
      'Damage Bonus',
      'Open Doors',
      'Carry Modifier',
    ],
    primeFor: [
      'Fighters',
      'Paladins',
      'Rangers',
      'Assassins',
    ],
    notes: [
      'Only fighters receive bonuses to hit and damage',
    ],
  },
  {
    name: 'Dexterity',
    description: 'Quickness and coordination',
    affects: [
      'Missile Weapon To-Hit',
      'Armor Class Bonus',
    ],
    primeFor: [
      'Thieves',
      'Assassins',
    ],
    notes: [],
  },
  {
    name: 'Constitution',
    description: 'General health and hardiness',
    affects: [
      'Hit Point Bonus',
      'Raise Dead Survival',
    ],
    primeFor: [],
    notes: [],
  },
  {
    name: 'Intelligence',
    description: 'Education and IQ',
    affects: [
      'Additional Languages',
      'Maximum Spell Level',
      'Chance to Understand New Spell',
      'Number of Basic Spells Understandable per Level (Min/Max)',
    ],
    primeFor: [
      'Magic-Users',
      'Assassins',
    ],
    notes: [],
  },
  {
    name: 'Wisdom',
    description: 'Common sense',
    affects: [
      'Additional first-level spell for Clerics (when >= 15)',
      'Hit Point Bonus (+5% when >= 13)',
    ],
    primeFor: [
      'Clerics',
      'Monks',
      'Druids',
    ],
    notes: [],
  },
  {
    name: 'Charisma',
    description: 'Leadership',
    affects: [
      'Maximum Number of Special Hirelings',
      'Hit Point Bonus (+5% when >= 13)',
    ],
    primeFor: [
      'Druids',
    ],
    notes: [],
  },
];
