var assert = require('chai').assert;
var greet = require('./greet'); // import the greet function

describe('greet', function() {
  it('should return a greeting with the given name', function() {
    var result = greet('Janine');
    assert.equal(result, 'Hello, Janine');
  });
});
