import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addComponent(componentId) {
      let component = this.store.peekRecord('component', componentId);
      let product = this.get('model');
      product.get('components').pushObject(component);
    }
  }
});

