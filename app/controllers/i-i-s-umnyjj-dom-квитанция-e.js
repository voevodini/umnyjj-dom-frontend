import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-umnyjj-dom-квитанция-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-umnyjj-dom-строка-квитанции+показаниеПУ':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'значение',
            required: true,
            relationName: 'показаниеПУ',
            projection: 'ПоказаниеПУL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-umnyjj-dom-строка-квитанции+тариф':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'тариф',
            projection: 'ТарифL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
