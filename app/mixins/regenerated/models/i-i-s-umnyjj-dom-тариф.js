import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  описание: DS.attr('string'),
  датаНачала: DS.attr('string'),
  датаОкончания: DS.attr('string'),
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
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-тариф.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
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
    датаНачала: attr('Дата начала', { index: 2 }),
    датаОкончания: attr('Дата окончания', { index: 3 }),
    единица: attr('Единица', { index: 4 }),
    формула: attr('Формула', { index: 5 }),
    стоимость: attr('Стоимость', { index: 6 }),
    видУслуги: belongsTo('i-i-s-umnyjj-dom-вид-услуги', 'Вид услуги', {
      наименование: attr('Наименование', { index: 8 })
    }, { index: 7 }),
    поставщик: belongsTo('i-i-s-umnyjj-dom-поставщик', 'Поставщик', {
      иНН: attr('ИНН', { index: 10 })
    }, { index: 9 })
  });

  modelClass.defineProjection('ТарифL', 'i-i-s-umnyjj-dom-тариф', {
    наименование: attr('Наименование', { index: 0 }),
    описание: attr('Описание', { index: 1 }),
    датаНачала: attr('Дата начала', { index: 2 }),
    датаОкончания: attr('Дата окончания', { index: 3 }),
    единица: attr('Единица', { index: 4 }),
    формула: attr('Формула', { index: 5 }),
    стоимость: attr('Стоимость', { index: 6 }),
    видУслуги: belongsTo('i-i-s-umnyjj-dom-вид-услуги', 'Наименование', {
      наименование: attr('Наименование', { index: 7 })
    }, { index: -1, hidden: true }),
    поставщик: belongsTo('i-i-s-umnyjj-dom-поставщик', 'ИНН', {
      иНН: attr('ИНН', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
