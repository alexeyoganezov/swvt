import { Presenter } from '../../../utils/framework';
import { ReferenceView } from './ReferenceView';
import { ReferenceModel } from './ReferenceModel';

export class ReferencePresenter extends Presenter<ReferenceModel, ReferenceView> {
  model = new ReferenceModel();
  view = new ReferenceView(this.model);
}
