import { Presenter } from '../../../../../utils/framework';
import { SpecialAbilitiesView } from './SpecialAbilitiesView';
import { client } from '../../../../../utils/client';
import { SpecialAbility, SpecialAbilityModel } from '../../../../../entities/SpecialAbility';
import { CharacterModel } from '../../../../../entities/Character';

export class SpecialAbilitiesPresenter extends Presenter<CharacterModel, SpecialAbilitiesView> {
  model: CharacterModel;
  view: SpecialAbilitiesView;
  constructor(model: CharacterModel) {
    super();
    this.model = model;
    this.view = new SpecialAbilitiesView(this.model);
  }
  async beforeInit() {
    const abilities = await client.service('abilities').find({
      query: {
        characterId: this.model.getId(),
        $sort: {
          createdAt: 1,
        },
      },
    });
    this.model.attrs.specialAbilities.set(abilities.map((a: SpecialAbility) => new SpecialAbilityModel(a)));
  }
  async afterInit() {
    this.view.on('add-ability', async () => {
      const characterId = this.model.getId();
      await client.service('abilities').create({
        characterId,
        name: '',
      });
    });
    this.view.on('update-ability', async (payload: unknown) => {
      const data = <{ id: string, name: string }>payload;
      await client.service('abilities').patch(data.id, {
        name: data.name,
      });
    });
    this.view.on('delete-ability', async (payload: unknown) => {
      const abilityId = <string>payload;
      await client.service('abilities').remove(abilityId);
    });

    client.service('abilities').on('created', (ability: SpecialAbility) => {
      if (ability.characterId === this.model.getId()) {
        this.model.attrs.specialAbilities.add(new SpecialAbilityModel(ability));
      }
    });
    client.service('abilities').on('patched', (ability: SpecialAbility) => {
      if (ability.characterId === this.model.getId()) {
        const model = this.model.attrs.specialAbilities.get(ability._id);
        if (model) {
          model.set(ability);
        }
      }
    });
    client.service('abilities').on('removed', (ability: SpecialAbility) => {
      if (ability.characterId === this.model.getId()) {
        this.model.attrs.specialAbilities.remove(ability._id);
      }
    });
  }
}
