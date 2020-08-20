import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единица: DS.attr('string'),
  датаУстановки: DS.attr('date'),
  датаСнятия: DS.attr('date'),
  актуальность: DS.attr('boolean'),
  автоПередача: DS.attr('boolean'),
  модельПУ: DS.belongsTo('i-i-s-umnyjj-dom-модель-п-у', { inverse: null, async: false }),
  помещение: DS.belongsTo('i-i-s-umnyjj-dom-помещение', { inverse: null, async: false })
});

export let ValidationRules = {
  единица: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-прибор-учета.validations.единица.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаУстановки: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-прибор-учета.validations.датаУстановки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаСнятия: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-прибор-учета.validations.датаСнятия.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  актуальность: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-прибор-учета.validations.актуальность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  автоПередача: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-прибор-учета.validations.автоПередача.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  модельПУ: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-прибор-учета.validations.модельПУ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  помещение: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-прибор-учета.validations.помещение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриборУчетаE', 'i-i-s-umnyjj-dom-прибор-учета', {
    единица: attr('Единица', { index: 0 }),
    датаУстановки: attr('Дата установки', { index: 1 }),
    датаСнятия: attr('Дата снятия', { index: 2 }),
    актуальность: attr('Актуальность', { index: 3 })
  });

  modelClass.defineProjection('ПриборУчетаL', 'i-i-s-umnyjj-dom-прибор-учета', {
    единица: attr('Единица', { index: 0 }),
    датаУстановки: attr('Дата установки', { index: 1 }),
    датаСнятия: attr('Дата снятия', { index: 2 }),
    актуальность: attr('Актуальность', { index: 3 })
  });
};
