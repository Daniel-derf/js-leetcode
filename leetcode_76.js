var minWindow = function (s, t) {
  if (t.length > s.length) return "";

  const tMap = {};

  for (const char of t) {
    tMap[char] = tMap[char] ? tMap[char] + 1 : 1;
  }

  const need = Object.keys(tMap).length;

  const sMap = {};

  let have = 0;

  let minSubs = [-1, -1];

  let [l, r] = [0, 0];

  while (r < s.length) {
    const curVal = s[r];

    sMap[curVal] = sMap[curVal] ? sMap[curVal] + 1 : 1;

    if (tMap[curVal] && tMap[curVal] === sMap[curVal]) have++;

    while (have === need) {
      const curLen = r - (l + 1);
      const curMinLen = minSubs[1] - (minSubs[0] + 1);

      if (curMinLen > curLen || minSubs[0] === -1) {
        minSubs = [l, r];
      }

      const removedChar = s[l];
      l++;

      sMap[removedChar]--;

      if (tMap[removedChar] && tMap[removedChar] > sMap[removedChar]) have--;
    }

    r++;
  }

  if (minSubs[0] === -1) return "";

  return s.slice(minSubs[0], minSubs[1] + 1);
};

let s = "ADOBECODEBANC";
let t = "ABC";

const output = minWindow(s, t);

console.log(output);
