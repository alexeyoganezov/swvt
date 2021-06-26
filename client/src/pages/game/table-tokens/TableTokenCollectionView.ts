import { ALL_EVENTS, CollectionView, View } from '../../../utils/framework';
import { TableTokenView } from './TableTokenView';
import { TokenInstanceModel, TokenInstanceCollection } from '../../../entities/TokenInstance';

export class TableTokenCollectionView extends CollectionView<TokenInstanceModel, TableTokenView, View> {
  constructor(collection: TokenInstanceCollection) {
    super(collection, TableTokenView);
  }
  collectionEvents = [
    { on: 'add', call: this.onAdd.bind(this) },
    { on: 'remove', call: this.onRemove.bind(this) },
  ];
  viewEvents = [
    { on: ALL_EVENTS, call: this.retrigger },
  ];
  onAdd(payload: unknown) {
    const model = <TokenInstanceModel>payload;
    this.addChildView(model);
  }
  onRemove(payload: unknown) {
    const model = <TokenInstanceModel>payload;
    this.removeChildView(model.getId());
  }
}
