/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let [left, right] = [0, 0];

  while (right < nums.length) {
    if (nums[right] != 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
};

const input = [1, 0, 3, 12, 0];

const output = moveZeroes(input);
