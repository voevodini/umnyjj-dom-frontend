import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  иНН: DS.attr('string')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-управляющая-компания.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-управляющая-компания.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УправляющаяКомпанияE', 'i-i-s-umnyjj-dom-управляющая-компания', {
    наименование: attr('Наименование', { index: 0 }),
    иНН: attr('ИНН', { index: 1 })
  });

  modelClass.defineProjection('УправляющаяКомпанияL', 'i-i-s-umnyjj-dom-управляющая-компания', {
    наименование: attr('Наименование', { index: 0 }),
    иНН: attr('ИНН', { index: 1 })
  });
};
