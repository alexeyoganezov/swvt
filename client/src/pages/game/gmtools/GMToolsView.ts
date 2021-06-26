import { ModelView, Region } from '../../../utils/framework';
import { GMImagesView } from './GMImages/GMImagesView';
import { GMTokensView } from './GMTokens/GMTokensView';
import { GMSettingsView } from './GMSetings/GMSettingsView';
import { GameModel } from '../GameModel';

export class GMToolsView extends ModelView<GameModel> {
  getHTML(): string {
    return `
      <div class="container">
        <div class="gm-images"></div>
        <div class="gm-tokens"></div>
        <div class="gm-settings"></div>
      </div>
    `;
  }
  imagesRegion = new Region(this, '.gm-images');
  tokensRegion = new Region(this, '.gm-tokens');
  settingsRegion = new Region(this, '.gm-settings');
  async afterInit() {
    const imagesView = new GMImagesView(this.model);
    imagesView.on('add-image', (data) => {
      this.trigger('add-image', data);
    });
    this.imagesRegion.show(imagesView);

    const tokensView = new GMTokensView(this.model);
    tokensView.on('add-token', (data) => {
      this.trigger('add-token', data);
    });
    this.tokensRegion.show(tokensView);

    const settingsView = new GMSettingsView(this.model);
    settingsView.on('delete-game', () => {
      this.trigger('delete-game');
    });
    settingsView.on('rename-game', (data) => {
      this.trigger('rename-game', data);
    });
    this.settingsRegion.show(settingsView);
  }
}
