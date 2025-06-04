/*
Given a string, return its longest substring without repeating characters
*/

function longestSubstring(s) {
  let [l, r] = [0, 0];

  const map = {};
  let maxLen = 0;

  while (r < s.length) {
    const char = s[r];

    while (map[char] && map[char] > 0) {
      const removedChar = s[l];

      map[removedChar]--;
      l++;
    }

    map[char] = 1;

    const curLen = r - l + 1;
    maxLen = Math.max(maxLen, curLen);

    r++;
  }

  return maxLen;
}

const input = "pwwkew";

const output = longestSubstring(input);

console.log(output);

// 26 ms
