import { CollectionView, View, ALL_EVENTS } from '../../../../../utils/framework';
import { AbilityView } from './AbilityView';
import { SpecialAbilityCollection, SpecialAbilityModel } from '../../../../../entities/SpecialAbility';

export class AbilitiesList extends CollectionView<SpecialAbilityModel, AbilityView, View> {
  characterId: string;
  constructor(collection: SpecialAbilityCollection, characterId: string) {
    super(collection, AbilityView);
    this.characterId = characterId;
  }
  viewEvents = [
    { on: ALL_EVENTS, call: this.retrigger.bind(this) },
  ];
  afterInit() {
    this.collection.on('add', (payload: unknown) => {
      const model = <SpecialAbilityModel>payload;
      this.addChildView(model);
    });
    this.collection.on('remove', (payload: unknown) => {
      const model = <SpecialAbilityModel>payload;
      this.removeChildView(model.getId());
    });
  }
}
