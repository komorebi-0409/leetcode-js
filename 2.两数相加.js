/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * 由于是逆序的，所以链表的第一个节点都是个位，将对应节点的值相加，如果大于9，
 * 下一个要加上 1
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let resultNode = currentNode = new ListNode(-1),
    quotient = 0
    while (l1 || l2) {
      let sum = getListNodeVal(l1) + getListNodeVal(l2) + quotient
      currentNode.next = new ListNode(sum % 10)
      quotient = Math.floor(sum / 10)
      if (l1) {
        l1 = l1.next
      }
      if (l2) {
        l2 = l2.next
      }
      currentNode = currentNode.next
    }

    if (quotient) {
      currentNode.next = new ListNode(quotient)
    }
    return resultNode.next
};

// 获取节点的值
function getListNodeVal (l) {
  return l ? l.val : 0;
}
// @lc code=end

