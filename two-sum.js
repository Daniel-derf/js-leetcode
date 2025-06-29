var twoSum = function (nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    const remaining = target - num;

    if (hash[remaining] !== undefined) return [hash[remaining], i];

    hash[num] = i;
  }
};

const nums = [2, 7, 11, 15];
const target = 9;

const output = twoSum(nums, target);

console.log(output);
