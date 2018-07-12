var multiply = require('../../src/multiply');
var expect = require('chai').expect;

describe('multiply testing', function() {
  it('1 times 2 should be 2', function() {
    expect(multiply(1, 2)).to.be.equal(2);
  });
})
