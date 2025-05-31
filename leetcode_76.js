var minWindow = function (s, t) {
  if (s.length < t.length) return "";

  const tMap = {};
  for (const char of t) {
    tMap[char] = (tMap[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let need = Object.keys(tMap).length;
  let have = 0;
  const window = {};

  let res = [-1, -1]; // indices
  let resLen = Infinity;

  while (right < s.length) {
    const c = s[right];
    window[c] = (window[c] || 0) + 1;

    if (tMap[c] && window[c] === tMap[c]) {
      have++;
    }

    // window válida
    while (have === need) {
      // atualiza menor janela
      if (right - left + 1 < resLen) {
        res = [left, right];
        resLen = right - left + 1;
      }

      // tenta encolher o início da janela
      const lChar = s[left];
      window[lChar]--;
      if (tMap[lChar] && window[lChar] < tMap[lChar]) {
        have--;
      }
      left++;
    }

    right++;
  }

  const [start, end] = res;
  return resLen === Infinity ? "" : s.slice(start, end + 1);
};

let s = "abc";
let t = "ab";

const output = minWindow(s, t);

console.log(output);
