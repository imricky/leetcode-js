// 2.两数相加
// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

// 相加的时候，不存在就补上0
var addTwoNumbers = function (l1, l2) {
  var newNode = new ListNode(null);
  var pre = newNode;
  var isTwo = false;
  while (l1 || l2) {
    var sum = (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val) + (isTwo ? 1 : 0);
    pre.next = new ListNode(sum % 10); // 将当前结果挂到临时的 node 上
    pre = pre.next; // 如果要继续挂载链表，需要将当前的指针移动到 next 上
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    isTwo = sum > 9;
  }
  if (isTwo) {
    pre.next = new ListNode(1);
  }
  return newNode.next;
};


// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
var addTwoNumbers = function(l1, l2) {
  let resNode = new ListNode(0); // 临时使用的 node 用来不停的增加链表节点
  let result = resNode; // 第一次挂载
  let tmpS = 0; // 相加 > 10 的进位数(1 或 0)
  while(l1 || l2 || tmpS) { // 判断 tmpS 的目的是防止最后还有一位进位需要前置
      let val1 = l1 ? l1.val || 0 : 0; // 需要判断 l1 是 null
      let val2 = l2 ? l2.val || 0 : 0; // 需要判断 l2 是 null
      let sum = val1 + val2 + tmpS; // this.val 相加并加上进位值
      tmpS = sum >= 10 ? 1 : 0; // 计算本次相加是否需要进位
      sum = sum % 10; // 当前位只需要个位数
      if(l1) l1 = l1.next; // 遍历链表
      if(l2) l2 = l2.next; // 遍历链表
      resNode.next = new ListNode(sum); // 将当前结果挂到临时的 node 上
      resNode = resNode.next; // 如果要继续挂载链表，需要将当前的指针移动到 next 上
  }
  return result.next; // result 是 resNode, resNode.next 才是最终结果
};