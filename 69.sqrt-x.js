/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start 
/**
 * 袖珍计算器算法：利用 e 的 ln x 等于 x
 * 即 Math.pow(x, 0.5) === Math.exp(0.5 * Math.log(x))
 * 
 * @param {number} x
 * @return {number}
 */
/* var mySqrt = function(x) {
  let res = Math.floor(Math.exp(0.5 * Math.log(x)))
  // 指数函数和对数函数的参数和返回值均为小数，因此运算过程中会存在误差，
  //如 x = 2147395600时，Math.exp(0.5 * Math.log(x))的计算结果与正确值
  //4634046340 相差 Math.pow(10, -11)
  return (res + 1) * (res + 1) <= x ? res + 1 : res
}; */

/**
 * 二分法：红蓝
 * @param {number} x 
 * @return {number}
 */
/* var mySqrt = function(x) {
  // 以下方法的范围是 [-1, x),所以 0 和 1要单独列出来
  if (x === 0 || x === 1) {
    return x
  }
  let l = -1
  let r = x
  while (l + 1 !== r) {
    let mid = Math.floor((l+r)/2)
    if (mid * mid <= x) {
      l = mid
    } else {
      r = mid
    }
  }
  return l
} */

/**
 * 牛顿迭代法：求根号a的算术平方根即求 f(x) = x² - a 的正根。对于 f(x) 上任一点 (x₀, f(x₀))处的切线斜率是
 * 2x₀,因此，此处切线与 x 轴的交点到点 (x₀, 0) 的距离为 f(x₀)/2x₀,也就是说 (x₀ - f(x₀)/2x₀, 0) 比 (x₀, 0)
 * 靠近 f(x) - a = 0 和 x 轴的交点，即 x₀ - f(x₀)/2x₀ 比 x₀更接近 f(x) - a = 0 的正根。
 * 将 f(x₀) = x₀² - a 代入得 (x₀ + x₀/a)/2
 * @param {number} x 
 * @returns {number}
 */
var mySqrt = function (x) {
  let ans = x
  while (ans * ans > x) {
    ans = Math.floor((ans + x / ans) / 2)
  }
  return ans
}
// @lc code=end


