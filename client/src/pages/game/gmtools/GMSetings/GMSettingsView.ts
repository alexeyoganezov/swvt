import { Reference, ModelView } from '../../../../utils/framework';
import { GameModel } from '../../GameModel';

export class GMSettingsView extends ModelView<GameModel> {
  getHTML(): string {
    const m = this.model.attrs;
    return `
      <div class="card">
        <h1 class="h1 toggler">
          GM: Settings <span class="toggle-icon">▼</span>
        </h1>
        <div class="togglable row">
          <div class="col-lg-4">
            <p style="font-size: 12px; display: inline-block;">
              Campaign name:
            </p>
            <input class="input" name="name" type="text" value="${m.campaign.attrs.name}" style="width: 100px;display: inline-block; font-size: 12px;" />
          </div>
          <div class="col-lg-4">
            <button class="button-secondary delete-game">
              Delete game
            </button>
          </div>
        </div>
      </div>
    `;
  }
  domEvents = [
    { el: '.toggler', on: 'click', call: this.toggleBlock.bind(this) },
    { el: '.delete-game', on: 'click', call: this.deleteGame.bind(this) },
    { el: 'input[name="name"]', on: 'input', call: this.renameGame.bind(this) },
  ];
  togglebleRef = new Reference<HTMLElement>(this, '.togglable');
  toggleIconRef = new Reference(this, '.toggle-icon');
  togglerRef = new Reference<HTMLElement>(this, '.toggler');
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
  deleteGame() {
    this.trigger('delete-game');
  }
  renameGame(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.trigger('rename-game', target.value);
  }
}
