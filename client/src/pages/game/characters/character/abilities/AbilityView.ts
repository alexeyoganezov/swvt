import { ModelView, Reference } from '../../../../../utils/framework';
import { SpecialAbilityModel } from '../../../../../entities/SpecialAbility';

export class AbilityView extends ModelView<SpecialAbilityModel> {
  getHTML(): string {
    const m = this.model.attrs;
    return `
      <div>
        <input type="text" class="character__additional-field input specialAbilities" value="${m.name}"/>
        <button class="delete-ability hide-button" data-index="${m.name}">[delete]</button>
      </div>
    `;
  }
  domEvents = [
    { el: 'input', on: 'input',  call: this.updateList.bind(this) },
    { el: '.delete-ability', on: 'click',  call: this.deleteAbility.bind(this) },
  ];
  inputReference = new Reference<HTMLInputElement>(this, 'input');
  afterInit() {
    const input = this.inputReference.get();
    this.model.on('change name', (payload: unknown) => {
      const model = <SpecialAbilityModel>payload;
      if (input) {
        input.value = model.attrs.name;
      }
    });
  }
  updateList(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.trigger('update-ability', {
      name: target.value,
      id: this.model.getId(),
    });
  }
  deleteAbility(event: Event) {
    this.trigger('delete-ability', this.model.getId());
  }
}
