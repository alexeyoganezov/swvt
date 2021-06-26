import { ModelView, Reference } from '../../../../../utils/framework';
import { ItemModel } from '../../../../../entities/Item';

export class ItemView extends ModelView<ItemModel> {
  getHTML(): string {
    const m = this.model.attrs;
    return `
      <div>
        <input type="text" class="character__additional-field input" value="${m.name}"/>
        <button class="item hide-button" data-index="${m.name}">[delete]</button>
      </div>
    `;
  }
  domEvents = [
    { el: 'input', on: 'input',  call: this.updateItem.bind(this) },
    { el: '.delete-item', on: 'click',  call: this.deleteItem.bind(this) },
  ];
  inputReference = new Reference<HTMLInputElement>(this, 'input');
  afterInit() {
    const input = this.inputReference.get();
    this.model.on('change name', (payload: unknown) => {
      const model = <ItemModel>payload;
      if (input) {
        input.value = model.attrs.name;
      }
    });
  }
  updateItem(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.trigger('update-item', {
      name: target.value,
      id: this.model.getId(),
    });
  }
  deleteItem(event: Event) {
    this.trigger('delete-item', this.model.getId());
  }
}
