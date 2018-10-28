module.exports = function make(smth) {
  const arr = [];
  arr.push(smth);
  function f(...next) {
    if (typeof next[0] === 'function') {
      return arr.reduce(next[0]);
    }
    if (next.length > 1) {
      for (let i = 0; i < next.length; i += 1) {
        arr.push(next[i]);
      }
    } else {
      arr.push(next[0]);
    }
    return f;
  }
  return f;
};
