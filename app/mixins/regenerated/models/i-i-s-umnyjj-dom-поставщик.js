import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  иНН: DS.attr('string'),
  наименование: DS.attr('string'),
  расчетныйСчет: DS.attr('number'),
  описание: DS.attr('string')
});

export let ValidationRules = {
  иНН: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-поставщик.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-поставщик.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расчетныйСчет: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-поставщик.validations.расчетныйСчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-поставщик.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПоставщикE', 'i-i-s-umnyjj-dom-поставщик', {
    иНН: attr('ИНН', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    расчетныйСчет: attr('Расчетный счет', { index: 2 }),
    описание: attr('Описание', { index: 3 })
  });

  modelClass.defineProjection('ПоставщикL', 'i-i-s-umnyjj-dom-поставщик', {
    иНН: attr('ИНН', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    расчетныйСчет: attr('Расчетный счет', { index: 2 }),
    описание: attr('Описание', { index: 3 })
  });
};
