// 1. 两数之和
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。



// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = nums.length;
  while(i>1){
    let c1 = nums.pop();
    if(nums.indexOf(target-c1)>-1){
      return [nums.indexOf(target-c1),nums.length];
    }
    i--;
  }
};

var a = [3,2,4];
var b = 6;
var c = twoSum(a,b)
console.log(c)