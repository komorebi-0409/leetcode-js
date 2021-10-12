/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/** 1. 暴力循环
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for(let j = i + 1;j < nums.length; j++){
      if (nums[i] + nums[j] === target){
        return [i, j]
      }
    }
  }
  return []
}; */

/**
 * 2. 空间换时间：使用map记录遍历过的数
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]}
 */
var twoSum = function(nums, target){
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let pre = target - nums[i]
    if (map.has(pre)) {
      return [map.get(pre), i]
    } else {
      map.set(nums[i], i)
    }
  }
}
// @lc code=end

