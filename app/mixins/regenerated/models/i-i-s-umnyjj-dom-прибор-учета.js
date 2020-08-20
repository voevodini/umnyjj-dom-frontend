import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единица: DS.attr('string'),
  датаУстановки: DS.attr('string'),
  датаСнятия: DS.attr('string'),
  актуальность: DS.attr('boolean'),
  автоматическаяПередача: DS.attr('boolean'),
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
    ],
  },
  датаСнятия: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-прибор-учета.validations.датаСнятия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  актуальность: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-прибор-учета.validations.актуальность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  автоматическаяПередача: {
    descriptionKey: 'models.i-i-s-umnyjj-dom-прибор-учета.validations.автоматическаяПередача.__caption__',
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
    актуальность: attr('Актуальность', { index: 3 }),
    автоматическаяПередача: attr('Автоматическая передача', { index: 4 }),
    модельПУ: belongsTo('i-i-s-umnyjj-dom-модель-п-у', 'Модель ПУ', {
      наименование: attr('Наименование', { index: 6 })
    }, { index: 5 }),
    помещение: belongsTo('i-i-s-umnyjj-dom-помещение', 'Помещение', {
      типПомещения: attr('Тип помещения', { index: 8 })
    }, { index: 7 })
  });

  modelClass.defineProjection('ПриборУчетаL', 'i-i-s-umnyjj-dom-прибор-учета', {
    единица: attr('Единица', { index: 0 }),
    датаУстановки: attr('Дата установки', { index: 1 }),
    датаСнятия: attr('Дата снятия', { index: 2 }),
    актуальность: attr('Актуальность', { index: 3 }),
    автоматическаяПередача: attr('Автоматическая передача', { index: 4 }),
    модельПУ: belongsTo('i-i-s-umnyjj-dom-модель-п-у', 'Наименование', {
      наименование: attr('Наименование', { index: 5 })
    }, { index: -1, hidden: true }),
    помещение: belongsTo('i-i-s-umnyjj-dom-помещение', 'Тип помещения', {
      типПомещения: attr('Тип помещения', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
