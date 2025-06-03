var minWindow = function (s, t) {
  if (t.length > s.length) return "";

  const tMap = {};

  for (const c of t) {
    tMap[c] = tMap[c] ? tMap[c] + 1 : 1;
  }

  const need = Object.keys(tMap).length;
  let have = 0;

  let minSubstringPointers = [-1, -1];
  let minSubstringLen = Infinity;

  let [l, r] = [0, 0];

  const sMap = {};

  while (r < s.length) {
    const c = s[r];
    sMap[c] = sMap[c] ? sMap[c] + 1 : 1;

    if (tMap[c] && sMap[c] === tMap[c]) have++;

    while (have === need) {
      const curSubLen = r - l + 1;

      if (curSubLen < minSubstringLen) {
        minSubstringLen = curSubLen;
        minSubstringPointers = [l, r];
      }

      const removedChar = s[l];

      sMap[removedChar]--;
      if (tMap[removedChar] && sMap[removedChar] < tMap[removedChar]) have--;

      l++;
    }

    r++;
  }

  const [minL, minR] = minSubstringPointers;

  return s.slice(minL, minR + 1) || "";
};

let s = "ADOBECODEBANC";
let t = "ABC";

const output = minWindow(s, t);

console.log(output);
