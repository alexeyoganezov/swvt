import { IReferenceTable } from './various';

export interface IAttribute {
  name: string;
  description: string;
  affects: string[];
  primeFor: string[];
  notes: string[];
  tables: IReferenceTable[];
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
    tables: [
      {
        name: 'Table 1: Strength',
        content: [
          ['Score',  'To-Hit Modifier*', 'Damage Modifier*', 'Open Doors', 'Carry Modifier (in pounds)'],
          ['3–4',    '-2',                '-1',                 '1',       '-10'],
          ['5-6',    '-1',                '+0',                 '1',       '-5'],
          ['7-8',    '+0',                '+0',                 '1-2',     '+0'],
          ['9–12',   '+0',                '+0',                 '1-2',     '+5'],
          ['13–15 ', '+1',                '+0',                 '1-2',     '+10'],
          ['16',     '+1',                '+1',                 '1-3',     '+15'],
          ['17',     '+2',                '+2',                 '1-4',     '+30'],
          ['18',     '+2',                '+3',                 '1-5',     '+50'],
        ],
        notes: [
          'Penalties apply to any character, but only Fighters get the bonuses. The Referee may perhaps choose to allow other classes to have a +1 bonus, but most certainly no more than that. Your Referee might also rule that only hand-to-hand weapons gain the strength bonus, but the bare knuckles Original Game allowed Fighters to be deadly archers – and so does Swords & Wizardry.'
        ],
      },
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
    tables: [
      {
        name: 'Table 2: Dexterity',
        content: [
          ['Score',  'Missile Weapon To-Hit Bonus/Penalty*', 'Effect on Armor Class'],
          ['3–8',    '-1',                                   'Worse by 1 point'     ],
          ['9-12',   '+0',                                   'None'                 ],
          ['13-18',  '+1',                                   'Better by 1 point'    ],
        ],
        notes: [
          'For Fighters, this bonus is in addition to any bonuses for Strength, unless the Referee tells you otherwise.',
        ],
      },
    ],
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
    tables: [
      {
        name: 'Table 3: Constitution',
        content: [
          ['Score',  'Hit Point Modifier (per hit die)', 'Raise Dead Survival'],
          ['3–8',    '-1',                               '50%'                ],
          ['9-12',   '+0',                               '75%'                ],
          ['13-18',  '+1',                               '100%'               ],
        ],
        notes: [],
      },
    ],
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
    tables: [
      {
        name: 'Table 4: Intelligence',
        content: [
          ['Score',  'Maximum Additional Languages', 'Maximum Spell Level', 'Chance to Understand New Spell', 'Min/Max Number of Basic Spells Understandable  per Level'],
          ['3–7',    '0',                            '4',                   '30%',                            '2/4'                                                     ],
          ['8',      '1',                            '5',                   '40%',                            '3/5'                                                     ],
          ['9',      '1',                            '5',                   '45%',                            '3/5'                                                     ],
          ['10',     '2',                            '5',                   '50%',                            '4/6'                                                     ],
          ['11',     '2',                            '6',                   '50%',                            '4/6'                                                     ],
          ['12',     '3',                            '6',                   '55%',                            '4/6'                                                     ],
          ['13',     '3',                            '7',                   '65%',                            '5/8'                                                     ],
          ['14',     '4',                            '7',                   '65%',                            '5/8'                                                     ],
          ['15',     '4',                            '8',                   '75%',                            '6/10'                                                    ],
          ['16',     '5',                            '8',                   '75%',                            '6/10'                                                    ],
          ['17',     '5',                            '9',                   '85%',                            '7/All'                                                   ],
          ['18',     '6',                            '9',                   '95%',                            '8/All'                                                   ],
        ],
        notes: [],
      },
    ],
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
    tables: [],
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
    tables: [
      {
        name: 'Table 5: Charisma',
        content: [
          ['Score',  'Maximum Number of Special Hirelings'],
          ['3–4',    '1',                                 ],
          ['5–6',    '2',                                 ],
          ['7–8',    '3',                                 ],
          ['9–12',   '4',                                 ],
          ['13–15',  '5',                                 ],
          ['16–17',  '6',                                 ],
          ['18',     '7',                                 ],
        ],
        notes: [],
      },
    ],
  },
];
