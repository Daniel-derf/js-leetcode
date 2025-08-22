function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);

  let output;
  let minDistance = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let l = i + 1,
      r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      const distance = Math.abs(target - sum);

      if (distance < minDistance) {
        output = sum;
        minDistance = distance;
      }

      if (sum > target) {
        r--;
      } else if (sum < target) {
        l++;
      } else {
        return target;
      }
    }
  }

  return output;
}

const nums = [-1, 2, 1, -4];
const target = 1;

const output = threeSumClosest(nums, target);

console.log(output);
