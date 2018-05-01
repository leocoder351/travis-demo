var should = require('should');
var min = require('../lib/min');

describe('#min', () => {
  it('Should return the mininum in array', done => {
    var maninum = min([1, 10, 100, 1000]);
    maninum.should.equal(1);
    done();
  });

  it('Should return undefined when array is empty', done => {
    var mininum = min([]);
    (mininum === undefined).should.be.true;
    done();
  });
});
