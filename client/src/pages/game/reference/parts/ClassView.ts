import { Model, ModelView } from '../../../../utils/framework';
import { IClass } from '../data/classes';

export class ClassView extends ModelView<Model<IClass>> {
  getHTML(): string {
    const m = this.model.attrs;
    return `
      <div class="col-lg-4">
        <h3>
          ${m.name}
        </h3>
        <p>
          <b>Prime attribute:</b>
          ${m.primeAttribute}
        </p>
        <p>
          <b>HD:</b>
          ${m.hd}
        </p>
        <p>
          <b>Alignment:</b>
          ${m.alignment}
        </p>
        <p>
          <b>Armor/Shield:</b>
          ${m.armorAndShield}
        </p>
        <p>
          <b>Weapons:</b>
          ${m.weapons}
        </p>
        ${
          m.magicItems.length > 0 ? `
            <p>
              <b>Magic Items:</b> ${m.magicItems}
            </p>
          ` : ``
        }
        <p>
          <b>Abilities:</b>
          ${
            m.abilities.map(ability => `
              <br>- <span class="${ability.description ? `tooltip` : ``} ability-name">
                ${ability.name}
                <span class="tooltip-content ability-description">
                  ${ability.description}
                </span>
              </span>
            `).join('')
          }
        </p>
        ${
          m.notes.map(note => `<p>${note}</p>`).join('')
        }
      </div>
    `;
  }
}
