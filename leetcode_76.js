var minWindow = function (s, t) {
  if (s.length < t.length) return "";

  const tMap = {};

  for (const c of t) tMap[c] = tMap[c] ? tMap[c] + 1 : 1;

  const need = Object.keys(tMap).length;
  let have = 0;

  let [minL, minR] = [-1, -1];
  let minLen = Infinity;

  const sMap = {};

  let [l, r] = [0, 0];

  while (r < s.length) {
    const val = s[r];

    sMap[val] = sMap[val] ? sMap[val] + 1 : 1;

    if (tMap[val] && tMap[val] === sMap[val]) {
      have++;
    }

    while (have === need) {
      const curLen = r - l + 1;

      if (minLen > curLen) {
        minL = l;
        minR = r;

        minLen = curLen;
      }

      const curVal = s[l];

      sMap[curVal]--;

      if (tMap[curVal] > sMap[curVal]) have--;

      l++;
    }

    r++;
  }

  return s.slice(minL, minR + 1) || "";
};

let s = "ADOBECODEBANC";
let t = "ABC";

const output = minWindow(s, t);

console.log(output);
