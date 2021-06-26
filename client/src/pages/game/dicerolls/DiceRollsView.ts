import { Collection, CollectionView, ModelView, Reference, Region, View } from '../../../utils/framework';
import { DiceRollModel, DieRoll } from '../../../entities/DiceRoll';
import { GameModel } from '../GameModel';
import { InsertPosition } from '../../../utils/framework';
import './dicerolls.css';

function getRandomInteger(min: number, max: number) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

class RollView extends ModelView<DiceRollModel> {
  getHTML(): string {
    const isGameMaster = window.location.hostname === 'localhost';
    const m = this.model.attrs;
    return `
      <p>
        <b>
          ${
            m.player ? m.player.name : 'Someone'
          }
        </b>
        rolled:
        ${
          m.player.name == 'Game Master' ? `
            ${ isGameMaster ? `
              <br>
              ${ m.dice.map(die => `<i class="die df-d${die.die}-${die.value}"></i>`).join('') }
            ` : `
              something
            ` }
          ` : `
            <br>
            ${ m.dice.map(die => `<i class="die df-d${die.die}-${die.value}"></i>`).join('') }
          `
        }
      </p>
    `;
  }
}

class NoRollsView extends View {
  getHTML(): string {
    return `
      <p class="no-items-message">
        <i>No rolls were made</i>
      </p>
    `;
  }
}

class RollsView extends CollectionView<DiceRollModel, RollView, NoRollsView> {
  constructor(collection: Collection<DiceRollModel>) {
    super(collection, RollView, NoRollsView);
  }
  afterInit() {
    this.collection.on('add', async (payload: unknown) => {
      const model = <DiceRollModel>payload;
      this.addChildView(model, InsertPosition.Beginning);
    });
    this.collection.on('remove', (payload: unknown) => {
      const model = <DiceRollModel>payload;
      this.removeChildView(model.getId());
    });
  }
}

export class DiceRollsView extends ModelView<GameModel> {
  getHTML(): string {
    return `
      <div class="row">
        <div class="col-lg-6">
          <div class="card">
            <h1 class="h1">
              Dice
            </h1>
            <div class="bucket">
              <i class="die df-d4-4" data-die="4"></i>
              <i class="die df-d6-6" data-die="6"></i>
              <i class="die df-d8-8" data-die="8"></i>
              <i class="die df-d10-10" data-die="10"></i>
              <i class="die df-d12-12" data-die="12"></i>
              <i class="die df-d20-20" data-die="20"></i>
            </div>
            <p class="hand-title">
              Rolling:
            </p>
            <div class="hand">
              <p class="selectDiceMessage">
                Select dice to roll...
              </p>
            </div>
            <div class="dice-actions">
              <button class="diceroll-button button-secondary clear" disabled>
                Clear
              </button>
              <button class="diceroll-button button roll" disabled>
                Roll
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <h1 class="h1">
              Rolls
            </h1>
            <div class="rolls">

            </div>
          </div>
        </div>
      </div>
    `;
  }
  domEvents = [
    { el: '.bucket .die', on: 'click', call: this.handleDieClick.bind(this) },
    { el: '.clear', on: 'click', call: this.handleClear.bind(this) },
    { el: '.roll', on: 'click', call: this.handleRoll.bind(this) },
  ];
  diceToRoll: number[] = [];
  rollsRegion = new Region(this, '.rolls');
  selectDiceMessage = new Reference<HTMLElement>(this, '.selectDiceMessage');
  handReference = new Reference<HTMLElement>(this, '.hand');
  async afterInit() {
    this.rollsRegion.show(new RollsView(this.model.attrs.dicerolls))
  }
  handleDieClick(event: Event) {
    const target = <Element>event.target;
    const attrVal = target.getAttribute('data-die');
    if (!attrVal) {
      throw new Error('"data-die" attribute has no value')
    }
    const die = parseInt(attrVal);
    this.diceToRoll.push(die);
    const selectDiceMessage = <HTMLElement>this.selectDiceMessage.get();
    if (!selectDiceMessage) {
      throw new Error('An Element with dice message not found');
    }
    selectDiceMessage.style.display = 'none';
    if (this.el) {
      this.el.querySelectorAll('.diceroll-button').forEach(el => el.removeAttribute('disabled'));
    }
    const handEl = this.handReference.get();
    if (handEl) {
      handEl.insertAdjacentHTML('beforeend', `<i class="df-d${die}-${die}"></i>`)
    }
  }
  handleRoll() {
    const result: DieRoll[] = [];
    this.diceToRoll.forEach(die => {
      result.push({
        die,
        value: getRandomInteger(1, die),
      });
    });
    this.trigger('rolled', result);
    this.handleClear();
  }
  handleClear() {
    this.diceToRoll = [];
    const selectDiceMessage = this.selectDiceMessage.get();
    if (selectDiceMessage) {
      selectDiceMessage.style.display = 'block';
    }
    if (this.el) {
      this.el.querySelectorAll('.diceroll-button').forEach(el => el.setAttribute('disabled', 'disabled'));
    }
    const handRef = this.handReference.get();
    if (handRef) {
      handRef.querySelectorAll('i').forEach(el => el.remove());
    }
  }
}
