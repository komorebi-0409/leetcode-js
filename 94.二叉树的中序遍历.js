/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归：自调用实现循环
 * @param {TreeNode} root
 * @return {number[]}
 */
/* var inorderTraversal = function(root) {
  const ans = []
  const inOrder = (treeNode) => {
    if (!treeNode) {
      return
    }
    inOrder(treeNode.left)
    ans.push(treeNode.val)
    inOrder(treeNode.right)
  }
  inOrder(root)
  return ans
}; */
/**
 * 迭代：以当前循环的结果作为下一次循环的条件
 *  任意一个节点，应先遍历完它的左子节点，再把它的值放进数组内。因此，我们应该先把
 * 它存起来。对于它的子节点也是这样，但是子节点的值应该先放进数组内，这是一个明显的
 * 栈结构。
 *  用一个数组模拟栈结构，只要 root 不为空，那么将 root 入栈并且令 root = root.left。
 * root 为空时，令 root 为栈顶的节点 ，然后存入 root 的值，再令 root = root.right
 * @param {TreeNode} root 
 */
var inorderTraversal = (root) => {
  const ans = []
  const stack = []
  while (stack.length || root) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    ans.push(root.val)
    root = root.right
  }
  return ans
}
// @lc code=end

