/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let res = Math.max(...nums);

  let [min, max] = [1, 1];

  for (const num of nums) {
    if (num === 0) {
      [min, max] = [1, 1];
    }

    const tmp = max * num;

    max = Math.max(tmp, min * num, num);
    min = Math.min(tmp, min * num, num);

    res = Math.max(res, max);
  }

  return res;
};

const nums = [2, 3, -2, 4];

const output = maxProduct(nums);

console.log(output);
