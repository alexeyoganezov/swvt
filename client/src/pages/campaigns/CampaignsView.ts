import page from 'page';
import { ModelView, Reference } from '../../utils/framework';
import { CampaignsModel } from './CampaignsModel'
import type { INewCampaignFormData } from './CampaignsPresenter';
import './campaigns.css';

export class CampaignsView extends ModelView<CampaignsModel> {
  getHTML(): string {
    const m = this.model.attrs;
    return `
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="card row">
              ${
                m.isGameMaster ? `
                  <div class="col-lg-4">
                    <h1 class="h1">
                      Campaigns
                    </h1>
                    ${
                      m.campaigns.models.length == 0 ? `
                        <p class="no-items-message">
                          No existing campaigns
                        </p>
                      ` : ''
                    }
                    ${
                      m.campaigns.models.map(c => `
                        <a href="/game/${c.attrs._id}" class="sidebar-link">
                          ${c.attrs.name}
                        </a>
                      `).join('')
                    }
                  </div>
                  <div class="col-lg-8">
                    <h1 class="h1">
                      Create new campaign
                    </h1>
                    <form>
                      <div class="form-control">
                        <p class="label">Name:</p>
                        <input class="input" name="name" placeholder="Blackmoor with friends" type="text" />
                      </div>
                      <div class="form-control">
                        <p class="label">Player names:</p>
                        <div class="row">
                          <div class="col-lg-6">
                            <input class="input" name="player1" placeholder="Player #1" type="text" />
                          </div>
                          <div class="col-lg-6">
                            <input class="input" name="player2" placeholder="Player #2" type="text" />
                          </div>
                          <div class="col-lg-6">
                            <input class="input" name="player3" placeholder="Player #3" type="text" />
                          </div>
                          <div class="col-lg-6">
                            <input class="input" name="player4" placeholder="Player #4" type="text" />
                          </div>
                          <div class="col-lg-6">
                            <input class="input" name="player5" placeholder="Player #5" type="text" />
                          </div>
                          <div class="col-lg-6">
                            <input class="input" name="player6" placeholder="Player #6" type="text" />
                          </div>
                          <div class="col-lg-6">
                            <input class="input" name="player7" placeholder="Player #7" type="text" />
                          </div>
                          <div class="col-lg-6">
                            <input class="input" name="player8" placeholder="Player #8" type="text" />
                          </div>
                        </div>
                      </div>
                      <div style="text-align: right;">
                        <button class="button">
                          Create
                        </button>
                      </div>
                    </form>
                  </div>
                ` : `
                  <p class="redirect-message">
                    Wait for a redirect. If it's not happening try to reload the page.
                  </p>
                `
              }
            </div>
          </div>
      </div>
    `;
  }
  domEvents = [
    { el: 'form', on: 'submit',  call: this.onFormSubmit.bind(this) },
    { el: 'a', on: 'click',  call: this.openGame.bind(this) },
  ];
  nameInput = new Reference<HTMLInputElement>(this, 'input[name="name"]');
  playerInput1 = new Reference<HTMLInputElement>(this, 'input[name="player1"]');
  playerInput2 = new Reference<HTMLInputElement>(this, 'input[name="player2"]');
  playerInput3 = new Reference<HTMLInputElement>(this, 'input[name="player3"]');
  playerInput4 = new Reference<HTMLInputElement>(this, 'input[name="player4"]');
  playerInput5 = new Reference<HTMLInputElement>(this, 'input[name="player5"]');
  playerInput6 = new Reference<HTMLInputElement>(this, 'input[name="player6"]');
  playerInput7 = new Reference<HTMLInputElement>(this, 'input[name="player7"]');
  playerInput8 = new Reference<HTMLInputElement>(this, 'input[name="player8"]');
  onFormSubmit(event: Event) {
    event.preventDefault();
    const data: INewCampaignFormData = {
      campaignName: '',
      players: [],
    };
    const nameInput = this.nameInput.get();
    if (nameInput) {
      data.campaignName = nameInput.value;
    }
    const playerInput1 = this.playerInput1.get();
    if (playerInput1 && playerInput1.value) {
      data.players.push(playerInput1.value);
    }
    const playerInput2 = this.playerInput2.get();
    if (playerInput2 && playerInput2.value) {
      data.players.push(playerInput2.value);
    }
    const playerInput3 = this.playerInput3.get();
    if (playerInput3 && playerInput3.value) {
      data.players.push(playerInput3.value);
    }
    const playerInput4 = this.playerInput4.get();
    if (playerInput4 && playerInput4.value) {
      data.players.push(playerInput4.value);
    }
    const playerInput5 = this.playerInput5.get();
    if (playerInput5 && playerInput5.value) {
      data.players.push(playerInput5.value);
    }
    const playerInput6 = this.playerInput6.get();
    if (playerInput6 && playerInput6.value) {
      data.players.push(playerInput6.value);
    }
    const playerInput7 = this.playerInput7.get();
    if (playerInput7 && playerInput7.value) {
      data.players.push(playerInput7.value);
    }
    const playerInput8 = this.playerInput8.get();
    if (playerInput8 && playerInput8.value) {
      data.players.push(playerInput8.value);
    }
    this.trigger('form-submit', data);
  }
  openGame(event: Event) {
    event.preventDefault();
    const el = event.target as HTMLInputElement;
    const url = el.getAttribute('href');
    if (url) {
      page(url);
    }
  }
}

