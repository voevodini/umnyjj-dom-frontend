import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  описание: DS.attr('string'),
  датаНачала: DS.attr('date'),
  датаОкон: DS.attr('date'),
  единица: DS.attr('string'),
  формула: DS.attr('string'),
  стоимость: DS.attr('string'),
  видУслуги: DS.belongsTo('i-i-s-umnyjj-dom-вид-услуги', { inverse: null, async: false }),
  поставщик: DS.belongsTo('i-i-s-umnyjj-dom-поставщик', { inverse: null, async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-тариф.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-тариф.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-тариф.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкон: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-тариф.validations.датаОкон.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  единица: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-тариф.validations.единица.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  формула: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-тариф.validations.формула.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-тариф.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  видУслуги: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-тариф.validations.видУслуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  поставщик: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-тариф.validations.поставщик.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТарифE', 'i-i-s-umnyjj-dom-тариф', {
    наименование: attr('Наименование', { index: 0 }),
    описание: attr('Описание', { index: 1 }),
    датаНачала: attr('Дата начала', { index: 2 })
  });

  modelClass.defineProjection('ТарифL', 'i-i-s-umnyjj-dom-тариф', {
    наименование: attr('Наименование', { index: 0 }),
    описание: attr('Описание', { index: 1 }),
    датаНачала: attr('Дата начала', { index: 2 })
  });
};
