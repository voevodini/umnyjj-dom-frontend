import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  ресурс: DS.attr('string'),
  актуальность: DS.attr('boolean')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-вид-услуги.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ресурс: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-вид-услуги.validations.ресурс.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  актуальность: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-вид-услуги.validations.актуальность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВидУслугиE', 'i-i-s-umnyjj-dom-вид-услуги', {
    наименование: attr('Наименование', { index: 0 }),
    ресурс: attr('Ресурс', { index: 1 }),
    актуальность: attr('Актуальность', { index: 2 })
  });

  modelClass.defineProjection('ВидУслугиL', 'i-i-s-umnyjj-dom-вид-услуги', {
    наименование: attr('Наименование', { index: 0 }),
    ресурс: attr('Ресурс', { index: 1 }),
    актуальность: attr('Актуальность', { index: 2 })
  });
};
