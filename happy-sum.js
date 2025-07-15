/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  const hash = {};

  try {
    const res = recursiveIsHappy(n, hash);

    return res;
  } catch {
    return false;
  }
}

function recursiveIsHappy(n, hash) {
  if (hash[n] !== undefined) {
    if (typeof hash[n] === "function") {
      hash[n] = hash[n]();
    }

    return hash[n];
  }

  const strN = String(n);

  let sum = 0;

  for (const c of strN) {
    sum += Number(c) ** 2;
  }

  hash[n] = sum === 1 ? true : () => recursiveIsHappy(sum, hash);

  console.log(n);

  if (sum === 1) return true;

  return recursiveIsHappy(sum, hash);
}

const input = 2;

const output = isHappy(input);

console.log(output);
