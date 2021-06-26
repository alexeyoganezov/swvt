import { ModelView, Region, Reference } from '../../../../utils/framework';
import { GMImageCollectionView } from './GMImageCollectionView';
import { GameModel } from '../../GameModel';

export class GMImagesView extends ModelView<GameModel> {
  getHTML(): string {
    return `
      <div class="card">
        <h1 class="h1 toggler">
          GM: Images <span class="toggle-icon">▼</span>
        </h1>
        <div class="togglable">
          <div style="margin-bottom: 20px;">
            <p style="font-size: 12px; display: inline-block;">
              Search:
            </p>
            <input class="input" name="search" type="text" placeholder="filename.jpg" style="width: 100px;display: inline-block; font-size: 12px;" />
          </div>
          <div class="gm-images-list"></div>
          <div style="margin-top: -20px;"></div>
        </div>
      </div>
    `;
  }
  domEvents = [
    { el: 'input[name="search"]', on: 'input', call: this.applyFilter.bind(this) },
    { el: '.toggler', on: 'click', call: this.toggleBlock.bind(this) },
  ];
  imagesListRegion = new Region(this, '.gm-images-list');
  togglebleRef = new Reference<HTMLElement>(this, '.togglable');
  toggleIconRef = new Reference(this, '.toggle-icon');
  togglerRef = new Reference<HTMLElement>(this, '.toggler');
  collectionView?: GMImageCollectionView;
  async afterInit() {
    const imageCollectionView = new GMImageCollectionView(this.model.attrs.images);
    imageCollectionView.on('add-image', (data) => {
      this.trigger('add-image', data);
    });
    this.collectionView = imageCollectionView;
    await this.imagesListRegion.show(imageCollectionView);
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
