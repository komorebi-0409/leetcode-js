/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let sum = i = 0
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }
  while (i < s.length) {
    if (!map[s[i + 1]] || map[s[i]] >= map[s[i + 1]]) {
      sum += map[s[i]]
    } else{
      sum += map[s.substr(i, 2)]
      i++
    }
    i++
  }
  return sum
};
// @lc code=end

