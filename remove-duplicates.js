var removeDuplicates = function (nums) {
  let [slow, fast] = [0, 1];

  if (!nums.length) return 0;

  let k = 1;

  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      k++;

      [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
    }
    fast++;
  }

  return k;
};

const nums = [1, 1, 2];

const output = removeDuplicates(nums);

console.log(output);
