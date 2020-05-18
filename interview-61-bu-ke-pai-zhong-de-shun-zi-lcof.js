// 面试题61. 扑克牌中的顺子
// 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。



// 示例 1:

// 输入: [1,2,3,4,5]
// 输出: True


// 示例 2:

// 输入: [0,0,1,2,5]
// 输出: True


// 限制：

// 数组长度为 5 

// 数组的数取值为 [0, 13] .

// 思路，顺子的差值 不能大于5

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  let numSort = nums.sort((a, b) => { return a - b });
  let sum = 0;
  for (let i = 0; i < 4; i++) {
    if (numSort[i] === 0) {
      continue;
    } else if (numSort[i] === numSort[i + 1]) {
      // 判断如果相邻之间相等，那么就返回false
      return false;
    } else {
      sum = sum + numSort[i + 1] - numSort[i];
    }

  }
  return sum < 5;
};