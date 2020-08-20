import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  площадь: DS.attr('number'),
  типПомещения: DS.attr('string'),
  колвопр: DS.attr('string'),
  дом: DS.belongsTo('i-i-s-umnyjj-dom-дом', { inverse: null, async: false }),
  собственник: DS.belongsTo('i-i-s-umnyjj-dom-собственник', { inverse: null, async: false })
});

export let ValidationRules = {
  площадь: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-помещение.validations.площадь.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типПомещения: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-помещение.validations.типПомещения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  колвопр: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-помещение.validations.колвопр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дом: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-помещение.validations.дом.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  собственник: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-помещение.validations.собственник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПомещениеE', 'i-i-s-umnyjj-dom-помещение', {
    площадь: attr('Площадь', { index: 0 }),
    типПомещения: attr('Тип помещения', { index: 1 })
  });

  modelClass.defineProjection('ПомещениеL', 'i-i-s-umnyjj-dom-помещение', {
    площадь: attr('Площадь', { index: 0 }),
    типПомещения: attr('Тип помещения', { index: 1 })
  });
};
