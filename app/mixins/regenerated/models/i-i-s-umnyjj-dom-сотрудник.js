import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  управляющаяКомпания: DS.belongsTo('i-i-s-umnyjj-dom-управляющая-компания', { inverse: null, async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  управляющаяКомпания: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-сотрудник.validations.управляющаяКомпания.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-umnyjj-dom-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    управляющаяКомпания: belongsTo('i-i-s-umnyjj-dom-управляющая-компания', 'Управляющая компания', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: 1 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-umnyjj-dom-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    управляющаяКомпания: belongsTo('i-i-s-umnyjj-dom-управляющая-компания', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
