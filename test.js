const assert = require('assert');
const sumOfOther = require('./src/sumOfOther');
const make = require('./src/make');
const recursion = require('./src/recursion');

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
describe('tests for recursion', () => {
  const tree = {
    value: 100,
    left: {
      value: 90,
      left: { value: 70 },
      right: { value: 99 },
    },
    right: {
      value: 120,
      left: { value: 110 },
      right: { value: 130 },
    },
  };
  const myTree = {
    value: 100,
    left: {
      value: 90,
      left: {
        value: 70,
        left: { value: 50 },
        right: { value: 80 },
      },
      right: { value: 99 },
    },
    right: {
      value: 120,
      right: { value: 130 },
    },
  };
  it('recursion test 1', () => {
    assert.deepEqual(recursion(tree), [100, [90, 120], [70, 99, 110, 130]]);
  });
  it('recursion test 2', () => {
    assert.deepEqual(recursion(myTree), [100, [90, 120], [70, 99, 130], [50, 80]]);
  });
});
