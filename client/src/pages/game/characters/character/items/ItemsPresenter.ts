import { Presenter } from '../../../../../utils/framework';
import { ItemsView } from './ItemsView';
import { client } from '../../../../../utils/client';
import { Item, ItemModel } from '../../../../../entities/Item';
import { CharacterModel } from '../../../../../entities/Character';

export class ItemsPresenter extends Presenter<CharacterModel, ItemsView> {
  model: CharacterModel;
  view: ItemsView;
  constructor(model: CharacterModel) {
    super();
    this.model = model;
    this.view = new ItemsView(this.model);
  }
  async beforeInit() {
    const items = await client.service('items').find({
      query: {
        characterId: this.model.getId(),
        $sort: {
          createdAt: 1,
        },
      },
    });
    this.model.attrs.items.set(items.map((i: Item) => new ItemModel(i)));
  }
  async afterInit() {
    this.view.on('add-item', async () => {
      const characterId = this.model.getId();
      await client.service('items').create({
        characterId,
        name: '',
      });
    });
    this.view.on('update-item', async (payload: unknown) => {
      const data = <{ id: string, name: string }>payload;
      await client.service('items').patch(data.id, {
        name: data.name,
      });
    });
    this.view.on('delete-item', async (payload: unknown) => {
      const itemId = <string>payload;
      await client.service('items').remove(itemId);
    });

    client.service('items').on('created', (item: Item) => {
      if (item.characterId === this.model.getId()) {
        this.model.attrs.items.add(new ItemModel(item));
      }
    });
    client.service('items').on('patched', (item: Item) => {
      if (item.characterId === this.model.getId()) {
        const model = this.model.attrs.items.get(item._id);
        if (model) {
          model.set(item);
        }
      }
    });
    client.service('items').on('removed', (item: Item) => {
      if (item.characterId === this.model.getId()) {
        this.model.attrs.items.remove(item._id);
      }
    });
  }
}
