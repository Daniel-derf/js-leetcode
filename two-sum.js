var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const curVal = nums[i];

    const remaining = target - curVal;

    if (map[remaining] != undefined) return [map[remaining], i];

    map[curVal] = i;
  }
};

const nums = [3, 2, 4];
const target = 6;

const output = twoSum(nums, target);

console.log(output);
