import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  идТелеПлюс: DS.attr('number'),
  помещениеСобственника: DS.hasMany('i-i-s-umnyjj-dom-помещение-собственника', { inverse: 'собственник', async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-собственник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  идТелеПлюс: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-собственник.validations.идТелеПлюс.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  помещениеСобственника: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-собственник.validations.помещениеСобственника.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СобственникE', 'i-i-s-umnyjj-dom-собственник', {
    фИО: attr('ФИО', { index: 0 }),
    идТелеПлюс: attr('Ид теле плюс', { index: 1 }),
    помещениеСобственника: hasMany('i-i-s-umnyjj-dom-помещение-собственника', 'Помещение собственника', {
      основнойСобственник: attr('Основной собственник', { index: 0 }),
      доляСобственности: attr('Доля собственности', { index: 1 }),
      помещение: belongsTo('i-i-s-umnyjj-dom-помещение', 'Помещение', {
        типПомещения: attr('Тип помещения', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'типПомещения' })
    })
  });

  modelClass.defineProjection('СобственникL', 'i-i-s-umnyjj-dom-собственник', {
    фИО: attr('ФИО', { index: 0 }),
    идТелеПлюс: attr('Ид теле плюс', { index: 1 })
  });
};
