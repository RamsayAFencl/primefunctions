describe('primeGen', () => {
  it('primeGen(10) = [2,3,5,7]', () => {
    chai.expect(primeGen(10)).to.deep.equal([2, 3, 5, 7]);
  });

  it('primeGen(20) = [2,3,5,7,11,13,17,19]', () => {
    chai.expect(primeGen(20)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});

describe('cumulativeSum', () => {
  it('cumulativeSum([1,2,3,4]) = [1,3,6,10]', () => {
    chai.expect(cumulativeSum([1, 2, 3, 4])).to.deep.equal([1, 3, 6, 10]);
  });

  it('cumulativeSum([10,11,12,13,14]) = [10,21,33,46,60]', () => {
    chai.expect(cumulativeSum([10, 11, 12, 13, 14])).to.deep.equal([10, 21, 33, 46, 60]);
  });
});
