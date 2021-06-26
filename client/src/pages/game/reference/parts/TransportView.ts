import { Model, ModelView } from '../../../../utils/framework';
import { ITransport } from '../data/transport';

export class TransportView extends ModelView<Model<ITransport>> {
  getHTML(): string {
    const m = this.model.attrs;
    return `
      <div class="col-lg-4">
        <h3>
          ${m.name}
        </h3>
        <p>
          <b>Cost:</b>
          ${m.cost}
        </p>
        <p>
          <b>Movement Rate:</b>
          <br>Smooth Terrain: ${m.movementRate.smoothTerrain}
          <br>Hills or Rough: ${m.movementRate.hillsOrRough}
          <br>Mountain: ${m.movementRate.mountain}
          <br>Forest: ${m.movementRate.forest}
          <br>Swamp or Marsh: ${m.movementRate.swampMarsh}
        </p>
      </div>
    `;
  }
}
