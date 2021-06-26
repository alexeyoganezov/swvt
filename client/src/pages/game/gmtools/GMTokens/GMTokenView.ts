import { ModelView } from '../../../../utils/framework';
import { TokenModel } from '../../../../entities/Token';

export class GMTokenView extends ModelView<TokenModel> {
  getHTML(): string {
    const m = this.model.attrs;
    return `
      <div class="image-item col-lg-2">
        <div class="token-container">
          <a href="${m.url}" target="_blank"><img style="max-width: 100px;" src="${m.url}" /></a>
        </div>
        <div style="font-size: 0;">
          <p class="filename">
            ${m.filename}
          </p>
        </div>
        <input class="input label-input" placeholder="Label" type="text" />
        <button class="button-secondary add-token">
          Add
        </button>
      </div>
    `;
  }
  domEvents = [
    { el: '.add-token', on: 'click', call: this.addToken.bind(this) },
  ];
  afterInit() {
    this.model.on('change', (data) => {
      this.init();
    });
  }
  addToken() {
    if (!this.el) return;
    const input = <HTMLInputElement>this.el.querySelector('.label-input');
    const label = input.value;
    input.value = '';
    this.trigger('add-token', {
      tokenId: this.model.getId(),
      label,
    });
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
