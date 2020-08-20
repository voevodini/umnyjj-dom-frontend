import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';

import {
  defineProjections,
  ValidationRules,
  Model as ПоказаниеПУMixin
} from '../mixins/regenerated/models/i-i-s-umnyjj-dom-показание-п-у';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, ПоказаниеПУMixin, Validations, {
});

defineProjections(Model);

export default Model;
