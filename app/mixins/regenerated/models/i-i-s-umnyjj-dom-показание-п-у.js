import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  значение: DS.attr('number'),
  дата: DS.attr('date'),
  полученоАвто: DS.attr('boolean'),
  приборУчета: DS.belongsTo('i-i-s-umnyjj-dom-прибор-учета', { inverse: null, async: false })
});

export let ValidationRules = {
  значение: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-показание-п-у.validations.значение.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-показание-п-у.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  полученоАвто: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-показание-п-у.validations.полученоАвто.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  приборУчета: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-показание-п-у.validations.приборУчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПоказаниеПУE', 'i-i-s-umnyjj-dom-показание-п-у', {
    значение: attr('Значение', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });

  modelClass.defineProjection('ПоказаниеПУL', 'i-i-s-umnyjj-dom-показание-п-у', {
    значение: attr('Значение', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });
};
