import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-umnyjj-dom-адресный-реестр-l');
  this.route('i-i-s-umnyjj-dom-адресный-реестр-e',
  { path: 'i-i-s-umnyjj-dom-адресный-реестр-e/:id' });
  this.route('i-i-s-umnyjj-dom-адресный-реестр-e.new',
  { path: 'i-i-s-umnyjj-dom-адресный-реестр-e/new' });
  this.route('i-i-s-umnyjj-dom-вид-услуги-l');
  this.route('i-i-s-umnyjj-dom-вид-услуги-e',
  { path: 'i-i-s-umnyjj-dom-вид-услуги-e/:id' });
  this.route('i-i-s-umnyjj-dom-вид-услуги-e.new',
  { path: 'i-i-s-umnyjj-dom-вид-услуги-e/new' });
  this.route('i-i-s-umnyjj-dom-дом-l');
  this.route('i-i-s-umnyjj-dom-дом-e',
  { path: 'i-i-s-umnyjj-dom-дом-e/:id' });
  this.route('i-i-s-umnyjj-dom-дом-e.new',
  { path: 'i-i-s-umnyjj-dom-дом-e/new' });
  this.route('i-i-s-umnyjj-dom-дом-поставщик-l');
  this.route('i-i-s-umnyjj-dom-дом-поставщик-e',
  { path: 'i-i-s-umnyjj-dom-дом-поставщик-e/:id' });
  this.route('i-i-s-umnyjj-dom-дом-поставщик-e.new',
  { path: 'i-i-s-umnyjj-dom-дом-поставщик-e/new' });
  this.route('i-i-s-umnyjj-dom-квитанция-l');
  this.route('i-i-s-umnyjj-dom-квитанция-e',
  { path: 'i-i-s-umnyjj-dom-квитанция-e/:id' });
  this.route('i-i-s-umnyjj-dom-квитанция-e.new',
  { path: 'i-i-s-umnyjj-dom-квитанция-e/new' });
  this.route('i-i-s-umnyjj-dom-модель-п-у-l');
  this.route('i-i-s-umnyjj-dom-модель-п-у-e',
  { path: 'i-i-s-umnyjj-dom-модель-п-у-e/:id' });
  this.route('i-i-s-umnyjj-dom-модель-п-у-e.new',
  { path: 'i-i-s-umnyjj-dom-модель-п-у-e/new' });
  this.route('i-i-s-umnyjj-dom-показание-п-у-l');
  this.route('i-i-s-umnyjj-dom-показание-п-у-e',
  { path: 'i-i-s-umnyjj-dom-показание-п-у-e/:id' });
  this.route('i-i-s-umnyjj-dom-показание-п-у-e.new',
  { path: 'i-i-s-umnyjj-dom-показание-п-у-e/new' });
  this.route('i-i-s-umnyjj-dom-помещение-l');
  this.route('i-i-s-umnyjj-dom-помещение-e',
  { path: 'i-i-s-umnyjj-dom-помещение-e/:id' });
  this.route('i-i-s-umnyjj-dom-помещение-e.new',
  { path: 'i-i-s-umnyjj-dom-помещение-e/new' });
  this.route('i-i-s-umnyjj-dom-поставщик-l');
  this.route('i-i-s-umnyjj-dom-поставщик-e',
  { path: 'i-i-s-umnyjj-dom-поставщик-e/:id' });
  this.route('i-i-s-umnyjj-dom-поставщик-e.new',
  { path: 'i-i-s-umnyjj-dom-поставщик-e/new' });
  this.route('i-i-s-umnyjj-dom-прибор-учета-l');
  this.route('i-i-s-umnyjj-dom-прибор-учета-e',
  { path: 'i-i-s-umnyjj-dom-прибор-учета-e/:id' });
  this.route('i-i-s-umnyjj-dom-прибор-учета-e.new',
  { path: 'i-i-s-umnyjj-dom-прибор-учета-e/new' });
  this.route('i-i-s-umnyjj-dom-собственник-l');
  this.route('i-i-s-umnyjj-dom-собственник-e',
  { path: 'i-i-s-umnyjj-dom-собственник-e/:id' });
  this.route('i-i-s-umnyjj-dom-собственник-e.new',
  { path: 'i-i-s-umnyjj-dom-собственник-e/new' });
  this.route('i-i-s-umnyjj-dom-сотрудник-l');
  this.route('i-i-s-umnyjj-dom-сотрудник-e',
  { path: 'i-i-s-umnyjj-dom-сотрудник-e/:id' });
  this.route('i-i-s-umnyjj-dom-сотрудник-e.new',
  { path: 'i-i-s-umnyjj-dom-сотрудник-e/new' });
  this.route('i-i-s-umnyjj-dom-тариф-l');
  this.route('i-i-s-umnyjj-dom-тариф-e',
  { path: 'i-i-s-umnyjj-dom-тариф-e/:id' });
  this.route('i-i-s-umnyjj-dom-тариф-e.new',
  { path: 'i-i-s-umnyjj-dom-тариф-e/new' });
  this.route('i-i-s-umnyjj-dom-управляющая-компания-l');
  this.route('i-i-s-umnyjj-dom-управляющая-компания-e',
  { path: 'i-i-s-umnyjj-dom-управляющая-компания-e/:id' });
  this.route('i-i-s-umnyjj-dom-управляющая-компания-e.new',
  { path: 'i-i-s-umnyjj-dom-управляющая-компания-e/new' });
});

export default Router;
