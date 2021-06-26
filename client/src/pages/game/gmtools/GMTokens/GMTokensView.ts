import { ModelView, Region, Reference } from '../../../../utils/framework';
import { GMTokenCollectionView } from './GMTokenCollectionView';
import { GameModel } from '../../GameModel';

export class GMTokensView extends ModelView<GameModel> {
  getHTML(): string {
    return `
      <div class="card">
        <h1 class="h1 toggler">
          GM: Tokens <span class="toggle-icon">▼</span>
        </h1>
        <div class="togglable">
          <div style="margin-bottom: 20px;">
            <p style="font-size: 12px; display: inline-block;">
              Search:
            </p>
            <input class="input" name="search" type="text" placeholder="filename.png" style="width: 100px;display: inline-block; font-size: 12px;" />
          </div>
          <div class="gm-tokens-list"></div>
          <div style="margin-top: -20px;"></div>
        </div>
      </div>
    `;
  }
  domEvents = [
    { el: 'input[name="search"]', on: 'input', call: this.applyFilter.bind(this) },
    { el: '.toggler', on: 'click', call: this.toggleBlock.bind(this) },
  ];
  imagesListRegion = new Region(this, '.gm-tokens-list');
  togglebleRef = new Reference<HTMLElement>(this, '.togglable');
  toggleIconRef = new Reference(this, '.toggle-icon');
  togglerRef = new Reference<HTMLElement>(this, '.toggler');
  collectionView?: GMTokenCollectionView;
  async afterInit() {
    const tokenCollectionView = new GMTokenCollectionView(this.model.attrs.tokens);
    tokenCollectionView.on('add-token', (data) => {
      this.trigger('add-token', data);
    });
    this.collectionView = tokenCollectionView;
    this.imagesListRegion.show(tokenCollectionView);
  }
  applyFilter(event: Event) {
    const target = <HTMLInputElement>event.target;
    const value = target.value;
    if (this.collectionView) {
      this.collectionView.search(value.toLowerCase())
    }
  }
  toggleBlock() {
    const togglable = this.togglebleRef.get();
    const toggleIcon = this.toggleIconRef.get();
    const toggler = this.togglerRef.get();
    if (togglable && toggleIcon && toggler) {
      const isVisible = togglable.style.display === 'block';
      if (isVisible) {
        togglable.style.display = 'none';
        toggleIcon.textContent = '▼';
        toggler.style.marginBottom = '0';
      } else {
        togglable.style.display = 'block';
        toggleIcon.textContent = '▲';
        toggler.style.marginBottom = '20px';
      }
    }
  }
}
