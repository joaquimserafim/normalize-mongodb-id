'use strict';

var test = require('tape');
var normalizeId = require('./');

test('testing with "_id"', function(assert) {
  var doc = {
    '_id' : '53d98f133bb604791249ca99',
    'item' : 'ABC1',
    'category' : 'clothing'
  };

  var newDoc = normalizeId(doc);
  assert.ok(doc);
  assert.equal(typeof newDoc, 'object');
  assert.equal(!newDoc.id, false);
  assert.equal(!newDoc._id, true);
  assert.end();
});

test('testing without "_id"', function(assert) {
  var doc = {
    'id' : '53d98f133bb604791249ca99',
    'item' : 'ABC1',
    'category' : 'clothing'
  };

  var newDoc = normalizeId(doc);
  assert.ok(doc);
  assert.equal(typeof newDoc, 'object');
  assert.equal(!newDoc.id, false);
  assert.equal(!newDoc._id, true);
  assert.end();
});
