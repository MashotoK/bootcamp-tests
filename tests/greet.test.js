const assert = require('chai').assert;
const greet = require('../greet.js'); // import the greet function

describe('greet', function() {
  it('should return a greeting with the given name', function() {
    const result = greet('Janine');
    assert.equal(result, 'Hello, Janine');
  });
});
