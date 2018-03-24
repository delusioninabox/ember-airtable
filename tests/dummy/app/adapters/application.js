import AirtableAdapter from "ember-airtable/adapter";

export default AirtableAdapter.extend({
  init() {
    this._super(...arguments);
    // API Version + Base ID
    this.namespace = 'v0/REPLACE_WITH_YOUR_BASE_ID',

    this.headers = {
      'Accept': 'application/json',
      // API Token Key
      'Authorization': `Bearer REPLACE_WITH_YOUR_API_KEY`
    }
  }
});