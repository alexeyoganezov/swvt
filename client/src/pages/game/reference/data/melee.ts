export interface IMelee {
  name: string;
  damage: string;
  weight: string;
  cost: string;
  canBeUseOneOrTwoHanded: boolean;
  bothMeleeAndMisslise: boolean;
}

export const melee: IMelee[] = [
    {
        name: 'Axe, battle',
        damage: '1d8',
        weight: '15 pounds',
        cost: '5 gp',
        canBeUseOneOrTwoHanded: true,
        bothMeleeAndMisslise: false,
    },
    {
        name: 'Axe, hand',
        damage: '1d6',
        weight: '5 pounds',
        cost: '1 gp',
        canBeUseOneOrTwoHanded: false,
        bothMeleeAndMisslise: true,
    },
    {
        name: 'Club',
        damage: '1d4',
        weight: '10 pounds',
        cost: '0 gp',
        canBeUseOneOrTwoHanded: false,
        bothMeleeAndMisslise: false,
    },
    {
        name: 'Dagger',
        damage: '1d4',
        weight: '2 pounds',
        cost: '2 gp',
        canBeUseOneOrTwoHanded: false,
        bothMeleeAndMisslise: true,
    },
    {
        name: 'Flail (two-handed)',
        damage: '1d8',
        weight: '10 pounds',
        cost: '8 gp',
        canBeUseOneOrTwoHanded: false,
        bothMeleeAndMisslise: false,
    },
    {
        name: 'Hammer, war',
        damage: '1d4+1 ',
        weight: '10 pounds',
        cost: '1 gp',
        canBeUseOneOrTwoHanded: false,
        bothMeleeAndMisslise: false,
    },
    {
        name: 'Lance',
        damage: '2d4+1',
        weight: '15 pounds',
        cost: '6 gp',
        canBeUseOneOrTwoHanded: false,
        bothMeleeAndMisslise: false,
    },
    {
        name: 'Mace, heavy',
        damage: '1d6',
        weight: '10 pounds',
        cost: '10 gp',
        canBeUseOneOrTwoHanded: false,
        bothMeleeAndMisslise: false,
    },
    {
        name: 'Polearm\n' +
            '(two-handed)',
        damage: '1d8+1',
        weight: '15 pounds',
        cost: '10 gp',
        canBeUseOneOrTwoHanded: false,
        bothMeleeAndMisslise: false,
    },
    {
        name: 'Spear',
        damage: '1d6',
        weight: '10 pounds',
        cost: '1 gp',
        canBeUseOneOrTwoHanded: true,
        bothMeleeAndMisslise: true,
    },
    {
        name: 'Staff (two-handed)',
        damage: '1d6',
        weight: '10 pounds',
        cost: '0 gp',
        canBeUseOneOrTwoHanded: false,
        bothMeleeAndMisslise: false,
    },
    {
        name: 'Sword, bastard',
        damage: '1d8',
        weight: '10 pounds',
        cost: '20 gp',
        canBeUseOneOrTwoHanded: true,
        bothMeleeAndMisslise: false,
    },
    {
        name: 'Sword, long',
        damage: '1d8',
        weight: '10 pounds',
        cost: '15 gp',
        canBeUseOneOrTwoHanded: false,
        bothMeleeAndMisslise: false,
    },
    {
        name: 'Sword, short',
        damage: '1d6',
        weight: '5 pounds',
        cost: '8 gp',
        canBeUseOneOrTwoHanded: false,
        bothMeleeAndMisslise: false,
    },
    {
        name: 'Sword, two-handed',
        damage: '1d10',
        weight: '15 pounds',
        cost: '30 gp',
        canBeUseOneOrTwoHanded: false,
        bothMeleeAndMisslise: false,
    },
];
