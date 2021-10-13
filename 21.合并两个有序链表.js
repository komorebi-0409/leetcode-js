/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 创建一个新的链表，根据根据大小关系依次链接
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let resHead = new ListNode(-1)
  let curListNode = resHead
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      curListNode.next = l1
      l1 = l1.next
    } else {
      curListNode.next = l2
      l2 = l2.next
    }
    curListNode = curListNode.next
  }
  curListNode.next = l1 === null ? l2 : l1
  return resHead.next
};

// @lc code=end

