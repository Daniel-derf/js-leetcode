/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const OPENINGS = ["(", "{", "["];

  const hash = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const char of s) {
    stack.push(char);

    if (OPENINGS.includes(char)) {
      continue;
    }

    const removed = stack.pop();
    const lastChar = stack[stack.length - 1];

    if (hash[lastChar] !== removed) return false;

    stack.pop();
  }

  return true;
};

const s = "()";

const output = isValid(s);

console.log(output);
