describe('primeGen(10)', function () {
  it('must equal [2,3,5,7]', function () {
    chai.expect(primeGen(10)).to.deep.equal([2, 3, 5, 7]);
  });
});
describe('primeGen(20)', function () {
  it('must equal [2,3,5,7,11,13,17,19]', function () {
    chai.expect(primeGen(20)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});
