// 46. 全排列
// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

// 示例:

// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function (nums) {
//   var len = nums.length;
//   return perm(len - 1);

//   function perm(i) {
//     if (i == 0) {
//       return [[nums[0]]];
//     } else if (i == 1) {
//       return [[nums[0], nums[1]], [nums[1], nums[0]]]; // 代码运行到此处跳出递归
//     }
//     var ans1 = perm(i - 1);
//     var size = ans1.length;
//     var ans2 = [];
//     var fixNum = nums[i];
//     for (var k = 0; k < size; k++) {
//       for (var l = 0; l <= i; l++) {
//         var arr = ans1[k].slice(); // 复制数组
//         arr.splice(l, 0, fixNum); // 在这个数组每一个位置添加fixNum
//         ans2.push(arr);
//       }
//     }
//     return ans2;
//   }
// };


// var permute = function(nums) {
//   let matrix = [];
//   const subfunc = (arr, temp) => {
//     if (arr.length === 0) {
//       matrix.push(temp)
//     }
//     for (let i = 0, len = arr.length; i < len; i++) {
//       let newarr = arr.slice(0, i).concat(arr.slice(i + 1))
//       subfunc(newarr, temp.concat(arr[i]))
//     }
//   }
//   subfunc(nums, [])
//   return matrix;
// };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function (nums) {
//   let res = [];
//   let sub = (arr, temp) => {
//     if (arr.length === 0) {
//       res.push(temp)
//     }
//     for (let i = 0; i < arr.length; i++) {
//       let newarr = arr.slice(0, i).concat(arr.slice(i + 1))
//       sub(newarr, temp.concat(arr[i]))
//     }
//   }
//   sub(nums, []);
//   return res;
// };

var permute = function (nums) {
  let res = [];
  let backtrace = function(path){
    if(path.length === nums.length) res.push(path);
    for(let i of nums){
      if(!path.includes(i)){
        path.push(i);
        backtrace(path.slice());
        path.pop();
      }
    }
  }
  backtrace([]);
  return res;
};



var a = [1, 2, 3];
var b = permute(a);
console.log(b);