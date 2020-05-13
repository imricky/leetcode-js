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

 // 我的解法
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

// 别人的思路，双指针解法

var exchange = function(nums) {
  let i = 0;
  let j = nums.length - 1;
  while(i < j) {
      while( nums[i]%2 ) {
          i++
      }
      while( nums[j]%2 == 0 ) {
          j--
      }
      if (i < j) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
      }
  } 
  return nums
};

作者：chi-bu-zi
链接：https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/solution/shuang-zhi-zhen-diao-zheng-shu-zu-shun-xu-shi-qi-s/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

var a = [2, 16, 3, 5, 13, 1, 16, 1, 12, 18, 11, 8, 11, 11, 5, 1];
var b = exchange(a);
console.log(b)