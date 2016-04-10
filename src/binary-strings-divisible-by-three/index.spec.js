import expect from 'expect';
import sut from './index';

describe('isBinaryStringDivisibleByThree', () => {
  let bitstring;
  let actual;
  describe('Given a bitstring disibile by 3', () => {
    beforeEach(() => {
      bitstring = '11';
    });
    describe('When determining if the bitstring is divisible by 3', () => {
      beforeEach(() => {
        actual = sut(bitstring);
      });
      it('should return true', () => {
          expect(actual).toEqual(true);
      });
    });
  });

  describe('Given a bitstring not disibile by 3', () => {
    beforeEach(() => {
      bitstring = '10';
    });
    describe('When determining if the bitstring is divisible by 3', () => {
      beforeEach(() => {
        actual = sut(bitstring);
      });
      it('should return false', () => {
          expect(actual).toEqual(false);
      });
    });
  });

  describe('Given every bitstring between x and y', () => {
    let x;
    let y;
    beforeEach(() => {
      x = 0;
      y = 50;
    });
    describe('When determining if the bitstring is a false negative', () => {
      it('should return true when divisible by 3 and false otherwise', () => {
          for (var i = x; i < y; i++){
            actual = sut(i.toString(2));
            if (i % 3 === 0 && !actual)
              throw new Error(i + ' is disible by 3, but the bitstring ' + i.toString(2) + ' was rejected by the machine')
          };
      });
    });
  });

  describe('Given every bitstring between x and y', () => {
    let x;
    let y;
    beforeEach(() => {
      x = 0;
      y = 50;
    });
    describe('When determining if the bitstring is a false positive', () => {
      it('should return true when divisible by 3 and false otherwise', () => {
          for (var i = x; i < y; i++){
            actual = sut(i.toString(2));
            if (i % 3 !== 0 && actual)
              throw new Error(i + ' is not disible by 3, but the bitstring ' + i.toString(2) + ' was accepted by the machine')
          };
      });
    });
  });
});
