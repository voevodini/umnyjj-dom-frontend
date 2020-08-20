import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  производитель: DS.attr('string'),
  актуальность: DS.attr('boolean')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-модель-п-у.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-модель-п-у.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  актуальность: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-модель-п-у.validations.актуальность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МодельПУE', 'i-i-s-umnyjj-dom-модель-п-у', {
    наименование: attr('Наименование', { index: 0 }),
    производитель: attr('Производитель', { index: 1 }),
    актуальность: attr('Актуальность', { index: 2 })
  });

  modelClass.defineProjection('МодельПУL', 'i-i-s-umnyjj-dom-модель-п-у', {
    наименование: attr('Наименование', { index: 0 }),
    производитель: attr('Производитель', { index: 1 }),
    актуальность: attr('Актуальность', { index: 2 })
  });
};
