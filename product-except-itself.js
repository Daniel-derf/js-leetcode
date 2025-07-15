/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const output = Array(nums.length);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] = prefix;

    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= suffix;
    suffix *= nums[i];
  }

  return output;
};

const input = [1, 2, 3, 4];

const output = productExceptSelf(input);

console.log(output);
