// 面试题21. 调整数组顺序使奇数位于偶数前面
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。



// 示例：

// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4] 
// 注：[3,1,2,4] 也是正确的答案之一。


// 提示：

// 1 <= nums.length <= 50000
// 1 <= nums[i] <= 10000

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      arr.push(nums[i]);
      nums.splice(i, 1, -1);
    }
  }
  nums = nums.filter(i => i > -1)
  return arr.concat(nums);
};

var a = [2, 16, 3, 5, 13, 1, 16, 1, 12, 18, 11, 8, 11, 11, 5, 1];
var b = exchange(a);
console.log(b)