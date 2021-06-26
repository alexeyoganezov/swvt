import { ModelView } from '../../../utils/framework';
import { GameModel } from '../GameModel';
import './header.css';

export class HeaderView extends ModelView<GameModel> {
  getHTML(): string {
    const selectedPlayerId = sessionStorage.getItem('playerId');
    const m = this.model.attrs;
    return `
      <div class="header">
        <div class="container">
          <div class="row">
            <div class="header__title col-lg-4">
              <span>
                SWVT
              </span>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div class="col-lg-4">
              ${
                m.isGameMaster ? `
                  Game link:
                  <a href="${m.campaign.attrs.host}" class="link" target="_blank">
                    ${m.campaign.attrs.host}
                  </a>
                ` : ''
              }
            </div>
            <div class="header__player-select-container col-lg-4">
              Player:
              ${
                m.isGameMaster ? `
                  <div class="select">
                  <select class="header__player-select" disabled>
                    <option value="">Game Master</option>
                  </select>
                </div>
                ` : `
                <div class="select">
                  <select class="header__player-select">
                    <option value="">Not selected</option>
                    ${
                      m.players.models.map(player => `
                        <option value="${player.attrs._id}" ${ player.attrs._id == selectedPlayerId ? 'selected' : '' }>
                          ${player.attrs.name}
                        </option>
                      `)
                    }
                  </select>
                </div>
                `
              }
            </div>
          </div>
        </div>
      </div>
    `;
  }
  domEvents = [
    { el: '.header__player-select', on: 'change', call: this.handlePlayerSelect.bind(this) },
  ];
  handlePlayerSelect(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.trigger('player-selected', target.value);
  }
}
