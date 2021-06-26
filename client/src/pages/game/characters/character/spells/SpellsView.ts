import { ModelView, Region, ALL_EVENTS } from '../../../../../utils/framework';
import { SpellsList } from './SpellsList';
import { CharacterModel } from '../../../../../entities/Character';

export class SpellsView extends ModelView<CharacterModel> {
  getHTML(): string {
    return `
      <div class="list ">
        <h2>
          Spells
        </h2>
        <div class="spell-list">

        </div>
        <button style="margin-top: 10px;" class="button-secondary add-spell">Add spell</button>
      </div>
    `;
  }
  domEvents = [
    { el: '.add-spell', on: 'click', call: this.addSpell.bind(this) },
  ];
  listRegion = new Region(this, '.spell-list');
  async afterInit() {
    const spellList = new SpellsList(this.model.attrs.spells, this.model.getId());
    spellList.on(ALL_EVENTS, this.retrigger.bind(this));
    await this.listRegion.show(spellList);
  }
  addSpell() {
    this.trigger('add-spell');
  }
}
