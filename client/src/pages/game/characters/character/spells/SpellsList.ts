import { CollectionView, View, ALL_EVENTS } from '../../../../../utils/framework';
import { SpellView } from './SpellView';
import { SpellCollection, SpellModel } from '../../../../../entities/Spell';

export class SpellsList extends CollectionView<SpellModel, SpellView, View> {
  characterId: string;
  constructor(collection: SpellCollection, characterId: string) {
    super(collection, SpellView);
    this.characterId = characterId;
  }
  viewEvents = [
    { on: ALL_EVENTS, call: this.retrigger.bind(this) },
  ];
  afterInit() {
    this.collection.on('add', (payload: unknown) => {
      const model = <SpellModel>payload;
      this.addChildView(model);
    });
    this.collection.on('remove', (payload: unknown) => {
      const model = <SpellModel>payload;
      this.removeChildView(model.getId());
    });
  }
}
