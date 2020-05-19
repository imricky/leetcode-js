// 152. 乘积最大子数组
// 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。



// 示例 1:

// 输入: [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。
// 示例 2:

// 输入: [-2,0,-1]
// 输出: 0
// 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0];
  let min = nums[0];
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let tmp = min;
    min = Math.min(nums[i], Math.min(max * nums[i], min * nums[i])); // 取最小
    max = Math.max(nums[i], Math.max(max * nums[i], tmp * nums[i])); /// 取最大
    res = Math.max(res, max);
  }
  return res;
};

var a = [2, 3, -2, 4];
var b = maxProduct(a);
console.log(b)