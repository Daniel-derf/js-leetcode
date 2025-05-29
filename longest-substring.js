/*
Given a string, return its longest substring without repeating characters
*/

function longestSubstring(string) {
  let [left, right] = [0, 0];
  let maxLength = 0;

  const set = new Set();

  while (right < string.length) {
    if (set.has(string[right])) {
      while (set.has(string[right])) {
        set.delete(string[left]);
        left += 1;
      }
    }

    set.add(string[right]);
    const dif = right - left + 1;
    maxLength = Math.max(maxLength, dif);

    right += 1;
  }

  return maxLength;
}

const input = "abcarol";

const output = longestSubstring(input);

console.log(output);
