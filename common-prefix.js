/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let maxPrefix = strs[0];

  for (const str of strs) {
    for (let i = 0; i <= str.length; i++) {
      if (maxPrefix[i] !== str[i]) {
        if (i === 0) return "";
        maxPrefix = maxPrefix.substring(0, i);
        break;
      }
    }
  }

  return maxPrefix;
};

let strs = ["ab", "a"];
let output = longestCommonPrefix(strs);
console.log(output);
