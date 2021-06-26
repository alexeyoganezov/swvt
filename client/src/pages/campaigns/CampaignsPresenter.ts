import page from 'page';
import { Presenter } from '../../utils/framework';
import { client } from '../../utils/client';
import { Campaign, CampaignModel, CampaignCollection } from '../../entities/Campaign';
import { CampaignsView } from './CampaignsView';
import { CampaignsModel } from './CampaignsModel';

export interface INewCampaignFormData {
  campaignName: string,
  players: string[],
}

export class CampaignsPresenter extends Presenter<CampaignsModel, CampaignsView> {
  model = new CampaignsModel({
    isGameMaster: window.location.hostname === 'localhost',
    campaigns: new CampaignCollection(),
  });
  view = new CampaignsView(this.model);
  viewEvents = [
    {
      on: 'form-submit',
      call: this.handleFormSubmit.bind(this),
    }
  ];
  async beforeInit() {
    if (this.model.attrs.isGameMaster) {
      const campaigns = await client.service('campaigns').find({
        query: {
          $sort: {
            createdAt: -1
          },
        },
      });
      const rows = <Campaign[]>campaigns;
      this.model.attrs.campaigns.set(rows.map((c) => new CampaignModel(c)));
    } else {
      const campaigns = await client.service('campaigns').find({
        query: {
          isActive: true,
          $sort: {
            updatedAt: -1,
          },
          $limit: 1,
        },
      });
      const campaign = campaigns[0];
      if (campaign) {
        window.location.replace(campaign.url);
        window.location.reload();
      }
    }
  }
  async afterInit() {
    client.service('campaigns').on('created', (campaign: Campaign) => {
      this.model.attrs.campaigns.add(new CampaignModel(campaign));
    });
  }
  async handleFormSubmit(payload: unknown) {
    const data = <INewCampaignFormData>payload;
    const campaign = await client.service('campaigns').create({
      name: data.campaignName,
    });
    const players = data.players.map(async player => {
      return await client.service('players').create({
        name: player,
        campaignId: campaign._id
      });
    });
    await Promise.all(players);
    page(`/game/${campaign._id}`);
  }
}
