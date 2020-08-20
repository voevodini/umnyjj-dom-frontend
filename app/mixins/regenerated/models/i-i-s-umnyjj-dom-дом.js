import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  address: DS.attr('string'),
  summS: DS.attr('number'),
  управляющаяКомпания: DS.belongsTo('i-i-s-umnyjj-dom-управляющая-компания', { inverse: null, async: false })
});

export let ValidationRules = {
  address: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-дом.validations.address.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  summS: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-дом.validations.summS.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  управляющаяКомпания: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-дом.validations.управляющаяКомпания.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДомE', 'i-i-s-umnyjj-dom-дом', {
    address: attr('Address', { index: 0 }),
    summS: attr('Summ S', { index: 1 }),
    управляющаяКомпания: belongsTo('i-i-s-umnyjj-dom-управляющая-компания', 'Управляющая компания', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('ДомL', 'i-i-s-umnyjj-dom-дом', {
    address: attr('Address', { index: 0 }),
    summS: attr('Summ S', { index: 1 }),
    управляющаяКомпания: belongsTo('i-i-s-umnyjj-dom-управляющая-компания', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
