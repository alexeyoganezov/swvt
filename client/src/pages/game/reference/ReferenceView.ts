import { ModelView, Region, CollectionView, Model, View, Collection } from '../../../utils/framework';
import { ReferenceModel } from './ReferenceModel';
import { AttributeView } from './parts/AttributeView';
import { ClassView } from './parts/ClassView';
import { RaceView } from './parts/RaceView';
import { MonsterView } from './parts/MonsterView';
import { SpellView } from './parts/SpellView';
import { IAttribute } from './data/attributes';
import { IClass } from './data/classes';
import { IRace } from './data/races';
import { ISpell } from './data/spells';
import { IMonster } from './data/monsters';
import { IArmor } from './data/armor';
import { IMelee } from './data/melee';
import { ArmorView } from './parts/ArmorView';
import { MeleeView } from './parts/MeleeView';
import { MissileView } from './parts/MisslileView';
import { TransportView } from './parts/TransportView';
import { IMissile } from './data/missile';
import { IEquipment } from './data/equipment';
import { ITransport } from './data/transport';
import { EquipmentView } from './parts/EquipmentView';

class AttributesView extends CollectionView<Model<IAttribute>, AttributeView, View> {
  constructor(collection: Collection<Model<IAttribute>>) {
    super(collection, AttributeView);
  }
  getHTML(): string {
    return `
      <div class="row">
        <div class="col-lg-12">
          <h2>
            Attributes
          </h2>
        </div>
      </div>
    `;
  }
}

class ClassesView extends CollectionView<Model<IClass>, ClassView, View> {
  constructor(collection: Collection<Model<IClass>>) {
    super(collection, ClassView);
  }
  getHTML(): string {
    return `
      <div class="row">
        <div class="col-lg-12">
          <h2>
            Classes
          </h2>
        </div>
      </div>
    `;
  }
}

class RacesView extends CollectionView<Model<IRace>, RaceView, View> {
  constructor(collection: Collection<Model<IRace>>) {
    super(collection, RaceView);
  }
  getHTML(): string {
    return `
      <div class="row">
        <div class="col-lg-12">
          <h2>
            Races
          </h2>
        </div>
      </div>
    `;
  }
}

class SpellsView extends CollectionView<Model<ISpell>, SpellView, View> {
  constructor(collection: Collection<Model<ISpell>>) {
    super(collection, SpellView);
  }
  getHTML(): string {
    return `
      <div class="row">
        <div class="col-lg-12">
          <h2>
            Spells
          </h2>
        </div>
      </div>
    `;
  }
}

class MonstersView extends CollectionView<Model<IMonster>, MonsterView, View> {
  constructor(collection: Collection<Model<IMonster>>) {
    super(collection, MonsterView);
  }
  getHTML(): string {
    return `
      <div class="row">
        <div class="col-lg-12">
          <h2>
            Monsters
          </h2>
        </div>
      </div>
    `;
  }
}

class ArmorsView extends CollectionView<Model<IArmor>, ArmorView, View> {
  constructor(collection: Collection<Model<IArmor>>) {
    super(collection, ArmorView);
  }
  getHTML(): string {
    return `
      <div class="row">
        <div class="col-lg-12">
          <h2>
            Armor
          </h2>
        </div>
      </div>
    `;
  }
}

class MeleeCollectionView extends CollectionView<Model<IMelee>, MeleeView, View> {
  constructor(collection: Collection<Model<IMelee>>) {
    super(collection, MeleeView);
  }
  getHTML(): string {
    return `
      <div class="row">
        <div class="col-lg-12">
          <h2>
            Melee Weapon
          </h2>
        </div>
      </div>
    `;
  }
}

class MissileCollectionView extends CollectionView<Model<IMissile>, MissileView, View> {
  constructor(collection: Collection<Model<IMissile>>) {
    super(collection, MissileView);
  }
  getHTML(): string {
    return `
      <div class="row">
        <div class="col-lg-12">
          <h2>
            Missile Weapon
          </h2>
        </div>
      </div>
    `;
  }
}

class EquipmentCollectionView extends CollectionView<Model<IEquipment>, EquipmentView, View> {
  constructor(collection: Collection<Model<IEquipment>>) {
    super(collection, EquipmentView);
  }
  getHTML(): string {
    return `
      <div class="row">
        <div class="col-lg-12">
          <h2>
            Equipment
          </h2>
        </div>
      </div>
    `;
  }
}

class TransportCollectionView extends CollectionView<Model<ITransport>, TransportView, View> {
  constructor(collection: Collection<Model<ITransport>>) {
    super(collection, TransportView);
  }
  getHTML(): string {
    return `
      <div class="row">
        <div class="col-lg-12">
          <h2>
            Transport
          </h2>
        </div>
      </div>
    `;
  }
}

