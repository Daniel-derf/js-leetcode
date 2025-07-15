/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let res = Math.max(...nums);

  let [maxVal, minVal] = [1, 1];

  for (const num of nums) {
    if (num === 0) {
      [maxVal, minVal] = [1, 1];
    }

    const tmp = maxVal * num;

    maxVal = Math.max(maxVal * num, minVal * num, num);
    minVal = Math.min(tmp, minVal * num, num);

    res = Math.max(res, maxVal);
  }

  return res;
};

const nums = [2, 3, -2, 4];

const output = maxProduct(nums);

console.log(output);
