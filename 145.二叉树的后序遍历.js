/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
/*  var postorderTraversal = function(root) {
  const ans = []
  const inOrder = (treeNode) => {
    if (!treeNode) {
      return
    }
    inOrder(treeNode.left)
    inOrder(treeNode.right)
    ans.push(treeNode.val)
  }
  inOrder(root)
  return ans
} */
var postorderTraversal = function(root) {
  const ans = []
  const stack = []
  let prev
  while (stack.length || root) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    // 右节点为空或者已经遍历了时，进行push操作
    if (prev === root.right || !root.right) {
      ans.push(root.val)
      prev = root
      root = null
    } else {
      // 和前序、中序不同的是，迭代完右节点后，这里要返回父节点，push 进他的值，所以这里要重新入栈
      stack.push(root);
      root = root.right;
    }
  }
  return ans
};

// @lc code=end