export class ReferenceView extends ModelView<ReferenceModel> {
  getHTML(): string {
    return `
      <div class="reference container">
        <div class="card">
          <h1 class="h1 toggler">
            Reference <span class="toggle-icon">▼</span>
          </h1>
          <div class="togglable">
            <div class="row">
              <div class="col-lg-3">
                <a href="#" class="sidebar-link active-sidebar-link" data-section="attributes">
                  Attributes
                </a>
                <a href="#" class="sidebar-link" data-section="classes">
                  Classes
                </a>
                <a href="#" class="sidebar-link" data-section="races">
                  Races
                </a>
                <a href="#" class="sidebar-link" data-section="spells">
                  Spells
                </a>
                <a href="#" class="sidebar-link" data-section="monsters">
                  Monsters
                </a>
                <a href="#" class="sidebar-link" data-section="armor">
                  Armor
                </a>
                <a href="#" class="sidebar-link" data-section="melee">
                  Melee Weapon
                </a>
                <a href="#" class="sidebar-link" data-section="missile">
                  Missile Weapon
                </a>
                <a href="#" class="sidebar-link" data-section="equipment">
                  Equipment
                </a>
                <a href="#" class="sidebar-link" data-section="transport">
                  Transport
                </a>
              </div>
              <div class="col-lg-9">
                <div id="attributes" class="reference-section"></div>
                <div id="classes" class="reference-section" style="display: none"></div>
                <div id="races" class="reference-section" style="display: none"></div>
                <div id="spells" class="reference-section" style="display: none"></div>
                <div id="monsters" class="reference-section" style="display: none"></div>
                <div id="armor" class="reference-section" style="display: none"></div>
                <div id="melee" class="reference-section" style="display: none"></div>
                <div id="missile" class="reference-section" style="display: none"></div>
                <div id="equipment" class="reference-section" style="display: none"></div>
                <div id="transport" class="reference-section" style="display: none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  domEvents = [
    { el: '.toggler', on: 'click', call: this.toggleBlock.bind(this) },
    { el: '.sidebar-link', on: 'click', call: this.handleNavigation.bind(this) },
  ];
  attributesRegion = new Region(this, '#attributes',);
  classesRegion = new Region(this, '#classes',);
  racesRegion = new Region(this, '#races',);
  spellsRegion = new Region(this, '#spells',);
  monstersRegion = new Region(this, '#monsters',);
  armorRegion = new Region(this, '#armor',);
  meleeRegion = new Region(this, '#melee',);
  missileRegion = new Region(this, '#missile',);
  equipmentRegion = new Region(this, '#equipment',);
  transportRegion = new Region(this, '#transport',);
  afterInit() {
    this.attributesRegion.show(new AttributesView(this.model.attrs.attributes));
    this.classesRegion.show(new ClassesView(this.model.attrs.classes));
    this.racesRegion.show(new RacesView(this.model.attrs.races));
    this.spellsRegion.show(new SpellsView(this.model.attrs.spells));
    this.monstersRegion.show(new MonstersView(this.model.attrs.monsters));
    this.armorRegion.show(new ArmorsView(this.model.attrs.armors));
    this.meleeRegion.show(new MeleeCollectionView(this.model.attrs.melee));
    this.missileRegion.show(new MissileCollectionView(this.model.attrs.misslile));
    this.equipmentRegion.show(new EquipmentCollectionView(this.model.attrs.equipment));
    this.transportRegion.show(new TransportCollectionView(this.model.attrs.transport));
  }
  handleNavigation(event: Event) {
    event.preventDefault();
    this.el?.querySelectorAll('.active-sidebar-link').forEach((el) => {
      const element = <HTMLElement>el;
      element.classList.remove('active-sidebar-link');
    });
    const target = <HTMLElement>event.target;
    target.classList.add('active-sidebar-link');
    const section = target.getAttribute('data-section');
    if (section) {
      this.el?.querySelectorAll('.reference-section').forEach((el) => {
        const element = <HTMLElement>el;
        element.style.display = 'none';
      });
      const toOpen = document.getElementById(section);
      if (toOpen) {
        toOpen.style.display = 'block';
      }
    }
  }
  toggleBlock(event: Event) {
    const target = <HTMLElement>event.target;
    const togglable = target.nextSibling?.nextSibling;
    const toggler = target;
    const toggleIcon = target.querySelector('.toggle-icon');
    if (togglable && toggleIcon && togglable instanceof HTMLElement) {
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
}
