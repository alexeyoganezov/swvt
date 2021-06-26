export interface IArmor {
  type: string;
  armorClassBonus: string;
  weight: string;
  cost: string;
}

export const armor: IArmor[] = [
    {
        type: 'Shield',
        armorClassBonus: '+1',
        weight: '10 pounds',
        cost: '15 gp',
    },
    {
        type: 'Leather',
        armorClassBonus: '+2',
        weight: '25 pounds',
        cost: '5 gp',
    },
    {
        type: 'Ring',
        armorClassBonus: '+3',
        weight: '40 pounds',
        cost: '30 gp',
    },
    {
        type: 'Chain',
        armorClassBonus: '+4',
        weight: '50 pounds',
        cost: '75 gp',
    },
    {
        type: 'Plate',
        armorClassBonus: '+6',
        weight: '70 pounds',
        cost: '100 gp',
    },
];
