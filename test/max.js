var should = require('should');
var max = require('../lib/max');

describe('#max', () => {
  it('Should return the maxinum in array', done => {
    var maxinum = max([1, 10, 100, 1000]);
    maxinum.should.equal(1000);
    done();
  });

  it('Should return undefined when array is empty', done => {
    var maxinum = max([]);
    (maxinum === undefined).should.be.true;
    done();
  });
});
