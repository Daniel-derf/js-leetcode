function flatArray(array) {
  let newArray = [];

  for (const num of array) {
    if (Array.isArray(num)) {
      newArray.push(...flatArray(num));
    } else newArray.push(num);
  }

  return newArray;
}

const input = [1, 2, [1, 2, [1, 2]]];

const output = flatArray(input);

console.log(output);
