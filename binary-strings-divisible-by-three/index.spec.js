import sut from './index';

describe('isBinaryStringDivisibleByThree', function(){
  describe('Given a bitstring disibile by 3', () => {
    beforeEach(() => {
      this.bitstring = '11';
    });
    describe('When determining if the bitstring is divisible by 3', () => {
      beforeEach(() => {
        this.actual = sut(this.bitstring);
      });

      describe('it should return true', () => {
        this.actual.should.equal(true);
      });
    });
  });

  describe('Given a bitstring not disibile by 3', () => {
    beforeEach(() => {
      this.bitstring = '10';
    });
    describe('When determining if the bitstring is divisible by 3', () => {
      beforeEach(() => {
        this.actual = sut(this.bitstring);
      });

      describe('it should return false', () => {
        this.actual.should.equal(false);
      });
    });
  });
});
