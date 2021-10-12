/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * 1. 转化为字符串，使用“双指针”
 * @param {number} x
 * @return {boolean}
 */
/* var isPalindrome = function(x) {
  let s = x.toString(),
    i = 0
  while(i < s.length - i - 1) {
    if (s[i] !== s[s.length - i - 1]){
      return false
    }
    i++
  }
  return true
}; */

/**
 * 
 * @param {number} x 
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 小于0返回false
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }
  let revertedNumber = 0
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10
    x = Math.floor(x / 10)
  }
  return x === revertedNumber || x === Math.floor(revertedNumber / 10)
}
// @lc code=end

