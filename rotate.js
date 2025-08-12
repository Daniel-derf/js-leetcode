function rotate(nums, k) {
  const len = nums.length;
  k = k % len;

  if (k === 0 || len === 0) return;

  function invert(l, r) {
    while (l < r) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r--;
    }
  }

  invert(0, len - 1);
  invert(0, k - 1);
  invert(k, len - 1);
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

rotate(nums, k);

console.log(nums);
