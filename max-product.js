/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let largestProduct = nums[0];
  let min = 1,
    max = 1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    max = Math.max(max * num, min * num, num);
    min = Math.min(max * num, min * num, num);

    largestProduct = Math.max(max, largestProduct);
  }

  return largestProduct;
};

const nums = [-4, -3, -2];

const output = maxProduct(nums);

console.log(output);
