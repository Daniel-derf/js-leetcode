/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let [l, r] = [0, 0];

  let sum = 0;
  let minLen = Infinity;

  while (r < nums.length) {
    const element = nums[r];

    sum += element;

    while (sum >= target) {
      minLen = Math.min(r + 1 - l, minLen);

      sum -= nums[l];
      l++;
    }

    r++;
  }

  return minLen === Infinity ? 0 : minLen;
};

const nums = [2, 3, 1, 2, 4, 3];
const target = 7;

const output = minSubArrayLen(target, nums);

console.log(output);
