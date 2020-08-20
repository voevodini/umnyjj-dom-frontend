import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  основнойСобственник: DS.attr('string'),
  доляСобственности: DS.attr('string'),
  помещение: DS.belongsTo('i-i-s-umnyjj-dom-помещение', { inverse: null, async: false }),
  собственник: DS.belongsTo('i-i-s-umnyjj-dom-собственник', { inverse: 'помещениеСобственника', async: false })
});

export let ValidationRules = {
  основнойСобственник: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-помещение-собственника.validations.основнойСобственник.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  доляСобственности: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-помещение-собственника.validations.доляСобственности.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  помещение: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-помещение-собственника.validations.помещение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  собственник: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-помещение-собственника.validations.собственник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПомещениеСобственникаE', 'i-i-s-umnyjj-dom-помещение-собственника', {
    основнойСобственник: attr('Основной собственник', { index: 0 }),
    доляСобственности: attr('Доля собственности', { index: 1 }),
    помещение: belongsTo('i-i-s-umnyjj-dom-помещение', 'Помещение', {
      типПомещения: attr('Тип помещения', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'типПомещения' })
  });
};
