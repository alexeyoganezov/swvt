import { ModelView } from '../../../utils/framework';
import { TokenInstanceModel } from '../../../entities/TokenInstance';

let el: HTMLElement | null;
let elSourceLeft: number;
let elSourceTop: number;
let clickX: number;
let clickY: number;
let offsetX: number;
let offsetY: number;

const moveEl = (e: Event) => {
  const event = <MouseEvent>e;
  offsetX = event.screenX - clickX;
  offsetY = event.screenY - clickY;
  if (el) {
    el.style.left = `${elSourceLeft + offsetX}px`;
    el.style.top = `${elSourceTop + offsetY}px`;
  }
};

export class TableTokenView extends ModelView<TokenInstanceModel> {
  getHTML(): string {
    const m = this.model.attrs;
    return `
      <div data-id="${m._id}" style="top: ${m.offsetY}px; left: ${m.offsetX}px; display: inline-block;" class="token smooth token-${m._id}">
        ${
          m.label ? `
            <span class="token-label" style="font-size: 12px; position: absolute; top: 0; right: 100%;">
              ${m.label}
            </span>` : ''
        }
        <button class="hide-button delete-token remove-icon" data-id="${m._id}">[x]</button>
        <img draggable="false" src="${m.url}" data-id="${m._id}" />
      </div>
    `;
  }
  domEvents = [
    { el: 'img', on: 'mousedown',  call: this.startTokenDrag.bind(this) },
    { el: 'img', on: 'mouseup',  call: this.stopTokenDrag.bind(this) },
    { el: '.delete-token', on: 'click',  call: this.deleteToken.bind(this) },
  ];
  modelEvents = [
    { on: 'change', call: this.onModelChange.bind(this) }
  ];
  table: Element | null = null;
  onModelChange(payload: unknown) {
    const model = <TokenInstanceModel>payload;
    if (this.el) {
      el = <HTMLElement>this.el;
      el.style.left = `${model.attrs.offsetX}px`;
      el.style.top = `${model.attrs.offsetY}px`;
    }
  }
  afterInit() {
    this.table = document.querySelector('.table');
  }
  startTokenDrag(e: Event) {
    const event = <MouseEvent>e;
    event.preventDefault();
    if (this.el) {
      this.el.classList.remove('smooth');
    }
    clickX = event.screenX;
    clickY = event.screenY;
    const target = <Element>event.target;
    el = target.parentElement;
    if (el) {
      elSourceLeft = parseInt(el.style.left);
      elSourceTop = parseInt(el.style.top);
    }
    if (!this.table) {
      this.table = document.querySelector('.table');
    }
    if (this.table) {
      this.table.addEventListener('mousemove', moveEl);
    }
  }
  stopTokenDrag() {
    if (this.table) {
      this.table.removeEventListener('mousemove', moveEl)
    }
    if (this.el) {
      this.el.classList.add('smooth');
    }
    if (el) {
      this.trigger('token-move', {
        _id: el.getAttribute('data-id'),
        offsetX: parseInt(el.style.left),
        offsetY: parseInt(el.style.top),
      });
    }
  }
  deleteToken(event: Event) {
    const target = <Element>event.target;
    const tokenId = target.getAttribute('data-id');
    this.trigger('delete-token', tokenId);
  }
}
