/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let goal = nums.length - 1;

  for (let idx = nums.length - 2; idx >= 0; idx--) {
    if (idx + nums[idx] >= goal) {
      goal = idx;
    }
  }

  return goal === 0;
};

const input = [3, 2, 1, 0, 4];

const output = canJump(input);

console.log(output);
