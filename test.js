class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

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


ListNode.prototype.toArray = function () {
  let node = this,
  arr = []
  while (!!node) {
    arr.push(node.val)
    node = node.next
  }
  return arr
}