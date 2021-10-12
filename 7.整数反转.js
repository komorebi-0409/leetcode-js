/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/** 
 * 利用 parseInt 和数组的 reverse 方法
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result = parseInt(x.toString().split("").reverse().join(""))
  // 边界情况
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1){
    return 0
  }
  return x < 0 ? (-result) : result
};
// @lc code=end

