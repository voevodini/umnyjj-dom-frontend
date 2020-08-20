import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  idTelePlus: DS.attr('number'),
  итого: DS.attr('string'),
  помещение: DS.belongsTo('i-i-s-umnyjj-dom-помещение', { inverse: null, async: false }),
  уК: DS.belongsTo('i-i-s-umnyjj-dom-у-к', { inverse: null, async: false }),
  строкаКвитанции: DS.hasMany('i-i-s-umnyjj-dom-строка-квитанции', { inverse: 'квитанция', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-квитанция.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  idTelePlus: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-квитанция.validations.idTelePlus.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  итого: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-квитанция.validations.итого.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  помещение: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-квитанция.validations.помещение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  уК: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-квитанция.validations.уК.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  строкаКвитанции: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-квитанция.validations.строкаКвитанции.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КвитанцияE', 'i-i-s-umnyjj-dom-квитанция', {
    дата: attr('Дата', { index: 0 }),
    idTelePlus: attr('Id tele plus', { index: 1 }),
    итого: attr('Итого', { index: 2 }),
    помещение: belongsTo('i-i-s-umnyjj-dom-помещение', 'Помещение', {
      типПомещения: attr('Тип помещения', { index: 4 })
    }, { index: 3 }),
    строкаКвитанции: hasMany('i-i-s-umnyjj-dom-строка-квитанции', 'Строка квитанции', {
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
    })
  });

  modelClass.defineProjection('КвитанцияL', 'i-i-s-umnyjj-dom-квитанция', {
    дата: attr('Дата', { index: 0 }),
    idTelePlus: attr('Id tele plus', { index: 1 }),
    итого: attr('Итого', { index: 2 }),
    помещение: belongsTo('i-i-s-umnyjj-dom-помещение', 'Тип помещения', {
      типПомещения: attr('Тип помещения', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
