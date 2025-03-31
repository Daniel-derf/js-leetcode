import assert from "node:assert";

var twoSum = function (nums, target) {
  const hashmap = new Map();

  for (const [idx, num] of nums.entries()) {
    const complement = target - num;

    if (hashmap.has(complement)) return [idx, hashmap.get(complement)];

    hashmap.set(num, idx);
  }
};

// Teste 1: Caso básico
assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [1, 0], "Teste 1 falhou");

// Teste 2: Outro caso
assert.deepStrictEqual(twoSum([3, 2, 4], 6), [2, 1], "Teste 2 falhou");

// Teste 3: Caso com números negativos
assert.deepStrictEqual(twoSum([-3, 4, 3, 90], 0), [2, 0], "Teste 3 falhou");
