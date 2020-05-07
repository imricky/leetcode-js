// 983. 最低票价
// 在一个火车旅行很受欢迎的国度，你提前一年计划了一些火车旅行。在接下来的一年里，你要旅行的日子将以一个名为 days 的数组给出。每一项是一个从 1 到 365 的整数。

// 火车票有三种不同的销售方式：

// 一张为期一天的通行证售价为 costs[0] 美元；
// 一张为期七天的通行证售价为 costs[1] 美元；
// 一张为期三十天的通行证售价为 costs[2] 美元。
// 通行证允许数天无限制的旅行。 例如，如果我们在第 2 天获得一张为期 7 天的通行证，那么我们可以连着旅行 7 天：第 2 天、第 3 天、第 4 天、第 5 天、第 6 天、第 7 天和第 8 天。

// 返回你想要完成在给定的列表 days 中列出的每一天的旅行所需要的最低消费。



// 示例 1：

// 输入：days = [1,4,6,7,8,20], costs = [2,7,15]
// 输出：11
// 解释： 
// 例如，这里有一种购买通行证的方法，可以让你完成你的旅行计划：
// 在第 1 天，你花了 costs[0] = $2 买了一张为期 1 天的通行证，它将在第 1 天生效。
// 在第 3 天，你花了 costs[1] = $7 买了一张为期 7 天的通行证，它将在第 3, 4, ..., 9 天生效。
// 在第 20 天，你花了 costs[0] = $2 买了一张为期 1 天的通行证，它将在第 20 天生效。
// 你总共花了 $11，并完成了你计划的每一天旅行。
// 示例 2：

// 输入：days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]
// 输出：17
// 解释：
// 例如，这里有一种购买通行证的方法，可以让你完成你的旅行计划： 
// 在第 1 天，你花了 costs[2] = $15 买了一张为期 30 天的通行证，它将在第 1, 2, ..., 30 天生效。
// 在第 31 天，你花了 costs[0] = $2 买了一张为期 1 天的通行证，它将在第 31 天生效。 
// 你总共花了 $17，并完成了你计划的每一天旅行。


// 提示：

// 1 <= days.length <= 365
// 1 <= days[i] <= 365
// days 按顺序严格递增
// costs.length == 3
// 1 <= costs[i] <= 1000

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
// var mincostTickets = function (days, costs) {
//   let daysSet = new Set(days);
//   let dp = new Array(366 + 30).fill(0);// 保留每一天到最后一天的最小花费
//   return leastCost(1);

//   function leastCost(i) {
//     if (i > 365) return 0;
//     if (daysSet.has(i)) {
//       if (dp[i]) {
//         return dp[i];
//       } else {
//         dp[i] = Math.min(
//           leastCost(i + 1) + costs[0],
//           leastCost(i + 7) + costs[1],
//           leastCost(i + 30) + costs[2]
//         )
//         return dp[i]
//       }
//     } else {
//       return leastCost(i + 1);
//     }
//   }
// };
// 使用动态规划的思路，将 dp[i] 设置为从第 i 天开始到最后一天的最小票价

// 从最后一天开始往第一天开始循环，中间如果不需要旅游，则当天花费 = 前一天花费，即: dp[i] = dp[i + 1]
// 设置一个 days 的下标变量 k，当 i = days[k] 时，则说明 i 当天需要旅游，则取最小花费：
// dp[i] = Math.min(
// dp[i + 1] + costs[0],
// dp[i + 7] + costs[1],
// dp[i + 30] + costs[2]
// )
// 同时将 k 下标往前移一位 k--;
// 最后，i 循环到 1，算出最小票价，取 days 数组第一位 dp[0] 的花费即可

// 作者：simon-
// 链接：https://leetcode-cn.com/problems/minimum-cost-for-tickets/solution/dong-tai-gui-hua-suan-fa-si-kao-by-simon-/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
var mincostTickets = function (days, costs) {
  let dp = new Array(366 + 30).fill(0),
    n = days.length,
    k = n - 1,
    maxDay = days[n - 1],
    minDay = days[0];
  for (let i = maxDay; i >= minDay; i--) {
    if (i === days[k]) {
      dp[i] = Math.min(
        dp[i + 1] + costs[0],
        dp[i + 7] + costs[1],
        dp[i + 30] + costs[2]
      );
      k--;
    } else {
      dp[i] = dp[i + 1];
    }
  }
  return dp[minDay];
}

let a = [1, 4, 6, 7, 8, 20];
let b = [2, 7, 15];
let c = mincostTickets(a, b);
console.log(c)