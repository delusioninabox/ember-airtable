<<<<<<< HEAD
# ember-airtable

[![NPM](https://nodei.co/npm/ember-airtable.png)](https://npmjs.org/package/ember-airtable)

![Download count all time](https://img.shields.io/npm/dt/ember-airtable.svg) [![Ember Observer Score](https://emberobserver.com/badges/ember-airtable.svg)](https://emberobserver.com/addons/ember-airtable) [![Build Status](https://travis-ci.org/benoror/ember-airtable.svg?branch=master)](https://travis-ci.org/benoror/ember-airtable) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

<table>
  <tr>
    <td>
      <img src="https://cloud.githubusercontent.com/assets/119117/14939460/966c23d0-0f0d-11e6-89b1-59d673ac28ee.png" />
    </td>
    <td>
      <img src="https://cloud.githubusercontent.com/assets/119117/14939463/ad25f15a-0f0d-11e6-9a12-53889f893ccc.png" />
      <h1 align="center"><a href="https://airtable.com">Airtable</a></h1>
    </td>
  </tr>
</table>

Ember addon for [Airtable](https://airtable.com/) APIs

**Dummy app**: https://github.com/benoror/ember-airtable/tree/master/tests/dummy/app

**Medium post**: https://medium.com/@benoror/creating-an-ember-addon-for-airtable-api-d9e38d7bef97#.33q0r7hhm

*Originally based on: https://github.com/benoror/fieldbook-app

# Usage

## Install

```
ember install ember-airtable
```

## Adapter

Use **AirtableAdapter** as you application's main adapter:

##### **`adapters/application.js`**:

```JavaScript
import AirtableAdapter from "ember-airtable/adapter";

export default AirtableAdapter.extend({

  // API Version + Base ID
  namespace: 'v0/app_YOUR_AIRTABLE_BASE_KEY',

  headers: {
    'Accept': 'application/json',
    // API Token
    'Authorization': `Bearer key_YOUR_AIRTABLE_API_KEY`
  }
});

```

## Serializer

Use **AirtableSerializer** as you application's main serializer:

##### **`serializers/application.js`**:

```JavaScript
import AirtableSerializer from "ember-airtable/serializer";

export default AirtableSerializer.extend();

```

## Models

Your model's attributes should be named with camel case (i.e. `thisFieldName`). If your table has a column named `Name` (with the first letter capitalized), the attribute in your model must *also* be capitalized (i.e. `Name` in both). **Keep the names consistent**.

If you want to skip persistance of certain attributes (ex. formula columns) add the `readOnly` option:

##### **`models/product.js`**:

```JavaScript
import DS from 'ember-data';

export default DS.Model.extend({
  formula: DS.attr('string', { readOnly: true })
});

```

## Querying Airtable API

You can use all of the [API features](https://airtable.com/api) when querying Airtable:

##### **`routes/products.js`**:

The table in your airtable base should be pluralized. For example, below we are querying for our `product` model -- so in AirTable, our table should be title `products`. (Unlike the fields, this is case insensitive.)

```JavaScript
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('product', {
      // Only data for fields whose names are in this list will be included in the records.
      fields: ['name', 'description'],
      // A formula used to filter records.
      filterByFormula: "NOT({name} = 'MacBook')",
      // The maximum total number of records that will be returned.
      maxRecords: 50,
      // The number of records returned in each request.
      pageSize: 10,
      // A list of sort objects that specifies how the records will be ordered.
      sort: [{field: "name", direction: "desc"}],
      // The name or ID of a view in the table. 
      view: 'active_products'
    });
  }
});
```

# Development
=======
my-addon
==============================================================================

[Short description of the addon.]
>>>>>>> 8f13148... message

Installation
------------------------------------------------------------------------------

```
ember install my-addon
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`

### Linting

<<<<<<< HEAD
* `ember server`
* Visit your app at http://localhost:4200.
=======
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests
>>>>>>> 8f13148... message

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
