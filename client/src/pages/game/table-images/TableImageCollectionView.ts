import { CollectionView, View, ALL_EVENTS } from '../../../utils/framework';
import { TableImageView } from './TableImageView';
import { ImageInstanceCollection, ImageInstanceModel } from '../../../entities/imageInstance';

export class TableImageCollectionView extends CollectionView<ImageInstanceModel, TableImageView, View> {
  constructor(collection: ImageInstanceCollection) {
    super(collection, TableImageView);
  }
  collectionEvents = [
    { on: 'add', call: this.onAdd.bind(this) },
    { on: 'remove', call: this.onRemove.bind(this) },
  ];
  viewEvents = [
    { on: ALL_EVENTS, call: this.retrigger },
  ];
  onAdd(payload: unknown) {
    const model = <ImageInstanceModel>payload;
    this.addChildView(model);
  }
  onRemove(payload: unknown) {
    const model = <ImageInstanceModel>payload;
    this.removeChildView(model.getId());
  }
}
