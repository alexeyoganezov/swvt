import { Model, ModelView } from '../../../../utils/framework';
import { IMonster } from '../data/monsters';

export class MonsterView extends ModelView<Model<IMonster>> {
  getHTML(): string {
    const m = this.model.attrs;
    return `
      <div class="col-lg-4">
        <h3>
          ${m.name}
        </h3>
        <p>
          <b>HD:</b> ${m.hitDie}
        </p>
        <p>
          <b>AC:</b> ${m.armorClass}
        </p>
        <p>
          <b>ST:</b> ${m.savingThrow}
        </p>
        <p>
          <b>Special:</b> ${m.special}
        </p>
        <p>
          <b>Movement Rate:</b> ${m.movementRate}
        </p>
        <p>
          <b>Alignment:</b> ${m.alignment}
        </p>
        <p>
          <b>Challenge Level:</b> ${m.challengeLevel}
        </p>
        <p>
          <b>Attacks:</b> ${m.attacks.map(attack => `<br>- ${attack}`).join('')}
        </p>
      </div>
    `;
  }
}
