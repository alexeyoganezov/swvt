import { ModelView, Region, ALL_EVENTS } from '../../../../../utils/framework';
import { ItemsList } from './ItemsList';
import { CharacterModel } from '../../../../../entities/Character';

export class ItemsView extends ModelView<CharacterModel> {
  getHTML(): string {
    return `
      <div class="list ">
        <h2>
          Items
        </h2>
        <div class="item-list">

        </div>
        <button style="margin-top: 10px;" class="button-secondary add-item">Add item</button>
      </div>
    `;
  }
  domEvents = [
    { el: '.add-item', on: 'click', call: this.addItem.bind(this) },
  ];
  listRegion = new Region(this, '.item-list');
  async afterInit() {
    const itemList = new ItemsList(this.model.attrs.items, this.model.getId());
    itemList.on(ALL_EVENTS, this.retrigger.bind(this));
    await this.listRegion.show(itemList);
  }
  addItem() {
    this.trigger('add-item');
  }
}
