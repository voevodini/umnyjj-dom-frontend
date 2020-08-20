import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-umnyjj-dom-строка-квитанции', 'Unit | Serializer | i-i-s-umnyjj-dom-строка-квитанции', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-umnyjj-dom-строка-квитанции',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-umnyjj-dom-адресный-реестр',
    'model:i-i-s-umnyjj-dom-вид-услуги',
    'model:i-i-s-umnyjj-dom-дом-поставщик',
    'model:i-i-s-umnyjj-dom-дом',
    'model:i-i-s-umnyjj-dom-квитанция',
    'model:i-i-s-umnyjj-dom-модель-п-у',
    'model:i-i-s-umnyjj-dom-показание-п-у',
    'model:i-i-s-umnyjj-dom-помещение-собственника',
    'model:i-i-s-umnyjj-dom-помещение',
    'model:i-i-s-umnyjj-dom-поставщик',
    'model:i-i-s-umnyjj-dom-прибор-учета',
    'model:i-i-s-umnyjj-dom-собственник',
    'model:i-i-s-umnyjj-dom-сотрудник',
    'model:i-i-s-umnyjj-dom-строка-квитанции',
    'model:i-i-s-umnyjj-dom-тариф',
    'model:i-i-s-umnyjj-dom-у-к',
    'model:i-i-s-umnyjj-dom-управляющая-компания',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
