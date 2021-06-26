import { Model, ModelView } from '../../../../utils/framework';
import { IMissile } from '../data/missile';

export class MissileView extends ModelView<Model<IMissile>> {
  getHTML(): string {
    const m = this.model.attrs;
    return `
      <div class="col-lg-4">
        <h3>
          ${m.name}
        </h3>
        <p>
          <b>Damage:</b>
          ${m.damage}
        </p>
        <p>
          <b>Rate of Fire:</b>
          ${m.rateOfFire}
        </p>
        <p>
          <b>Range:</b>
          ${m.range}
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
