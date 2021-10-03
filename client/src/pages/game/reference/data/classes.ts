import { IReferenceTable } from './various';

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
  tables: IReferenceTable[];
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
    tables: [
      {
        name: 'Table 6: thieving Skills for Assassins',
        content: [
          ['Level',  'Climb Walls',   'Delicate Tasks and Traps', 'Hear Sounds',       'Hide in Shadows', 'Move Silently', 'Open Locks'   ],
          ['3',      '85%',           '15%',                      '3 in 6',            '10%',             '20%',           '10 %'         ],
          ['4',      '86%',           '25%',                      '3 in 6',            '15%',             '25%',           '15 %'         ],
          ['5',      '87%',           '25%',                      '4 in 6',            '20%',             '30%',           '20 %'         ],
          ['6',      '88%',           '30%',                      '4 in 6',            '25%',             '35%',           '25 %'         ],
          ['7',      '89%',           '35%',                      '4 in 6',            '30%',             '40%',           '30 %'         ],
          ['8',      '90%',           '40%',                      '4 in 6',            '35%',             '45%',           '35 %'         ],
          ['9',      '91%',           '45%',                      '5 in 6',            '40%',             '50%',           '40 %'         ],
          ['10',     '92%',           '50%',                      '5 in 6',            '55%',             '60%',           '55 %'         ],
          ['11',     '93%',           '60%',                      '5 in 6',            '65%',             '70%',           '65 %'         ],
          ['12',     '94%',           '70%',                      '5 in 6',            '75%',             '80%',           '75 %'         ],
          ['13',     '95%',           '80%',                      '6 in 6',            '85%',             '90%',           '85 %'         ],
          ['14+',    'Remains at 95', 'Remains at 80',            'Remains at 6 in 6', 'Remains at 85',   'Remains at 90', 'Remains at 85'],
        ],
        notes: [],
      },
      {
        name: 'Table 7: Assassin Advancement table',
        content: [
          ['Level*',  'Experience Points Required for Level',   'Hit Dice (d6)**', 'Saving Throw'],
          ['1',       '0',                                      '1',               '15'          ],
          ['2',       '1500',                                   '2',               '14'          ],
          ['3',       '3000',                                   '3',               '13'          ],
          ['4',       '6000',                                   '4',               '12'          ],
          ['5',       '12000',                                  '5',               '11'          ],
          ['6',       '24000',                                  '6',               '10'          ],
          ['7',       '48000',                                  '7',               '9'           ],
          ['8',       '96,000',                                 '8',               '8'           ],
          ['9',       '192,000',                                '9',               '7'           ],
          ['10',      '275,000',                                '10',              '6'           ],
          ['11',      '400,000',                                '11',              '5'           ],
          ['12',      '550,000',                                '12',              '5'           ],
          ['13',      '700,000',                                '13',              '5'           ],
          ['14',      '850,000 (Guildmaster)',                  '13+1 hp',         '5'           ],
          ['15',      '1,000,000',                              '13+2 hp',         '5'           ],
          ['16',      '1,150,000',                              '13+3 hp',         '5'           ],
          ['17',      '1,300,000',                              '13+4 hp',         '5'           ],
          ['18',      '1,450,000',                              '13+5 hp',         '5'           ],
          ['19',      '1,600,000',                              '13+6 hp',         '5'           ],
          ['20',      '1,750,000',                              '13+7 hp',         '5'           ],
          ['21+',     '+150,000 per level',                     '+1 hp/level',     '5'           ],
        ],
        notes: [
          '* Assassins were capped at 13 levels of ability in the Original Game.',
          '** Hit points shown for levels after the character no longer gains full hit dice are the total combined number. A 15th level Assassin has 13 HD plus 2 hit points total, not 13 HD plus one hit point gained at 14th level and another 2 hit points gained at 15th.',
        ],
      },
    ],
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
    tables: [
      {
        name: 'Table 8: Cleric Advancement table',
        content: [
          ['Level',  'Experience Points Required for Level',   'Hit Dice (d6)*', 'Saving Throw', '1', '2', '3', '4', '5', '6', '7'],
          ['1',       '0',                                     '1',               '15',          '-', '-', '-', '-', '-', '-', '-'],
          ['2',       '1,500',                                 '2',               '14',          '1', '-', '-', '-', '-', '-', '-'],
          ['3',       '3,000',                                 '3',               '13',          '2', '-', '-', '-', '-', '-', '-'],
          ['4',       '6,000',                                 '4',               '12',          '2', '1', '-', '-', '-', '-', '-'],
          ['5',       '12,000',                                '5',               '11',          '2', '2', '-', '-', '-', '-', '-'],
          ['6',       '24,000',                                '6',               '10',          '2', '2', '1', '1', '-', '-', '-'],
          ['7',       '48,000',                                '7',               '9',           '2', '2', '2', '1', '1', '-', '-'],
          ['8',       '100,000',                               '8',               '8',           '2', '2', '2', '2', '2', '-', '-'],
          ['9',       '170,000',                               '9',               '7',           '3', '3', '3', '2', '2', '-', '-'],
          ['10',      '240,000',                               '9+1 hp',          '6',           '3', '3', '3', '3', '3', '-', '-'],
          ['11',      '310,000',                               '9+2 hp',          '5',           '4', '4', '4', '3', '3', '-', '-'],
          ['12',      '380,000',                               '9+3 hp',          '4',           '4', '4', '4', '4', '4', '1', '-'],
          ['13',      '450,000',                               '9+4 hp',          '4',           '5', '5', '5', '4', '4', '1', '-'],
          ['14',      '520,000',                               '9+5 hp',          '4',           '5', '5', '5', '5', '5', '2', '-'],
          ['15',      '590,000',                               '9+6 hp',          '4',           '6', '6', '6', '5', '5', '2', '-'],
          ['16',      '660,000',                               '9+7 hp',          '4',           '6', '6', '6', '6', '6', '3', '-'],
          ['17',      '730,000',                               '9+8 hp',          '4',           '7', '7', '7', '6', '6', '3', '1'],
          ['18',      '800,000',                               '9+9 hp',          '4',           '7', '7', '7', '7', '7', '4', '1'],
          ['19',      '870,000',                               '9+10 hp',         '4',           '8', '8', '8', '7', '7', '4', '2'],
          ['20',      '940,000',                               '9+11 hp',         '4',           '8', '8', '8', '8', '8', '5', '2'],
          ['21+',     '+70,000 per level',                     '+1 hp/level',     '4',           '9', '9', '9', '8', '8', '5', '3'],
        ],
        notes: [
          '* Hit points shown for levels after the character no longer gains full hit dice are the total combined number. An 11th level Cleric has 9HD plus 2 hit points total, not 9HD plus one hit point gained at 10th level and another 2 hit points gained at 11th.',
          '** Clerics continue to gain spells after 21st level according to the same pattern.',
        ],
      },
    ],
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
    tables: [
      {
        name: 'Table 9: Druid Advancement table',
        content: [
          ['Level*',  'Experience Points Required for Level',   'Hit Dice (d6)**', 'Saving Throw', 'Role in Hierarchy',                   '1', '2', '3', '4', '5', '6', '7'],
          ['1',       '0',                                      '1',                '15',          'None',                                '1', '-', '-', '-', '-', '-', '-'],
          ['2',       '2000',                                   '2',                '14',          'Initiate of the First Mysteries',     '2', '1', '-', '-', '-', '-', '-'],
          ['3',       '4000',                                   '3',                '13',          'Second Mysteries',                    '3', '1', '-', '-', '-', '-', '-'],
          ['4',       '8000',                                   '4',                '12',          'Third Mysteries',                     '3', '1', '1', '-', '-', '-', '-'],
          ['5',       '13000',                                  '5',                '11',          'Fourth Mysteries',                    '3', '2', '1', '-', '-', '-', '-'],
          ['6',       '20000',                                  '6',                '10',          'Fifth Mysteries',                     '3', '2', '2', '-', '-', '-', '-'],
          ['7',       '40000',                                  '7',                '9',           'Sixth Mysteries',                     '4', '2', '2', '1', '-', '-', '-'],
          ['8',       '60000',                                  '8',                '8',           'Seventh Mysteries',                   '4', '3', '2', '1', '-', '-', '-'],
          ['9',       '90000',                                  '9',                '7',           'Eighth Mysteries',                    '4', '3', '3', '2', '-', '-', '-'],
          ['10',      '130000',                                 '9+1 hp',           '6',           'Ninth Mysteries',                     '5', '3', '3', '2', '1', '-', '-'],
          ['11',      '200000',                                 '9+2 hp',           '5',           'Druid',                               '5', '3', '3', '3', '2', '1', '-'],
          ['12',      '400000',                                 '9+3 hp',           '4',           'Archdruid (or Renegade Druid)',       '5', '4', '4', '4', '3', '2', '1'],
          ['13',      '800000',                                 '9+4 hp',           '4',           'The Grand Druid (or Renegade Druid)', '6', '5', '5', '4', '4', '3', '2'],
          ['14',      '950,000',                                '9+5',              '4',           'Grand Druid (or Renegade Druid)',     '7', '5', '5', '4', '4', '3', '2'],
          ['15',      '1,100,000',                              '9+6',              '4',           'Grand Druid (or Renegade Druid)',     '7', '6', '5', '4', '4', '3', '2'],
          ['16',      '1,250,000',                              '9+7',              '4',           'Grand Druid (or Renegade Druid)',     '7', '6', '6', '4', '4', '3', '2'],
          ['17',      '1,400,000',                              '9+8',              '4',           'Grand Druid (or Renegade Druid)',     '8', '6', '6', '5', '4', '3', '2'],
          ['18',      '1,550,000',                              '9+9',              '4',           'Grand Druid (or Renegade Druid)',     '8', '7', '6', '5', '5', '3', '2'],
          ['19',      '1,700,000',                              '9+10',             '4',           'Grand Druid (or Renegade Druid)',     '9', '8', '6', '5', '5', '3', '2'],
          ['20',      '1,850,000',                              '9+11',             '4',           'Grand Druid (or Renegade Druid)',     '9', '8', '7', '5', '5', '3', '2'],
          ['21+',     '+150,000 per level',                     '+1hp/level',       '4',           'Grand Druid (or Renegade Druid)',     '9', '8', '7', '6', '5', '3', '2'],
        ],
        notes: [
          '* Druids were capped at 13 levels of ability in the Original Game.',
          '** Hit points shown for levels after the character no longer gains full hit dice are the total combined number. An 11th level druid has 9HD plus 2 hit points total, not 9HD plus one hit point gained at 10th level and another 2 hit points gained at 11th.',
          '*** Druids continue to gain spells after 21st level according to the same pattern. Note that no more 6th- or 7th-level spells are added after the Druid is 13th level.',
        ],
      },
    ],
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
    tables: [
      {
        name: 'Table 10: Fighter Parrying Ability',
        content: [
          ['Dexterity Score', 'Penalty to Enemy Attacks'],
          ['14',              '-1'                      ],
          ['15',              '-2'                      ],
          ['16',              '-3'                      ],
          ['17',              '-4'                      ],
          ['18',              '-5'                      ],
        ],
        notes: [],
      },
      {
        name: 'Table 11: Fighter Advancement table',
        content: [
          ['Level', 'Experience Points Required for Level', 'Hit Dice (d8)*', 'Saving Throw'],
          ['1',     '0',                                    '1',              '14'          ],
          ['2',     '2,000',                                '2',              '13'          ],
          ['3',     '4,000',                                '3',              '12'          ],
          ['4',     '8,000',                                '4',              '11'          ],
          ['5',     '16,000',                               '5',              '10'          ],
          ['6',     '32,000',                               '6',              '9'           ],
          ['7',     '64,000',                               '7',              '8'           ],
          ['8',     '128,000',                              '8',              '7'           ],
          ['9',     '256,000',                              '9',              '6'           ],
          ['10',    '350,000',                              '9+2 hp',         '5'           ],
          ['11',    '450,000',                              '9+4 hp',         '4'           ],
          ['12',    '550,000',                              '9+6 hp',         '4'           ],
          ['13',    '650,000',                              '+8 hp',          '4'           ],
          ['14',    '750,000',                              '+10 hp',         '4'           ],
          ['15',    '850,000',                              '+12 hp',         '4'           ],
          ['16',    '950,000',                              '+14 hp',         '4'           ],
          ['17',    '1,050,000',                            '+16 hp',         '4'           ],
          ['18',    '1,150,000',                            '+18 hp',         '4'           ],
          ['19',    '1,250,000',                            '+20 hp',         '4'           ],
          ['20',    '1,350,000',                            '+22 hp',         '4'           ],
          ['21+',   '+100,000 per level',                   '+2 hp/level',    '4'           ],
        ],
        notes: [
          '* Hit points shown for levels after the character no longer gains full hit dice are the total combined number. An 11th level Fighter has 9HD plus 4 hit points total, not 9HD plus 2 hit points gained at 10th level and another 4 hit points gained at 11th.',
        ],
      },
    ],
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
    tables: [
      {
        name: 'Table 12: Magic-user Advancement table',
        content: [
          ['Level', 'Experience Points Required for Level', 'Hit Dice (d4)*', 'Saving Throw', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
          ['1',     '0',                                    '1',              '15',           '1', '-', '-', '-', '-', '-', '-', '-', '-'],
          ['2',     '2,500',                                '2',              '14',           '2', '-', '-', '-', '-', '-', '-', '-', '-'],
          ['3',     '5,000',                                '3',              '13',           '3', '1', '-', '-', '-', '-', '-', '-', '-'],
          ['4',     '10,000',                               '4',              '12',           '3', '2', '-', '-', '-', '-', '-', '-', '-'],
          ['5',     '20,000',                               '5',              '11',           '4', '2', '1', '-', '-', '-', '-', '-', '-'],
          ['6',     '35,000',                               '6',              '10',           '4', '2', '2', '-', '-', '-', '-', '-', '-'],
          ['7',     '50,000',                               '7',              '9',            '4', '3', '2', '1', '-', '-', '-', '-', '-'],
          ['8',     '75,000',                               '8',              '8',            '4', '3', '3', '2', '-', '-', '-', '-', '-'],
          ['9',     '100,000',                              '9',              '7',            '4', '3', '3', '2', '1', '-', '-', '-', '-'],
          ['10',    '200,000',                              '10',             '6',            '4', '4', '3', '2', '2', '-', '-', '-', '-'],
          ['11',    '300,000',                              '11',             '5',            '4', '4', '4', '3', '3', '-', '-', '-', '-'],
          ['12',    '400,000',                              '11+1 hp',        '5',            '4', '4', '4', '4', '4', '1', '-', '-', '-'],
          ['13',    '500,000',                              '11+2 hp',        '5',            '5', '5', '5', '4', '4', '2', '-', '-', '-'],
          ['14',    '600,000',                              '11+3 hp',        '5',            '5', '5', '5', '4', '4', '3', '1', '-', '-'],
          ['15',    '700,000',                              '11+4 hp',        '5',            '5', '5', '5', '5', '4', '4', '2', '-', '-'],
          ['16',    '800,000',                              '11+5 hp',        '5',            '5', '5', '5', '5', '5', '5', '2', '1', '-'],
          ['17',    '900,000',                              '11+6 hp ',       '5',            '6', '6', '6', '5', '5', '5', '2', '2', '-'],
          ['18',    '1,000,000',                            '11+7 hp',        '5',            '6', '6', '6', '6', '6', '5', '2', '2', '1'],
          ['19',    '1,100,000',                            '11+8 hp',        '5',            '7', '7', '7', '6', '6', '6', '3', '2', '2'],
          ['20',    '1,200,000',                            '11+9 hp ',       '5',            '7', '7', '7', '7', '7', '7', '3', '3', '2'],
          ['21+',   '+100,000 per level',                   '+1 hp/level',    '5',            '8', '8', '8', '7', '7', '7', '4', '3', '3'],
        ],
        notes: [
          '* Hit points shown for levels after the character no longer gains full hit dice are the total combined number. A 13th level Magic-User has 11 HD plus 2 hit points total, not 11 HD plus 1 hit point gained at 12th level and another 2 hit points gained at 13th.',
          '** Magic-Users continue to gain spells after 21st level according to the same pattern.',
        ],
      },
    ],
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
    tables: [
      {
        name: 'Table 17: Thieving Skills',
        content: [
          ['Level', 'Climb Walls',    'Delicate Tasks and Traps', 'Hear Sounds',       'Hide in Shadows', 'Move Silently',   'Open Locks'     ],
          ['1',     '85%',            '15%',                      '3 in 6',            '10%',             '20%',             '10%'            ],
          ['2',     '86%',            '20%',                      '3 in 6',            '15%',             '25%',             '15%'            ],
          ['3',     '87%',            '25%',                      '4 in 6',            '20%',             '30%',             '20%'            ],
          ['4',     '88%',            '30%',                      '4 in 6',            '25%',             '35%',             '25%'            ],
          ['5',     '89%',            '35%',                      '4 in 6',            '30%',             '40%',             '30%'            ],
          ['6',     '90%',            '40%',                      '4 in 6',            '35%',             '45%',             '35%'            ],
          ['7',     '91%',            '45%',                      '5 in 6',            '40%',             '50%',             '40%'            ],
          ['8',     '92%',            '50%',                      '5 in 6',            '55%',             '60%',             '55%'            ],
          ['9',     '93%',            '60%',                      '5 in 6',            '65%',             '70%',             '65%'            ],
          ['10',    '94%',            '70%',                      '5 in 6',            '75%',             '80%',             '75%'            ],
          ['11',    '95%',            '80%',                      '6 in 6',            '85%',             '90%',             '85%'            ],
          ['12',    '96%',            '90%',                      '6 in 6',            '95%',             '100%',            '95%'            ],
          ['13',    '97%',            '100%',                     '6 in 6',            '100%',            '100%',            '100%'           ],
          ['14',    '98%',            '100%',                     '6 in 6',            '100%',            '100%',            '100%'           ],
          ['15',    '99%',            '100%',                     '6 in 6',            '100%',            '100%',            '100%'           ],
          ['16+',   'Remains at 99%', 'Remains at 100%',          'Remains at 6 in 6', 'Remains at 100%', 'Remains at 100%', 'Remains at 100%'],
        ],
        notes: [],
      },
      {
        name: 'Table 18: Non-human Thief Bonuses Table',
        content: [
          ['Race',     'Climb Walls', 'Delicate Tasks and Traps', 'Hear Sounds', 'Hide in Shadows', 'Move Silently', 'Open Locks'],
          ['Dwarf',    '-',           '+10',                      '-',           '+5',              '+5',            '+5'        ],
          ['Elf',      '-',           '-',                        '-',           '+15',             '+10',           '-'         ],
          ['Half-Elf', '-',           '-',                        '-',           '-',               '-',             '-'         ],
          ['Halfling', '-',           '+5',                       '-',           '+10',             '+10',           '+10'       ],
        ],
        notes: [],
      },
      {
        name: 'Table 19: Thief Advancement Table',
        content: [
          ['Level', 'Experience Points Required for Level', 'Hit Dice (d4)', 'Saving Throw' ],
          ['1',     '0',                                    '1',             '15'           ],
          ['2',     '1250',                                 '2',             '14'           ],
          ['3',     '2500',                                 '3',             '13'           ],
          ['4',     '5000',                                 '4',             '12'           ],
          ['5',     '10000',                                '5',             '11'           ],
          ['6',     '20000',                                '6',             '10'           ],
          ['7',     '40000',                                '7',             '9'            ],
          ['8',     '60000',                                '8',             '8'            ],
          ['9',     '90000',                                '9',             '7'            ],
          ['10',    '120000',                               '10',            '6'            ],
          ['11',    '240000',                               '10+1 hp',       '5'            ],
          ['12+',   '+130,000',                             '+1 hp/level',   'Remains at 5' ],
        ],
        notes: [],
      },
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
    tables: [
      {
        name: 'Table 16: Ranger Advancement Table',
        content: [
          ['Level', 'Experience Points Required for Level', 'Hit Dice (d8)*', 'Saving Throw', '1',             '2',             '3'],
          ['1',     '0',                                    '2',              '14',           '-',             '-',             '-'],
          ['2',     '2,500',                                '3',              '13',           '-',             '-',             '-'],
          ['3',     '5,000',                                '4',              '12',           '-',             '-',             '-'],
          ['4',     '12,000',                               '5',              '11',           '-',             '-',             '-'],
          ['5',     '25,000',                               '6',              '10',           '-',             '-',             '-'],
          ['6',     '50,000',                               '7',              '9',            '-',             '-',             '-'],
          ['7',     '100,000',                              '8',              '8',            '-',             '-',             '-'],
          ['8',     '175,000',                              '9',              '7',            '-',             '-',             '-'],
          ['9',     '275,000',                              '10',             '6',            'Clr 1',         '-',             '-'],
          ['10',    '550,000',                              '10+2 hp',        '5',            'Clr 2 / MU 1',  'Clr1',          '-'],
          ['11',    '825,000',                              '10+4 hp',        '4',            'Clr 2 / MU 2',  'Clr 1 / MU 1',  '-'],
          ['12',    '1,100,000',                            '10+6 hp',        '4',            'Clr 3 / MU 2',  'Clr 2 / MU 1',  'Clr 1'],
          ['13',    '1,375,000',                            '10+8 hp',        '4',            'Clr 3 / MU 3',  'Clr 2 / MU 2',  'Clr 1 / MU 1'],
          ['14',    '1,600,000 ',                           '10+10 hp',       '4',            'Clr 4 / MU 3',  'Clr 3 / MU 2',  'Clr 1 / MU 1'],
          ['15',    '1,800,000 ',                           '10+12 hp',       '4',            'Clr 4 / MU 4',  'Clr 3 / MU 3',  'Clr 1 / MU 1'],
          ['16',    '2,000,000',                            '10+14 hp ',      '4',            'Clr 4 / MU 4',  'Clr 3 / MU 3',  'Clr 2 / MU 1'],
          ['17',    '2,200,000',                            '10+16 hp',       '4',            'Clr 4 / MU 4',  'Clr 3 / MU 3',  'Clr 2 / MU 2'],
          ['18',    '2,400,000',                            '10+18 hp',       '4',            'Clr 5 / MU 4',  'Clr 4 / MU 3',  'Clr 2 / MU 2'],
          ['19',    '2,600,000',                            '10+20 hp ',      '4',            'Clr 5 / MU 5',  'Clr 4 / MU 4',  'Clr 2 / MU 2'],
          ['20',    '2,800,000 ',                           '10+22 hp',       '4',            'Clr 5 / MU 5',  'Clr 4 / MU 4',  'Clr 3 / MU 2'],
          ['21+',   '+200,000 per level',                   '+2 hp/level',    '4',            'Clr 5 / MU 5',  'Clr 4 / MU 4',  'Clr 3 / MU 3'],
        ],
        notes: [
          '* Hit points shown for levels after the character no longer gains full hit dice are the total combined number. An 11th level Ranger has 10HD plus 4 hit points total, not 10HD plus 2 hit points gained at 10th level and another 4 hit points gained at 11th.',
          '** Rangers continue to gain spells after 21st level according to the same pattern.',
        ],
      },
    ],
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
    tables: [
      {
        name: 'Table 15: Paladin Advancement Table',
        content: [
          ['Level', 'Experience Points Required for Level', 'Hit Dice (d8)*', 'Saving Throw'],
          ['1',     '0',                                    '1',              '12'          ],
          ['2',     '2,000',                                '2',              '11'          ],
          ['3',     '4,000',                                '3',              '10'          ],
          ['4',     '8,000',                                '4',              '9'           ],
          ['5',     '16,000',                               '5',              '8'           ],
          ['6',     '32,000',                               '6',              '7'           ],
          ['7',     '64,000',                               '7',              '6'           ],
          ['8',     '128,000',                              '8',              '5'           ],
          ['9',     '256,000',                              '9',              '4'           ],
          ['10',    '350,000',                              '9+2 hp',         '3'           ],
          ['11',    '450,000',                              '9+4 hp',         '2'           ],
          ['12',    '550,000',                              '9+6 hp',         '2'           ],
          ['13',    '650,000',                              '9+8 hp',         '2'           ],
          ['14',    '750,000',                              '9+10 hp',        '2'           ],
          ['15',    '850,000',                              '9+12 hp',        '2'           ],
          ['16',    '950,000',                              '9+14 hp',        '2'           ],
          ['17',    '1,050,000',                            '9+16 hp',        '2'           ],
          ['18',    '1,150,000',                            '9+18 hp',        '2'           ],
          ['19',    '1,250,000',                            '9+20 hp',        '2'           ],
          ['20',    '1,350,000',                            '9+22 hp',        '2'           ],
          ['21+',   '+100,000 per level',                   '+2 hp/level',    '2'           ],
        ],
        notes: [
          '* Hit points shown for levels after the character no longer gains full hit dice are the total combined number. An 11th level Paladin has 9 HD plus 4 hit points total, not 9 HD plus 2 hit points gained at 10th level and another 4 hit points gained at 11th.',
        ],
      },
    ],
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
    tables: [
      {
        name: 'Table 13: Monk Advancement Table',
        content: [
          ['Level*', 'XP',                 'Hit Dice (d4)**', 'Armor Class', 'Saving Throw', 'Abilities',                                                            'Weaponless Damage',       'Movement Rate'],
          ['1',      '0',                  '1',               '10',          '15',           'Thief-type skills',                                                    '1d4',                     '12'           ],
          ['2',      '2,500',              '2',               '11',          '14',           '+1 damage with weapons',                                               '1d6',                     '13'           ],
          ['3',      '5,000',              '3',               '12',          '13',           '-',                                                                    '1d6',                     '14'           ],
          ['4',      '10,000',             '4',               '13',          '12',           'Speak with Animals / +2 total damage with weapons',                    '1d8',                     '15'           ],
          ['5',      '20,000',             '5',               '14',          '11',           'Silence / Slow Falling 20 ft',                                         '1d10',                    '16'           ],
          ['6',      '40,000',             '6',               '15',          '10',           'Mind / 2 weaponless attacks per round / +3 total damage with weapons', '1d12',                    '17'           ],
          ['7',      '80,000',             '7',               '16',          '9',            'Body',                                                                 '2d8',                     '18'           ],
          ['8',      '160000',             '8',               '17',          '8',            'Self / +4 total damage with weapons / Slow Falling 40 ft',             '2d8+1',                   '19'           ],
          ['9',      '320000',             '9',               '18',          '7',            '-',                                                                    '2d8+2',                   '20'           ],
          ['10',     '420,000',            '10',              '18',          '6',            'Oneness / +5 total damage with weapons',                               '2d8+4',                   '21'           ],
          ['11',     '620,000',            '11',              '19',          '5',            'Establish Monastery / Slow Falling any distance',                      '3d8+1',                   '22'           ],
          ['12',     '820,000',            '12',              '19',          '5',            '3 weaponless attacks per round',                                       '3d8+2',                   '23'           ],
          ['13',     '1,020,000',          '13',              '20',          '5',            'Harmonic Touch',                                                       '3d8+4 ',                  '24'           ],
          ['14',     '1,320,000',          '14',              '20',          '5',            '-',                                                                    '4d8+1',                   '25'           ],
          ['15',     '1,720,000',          '15',              '21',          '5',            '-',                                                                    '4d8+2 ',                  '26'           ],
          ['16',     '2,220,000',          '16',              '22',          '5',            '4 weaponless attacks per round',                                       '4d8+4',                   '27'           ],
          ['17',     '2,720,000',          '16+1 hp',         '22',          '5',            '-',                                                                    '4d8+5 ',                  '28'           ],
          ['18',     '3,220,000',          '16+2 hp',         '22',          '5',            '-',                                                                    '4d8+6',                   '29'           ],
          ['19',     '3,720,000',          '16+3 hp',         '22',          '5',            '-',                                                                    '4d8+7 ',                  '30'           ],
          ['20',     '4,220,000',          '16+4 hp',         '22',          '5',            '5 weaponless attacks per round',                                       '4d8+8 ',                  '31'           ],
          ['21+',    '+500,000 per level', '+1 hp/level',     '22',          '5',            'No further improvement',                                               '+1 additional per level', '32'           ],
        ],
        notes: [],
      },
      {
        name: 'Table 14: Thieving Skills for Monks',
        content: [
          ['Level', 'Climb Walls',    'Delicate Tasks and Traps', 'Hear Sounds',       'Hide in Shadows', 'Move Silently',   'Open Locks'     ],
          ['1',     '85%',            '15%',                      '3 in 6',            '10%',             '20% ',            '10%'            ],
          ['2',     '86%',            '20%',                      '3 in 6',            '15%',             '25%',             '15%'            ],
          ['3',     '87%',            '25%',                      '4 in 6',            '20%',             '30%',             '20%'            ],
          ['4',     '88%',            '30%',                      '4 in 6',            '25%',             '35%',             '25%'            ],
          ['5',     '89%',            '35%',                      '4 in 6',            '30%',             '40%',             '30%'            ],
          ['6',     '90%',            '40%',                      '4 in 6',            '35%',             '45%',             '35%'            ],
          ['7',     '91%',            '45%',                      '5 in 6',            '40%',             '50%',             '40%'            ],
          ['8',     '92%',            '50%',                      '5 in 6',            '55%',             '60%',             '55%'            ],
          ['9',     '93%',            '60%',                      '5 in 6',            '65%',             '70%',             '65%'            ],
          ['10',    '94%',            '70%',                      '5 in 6',            '75%',             '80%',             '75%'            ],
          ['11',    '95%',            '80%',                      '6 in 6',            '85%',             '90%',             '85%'            ],
          ['12',    '96%',            '90%',                      '6 in 6',            '95%',             '100%',            '95%'            ],
          ['13',    '97%',            '100%',                     '6 in 6',            '100%',            '100%',            '100%'           ],
          ['14',    '98%',            '100%',                     '6 in 6',            '100%',            '100%',            '100%'           ],
          ['15',    '99%',            '100%',                     '6 in 6',            '100%',            '100%',            '100%'           ],
          ['16',    'Remains at 99%', 'Remains at 100%',          'Remains at 6 in 6', 'Remains at 100%', 'Remains at 100%', 'Remains at 100%'],
        ],
        notes: [],
      },
    ],
  },
];
