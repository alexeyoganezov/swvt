import { Model, ModelView } from '../../../../utils/framework';
import { IMelee } from '../data/melee';

export class MeleeView extends ModelView<Model<IMelee>> {
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
          <b>Weight:</b>
          ${m.weight}
        </p>
        <p>
          <b>Cost:</b>
          ${m.cost}
        </p>
        <p>
          <b>Can be used as one or two handed:</b>
          ${ m.canBeUseOneOrTwoHanded ? 'Yes' : 'No' }
        </p>
      </div>
    `;
  }
}
