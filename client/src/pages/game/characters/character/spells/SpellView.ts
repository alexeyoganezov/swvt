import { ModelView, Reference } from '../../../../../utils/framework';
import { SpellModel } from '../../../../../entities/Spell';

export class SpellView extends ModelView<SpellModel> {
  getHTML(): string {
    const m = this.model.attrs;
    return `
      <div>
        <input type="text" class="character__additional-field input" value="${m.name}"/>
        <button class="delete-spell hide-button" data-index="${m.name}">[delete]</button>
      </div>
    `;
  }
  domEvents = [
    { el: 'input', on: 'input',  call: this.updateSpell.bind(this) },
    { el: '.delete-spell', on: 'click',  call: this.deleteSpell.bind(this) },
  ];
  inputReference = new Reference<HTMLInputElement>(this, 'input');
  afterInit() {
    const input = this.inputReference.get();
    this.model.on('change name', (payload: unknown) => {
      const model = <SpellModel>payload;
      if (input) {
        input.value = model.attrs.name;
      }
    });
  }
  updateSpell(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.trigger('update-spell', {
      name: target.value,
      id: this.model.getId(),
    });
  }
  deleteSpell(event: Event) {
    this.trigger('delete-spell', this.model.getId());
  }
}
