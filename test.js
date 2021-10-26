class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
  toArray() {
    let node = this,
      arr = []
    while (!!node) {
      arr.push(node.val)
      node = node.next
    }
    return arr
  }
}

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
 /**
   * 先序遍历
   * @returns {Array}
   */
  preOrderTraversal() {
    const ans = []
    const stack = []
    let root = this
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
  }
   /**
   * 中序遍历
   * @returns {Array}
   */
  inOrderTraversal() {
    const ans = []
    const stack = []
    let root = this
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
  /**
   * 后序遍历
   * @returns {Array}
   */
  postOrderTraversal() {
    const ans = []
    const stack = []
    let root = this
    let prev
    while (stack.length || root) {
      while (root) {
        stack.push(root)
        root = root.left
      }
      root = stack.pop()
      if (prev === root.right || !root.right) {
        ans.push(root.val)
        prev = root
        root = null
      } else {
        stack.push(root);
        root = root.right;
      }
    }
    return ans
  }
}
/**
 * 数组 → 单链表
 * @returns 链表的第一节点
 */
Array.prototype.toList = function () {
  let arr = this
  let listNode = new ListNode(-1)
  let curNode = listNode
  for (const item of arr) {
    curNode.next = new ListNode(item)
    curNode = curNode.next
  }
  return listNode.next
}
/**
 * 数组 → 二叉树
 * @returns 二叉树的第一个节点
 */
Array.prototype.toTree = function () {
  const treeNodeArr = this.map((item) => {
    return new TreeNode(item)
  })
  const len = this.length
  // 当前行数
  let line = 1
  while (Math.pow(2, line) - 1 < len) {
    // 当前行的开始索引
    let start = Math.pow(2, line - 1) - 1
    // 当前行的结束索引
    let end =  Math.pow(2, line - 1) + 2 * line - 1
    // 下一行的结束索引
    let nextStart = Math.pow(2, line)
    // 当前行已经赋值的个数
    let times = 0
    for (let i = start; i < end; i++) {
      treeNodeArr[i].left = treeNodeArr[nextStart - 1 + times * 2] ? treeNodeArr[nextStart - 1 + times * 2] : null
      treeNodeArr[i].right = treeNodeArr[nextStart + times * 2] ? treeNodeArr[nextStart + times * 2] : null
      times++
    }
    line++
  }
  return treeNodeArr[0]
}

