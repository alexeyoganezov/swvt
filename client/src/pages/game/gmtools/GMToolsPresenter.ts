import page from 'page';
import { Presenter } from '../../../utils/framework';
import { GMToolsView } from './GMToolsView';
import { client } from '../../../utils/client';
import { GameModel } from '../GameModel';
import { Image, ImageModel } from '../../../entities/Image';
import { Token, TokenModel } from '../../../entities/Token';

export class GMToolsPresenter extends Presenter<GameModel, GMToolsView> {
  model: GameModel;
  view: GMToolsView;
  constructor(model: GameModel) {
    super();
    this.model = model;
    this.view = new GMToolsView(this.model);
  }
  async beforeInit() {
    const images = await client.service('images').find({
      query: {
        $sort: {
          path: 1,
        },
      },
    });
    const tokens = await client.service('tokens').find({
      query: {
        $sort: {
          path: 1,
        },
      },
    });
    const imageModels = images.map((m: Image) => new ImageModel(m));
    const tokenModels = tokens.map((t: Token) => new TokenModel(t));
    this.model.attrs.images.set(imageModels);
    this.model.attrs.tokens.set(tokenModels);
  }
  async afterInit() {
    this.view.on('add-image', (payload: unknown) => {
      const imageId = <string>payload;
      const campaign = this.model.attrs.campaign;
      const image = this.model.attrs.images.get(imageId);
      if (image) {
        client.service('image-instances').create({
          url: image.attrs.url,
          offsetX: 0,
          offsetY: 0,
          campaignId: campaign.getId(),
          visible: true,
        });
      }
    });
    this.view.on('add-token', (payload: unknown) => {
      const data = <{ tokenId: string, label: string }>payload;
      const campaign = this.model.attrs.campaign;
      const token = this.model.attrs.tokens.get(data.tokenId);
      if (token) {
        client.service('token-instances').create({
          url: token.attrs.url,
          offsetX: 0,
          offsetY: 0,
          label: data.label,
          campaignId: campaign.getId(),
          visible: true,
        });
      }
    });
    this.view.on('delete-game', () => {
      const campaign = this.model.attrs.campaign;
      client.service('campaigns').remove(campaign.getId());
      page('/');
    });
    this.view.on('rename-game', (payload: unknown) => {
      const name = <string>payload;
      const campaign = this.model.attrs.campaign;
      client.service('campaigns').patch(campaign.getId(), {
        name,
      });
    });
  }
}
