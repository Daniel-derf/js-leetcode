function moveZeroes(nums) {
  let [i, j] = [0, 0];

  while (i < nums.length) {
    if (nums[i] != 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
    i++;
  }

  return nums;
}

const input = [0, 1, 2];

const input2 = [1, 2, 0];

const output = moveZeroes(input);
