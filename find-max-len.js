/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let res = 0;
  const hash = { 0: 0, 1: 0 };

  for (let i = 0; i < nums.length; i++) {
    [hash[0], hash[1]] = [0, 0];

    const n = nums[i];

    if (!(n === 0 || n === 1)) continue;

    hash[n] = 1;

    for (let k = i + 1; k < nums.length; k++) {
      const newNumber = nums[k];

      if (newNumber === 0 || newNumber === 1) {
        hash[newNumber] = hash[newNumber] + 1;

        if (hash[0] === hash[1]) res = Math.max(res, hash[0] + hash[1]);
      }
    }
  }

  return res;
};

const input = [0, 1, 1, 1, 1, 1, 0, 0, 0];

const output = findMaxLength(input);

console.log(output);
