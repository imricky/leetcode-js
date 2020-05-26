// 102. 二叉树的层序遍历
// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。



// 示例：
// 二叉树：[3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function (root) {
  if (!root) return []
  let res = []
  let queue = [root]
  while (queue.length) { // 没有节点在列，就是遍历完毕
    let subRes = []
    const len = queue.length // 当前层的节点数目
    for (let i = 0; i < len; i++) { // 遍历当前层的节点
      let cur = queue.shift() // 出列
      subRes.push(cur.val) // 填充subRes数组
      if (cur.left) queue.push(cur.left) // 下层节点入列
      if (cur.right) queue.push(cur.right)
    }
    res.push(subRes)
  }
  return res
};