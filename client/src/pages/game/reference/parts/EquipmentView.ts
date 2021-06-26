import { Model, ModelView } from '../../../../utils/framework';
import { IEquipment } from '../data/equipment';

export class EquipmentView extends ModelView<Model<IEquipment>> {
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
          ${m.description}
        </p>
      </div>
    `;
  }
}
