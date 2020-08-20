import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  уК: DS.belongsTo('i-i-s-umnyjj-dom-у-к', { inverse: null, async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  уК: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-сотрудник.validations.уК.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-umnyjj-dom-сотрудник', {
    фИО: attr('ФИО', { index: 0 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-umnyjj-dom-сотрудник', {
    фИО: attr('ФИО', { index: 0 })
  });
};
