/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let [sPointer, tPointer] = [0, 0];

  while (t[tPointer] !== undefined) {
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
    }

    tPointer++;
  }

  return s[sPointer] === undefined ? true : false;
};

const s = "abc";
const t = "ahbgdc";

const output = isSubsequence(s, t);

console.log(output);
