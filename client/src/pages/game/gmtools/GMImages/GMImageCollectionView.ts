import { CollectionView, View, Collection, ALL_EVENTS } from '../../../../utils/framework';
import { GMImageView } from './GMImageView';
import { ImageModel } from '../../../../entities/Image';

export class GMImageCollectionView extends CollectionView<ImageModel, GMImageView, View> {
  constructor(collection: Collection<ImageModel>) {
    super(collection, GMImageView);
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
