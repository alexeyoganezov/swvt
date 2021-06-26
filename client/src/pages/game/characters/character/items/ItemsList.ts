import { CollectionView, View, ALL_EVENTS } from '../../../../../utils/framework';
import { ItemView } from './ItemView';
import { ItemCollection, ItemModel } from '../../../../../entities/Item';

export class ItemsList extends CollectionView<ItemModel, ItemView, View> {
  characterId: string;
  constructor(collection: ItemCollection, characterId: string) {
    super(collection, ItemView);
    this.characterId = characterId;
  }
  viewEvents = [
    { on: ALL_EVENTS, call: this.retrigger.bind(this) },
  ];
  afterInit() {
    this.collection.on('add', (payload: unknown) => {
      const model = <ItemModel>payload;
      this.addChildView(model);
    });
    this.collection.on('remove', (payload: unknown) => {
      const model = <ItemModel>payload;
      this.removeChildView(model.getId());
    });
  }
}
