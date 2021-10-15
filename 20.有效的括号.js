/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * 1. 两两匹配，所以长度为奇数返回false
 * 2. 左→右遍：只有遇到右括号时，才能判断有没有左边的括号相对应。所以可以将遇到的
 *    所有的左括号用数组收集起来，一旦遇到右括号，看是不是和最新收集到的左括号的匹
 *    配，是则删除，不是返回false。
 * 3. 遍历过程中，数组内应该始终有值，遍历完后，用来收集的数组应该为空
 * 4. 和栈类似
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const l = s.length
  if (l % 2 !== 0) {
    return false
  }
  // 用来充当栈的数组
  const stack = []
  // 括号匹配规则
  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["]
  ])
  for (let char of s) {
    // 遇到左括号,入栈
    if (!map.has(char)) {
      stack.push(char)
    }
    // 遇到右括号
    else {
      // 栈内没值或不匹配
      if (!stack.length || stack[stack.length - 1] !== map.get(char)) {
        return false
      }
      // 匹配，出栈
      else {
        stack.pop()
      }
    }
  }
  return !stack.length
};
// @lc code=end


isValid("()")