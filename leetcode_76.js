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

  while (!tChars.includes(sChars[l])) {
    l++;
    r++;

    if (l >= sChars.length) return "";
  }

  let substringArr = [sChars[l]];

  r++;

  const validSubstrings = [];

  // O(n²)
  while (r <= sChars.length - 1) {
    if (tChars.includes(sChars[r])) {
      substringArr.push(sChars[r]);

      if (hasAllCharacters({ substringArr, tChars })) {
        validSubstrings.push(sChars.slice(l, r + 1).join(""));

        l++;

        while (!tChars.includes(sChars[l])) {
          l++;

          if (l >= sChars.length) return validSubstrings.sort((a, b) => a.length - b.length)[0] || "";
        }

        substringArr = [sChars[l]];
      }
    }

    r++;
  }

  return validSubstrings.sort((a, b) => a.length - b.length)[0] || "";
};

let s = "BADOBECODEBABNC";
let t = "BB";

const output = minWindow(s, t);

console.log(output);
