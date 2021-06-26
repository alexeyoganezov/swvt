import page from 'page';
import { Application } from './utils/framework';
import { CampaignsPresenter } from './pages/campaigns/CampaignsPresenter';
import { GamePresenter } from './pages/game/GamePresenter';

interface IRoute {
  path: string;
  action: (ctx: PageJS.Context) => Promise<void>
}

export class App extends Application {
  routes: IRoute[] = [
    {
      path: '/',
      action: this.initCampaigns.bind(this),
    },
    {
      path: '/game/:campaignId',
      action: this.initGame.bind(this),
    },
  ];
  async init() {
    this.routes.forEach(route => page(route.path, route.action));
    page.start({
      hashbang: true,
    });
  }
  async initCampaigns(): Promise<void> {
    await this.mainRegion.show(new CampaignsPresenter());
  }
  async initGame(ctx: PageJS.Context): Promise<void> {
    await this.mainRegion.show(new GamePresenter(ctx.params.campaignId));
  }
}

const app = new App('#root');
app.init();
