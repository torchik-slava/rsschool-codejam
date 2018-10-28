module.exports = function sumOfOther(arr) {
  const sum = arr.reduce((acc, item) => acc + item);
  const result = arr.map(item => sum - item);
  return result;
};
