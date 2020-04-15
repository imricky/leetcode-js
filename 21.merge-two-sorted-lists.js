// 21. 合并两个有序链表
// 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

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

var mergeTwoLists = function(l1, l2) {
  var res = new ListNode(null);
  var pre = res;
  while(l1 && l2){
    if(l1.val < l2.val){
      pre.next = new ListNode(l1.val);
      l1 = l1.next ? l1.next : null;
    }else{
      pre.next = new ListNode(l2.val);
      l2 = l2.next ? l2.next : null;
    }
    pre = pre.next;
  }
  if(l1 || l2){
    pre.next = l1 ? l1 : l2;
  }
  return res.next;
};