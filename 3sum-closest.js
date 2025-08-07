var threeSumClosest = function (nums, target) {
  // número próximo de n = número que, uma vez que subtraia de n, resulte no menor valor absoluto
  nums.sort((a, b) => a - b);

  let min = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let [l, r] = [i + 1, nums.length - 1];

    while (l < r) {
      const res = Math.abs(target - Math.abs(nums[i] + nums[l] + nums[r]));

      if (res > min) {
        r--;

        while (nums[r + 1] === nums[r]) r--;
      }

      if (res === min) {
        r--;
        l++;

        while (nums[r + 1] === nums[r]) r--;
        while (nums[l - 1] === nums[l]) l++;
      }

      if (res < min) {
        min = res;

        r--;

        while (nums[r + 1] === nums[r]) r--;
      }
    }
  }

  return min;
};

const nums = [-1, 2, 1, -4];

const target = 1;

const output = threeSumClosest(nums, target);

console.log(output);
