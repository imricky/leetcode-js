// 322. 零钱兑换
// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。



// 示例 1:

// 输入: coins = [1, 2, 5], amount = 11
// 输出: 3 
// 解释: 11 = 5 + 5 + 1
// 示例 2:

// 输入: coins = [2], amount = 3
// 输出: -1


// 说明:
// 你可以认为每种硬币的数量是无限的。

// def coinChange(coins: List[int], amount: int):

//     def dp(n):
//         # base case
//         if n == 0: return 0
//         if n < 0: return -1
//         # 求最小值，所以初始化为正无穷
//         res = float('INF')
//         for coin in coins:
//             subproblem = dp(n - coin)
//             # 子问题无解，跳过
//             if subproblem == -1: continue
//             res = min(res, 1 + subproblem)

//         return res if res != float('INF') else -1

//     return dp(amount)


// int coinChange(vector<int>& coins, int amount) {
//   // 数组大小为 amount + 1，初始值也为 amount + 1
//   vector<int> dp(amount + 1, amount + 1);
//   // base case
//   dp[0] = 0;
//   for (int i = 0; i < dp.size(); i++) {
//       // 内层 for 在求所有子问题 + 1 的最小值
//       for (int coin : coins) {
//           // 子问题无解，跳过
//           if (i - coin < 0) continue;
//           dp[i] = min(dp[i], 1 + dp[i - coin]);
//       }
//   }
//   return (dp[amount] == amount + 1) ? -1 : dp[amount];
// }
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // 本题采用 自底向上 的动态规划解法
  /*
  首先，构造出amount+1的数组，
  之所以+1,是为了保障最后的金额（最初的原始金额）有位置可以存放
  例如：amount[11]存放着总金额11的最少金币组合
  */
  // 数组中每一项都事先赋为正无穷，便于与最小值的判断
  let dp = new Array(amount + 1).fill(Infinity);
  // 首先预先赋值为0，因为金额0的解法有0种
  dp[0] = 0;

  /*
  破题关键
  每种金额的解法至1金币始，循环到金额amount为止。
  每次外层for循环时，内部的for...of循环来判断是否可用现有的金币组合来组成amount金币量
  举例：amount为11，coins为[1,2,5]，则取以下解法的最小值
  coins为1时，amount[11] = 1(利用硬币金额1来解，故占一个金额的位置) + amount[11-1]（假设已知，且为最小值）
  coins为2时，amount[11] = 1(利用硬币金额2来解，故占一个金额的位置) + amount[11-2]（假设已知，且为最小值）
  coins为5时，amount[11] = 1(利用硬币金额5来解，故占一个金额的位置) + amount[11-5]（假设已知，且为最小值）
  */
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        // dp[i]本身的解法 和 dp[当前的总金额i(即amount) - 遍历的icon] + 1(遍历的icon) 的解法的最小值
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  // 如果结果为无穷大，则无解
  return dp[amount] === Infinity ? -1 : dp[amount];
};

var coins = [1, 2, 5], amount = 11;
var b = coinChange(coins, amount)
console.log(b)