/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m = nums.length - nums1.length
 * @param {number[]} nums2
 * @param {number} n nums2.length
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // 由于是升序，可从后往前遍历，将 nums1 中的最大数和 nums 中的最大数中
  // 较大的那个放到 nums1 的最后
  while (n > 0 && m > 0) {
    if (nums1[m - 1] < nums2[n - 1]) {
      nums1[m + n - 1] = nums2[n - 1]
      n--
    } else {
      nums1[m + n - 1] = nums1[m - 1]
      m--
    }
  }
  // 如果 nums2 没有合并完
  if (n > 0) {
    for (; n > 0; n--) {
      nums1[n - 1] = nums2[n - 1]
    }
  }
};
// @lc code=end

