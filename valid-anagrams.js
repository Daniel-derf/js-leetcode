var groupAnagrams = function (strs) {
  const hash = {};

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    hash[i] = {};

    for (const c of str) {
      hash[i][c] = hash[i][c] ? hash[i][c] + 1 : 1;
    }
  }
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

groupAnagrams(strs);
