function fibonacci(n) {
  const array = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      array.push(i);
      continue;
    }

    const value = array[i - 2] + array[i - 1];
    array.push(value);
  }

  return array;
}

const input = 10;

const output = fibonacci(input);

console.log(output);
