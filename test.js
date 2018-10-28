const assert = require('assert');
const sumOfOther = require('./src/sumOfOther');
const make = require('./src/make');

describe('tests for sumOfOther', () => {
  it('1 test', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });
  it('2 test', () => {
    assert.deepEqual(sumOfOther([2, 3]), [3, 2]);
  });
  it('3 test', () => {
    assert.deepEqual(sumOfOther([2]), [0]);
  });
  it('4 test', () => {
    assert.deepEqual(sumOfOther([2, -3, 4, -1]), [0, 5, -2, 3]);
  });
});
describe('tests for make', () => {
  function sum(a, b) {
    return a + b;
  }
  function differ(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  function power(a, b) {
    return (a ** b);
  }
  it('sum test', () => {
    assert.deepEqual(make(15)(34, 21, 666)(41)(sum), 777);
  });
  it('differ test', () => {
    assert.deepEqual(make(15)(34, 21, 666)(41)(differ), -747);
  });
  it('multiply test', () => {
    assert.deepEqual(make(1)(3, 2, 6)(4)(multiply), 144);
  });
  it('divide test', () => {
    assert.deepEqual(make(1500)(3, 5)(1, 10)(divide), 10);
  });
  it('power test', () => {
    assert.deepEqual(make(2)(2)(3, 1)(power), 64);
  });
});
