/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const set = new Set(nums);
  let longest = 1;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let length = 1;

      while (set.has(num + length)) {
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
};

const nums = [100, 4, 200, 1, 1, 3, 2];

const output = longestConsecutive(nums);

console.log(output);
