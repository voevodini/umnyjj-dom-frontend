import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({});

export let ValidationRules = {};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АдресныйРеестрE', 'i-i-s-umnyjj-dom-адресный-реестр', {
    
  });

  modelClass.defineProjection('АдресныйРеестрL', 'i-i-s-umnyjj-dom-адресный-реестр', {
    
  });
};
