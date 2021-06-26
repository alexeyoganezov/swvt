export interface IClassOption {
  name: string;
  maxLevel: string;
}

export interface IRace {
  name: string;
  notes: string[];
  traits: string[];
  options: IClassOption[][];
}

export const races: IRace[] = [
  {
    name: 'Humans',
    options: [],
    traits: [],
    notes: [
      'Only humans can be Assassins, Druids, Monks, Paladins, or Rangers'
    ],
  },
  {
    name: 'Dwarfs',
    options: [
      [
        {
          name: 'Fighter',
          maxLevel: '6, 7 if Str 17, 8 if Str 18',
        }
      ],
      [
        {
          name: 'Fighter',
          maxLevel: '6',
        },
        {
          name: 'Thief',
          maxLevel: '-',
        },
      ],
    ],
    traits: [
      '+4 on saving throws against magic',
      'Stonecunning',
      'Darkvision (60 feet)',
    ],
    notes: [],
  },
  {
    name: 'Elves',
    options: [
      [
        {
          name: 'Thief',
          maxLevel: '-',
        }
      ],
      [
        {
          name: 'Fighter',
          maxLevel: '4, 5 if Str 17, 6 if Str 18',
        },
        {
          name: 'Magic-User',
          maxLevel: '8, 9 if Int 18',
        },
      ],
      [
        {
          name: 'Fighter',
          maxLevel: '4, 5 if Str 17, 6 if Str 18',
        },
        {
          name: 'Magic-User',
          maxLevel: '8, 9 if Int 18',
        },
        {
          name: 'Thief',
          maxLevel: '-',
        },
      ],
    ],
    traits: [
      'Darkvision (60 feet)',
      '4-in-6 chance to find secret doors',
      '1-in-6 chance to notice a secret door',
      'Cannot be paralyzed by ghouls',
      'Magic spells only as high as 5th-level spells',
    ],
    notes: [],
  },
  {
    name: 'Half-Elves',
    options: [
      [
        {
          name: 'Thief',
          maxLevel: '-',
        }
      ],
      [
        {
          name: 'Fighter',
          maxLevel: '6, 7 if Str 17, 8 if Str 18',
        },
        {
          name: 'Magic-User',
          maxLevel: '6, 7 if Int 17, 8 if Int 18',
        },
      ],
      [
        {
          name: 'Fighter',
          maxLevel: '6, 7 if Str 17, 8 if Str 18',
        },
        {
          name: 'Magic-User',
          maxLevel: '6, 7 if Int 17, 8 if Int 18',
        },
        {
          name: 'Cleric',
          maxLevel: '4',
        },
      ],
    ],
    traits: [
      'Darkvision (60 feet)',
      '4-in-6 chance to find secret doors',
    ],
    notes: [],
  },
  {
    name: 'Halflings',
    options: [
      [
        {
          name: 'Fighter',
          maxLevel: '4',
        },
      ],
      [
        {
          name: 'Thief',
          maxLevel: '-',
        },
      ],
    ],
    traits: [
      '+4 on saving throws against magic',
      '+1 bonus for missile weapons',
    ],
    notes: [],
  },
];
