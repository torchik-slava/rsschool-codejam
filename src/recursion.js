module.exports = function recursion(obj, index, array) {
  const arr = array || [];
  const i = index || 0;
  if (!obj) return arr;
  if (arr[i]) {
    if (arr[i].length > 1) {
      arr[i].push(obj.value);
    } else {
      arr[i] = [arr[i]];
      arr[i].push(obj.value);
    }
  } else {
    arr.push(obj.value);
  }
  recursion(obj.left, i + 1, arr);
  recursion(obj.right, i + 1, arr);
  return arr;
};
