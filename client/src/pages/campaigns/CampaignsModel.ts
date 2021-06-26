import { Model } from '../../utils/framework';
import { CampaignCollection } from '../../entities/Campaign';

type CampaignsPageData = {
  isGameMaster: boolean,
  campaigns: CampaignCollection,
};

export class CampaignsModel extends Model<CampaignsPageData> {

}
