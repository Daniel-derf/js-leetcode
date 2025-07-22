var jump = function (nums) {
  let [l, r] = [0, 0];
  let steps = 0;

  while (r < nums.length - 1) {
    let max = 0;

    for (let i = l; i <= r; i++) {
      max = Math.max(max, nums[l]);
    }

    l = r + 1;
    r += max;

    steps++;
  }

  return steps;
};

const nums = [2, 0, 2, 0, 1];

const output = jump(nums);

console.log(output);
