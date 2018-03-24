import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('component');
  },

  setupController(controller/*, model*/) {
    controller.set('products', this.store.findAll('product'));
    this._super(...arguments);
  },

  actions: {
    saveComponent(component, productId) {
      return this.get('store').findRecord('product', productId).then((p) => {
        component.set('product', p);
        return component.save().then(() => {
          return this.transitionTo('products');
        }, (error) => {
          // uncomment for debugging
          //return console.log('error', error);
          return error;
        });
      });
    }
  }
});


