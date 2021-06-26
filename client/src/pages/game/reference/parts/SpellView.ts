import { Model, ModelView } from '../../../../utils/framework';
import { ISpell } from '../data/spells';

export class SpellView extends ModelView<Model<ISpell>> {
  getHTML(): string {
    const m = this.model.attrs;
    return `
      <div class="col-lg-4">
        <h3>
          ${m.name}
        </h3>
        <p>
          <b>Level:</b> ${m.level}
        </p>
        <p>
          <b>Range:</b> ${m.range}
        </p>
        <p>
          <b>Duration:</b> ${m.duration}
        </p>
        <p>
          ${m.description}
        </p>
      </div>
    `;
  }
}
