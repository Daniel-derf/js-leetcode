/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const hash = {};

  for (let i = 0; i < nums; i++) {
    const num = nums[i];

    if (hash[num] !== undefined) {
      const indices = hash[num].indices;

      for (const idx of indices) {
        if (Math.abs(idx - i) <= k) {
          return true;
        }
      }
    } else {
      hash[num] = {
        indices: [],
      };
    }

    hash[num].indices.push(i);
  }

  return false;
};

const nums = [1, 2, 3, 1, 2, 3];

const k = 2;

const output = containsNearbyDuplicate(nums, k);
