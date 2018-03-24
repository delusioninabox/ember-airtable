import { moduleForModel, test } from 'ember-qunit';
import { run } from '@ember/runloop';

moduleForModel('product', 'Unit | Serializer | product', {
  needs: ['serializer:application',
          'model:product',
          'model:inventory',
          'model:component']

  //beforeEach() {
    //this.mockServer = new Pretender(function() {
      //this.post('/products', function() {
        //const response = {
          //records: [productMock]
        //};
        //return [200, { "Content-Type": "application/json" }, JSON.stringify(response)];
      //});

      //// ToDo: put, delete

    //});
  //},

  //afterEach() {
    //this.mockServer.shutdown();
  //}
});

test('it serializes records', function(assert) {
  let record = this.subject();
  let serializedRecord;

  run(function(){
    record.set('name', 'testName');
    record.set('formula_readonly', 'testreadonly');
    serializedRecord = record.serialize();
    assert.ok(serializedRecord);
    assert.equal(serializedRecord['name'], 'testName');
    assert.equal(serializedRecord['formula_readonly'], undefined);
  });

  //run(function(){
    //record.save();
  //});

  //run(function(){
    //let [ request ] = mockServer.handledRequests;
    //let body = request.requestBody;
    //let requestPayload = JSON.parse(body);
    //let expectedJSON = [> JSON <]
      //assert.deepEqual(requestPayload, expectedJSON);
  //});

});
