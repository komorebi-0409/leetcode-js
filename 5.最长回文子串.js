/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * 中心扩散思想
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const len = s.length
  if (!len) {
    return ""
  }
  let maxIndex = 0
  let maxLength = 1
  for (let i = 0; i < len; i++) {
    let curIndex = left = right = i
    // 寻找中间相等的部分：此处不用再遍历 right，因为整个字符遍历到相等部分最右边那个字符，会覆盖之前的
    while (left > 0) {
      if (s[left - 1] === s[curIndex]){
        left--
      } else {
        break
      }
    }
    // 寻找两边对应相等的部分
    while (left > 0 && right < len) {
      if (s[left - 1] === s[right + 1]) {
        left--
        right++
      } else {
        break
      }
    }
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1
      maxIndex = left
    }
  }
  return s.substr(maxIndex, maxLength)
};
// @lc code=end

