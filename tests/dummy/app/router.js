import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('inventories');
  this.route('products');
  this.route('new-product');
  this.route('new-component');
});

export default Router;
