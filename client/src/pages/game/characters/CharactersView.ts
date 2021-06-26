import { View, ModelView, CollectionView, Region, Reference, ALL_EVENTS } from '../../../utils/framework';
import { CharacterCollection, CharacterModel } from '../../../entities/Character';
import { GameModel } from '../GameModel';
import { CharacterView } from './character/CharacterView';
import './characters.css';

class CharacterLinkView extends ModelView<CharacterModel> {
  getHTML(): string {
    const m = this.model.attrs;
    return `
      <div>
        <a href="#" class="sidebar-link">
          ${ m.name || 'Nameless one' }
        </a>
      </div>
    `;
  }
  domEvents = [
    { el: 'a', on: 'click', call: this.handleCharacterSelect.bind(this) }
  ];
  linkReference = new Reference(this, 'a');
  afterInit() {
    this.model.on('change name', (payload: unknown) => {
      const model = <CharacterModel>payload;
      const attributes = model.attrs;
      const link = this.linkReference.get();
      if (link) {
        if (attributes.name) {
          link.innerHTML = attributes.name;
        } else {
          link.innerHTML = 'Nameless one';
        }
      }
    });
  }
  handleCharacterSelect(event: Event) {
    event.preventDefault();
    this.trigger('character-select', this.model.getId());
  }
  setActivity(isActive: boolean) {
    if (this.el) {
      if (isActive) {
        this.el.classList.add('active-sidebar-link');
      } else {
        this.el.classList.remove('active-sidebar-link');
      }
    }
  }
}

class NoCharactersView extends View {
  getHTML(): string {
    return `
      <p style="font-size: 14px; opacity: .6; line-height: 43px; margin: 0;">
        <i>No existing characters</i>
      </p>
    `;
  }
}

class CharacterListView extends CollectionView<CharacterModel, CharacterLinkView, View> {
  constructor(collection: CharacterCollection) {
    super(collection, CharacterLinkView, NoCharactersView);
  }
  viewEvents = [
    { on: 'character-select', call: this.handleSelect.bind(this) },
  ];
  afterInit() {
    this.collection.on('add', (payload: unknown) => {
      const model = <CharacterModel>payload;
      this.addChildView(model);
    });
    this.collection.on('remove', (payload: unknown) => {
      const model = <CharacterModel>payload;
      this.removeChildView(model.getId())
    });
  }
  handleSelect(payload: unknown) {
    const characterId = <string>payload;
    this.children.forEach(view => {
      view.setActivity(view.model.getId() === characterId);
    });
    this.trigger('character-select', payload);
  }
}

class CharsheetListView extends CollectionView<CharacterModel, CharacterView, View> {
  constructor(collection: CharacterCollection) {
    super(collection, CharacterView);
  }
  viewEvents = [
    { on: ALL_EVENTS, call: this.retrigger.bind(this) },
  ];
  afterInit() {
    this.collection.on('add', (payload: unknown) => {
      const model = <CharacterModel>payload;
      this.addChildView(model);
    });
    this.collection.on('remove', (payload: unknown) => {
      const model = <CharacterModel>payload;
      this.removeChildView(model.getId());
    });
  }
}

export class CharactersView extends ModelView<GameModel> {
  getHTML(): string {
    return `
      <div class="container">
        <div class="card">
          <h1 class="h1 toggler">
            Characters <span class="toggle-icon">▼</span>
          </h1>
          <div class="togglable">
            <div class="row">
              <div class="col-lg-3">
                <div id="charlist"></div>
                <div class="list-actions">
                  <button class="button-secondary button-block">
                    Create
                  </button>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="character-sheets"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  characterSheetsRegion = new Region(this, '.character-sheets');
  characterListRegion = new Region(this, '#charlist');
  domEvents = [
    { el: 'button', on: 'click',  call: this.createCharacter.bind(this) },
    { el: 'a', on: 'click',  call: this.selectCharacter.bind(this) },
    { el: '.toggler', on: 'click', call: this.toggleBlock.bind(this) },
  ];
  async afterInit() {
    const characterListView = new CharacterListView(this.model.attrs.characters);
    characterListView.on('character-select', this.showCharacterSheet.bind(this));
    await this.characterListRegion.show(characterListView);

    const charsheetListView = new CharsheetListView(this.model.attrs.characters);
    charsheetListView.on(ALL_EVENTS, this.retrigger.bind(this));
    await this.characterSheetsRegion.show(charsheetListView);

    this.model.attrs.characters.models.forEach(characterModel => {
      characterModel.on('change', (payload: unknown) => {
        const char = <CharacterModel>payload;
          const attrs = char.attrs;
          Object.keys(attrs).forEach(attr => {
            if (!this.el) return;
            const el = this.el.querySelector<HTMLInputElement>(`*[name="${attr}"]`);
            if (el) {
              // @ts-ignore
              el.value = attrs[attr];
            }
          });
      });
    });
  }
  createCharacter(event: Event) {
    event.preventDefault();
    this.trigger('create-character');
  }
  selectCharacter(event: Event) {
    event.preventDefault();
    const target = <Element>event.target;
    const url = target.getAttribute('href');
    if (url) {
      page(url);
    }
  }
  showCharacterSheet(payload: unknown) {
    const characterId = <string>payload;
    // Hide all character sheets
    document.querySelectorAll<HTMLElement>('.charsheet').forEach(el => {
      el.style.display = 'none';
    });
    // Open needed
    const el = document.getElementById(`charsheet-${characterId}`);
    if (el) {
      el.style.display = 'block';
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
