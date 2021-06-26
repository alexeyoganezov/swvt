import { Model, ModelView } from '../../../../utils/framework';
import { IAttribute } from '../data/attributes';

export class AttributeView extends ModelView<Model<IAttribute>> {
  getHTML(): string {
    const m = this.model.attrs;
    return `
      <div class="col-lg-4">
        <h3>
          ${m.name}
        </h3>
        <p>
          ${m.description}
        </p>
        <p>
          <b>Affects:</b>
          ${
            m.affects.map(value => `<br>- ${value}`).join('')
          }
        </p>
        <p>
          <b>Prime for:</b>
          ${
            m.primeFor.map(value => `<br>- ${value}`).join('')
          }
          ${
            m.primeFor.length == 0 ? 'No one' : ''
          }
        </p>
      </div>
    `;
  }
}
