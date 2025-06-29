var threeSum = function (nums) {
  const output = [];
  nums.sort((a, b) => a - b);

  const target = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        output.push([nums[i], nums[left], nums[right]]);
        left++;

        while (nums[left] === nums[left - 1]) left++;
      } else if (sum > target) {
        right--;

        while (nums[right] === nums[right + 1]) right--;
      } else if (sum < target) {
        left++;

        while (nums[left] === nums[left - 1]) left++;
      }
    }
  }

  return output;
};

const input = [-1, 0, 1, 2, -1, -4];

const output = threeSum(input);

console.log(output);
