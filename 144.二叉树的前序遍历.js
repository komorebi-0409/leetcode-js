/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
  const ans = []
  const inOrder = (treeNode) => {
    if (!treeNode) {
      return
    }
    ans.push(treeNode.val)
    inOrder(treeNode.left)
    inOrder(treeNode.right)
  }
  inOrder(root)
  return ans
};

/* var preorderTraversal = function(root) {
  const ans = []
  const stack = []
  while (stack.length || root) {
    while (root) {
      stack.push(root)
      ans.push(root.val)
      root = root.left
    }
    root = stack.pop()
    root = root.right
  }
  return ans
}; */
// @lc code=end

