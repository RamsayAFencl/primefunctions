describe('maxPrimeSum', () => {
  it('maxPrimeSum(10000) is faster than 50ms', function () {
    this.slow(0);
    this.timeout(50);
    // eslint-disable-next-line no-undef
    maxPrimeSum(10000);
  });

  it('maxPrimeSum(100000) is faster than 3000ms', function () {
    this.slow(0);
    this.timeout(3000);
    // eslint-disable-next-line no-undef
    maxPrimeSum(100000);
  });
});
