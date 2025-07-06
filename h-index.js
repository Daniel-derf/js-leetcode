/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => b - a); // Ordena do maior para o menor

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] < i + 1) {
      return i;
    }
  }

  return citations.length;
};

const citations = [3, 0, 6, 1, 5];

const output = hIndex(citations);

console.log(output);
