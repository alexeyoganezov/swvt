import { Model, ModelView } from '../../../../utils/framework';
import { IRace } from '../data/races';

export class RaceView extends ModelView<Model<IRace>> {
  getHTML(): string {
    const m = this.model.attrs;
    return `
      <div class="col-lg-4">
        <h3>
          ${m.name}
        </h3>
        <p>
          <b>Class:</b>
          ${
            m.options.length > 0 ? `
              ${
                m.options.map(option => `
                  <br>-
                  ${
                    option.map((klass, index) => `
                      <span class="tooltip">
                        ${klass.name}
                        <span class="tooltip-content">
                          Max level: ${klass.maxLevel}
                        </span>
                      </span>
                    `).join(' / ')
                  }
                `).join('')
              }
            ` : `
              Any
            `
          }
        </p>
        <p>
          <b>Traits:</b>
          ${
            m.traits.length > 0 ? `
              ${m.traits.map(trait => `<br>${trait}`).join('')}
            ` : `
              None
            `
          }
        </p>
        ${
          m.notes.map(note => `<p>${note}</p>`).join('')
        }
      </div>
    `;
  }
}
