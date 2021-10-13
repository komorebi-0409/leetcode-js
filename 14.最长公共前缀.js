/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * 纵向遍历：遍历数组，看其它字符串的每一位是否和strs的相同，找出公共字符串的长度
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const length = strs[0].length
  let count = 0
  loopI: for (let i = 0; i < length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        break loopI
      }
    }
    count ++
  }
  return strs[0].substr(0, count)
};

/**
 * 横向遍历：strs[0] 和 strs [1]的前缀 pre1, 再找 pre1 和 strs[2] 和前缀......
 * @param {string[]} strs 
 * @returns {string}
 */
/* var longestCommonPrefix = function (strs) {
  let commonPrefixStr = strs[0]
  for (let i = 1; i < strs.length; i++) {
    commonPrefixStr = commonPrefix(commonPrefixStr, strs[i])
    if (!commonPrefixStr.length) {
      break
    }
  }
  return commonPrefixStr
}

const commonPrefix = (str1, str2) => {
  const l = Math.min(str1.length, str2.length)
  let count = 0
  while (count < l && str1[count] === str2[count]) {
    count++
  }
  return str1.substr(0, count)
}*/
// @lc code=end

