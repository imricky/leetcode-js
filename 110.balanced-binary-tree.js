// 110. 平衡二叉树
// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：

// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

// 示例 1:

// 给定二叉树 [3,9,20,null,null,15,7]

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回 true 。

// 示例 2:

// 给定二叉树 [1,2,2,3,3,null,null,4,4]

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// 返回 false 。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function balanced(root, result) {
  if (root === null) {
    return 0;
  }
  let l = balanced(root.left, result);
  let r = balanced(root.right, result);
  if (l - r > 1 || l - r < -1) {
     result[0] = false;
  }
  return Math.max(l, r) + 1;
}
var isBalanced = function (root) {
  let a = [true];
  balanced(root, a);
  return a[0];

};
