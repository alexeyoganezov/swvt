import { ModelView } from '../../../../utils/framework';
import { ImageModel } from '../../../../entities/Image';

export class GMImageView extends ModelView<ImageModel> {
  getHTML(): string {
    const m = this.model.attrs;
    return `
      <div class="image-item col-lg-2">
        <div class="image-container">
          <a href="${m.url}" target="_blank"><img style="max-width: 100px;" src="${m.url}" /></a>
        </div>
        <div style="font-size: 0;">
          <p class="filename" style="font-size: 12px">
            ${m.filename}
          </p>
        </div>
        <button class="button-secondary toggle-image-visibility">
          Show
        </button>
      </div>
    `;
  }
  domEvents = [
    { el: '.toggle-image-visibility', on: 'click', call: this.toggleVisibility.bind(this) },
  ];
  afterInit() {
    this.model.on('change', (data) => {
      this.init();
    });
  }
  toggleVisibility() {
    this.trigger('add-image', this.model.getId());
  }
  hide() {
    if (this.el && this.el instanceof HTMLElement) {
      this.el.style.display = 'none';
    }
  }
  show() {
    if (this.el && this.el instanceof HTMLElement) {
      this.el.style.display = 'block';
    }
  }
}
