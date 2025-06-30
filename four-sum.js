var fourSum = function (nums, target) {
  const output = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let k = i + 1; k < nums.length; k++) {
      if (nums[k] === nums[k - 1]) continue;

      let [left, right] = [k + 1, nums.length - 1];

      while (left < right) {
        const sum = nums[i] + nums[k] + nums[left] + nums[right];

        if (sum === target) {
          output.push([nums[i], nums[k], nums[left], nums[right]]);

          left++;
          right--;

          while (nums[left - 1] === nums[left]) left++;
          while (nums[right + 1] === nums[right]) right--;
        } else if (sum < target) {
          left++;

          while (nums[left - 1] === nums[left]) left++;
        } else {
          right--;

          while (nums[right + 1] === nums[right]) right--;
        }
      }
    }
  }

  return output;
};

const nums = [1, 0, -1, 0, -2, 2];
const target = 0;

const output = fourSum(nums, target);

console.log(output);
