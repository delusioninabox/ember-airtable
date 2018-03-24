import DS from 'ember';
import { computed } from '@ember/object';

export default DS.Model.extend({
  created: DS.attr('date'),
  product: DS.belongsTo('product', { async: true }),
  qty: DS.attr('number'),
  "restock-at": DS.attr('number'),
  needsRestocking: computed('qty', 'restock-at', function() {
    return this.get('qty') <= this.get('restock-at');
  })
});
