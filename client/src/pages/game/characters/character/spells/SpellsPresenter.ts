import { Presenter } from '../../../../../utils/framework';
import { SpellsView } from './SpellsView';
import { client } from '../../../../../utils/client';
import { Spell, SpellModel } from '../../../../../entities/Spell';
import { CharacterModel } from '../../../../../entities/Character';

export class SpellsPresenter extends Presenter<CharacterModel, SpellsView> {
  model: CharacterModel;
  view: SpellsView;
  constructor(model: CharacterModel) {
    super();
    this.model = model;
    this.view = new SpellsView(this.model);
  }
  async beforeInit() {
    const spells = await client.service('spells').find({
      query: {
        characterId: this.model.getId(),
        $sort: {
          createdAt: 1,
        },
      },
    });
    this.model.attrs.spells.set(spells.map((s: Spell) => new SpellModel(s)));
  }
  async afterInit() {
    this.view.on('add-spell', async () => {
      const characterId = this.model.getId();
      await client.service('spells').create({
        characterId,
        name: '',
      });
    });
    this.view.on('update-spell', async (payload: unknown) => {
      const data = <{ id: string, name: string }>payload;
      await client.service('spells').patch(data.id, {
        name: data.name,
      });
    });
    this.view.on('delete-spell', async (payload: unknown) => {
      const spellId = <string>payload;
      await client.service('spells').remove(spellId);
    });

    client.service('spells').on('created', (spell: Spell) => {
      if (spell.characterId === this.model.getId()) {
        this.model.attrs.spells.add(new SpellModel(spell));
      }
    });
    client.service('spells').on('patched', (spell: Spell) => {
      if (spell.characterId === this.model.getId()) {
        const model = this.model.attrs.spells.get(spell._id);
        if (model) {
          model.set(spell);
        }
      }
    });
    client.service('spells').on('removed', (spell: Spell) => {
      if (spell.characterId === this.model.getId()) {
        this.model.attrs.spells.remove(spell._id);
      }
    });
  }
}
