const hasAllCharacters = ({ substringArr, tChars }) => {
  const tCharsHash = {};
  const substringArrHash = {};

  // cria o hash dos tChars
  for (const char of tChars) {
    if (tCharsHash[char]) tCharsHash[char] += 1;
    else tCharsHash[char] = 1;
  }

  // cria o hash dos substringArrs
  for (const char of substringArr) {
    if (tCharsHash[char] && substringArrHash[char]) substringArrHash[char] += 1;
    if (tCharsHash[char] && !substringArrHash[char]) substringArrHash[char] = 1;
  }

  for (const key of Object.keys(tCharsHash)) {
    if (substringArrHash[key] && substringArrHash[key] >= tCharsHash[key]) continue;
    else return false;
  }

  return true;
};

var minWindow = function (s, t) {
  let [l, r] = [0, 0];

  const sChars = s.split("");
  const tChars = t.split("");

  if (tChars.length > sChars.length) return "";

  if (tChars.length === 1) return sChars.includes(tChars[0]) ? tChars[0] : "";

  if (hasAllCharacters({ substringArr: sChars, tChars }) && hasAllCharacters({ substringArr: tChars, tChars: sChars }))
    return sChars.join("");

  while (!tChars.includes(sChars[l])) {
    l++;
    r++;

    if (l >= sChars.length) return "";
  }

  let substringArr = [sChars[l]];

  if (sChars.length === 1) return sChars[0] === t ? t : "";

  if (sChars.length > 2) r++;

  const validSubstrings = [];
  const rLimit = sChars.length - 1 || 1;

  // O(n²)
  while (r <= rLimit + 1) {
    const tCharsIdx = sChars.length !== 1 ? r : 0;

    if (tChars.includes(sChars[tCharsIdx])) {
      if (sChars.length !== 1) substringArr.push(sChars[tCharsIdx]);
    }

    if (hasAllCharacters({ substringArr, tChars })) {
      const tCharsIdx = r + 1;

      const validSubstring = sChars.slice(l, tCharsIdx).join("") || sChars[tCharsIdx];

      validSubstrings.push(validSubstring);

      l++;

      while (!tChars.includes(sChars[l])) {
        l++;

        if (l >= sChars.length) return validSubstrings.sort((a, b) => a.length - b.length)[0] ?? "";
        // if (l >= sChars.length) return validSubstrings;
      }

      substringArr = [sChars[l]];
      r = l + 1;

      continue;
    }

    r++;
  }

  return validSubstrings.sort((a, b) => a.length - b.length)[0] ?? "";
  // return validSubstrings;
};

let s = "abc";
let t = "ab";

const output = minWindow(s, t);

console.log(output);
