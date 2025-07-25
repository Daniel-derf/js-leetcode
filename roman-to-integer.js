/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      if (s[i + 1] === "V") {
        sum += 4;
        i++;
        continue;
      } else if (s[i + 1] === "X") {
        sum += 9;
        i++;
        continue;
      } else {
        sum += 1;
      }
    }
    if (s[i] === "V") {
      sum += 5;
    }
    if (s[i] === "X") {
      if (s[i + 1] === "L") {
        sum += 40;
        i++;
        continue;
      } else if (s[i + 1] === "C") {
        sum += 90;
        i++;
        continue;
      } else {
        sum += 10;
      }
    }
    if (s[i] === "L") {
      sum += 50;
    }
    if (s[i] === "C") {
      if (s[i + 1] === "D") {
        sum += 400;
        i++;
        continue;
      } else if (s[i + 1] === "M") {
        sum += 900;
        i++;
        continue;
      } else {
        sum += 100;
      }
    }
    if (s[i] === "D") {
      sum += 500;
    }
    if (s[i] === "M") {
      sum += 1000;
    }
  }

  return sum;
};
