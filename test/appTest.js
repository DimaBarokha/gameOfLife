const assert = require('chai').assert;
const index = require('../src/js/common.js');

describe('Index',function () {
  it('app should return hello',function () {
    assert.equal(index(), 'hello');
  });
});
