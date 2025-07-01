/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let [min, max] = [1, 1];

  let res = Math.max(...nums);

  for (const num of nums) {
    if (num === 0) {
      [min, max] = [1, 1];
    }

    const tmp = max * num;

    max = Math.max(tmp, min * num, num);
    min = Math.min(min * num, tmp, num);

    res = Math.max(max, res);
  }

  return res;
};

const nums = [-4, -3, -2];

const output = maxProduct(nums);

console.log(output);
