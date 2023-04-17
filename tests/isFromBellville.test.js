const assert = require('assert');
const isFromBellville = require('../isFromBellville.js');

describe('isFromBellville', function() {
  it('should return true if regNumber ends with "CY"', function() {
    const regNumber = 'CA 1234 CY';
    const result = isFromBellville(regNumber);
    assert.strictEqual(result, true);
  });
  
  it('should return false if regNumber does not end with "CY"', function() {
    const regNumber = 'CA 1234 CJ';
    const result = isFromBellville(regNumber);
    assert.strictEqual(result, false);
  });
});
