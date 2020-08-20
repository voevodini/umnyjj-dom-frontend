import { Serializer as КвитанцияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-umnyjj-dom-квитанция';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КвитанцияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
