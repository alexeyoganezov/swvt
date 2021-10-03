export interface IReferenceTable {
  name: string;
  content: string[][];
  notes: string[];
}

export const baseMovementRate: IReferenceTable = {
  name: 'Table 25: Base Movement Rate',
  content: [
    ['Weight Carried*',                    'Base Movement Rate'],
    ['Up to 75 pounds',                    '12',               ],
    ['76–100 pounds',                      '9',                ],
    ['101–150 pounds',                     '6',                ],
    ['151–300 pounds (300-pound maximum)', '3',                ],
  ],
  notes: [
    '* Carry Modifier (from Strength , if any, is added to the total. For example, an adventurer with a Carry Modifier of +10 can carry up to 85 pounds before dropping from a Movement Rate of 12 to a Movement Rate of 9, while a person with a Carry Modifier of -10 would drop to a Movement Rate of 9 even if carrying only 66 pounds of equipment.',
  ],
};

export const indoorMovement: IReferenceTable = {
  name: 'Table 26: indoor, underground, and City Movement',
  content: [
    ['Description', 'Speed',                   'Results'                                           ],
    ['Walking',     'BMR * 20 feet/turn',      'Mapping and careful observation'                   ],
    ['Running',     'BMR * 40 feet/turn',      'No mapping, characters are automatically surprised'],
    ['Combat',      'BMR / 3 * 10 feet/round', 'Dashing, battling, running away'                   ],
  ],
  notes: [],
};

export const outdoorMovement: IReferenceTable = {
  name: 'Table 27: Outdoor Movement',
  content: [
    ['Description',  'Speed',                     'Results'                                                      ],
    ['Hiking',       'BMR in miles/day ',         'No forced march checks required'                              ],
    ['Forced March', 'BMR * 2 in miles/day ',     'Forced march checks required once per day. (4d6 vs. Strength)'],
    ['Combat',       'BMR / 3 * 10 yards/round.', 'Battling your foes, or running for your life'                 ],
  ],
  notes: [],
};
