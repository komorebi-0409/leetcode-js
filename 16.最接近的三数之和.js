/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 *  无序的数组，任意的三个数都可能是最接近 target 的数，要枚举所有的情况，
 * 时间复杂度为 O(N³)，不符合要求。考虑将数组排序
 *  排序后，外层枚举到 i 时，设两个指针 left 和 right,当前程小于 target
 * 时，left 向右，反之 right 向左，可以有效的跳过很多情况
 *  此外，可以进行以下优化：
 *    1. 如果 nums[i] + nums[i + 1] + nums[i + 2] > target,则说明后面
 * 任意三个数的和都大于 target
 *    2. 如果和等于 target 直接返回
 *    3. 移动指针时，跳过相同的值 (感觉效果不明显)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((nums1, nums2) => nums1 - nums2)
  let best = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < nums.length - 2; i++) {
    let minSum = nums[i] + nums[i + 1] + nums[i + 2]
    // 优化 1
    if (minSum > target) {
      if (Math.abs(target - minSum) < Math.abs(target - best)){
        return minSum
      }
      return best
    }
    let left = i + 1,
      right = nums.length - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      // 优化 2
      if (sum === target) {
        return sum
      }
      if (Math.abs(target - sum) < Math.abs(target - best)) {
        best = sum
      }
      if (sum < target) {
        // 这里可做第 3 步优化
        left++
      } else if(sum > target) {
        right--
      }
    }
  }
  
  return best
};
// @lc code=end

