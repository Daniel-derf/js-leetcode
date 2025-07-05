/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  for (let i = citations.length; i >= 0; i--) {
    let sufficientCitations = 0;

    for (let j = 0; j < citations.length; j++) {
      if (citations[j] >= i) sufficientCitations += 1;
    }

    if (sufficientCitations >= i) return i;
  }
};
