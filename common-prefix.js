/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs.sort();

  const firstW = strs[0];
  const lastW = strs[strs.length - 1];

  let max = firstW;

  const len = Math.max(max.length, lastW.length);

  for (let i = 0; i < len; i++) {
    if (max[i] !== lastW[i]) {
      if (i === 0) return "";

      max = max.substring(0, i);
      return max;
    }
  }

  return "";
};

let strs = ["a"];
let output = longestCommonPrefix(strs);
console.log(output);
