import { Presenter } from '../../../utils/framework';
import { HeaderView } from './HeaderView';
import { GameModel } from '../GameModel'

export class HeaderPresenter extends Presenter<GameModel, HeaderView> {
  model: GameModel;
  view: HeaderView;
  constructor(model: GameModel) {
    super();
    this.model = model;
    this.view = new HeaderView(this.model);
  }
  async afterInit() {
    this.view.on('player-selected', async (data) => {
      const playerId = <string>data;
      sessionStorage.setItem('playerId', playerId);
    });
  }
}
