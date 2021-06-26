import { ModelView, Region, ALL_EVENTS } from '../../../../../utils/framework';
import { AbilitiesList } from './AbilitiesList';
import { CharacterModel } from '../../../../../entities/Character';

export class SpecialAbilitiesView extends ModelView<CharacterModel> {
  getHTML(): string {
    return `
      <div class="list ">
        <h2>
          Special abilities
        </h2>
        <div class="special-abilities-list">

        </div>
        <button style="margin-top: 10px;" class="button-secondary add-ability">Add ability</button>
      </div>
    `;
  }
  domEvents = [
    { el: '.add-ability', on: 'click', call: this.addAbility.bind(this) },
  ];
  listRegion = new Region(this, '.special-abilities-list');
  async afterInit() {
    const abilitiesList = new AbilitiesList(this.model.attrs.specialAbilities, this.model.getId());
    abilitiesList.on(ALL_EVENTS, this.retrigger.bind(this));
    await this.listRegion.show(abilitiesList);
  }
  addAbility() {
    this.trigger('add-ability');
  }
}
