import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-umnyjj-dom-собственник-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-umnyjj-dom-помещение-собственника+помещение':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'типПомещения',
            required: true,
            relationName: 'помещение',
            projection: 'ПомещениеL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
