import { Model, ModelView } from '../../../../utils/framework';
import { IArmor } from '../data/armor';

export class ArmorView extends ModelView<Model<IArmor>> {
  getHTML(): string {
    const m = this.model.attrs;
    return `
      <div class="col-lg-4">
        <h3>
          ${m.type}
        </h3>
        <p>
          <b>AC Bonus:</b>
          ${m.armorClassBonus}
        </p>
        <p>
          <b>Weight:</b>
          ${m.weight}
        </p>
        <p>
          <b>Cost:</b>
          ${m.cost}
        </p>
      </div>
    `;
  }
}
