import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дом: DS.belongsTo('i-i-s-umnyjj-dom-дом', { inverse: null, async: false }),
  поставщик: DS.belongsTo('i-i-s-umnyjj-dom-поставщик', { inverse: null, async: false })
});

export let ValidationRules = {
  дом: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-дом-поставщик.validations.дом.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  поставщик: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-дом-поставщик.validations.поставщик.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДомПоставщикE', 'i-i-s-umnyjj-dom-дом-поставщик', {
    дом: belongsTo('i-i-s-umnyjj-dom-дом', 'Дом', {
      address: attr('Address', { index: 1 })
    }, { index: 0 }),
    поставщик: belongsTo('i-i-s-umnyjj-dom-поставщик', 'Поставщик', {
      иНН: attr('ИНН', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('ДомПоставщикL', 'i-i-s-umnyjj-dom-дом-поставщик', {
    дом: belongsTo('i-i-s-umnyjj-dom-дом', 'Address', {
      address: attr('Address', { index: 0 })
    }, { index: -1, hidden: true }),
    поставщик: belongsTo('i-i-s-umnyjj-dom-поставщик', 'ИНН', {
      иНН: attr('ИНН', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
