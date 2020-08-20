import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  расход: DS.attr('number'),
  единица: DS.attr('string'),
  сумма: DS.attr('number'),
  расшифровка: DS.attr('string'),
  комментарий: DS.attr('string'),
  показаниеПУ: DS.belongsTo('i-i-s-umnyjj-dom-показание-п-у', { inverse: null, async: false }),
  тариф: DS.belongsTo('i-i-s-umnyjj-dom-тариф', { inverse: null, async: false }),
  квитанция: DS.belongsTo('i-i-s-umnyjj-dom-квитанция', { inverse: 'строкаКвитанции', async: false })
});

export let ValidationRules = {
  расход: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-строка-квитанции.validations.расход.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  единица: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-строка-квитанции.validations.единица.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-строка-квитанции.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  расшифровка: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-строка-квитанции.validations.расшифровка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-строка-квитанции.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  показаниеПУ: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-строка-квитанции.validations.показаниеПУ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тариф: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-строка-квитанции.validations.тариф.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  квитанция: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-строка-квитанции.validations.квитанция.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СтрокаКвитанцииE', 'i-i-s-umnyjj-dom-строка-квитанции', {
    расход: attr('Расход', { index: 0 }),
    единица: attr('Единица', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    расшифровка: attr('Расшифровка', { index: 3 }),
    комментарий: attr('Комментарий', { index: 4 }),
    показаниеПУ: belongsTo('i-i-s-umnyjj-dom-показание-п-у', 'Показание ПУ', {
      значение: attr('Значение', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'значение' }),
    тариф: belongsTo('i-i-s-umnyjj-dom-тариф', 'Тариф', {
      наименование: attr('Наименование', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'наименование' })
  });
};
