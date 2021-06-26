export interface IMissile {
  name: string;
  damage: string;
  rateOfFire: string;
  range: string;
  weight: string;
  cost: string;
}

export const missile: IMissile[] = [
    {
        name: 'Arrows (20) ',
        damage: '1d6',
        rateOfFire: 'By weapon ',
        range: 'By weapon',
        weight: '1 pounds',
        cost: '2 gp',
    },
    {
        name: 'Axe, hand',
        damage: '1d6',
        rateOfFire: '1 ',
        range: '10ft',
        weight: '5 pounds',
        cost: '1 gp',
    },
    {
        name: 'Bolts, heavy\n' +
            '(20)',
        damage: '1d6+1',
        rateOfFire: 'By weapon',
        range: 'By weapon',
        weight: '1 pounds',
        cost: '2 gp',
    },
    {
        name: 'Bolts, light\n' +
            '(20)',
        damage: '1d4+1',
        rateOfFire: 'By weapon',
        range: 'By weapon',
        weight: '1 pounds',
        cost: '2 gp',
    },
    {
        name: 'Bow, long',
        damage: 'See Arrows',
        rateOfFire: '2',
        range: '70ft',
        weight: '5 pounds',
        cost: '60 gp',
    },
    {
        name: 'Bow, short',
        damage: 'See Arrows',
        rateOfFire: '2',
        range: '50ft',
        weight: '5 pounds',
        cost: '15 gp',
    },
    {
        name: 'Crossbow,\n' +
            'heavy',
        damage: 'See Bolts, heavy',
        rateOfFire: '1/2 ',
        range: '80ft ',
        weight: '5 pounds',
        cost: '20 gp',
    },
    {
        name: 'Crossbow, light',
        damage: 'See Bolts, light',
        rateOfFire: '1 ',
        range: '60ft',
        weight: '5 pounds',
        cost: '12 gp',
    },
    {
        name: 'Dagger',
        damage: '1d4',
        rateOfFire: '1',
        range: '10ft',
        weight: '2 pounds',
        cost: '2 gp',
    },
    {
        name: 'Dart',
        damage: '1d3',
        rateOfFire: '3 ',
        range: '15ft',
        weight: '1 pounds',
        cost: '0.2 gp',
    },
    {
        name: 'Javelin',
        damage: '1d6',
        rateOfFire: '1',
        range: '20ft',
        weight: '5 pounds',
        cost: '0.5 gp',
    },
    {
        name: 'Sling',
        damage: 'See Stones, sling',
        rateOfFire: '1',
        range: '40ft',
        weight: '1 pounds',
        cost: '0.2 gp',
    },
    {
        name: 'Spear',
        damage: '1d6',
        rateOfFire: '1',
        range: '20ft',
        weight: '10 pounds',
        cost: '1 gp',
    },
    {
        name: 'Stones, sling\n' +
            '(20)',
        damage: '1d4',
        rateOfFire: 'By weapon ',
        range: 'By weapon',
        weight: '5 pounds',
        cost: '0 gp',
    },
];
