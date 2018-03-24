import Controller from '@ember/controller';

export default Controller.extend({
  productId: null,

  actions: {
    setProduct(productId) {
      this.set('productId', productId);
    }
  }
});
