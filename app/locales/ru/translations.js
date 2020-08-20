import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISUmnyjj_domАдресныйРеестрLForm from './forms/i-i-s-umnyjj-dom-адресный-реестр-l';
import IISUmnyjj_domВидУслугиLForm from './forms/i-i-s-umnyjj-dom-вид-услуги-l';
import IISUmnyjj_domДомLForm from './forms/i-i-s-umnyjj-dom-дом-l';
import IISUmnyjj_domДомПоставщикLForm from './forms/i-i-s-umnyjj-dom-дом-поставщик-l';
import IISUmnyjj_domКвитанцияLForm from './forms/i-i-s-umnyjj-dom-квитанция-l';
import IISUmnyjj_domМодельПУLForm from './forms/i-i-s-umnyjj-dom-модель-п-у-l';
import IISUmnyjj_domПоказаниеПУLForm from './forms/i-i-s-umnyjj-dom-показание-п-у-l';
import IISUmnyjj_domПомещениеLForm from './forms/i-i-s-umnyjj-dom-помещение-l';
import IISUmnyjj_domПоставщикLForm from './forms/i-i-s-umnyjj-dom-поставщик-l';
import IISUmnyjj_domПриборУчетаLForm from './forms/i-i-s-umnyjj-dom-прибор-учета-l';
import IISUmnyjj_domСобственникLForm from './forms/i-i-s-umnyjj-dom-собственник-l';
import IISUmnyjj_domСотрудникLForm from './forms/i-i-s-umnyjj-dom-сотрудник-l';
import IISUmnyjj_domТарифLForm from './forms/i-i-s-umnyjj-dom-тариф-l';
import IISUmnyjj_domУправляющаяКомпанияLForm from './forms/i-i-s-umnyjj-dom-управляющая-компания-l';
import IISUmnyjj_domАдресныйРеестрEForm from './forms/i-i-s-umnyjj-dom-адресный-реестр-e';
import IISUmnyjj_domВидУслугиEForm from './forms/i-i-s-umnyjj-dom-вид-услуги-e';
import IISUmnyjj_domДомEForm from './forms/i-i-s-umnyjj-dom-дом-e';
import IISUmnyjj_domДомПоставщикEForm from './forms/i-i-s-umnyjj-dom-дом-поставщик-e';
import IISUmnyjj_domКвитанцияEForm from './forms/i-i-s-umnyjj-dom-квитанция-e';
import IISUmnyjj_domМодельПУEForm from './forms/i-i-s-umnyjj-dom-модель-п-у-e';
import IISUmnyjj_domПоказаниеПУEForm from './forms/i-i-s-umnyjj-dom-показание-п-у-e';
import IISUmnyjj_domПомещениеEForm from './forms/i-i-s-umnyjj-dom-помещение-e';
import IISUmnyjj_domПоставщикEForm from './forms/i-i-s-umnyjj-dom-поставщик-e';
import IISUmnyjj_domПриборУчетаEForm from './forms/i-i-s-umnyjj-dom-прибор-учета-e';
import IISUmnyjj_domСобственникEForm from './forms/i-i-s-umnyjj-dom-собственник-e';
import IISUmnyjj_domСотрудникEForm from './forms/i-i-s-umnyjj-dom-сотрудник-e';
import IISUmnyjj_domТарифEForm from './forms/i-i-s-umnyjj-dom-тариф-e';
import IISUmnyjj_domУправляющаяКомпанияEForm from './forms/i-i-s-umnyjj-dom-управляющая-компания-e';
import IISUmnyjj_domАдресныйРеестрModel from './models/i-i-s-umnyjj-dom-адресный-реестр';
import IISUmnyjj_domВидУслугиModel from './models/i-i-s-umnyjj-dom-вид-услуги';
import IISUmnyjj_domДомПоставщикModel from './models/i-i-s-umnyjj-dom-дом-поставщик';
import IISUmnyjj_domДомModel from './models/i-i-s-umnyjj-dom-дом';
import IISUmnyjj_domКвитанцияModel from './models/i-i-s-umnyjj-dom-квитанция';
import IISUmnyjj_domМодельПУModel from './models/i-i-s-umnyjj-dom-модель-п-у';
import IISUmnyjj_domПоказаниеПУModel from './models/i-i-s-umnyjj-dom-показание-п-у';
import IISUmnyjj_domПомещениеСобственникаModel from './models/i-i-s-umnyjj-dom-помещение-собственника';
import IISUmnyjj_domПомещениеModel from './models/i-i-s-umnyjj-dom-помещение';
import IISUmnyjj_domПоставщикModel from './models/i-i-s-umnyjj-dom-поставщик';
import IISUmnyjj_domПриборУчетаModel from './models/i-i-s-umnyjj-dom-прибор-учета';
import IISUmnyjj_domСобственникModel from './models/i-i-s-umnyjj-dom-собственник';
import IISUmnyjj_domСотрудникModel from './models/i-i-s-umnyjj-dom-сотрудник';
import IISUmnyjj_domСтрокаКвитанцииModel from './models/i-i-s-umnyjj-dom-строка-квитанции';
import IISUmnyjj_domТарифModel from './models/i-i-s-umnyjj-dom-тариф';
import IISUmnyjj_domУКModel from './models/i-i-s-umnyjj-dom-у-к';
import IISUmnyjj_domУправляющаяКомпанияModel from './models/i-i-s-umnyjj-dom-управляющая-компания';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-umnyjj-dom-адресный-реестр': IISUmnyjj_domАдресныйРеестрModel,
    'i-i-s-umnyjj-dom-вид-услуги': IISUmnyjj_domВидУслугиModel,
    'i-i-s-umnyjj-dom-дом-поставщик': IISUmnyjj_domДомПоставщикModel,
    'i-i-s-umnyjj-dom-дом': IISUmnyjj_domДомModel,
    'i-i-s-umnyjj-dom-квитанция': IISUmnyjj_domКвитанцияModel,
    'i-i-s-umnyjj-dom-модель-п-у': IISUmnyjj_domМодельПУModel,
    'i-i-s-umnyjj-dom-показание-п-у': IISUmnyjj_domПоказаниеПУModel,
    'i-i-s-umnyjj-dom-помещение-собственника': IISUmnyjj_domПомещениеСобственникаModel,
    'i-i-s-umnyjj-dom-помещение': IISUmnyjj_domПомещениеModel,
    'i-i-s-umnyjj-dom-поставщик': IISUmnyjj_domПоставщикModel,
    'i-i-s-umnyjj-dom-прибор-учета': IISUmnyjj_domПриборУчетаModel,
    'i-i-s-umnyjj-dom-собственник': IISUmnyjj_domСобственникModel,
    'i-i-s-umnyjj-dom-сотрудник': IISUmnyjj_domСотрудникModel,
    'i-i-s-umnyjj-dom-строка-квитанции': IISUmnyjj_domСтрокаКвитанцииModel,
    'i-i-s-umnyjj-dom-тариф': IISUmnyjj_domТарифModel,
    'i-i-s-umnyjj-dom-у-к': IISUmnyjj_domУКModel,
    'i-i-s-umnyjj-dom-управляющая-компания': IISUmnyjj_domУправляющаяКомпанияModel
  },

  'application-name': 'Umnyjj_dom',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Umnyjj_dom',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Umnyjj_dom',
          title: 'Umnyjj_dom'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'umnyjj-dom': {
          caption: 'Umnyjj_dom',
          title: 'Umnyjj_dom',
          'i-i-s-umnyjj-dom-поставщик-l': {
            caption: 'Поставщик',
            title: ''
          },
          'i-i-s-umnyjj-dom-вид-услуги-l': {
            caption: 'Вид услуги',
            title: ''
          },
          'i-i-s-umnyjj-dom-собственник-l': {
            caption: 'Собственник',
            title: ''
          },
          'i-i-s-umnyjj-dom-тариф-l': {
            caption: 'Тариф',
            title: ''
          },
          'i-i-s-umnyjj-dom-показание-п-у-l': {
            caption: 'Показание ПУ',
            title: ''
          },
          'i-i-s-umnyjj-dom-помещение-l': {
            caption: 'Помещение',
            title: ''
          },
          'i-i-s-umnyjj-dom-дом-l': {
            caption: 'Дом',
            title: ''
          },
          'i-i-s-umnyjj-dom-модель-п-у-l': {
            caption: 'Модель ПУ',
            title: ''
          },
          'i-i-s-umnyjj-dom-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-umnyjj-dom-управляющая-компания-l': {
            caption: 'Управляющая компания',
            title: ''
          },
          'i-i-s-umnyjj-dom-дом-поставщик-l': {
            caption: 'Дом поставщик',
            title: ''
          },
          'i-i-s-umnyjj-dom-прибор-учета-l': {
            caption: 'Прибор учета',
            title: ''
          },
          'i-i-s-umnyjj-dom-адресный-реестр-l': {
            caption: 'Адресный реестр',
            title: ''
          },
          'i-i-s-umnyjj-dom-квитанция-l': {
            caption: 'Квитанция',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-umnyjj-dom-адресный-реестр-l': IISUmnyjj_domАдресныйРеестрLForm,
    'i-i-s-umnyjj-dom-вид-услуги-l': IISUmnyjj_domВидУслугиLForm,
    'i-i-s-umnyjj-dom-дом-l': IISUmnyjj_domДомLForm,
    'i-i-s-umnyjj-dom-дом-поставщик-l': IISUmnyjj_domДомПоставщикLForm,
    'i-i-s-umnyjj-dom-квитанция-l': IISUmnyjj_domКвитанцияLForm,
    'i-i-s-umnyjj-dom-модель-п-у-l': IISUmnyjj_domМодельПУLForm,
    'i-i-s-umnyjj-dom-показание-п-у-l': IISUmnyjj_domПоказаниеПУLForm,
    'i-i-s-umnyjj-dom-помещение-l': IISUmnyjj_domПомещениеLForm,
    'i-i-s-umnyjj-dom-поставщик-l': IISUmnyjj_domПоставщикLForm,
    'i-i-s-umnyjj-dom-прибор-учета-l': IISUmnyjj_domПриборУчетаLForm,
    'i-i-s-umnyjj-dom-собственник-l': IISUmnyjj_domСобственникLForm,
    'i-i-s-umnyjj-dom-сотрудник-l': IISUmnyjj_domСотрудникLForm,
    'i-i-s-umnyjj-dom-тариф-l': IISUmnyjj_domТарифLForm,
    'i-i-s-umnyjj-dom-управляющая-компания-l': IISUmnyjj_domУправляющаяКомпанияLForm,
    'i-i-s-umnyjj-dom-адресный-реестр-e': IISUmnyjj_domАдресныйРеестрEForm,
    'i-i-s-umnyjj-dom-вид-услуги-e': IISUmnyjj_domВидУслугиEForm,
    'i-i-s-umnyjj-dom-дом-e': IISUmnyjj_domДомEForm,
    'i-i-s-umnyjj-dom-дом-поставщик-e': IISUmnyjj_domДомПоставщикEForm,
    'i-i-s-umnyjj-dom-квитанция-e': IISUmnyjj_domКвитанцияEForm,
    'i-i-s-umnyjj-dom-модель-п-у-e': IISUmnyjj_domМодельПУEForm,
    'i-i-s-umnyjj-dom-показание-п-у-e': IISUmnyjj_domПоказаниеПУEForm,
    'i-i-s-umnyjj-dom-помещение-e': IISUmnyjj_domПомещениеEForm,
    'i-i-s-umnyjj-dom-поставщик-e': IISUmnyjj_domПоставщикEForm,
    'i-i-s-umnyjj-dom-прибор-учета-e': IISUmnyjj_domПриборУчетаEForm,
    'i-i-s-umnyjj-dom-собственник-e': IISUmnyjj_domСобственникEForm,
    'i-i-s-umnyjj-dom-сотрудник-e': IISUmnyjj_domСотрудникEForm,
    'i-i-s-umnyjj-dom-тариф-e': IISUmnyjj_domТарифEForm,
    'i-i-s-umnyjj-dom-управляющая-компания-e': IISUmnyjj_domУправляющаяКомпанияEForm
  },

});

export default translations;
