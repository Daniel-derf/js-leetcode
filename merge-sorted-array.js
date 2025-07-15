/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const merged = [];

  let [p1, p2] = [0, 0];

  while (p1 < m || p2 < n) {
    if (nums1[p1] === undefined && nums2[p2] === undefined) break;

    const isNums1Finished = p1 >= m;
    const isNums2Finished = p2 >= n;

    if ((nums1[p1] <= nums2[p2] || (!isNums1Finished && isNums2Finished)) && !isNums1Finished) {
      merged.push(nums1[p1]);
      p1++;
    } else if ((nums2[p2] <= nums1[p1] || (!isNums2Finished && isNums1Finished)) && !isNums2Finished) {
      merged.push(nums2[p2]);
      p2++;
    } else break;
  }

  for (let i = 0; i < merged.length; i++) {
    nums1[i] = merged[i];
  }

  return nums1;
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;

const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);
