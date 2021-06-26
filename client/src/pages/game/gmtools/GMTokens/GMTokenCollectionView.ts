import { CollectionView, View, Collection, ALL_EVENTS } from '../../../../utils/framework';
import { TokenModel } from '../../../../entities/Token';
import { GMTokenView } from './GMTokenView';

export class GMTokenCollectionView extends CollectionView<TokenModel, GMTokenView, View> {
  constructor(collection: Collection<TokenModel>) {
    super(collection, GMTokenView);
  }
  getHTML(): string {
    return '<div class="row"></div>';
  }
  viewEvents = [
    { on: ALL_EVENTS, call: this.retrigger },
  ];
  search(key: string) {
    this.children.forEach(view => {
      if (view.model.attrs.path.toLowerCase().includes(key)) {
        view.show();
      } else {
        view.hide();
      }
    });
  }
}
