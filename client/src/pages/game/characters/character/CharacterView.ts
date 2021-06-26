import { ModelView, Region } from '../../../../utils/framework';
import { CharacterModel } from '../../../../entities/Character';
import { SpecialAbilitiesPresenter } from './abilities/SpecialAbilitiePresenter';
import { SpellsPresenter } from './spells/SpellsPresenter';
import { ItemsPresenter } from './items/ItemsPresenter';

export class CharacterView extends ModelView<CharacterModel> {
  getHTML(): string {
    const m = this.model.attrs;
    return `
      <div id="charsheet-${m._id}" class="charsheet">
        <div class="core row">
          <div class="col-lg-3">
            <div class="attributes">
              <div class="attributes__item">
                <label class="attributes__label">
                  Strength
                </label>
                <input class="attributes__input" type="text" name="strength"  value="${m.strength}"/>
              </div>
              <div class="attributes__item">
                <label class="attributes__label">
                  Dexterity
                </label>
                <input class="attributes__input" type="text" name="dexterity" value="${m.dexterity}"/>
              </div>
              <div class="attributes__item">
                <label class="attributes__label">
                  Constitution
                </label>
                <input class="attributes__input" type="text" name="constitution" value="${m.constitution}"/>
              </div>
              <div class="attributes__item">
                <label class="attributes__label">
                  Intelligence
                </label>
                <input class="attributes__input" type="text" name="intelligence" value="${m.intelligence}"/>
              </div>
              <div class="attributes__item">
                <label class="attributes__label">
                  Wisdom
                </label>
                <input class="attributes__input" type="text" name="wisdom" value="${m.wisdom}"/>
              </div>
              <div class="attributes__item">
                <label class="attributes__label">
                  Charisma
                </label>
                <input class="attributes__input" type="text" name="charisma" value="${m.charisma}"/>
              </div>
            </div>
          </div>
          <div class="charsheet__fields col-lg-9">
            <div class="row">
              <div class="col-lg-6">
                <p>
                  Player: <input style="width: 259px;" class="charsheet__input input player-input" type="text" name="player" value="${m.player}"/>
                </p>
              </div>
              <div class="col-lg-6">
                <p>
                  Character name: <input style="width: 195px;" class="charsheet__input input name-input" type="text" name="name" value="${m.name}"/>
                </p>
              </div>
              <div class="col-lg-4">
                <p>
                  Class: <input style="width: 152px;" class="charsheet__input input class-input" type="text" name="class" value="${m.class}"/>
                </p>
              </div>
              <div class="col-lg-4">
                <p>
                  Race: <input style="width: 155px;" class="charsheet__input input race-input" type="text" name="race" value="${m.race}"/>
                </p>
              </div>
              <div class="col-lg-4">
                <p>
                  Gender: <input style="width: 135px;" class="charsheet__input input gender-input" type="text" name="gender" value="${m.gender}"/>
                </p>
              </div>
              <div class="col-lg-4">
                <p>
                Alignment: <input style="width: 115px;" class="charsheet__input input alignment-input" type="text" name="alignment" value="${m.alignment}"/>
              </p>
              </div>
              <div class="col-lg-4">
                <p>
                  Deity: <input style="width: 152px;" class="charsheet__input input deity-input" type="text" name="deity" value="${m.deity}"/>
                </p>
              </div>
              <div class="col-lg-4">
                <p>
                  Age: <input style="width: 163px;" class="charsheet__input input age-input" type="text" name="age" value="${m.age}"/>
                </p>
              </div>
              <div class="col-lg-3">
                <p>
                  Level: <input style="width: 98px;" class="charsheet__input input level-input" type="text" name="level" value="${m.level}"/>
                </p>
              </div>
              <div class="col-lg-9">
                <p>
                  Experience points: <input style="width: 327px;" class="charsheet__input input xp-input" type="text" name="experiencePoints" value="${m.experiencePoints}"/>
                </p>
              </div>
            </div>
            <div class="row">
              <div class="attribute-bonuses col-lg-6">
                <h2>Attribute bonuses</h2>
                <p style="display: flex; align-items: center; justify-content: space-between;">
                  Bonus to Hit (STR): <input style="width: 130px;" class="charsheet__input input xp-input" type="text" name="bonusToHit" value="${m.bonusToHit}"/>
                </p>
                <p style="display: flex; align-items: center; justify-content: space-between;">
                  Open Doors (STR): <input style="width: 130px;" class="charsheet__input input xp-input" type="text" name="openDoors" value="${m.openDoors}"/>
                </p>
                <p style="display: flex; align-items: center; justify-content: space-between;">
                  Damage Bonus (STR): <input style="width: 130px;" class="charsheet__input input" type="text" name="damageBonus" value="${m.damageBonus}"/>
                </p>
                <p style="display: flex; align-items: center; justify-content: space-between;">
                  Carry Modifier (STR): <input style="width: 130px;" class="charsheet__input input" type="text" name="carryModifier" value="${m.carryModifier}"/>
                </p>
                <p style="display: flex; align-items: center; justify-content: space-between;">
                  Armor Bonus (DEX): <input style="width: 130px;" class="charsheet__input input xp-input" type="text" name="armorBonus" value="${m.armorBonus}"/>
                </p>
                <p style="display: flex; align-items: center; justify-content: space-between;">
                  Bonus to Missiles (DEX): <input style="width: 130px;" class="charsheet__input input xp-input" type="text" name="bonusToMissiles" value="${m.bonusToMissiles}"/>
                </p>
                <p style="display: flex; align-items: center; justify-content: space-between;">
                  Hit Point Bonus (CON): <input style="width: 130px;" class="charsheet__input input xp-input" type="text" name="hitPointBonus" value="${m.hitPointBonus}"/>
                </p>
                <p style="display: flex; align-items: center; justify-content: space-between;">
                  Raise Dead Survival (CON): <input style="width: 130px;" class="charsheet__input input" type="text" name="raiseDeadSurvival" value="${m.raiseDeadSurvival}"/>
                </p>
                <p style="display: flex; align-items: center; justify-content: space-between;">
                  Experience points bonus: <input style="width: 130px;" class="charsheet__input input xp-input" type="text" name="experiencePointBonus" value="${m.experiencePointBonus}"/>
                </p>
              </div>
              <div class="various col-lg-6">
                <div class="various__item">
                  <label class="various__label">
                    Hit Points:
                  </label>
                  <input class="various__input xp-input" type="text" name="hitPoints" value="${m.hitPoints}" style="width: 100px;" />
                </div>
                <div class="various__item">
                  <label class="various__label">
                    Saving Throw:
                  </label>
                  <input class="various__input xp-input" type="text" name="savingThrow" value="${m.savingThrow}"/>
                </div>
                <div class="various__item">
                  <label class="various__label">
                    Armor Class:
                  </label>
                  <input class="various__input xp-input" type="text" name="armorClass" value="${m.armorClass}"/>
                </div>
                <div class="various__item">
                  <label class="various__label">
                    Gold pieces:
                  </label>
                  <input class="various__input xp-input" type="text" name="goldPieces" value="${m.goldPieces}" style="width: 100px;"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lists row">
          <div class="spells col-lg-4"></div>
          <div class="special-abilities col-lg-4"></div>
          <div class="items col-lg-4"></div>
        </div>
        <h2>
          Notes
        </h2>
        <div class="core row">
          <div class="col-lg-4">
            <textarea name="notes1" class="textarea notes">${m.notes1}</textarea>
          </div>
          <div class="col-lg-4">
            <textarea name="notes2" class="textarea notes">${m.notes2}</textarea>
          </div>
          <div class="col-lg-4">
            <textarea name="notes3" class="textarea notes">${m.notes3}</textarea>
          </div>
        </div>
        <div style="text-align: right; margin-top: 20px;">
          <button class="button-secondary delete">Delete character</button>
        </div>
      </div>
    `;
  }
  specialAbilitiesRegion = new Region(this, '.special-abilities');
  spellsRegion = new Region(this, '.spells');
  itemsRegion = new Region(this, '.items');
  domEvents = [
    { el: '.delete', on: 'click', call: this.deleteCharacter.bind(this) },
    { el: '.core input, .core textarea, .core select', on: 'input',  call: this.updateValue.bind(this) },
  ];
  async afterInit() {
    const specialAbilitiesPresenter = new SpecialAbilitiesPresenter(this.model);
    await this.specialAbilitiesRegion.show(specialAbilitiesPresenter);
    const spellsPresenter = new SpellsPresenter(this.model);
    await this.spellsRegion.show(spellsPresenter);
    const itemsPresenter = new ItemsPresenter(this.model);
    await this.itemsRegion.show(itemsPresenter);
  }
  deleteCharacter(payload: unknown) {
    this.trigger('delete-character', this.model.getId());
  }
  updateValue(event: InputEvent) {
    const update: {[key:string]: any} = {
      _id: this.model.getId(),
    };
    const target = <HTMLInputElement>event.target;
    const key = target.getAttribute('name');
    if (key) {
      update[key] = target.value;
    }
    this.trigger('update-value', update);
  }
}
