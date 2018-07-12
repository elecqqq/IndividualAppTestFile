var add = require('../src/add.js');
var expect = require('chai').expect;

describe('addition test', function() {
  it('add 2 to 1 should be 3', function() {
    expect(add(2, 1)).to.be.equal(3);
  });

  it('add any number to 0 should be itself', function() {
    expect(add(1, 0)).to.be.equal(1);
  });
});
