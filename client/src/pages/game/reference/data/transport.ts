export interface ITransport {
  name: string;
  cost: string;
  movementRate: {
    smoothTerrain: string,
    hillsOrRough: string,
    mountain: string,
    forest: string,
    swampMarsh: string,
  },
}

// fixme add MR from page 83
export const transport: ITransport[] = [
    {
      name: 'Cart, Hand ',
      cost: '10 gp',
      movementRate: {
        smoothTerrain: '12',
        hillsOrRough: '6',
        mountain: '0-1',
        forest: '6',
        swampMarsh: '0',
      },
    },
    {
      name: 'Horse, Riding',
      cost: '40 gp',
      movementRate: {
        smoothTerrain: '30',
        hillsOrRough: '15',
        mountain: '0-3',
        forest: '10',
        swampMarsh: '3',
      },
    },
    {
      name: 'Horse, War',
      cost: '200 gp',
      movementRate: {
        smoothTerrain: '30',
        hillsOrRough: '15',
        mountain: '0-3',
        forest: '10',
        swampMarsh: '3',
      },
    },
    {
      name: 'Mule',
      cost: '20 gp',
      movementRate: {
        smoothTerrain: '12',
        hillsOrRough: '12',
        mountain: '6',
        forest: '12',
        swampMarsh: '6',
      },
    },
    {
      name: 'Rowboat',
      cost: '20 gp',
      movementRate: {
        smoothTerrain: '?',
        hillsOrRough: '?',
        mountain: '?',
        forest: '?',
        swampMarsh: '?',
      },
    },
    {
      name: 'Wagon',
      cost: '50 gp',
      movementRate: {
        smoothTerrain: '12',
        hillsOrRough: '6',
        mountain: '0-1',
        forest: '6',
        swampMarsh: '0',
      },
    },
];
