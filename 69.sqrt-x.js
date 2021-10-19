/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start 
/**
 * 袖珍计算器算法：利用 e 的 ln x 等于 x
 * 即 Math.pow(x, 0.5) === Math.exp(0.5 * Math.log(x))
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let res = Math.floor(Math.exp(0.5 * Math.log(x)))
  return (res + 1) * (res + 1) <= x ? res + 1 : res
};


// @lc code=end

