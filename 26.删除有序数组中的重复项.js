/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * 双指针,一个记录处理过的下标，一个记录当前遍历的下标
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const len = nums.length
  if (len === 0) {
    return 0
  }
  let left = 0,
    right = 1
  while (right < len) {
    // 利用数组是有序的特点比较
    if (nums[right] !== nums[left]){
      nums[++left] = nums[right]
    }
    right++
  }
  return left + 1
};
// @lc code=end

