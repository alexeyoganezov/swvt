import { ModelView, Region } from '../../utils/framework';
import { GameModel } from './GameModel';
import { TableImageCollectionView } from './table-images/TableImageCollectionView';
import { TableTokenCollectionView } from './table-tokens/TableTokenCollectionView';
import { DiceRollsView } from './dicerolls/DiceRollsView'
import { GMToolsPresenter } from './gmtools/GMToolsPresenter';
import { HeaderPresenter } from './header/HeaderPresenter';
import { FooterView } from './footer/FooterView';
import { ReferencePresenter } from './reference/ReferencePresenter';
import { CharactersPresenter } from './characters/CharactersPresenter';

export class GameView extends ModelView<GameModel> {
  getHTML(): string {
    return `
      <div>
        <div id="header"></div>
        <div class="table">
          <div id="images"></div>
          <div id="tokens"></div>
        </div>
        <div class="container">
          <div id="diceroller"></div>
          <div id="characters"></div>
          <div id="reference"></div>
          <div id="gm-tools"></div>
        </div>
        <div id="footer"></div>
      </div>
    `;
  }
  tokensRegion = new Region(this, '#tokens');
  imagesRegion = new Region(this, '#images');
  gmtoolsRegion = new Region(this, '#gm-tools');
  dicerollsRegion = new Region(this, '#diceroller');
  referenceRegion = new Region(this, '#reference');
  headerRegion = new Region(this, '#header');
  footerRegion = new Region(this, '#footer');
  charactersRegion = new Region(this, '#characters');
  async afterInit() {
    this.headerRegion.show(new HeaderPresenter(this.model));
    this.footerRegion.show(new FooterView());

    if (this.model.attrs.isGameMaster) {
      const presenter = new GMToolsPresenter(this.model);
      this.gmtoolsRegion.show(presenter);
    }

    const imagesView = new TableImageCollectionView(this.model.attrs.imageInstances);
    imagesView.on('image-move', (data) => {
      this.trigger('image-move', data);
    });
    imagesView.on('delete-image', (data) => {
      this.trigger('delete-image', data);
    });
    this.imagesRegion.show(imagesView);

    const tokensView = new TableTokenCollectionView(this.model.attrs.tokenInstances);
    tokensView.on('token-move', (data) => {
      this.trigger('token-move', data);
    });
    tokensView.on('delete-token', (data) => {
      this.trigger('delete-token', data);
    });
    this.tokensRegion.show(tokensView);

    const diceRollsView = new DiceRollsView(this.model);
    diceRollsView.on('rolled', (data) => {
      this.trigger('rolled', data);
    });
    this.dicerollsRegion.show(diceRollsView);

    this.referenceRegion.show(new ReferencePresenter());
    this.charactersRegion.show(new CharactersPresenter(this.model));
  }
}
