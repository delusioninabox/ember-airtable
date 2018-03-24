import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('product');
  },

  setupController(controller/*, model*/) {
    controller.set('components', this.store.findAll('component'));
    this._super(...arguments);
  },

  actions: {
    saveProduct(product) {
      return product.save().then(() => {
        //return this.transitionTo('products');
      }, (error) => {
        // uncomment for debugging
        return error;
        //console.log('error', error);
      });
    }
  }
});

