var should = require('should');
var average = require('../lib/average');

describe('#average', () => {
  it('Should return the average of array', done => {
    var avg = average([1, 2, 3, 4]);
    avg.should.equal(2.5);
    done();
  });

  it('Should return NaN when array is empty', done => {
    var avg = average([]);
    isNaN(avg).should.be.true;
    done();
  });
});
