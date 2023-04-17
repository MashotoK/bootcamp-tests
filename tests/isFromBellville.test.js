var assert = require('chai').assert;
const isFromBellville = require('../isFromBellville');

describe('isFromBellville', function() {
  it('should return true for a registration number from Bellville', function() {
    var result = isFromBellville('CY 123 CY');
    assert.isTrue(result);
  });

  it('should return false for a registration number not from Bellville', function() {
    var result = isFromBellville('CA 123 GP');
    assert.isFalse(result);
  });
});
