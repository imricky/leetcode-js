// 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。

// 两个相邻元素间的距离为 1 。

// 示例 1:
// 输入:

// 0 0 0
// 0 1 0
// 0 0 0
// 输出:

// 0 0 0
// 0 1 0
// 0 0 0
// 示例 2:
// 输入:

// 0 0 0 
// 0 1 0
// 1 1 1  
// 输出:

// 0 0 0
// 0 1 0   
// 1 2 1
// 注意:

// 给定矩阵的元素个数不超过 10000。
// 给定矩阵中至少有一个元素是 0。
// 矩阵中的元素只在四个方向上相邻: 上、下、左、右。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/01-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//[[1,2,3],[3,4,5]]
//当前位置
// arr[2][2];
// // 要查找的位置
// arr[1][2]; //上
// arr[3][2]; //下
// arr[2][1]; //左
// arr[2][3]; //右


/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// var updateMatrix = function (matrix) {
//   let res = matrix.slice(0);
//   for (let i = 0; i < matrix.length - 1; i++) {
//     let j = matrix[i];
//     let flg = false;
//     for (let k = 0; k < j.length - 1; k++) {
//       //如果元素本身就是0，那么直接返回
//       if (matrix[i][k] === 0) {
//         res[i][k] === 0
//         continue;
//       }
//       //对于每一个元素来说：k [i][j]
//       //需要寻找上下左右四个位置
//       let top = matrix.length;
//       let down = matrix.length;;
//       let left = j.length;
//       let right = j.length;
//       //上
//       for (let t = i - 1; t >= 0; t--) {
//         if (matrix[t][k] === 0) {
//           top = i - t;
//           break;
//         }
//       }
//       //下
//       for (let t = i; t < matrix.length - 1; t++) {
//         if (matrix[t][k] === 0) {
//           down = t - i;
//           break;
//         }
//       }
//       // 左
//       for (let t = j.length - 1; t >= 0; t--) {
//         if (matrix[i][t] === 0) {
//           left = t - i;
//           break;
//         }
//       }
//       //右
//       for (let t = i; t < j.length - 1; t++) {
//         if (matrix[i][t] === 0) {
//           right = t - i;
//           break;
//         }
//       }

//       console.log(top);
//       console.log(down);
//       console.log(left);
//       console.log(right);
//       let minValue = Math.min.call(null,[top,down,left,right]);
//       res[i][k] === minValue;
//       break;
//     }
//   }
//   return res;
// };


// let a = [[0,0,0],[0,1,0],[0,0,0]]
//一、dp常数优化版
// let updateMatrix = (matrix) => {
//   let rows = matrix.length, cols = matrix[0].length
//   let dp = new Array(rows).fill(Infinity).map(() => new Array(cols).fill(Infinity))


//   for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < cols; c++) {
//       if (matrix[r][c] === 0) dp[r][c] = 0
//       else {
//         if (r > 0) dp[r][c] = Math.min(dp[r][c], dp[r - 1][c] + 1)
//         if (c > 0) dp[r][c] = Math.min(dp[r][c], dp[r][c - 1] + 1)
//       }
//     }
//   }

//   for (let r = rows - 1; r >= 0; r--) {
//     for (let c = cols - 1; c >= 0; c--) {
//       if (r < rows - 1) dp[r][c] = Math.min(dp[r][c], dp[r + 1][c] + 1)
//       if (c < cols - 1) dp[r][c] = Math.min(dp[r][c], dp[r][c + 1] + 1)
//     }
//   }
//   return dp
// };


// 暴力解法：
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// var updateMatrix = function(matrix) {
//   if(!matrix.length || !matrix[0].length) return null;

//   let n = matrix.length;
//   let m = matrix[0].length;
//   let ans = new Array(n);
//   for(let i = 0; i < n; i++) ans[i] = new Array(m).fill(-1);

//   for(let i = 0; i < n; i++)
//       for(let j = 0; j < m; j++) {
//           if(matrix[i][j] === 0) ans[i][j] = 0;
//           else ans[i][j] = bfs(i, j);
//       }

//   return ans;

//   function bfs(row, col) {
//       let queue = [[row, col]];
//       let visited = new Array(n);
//       let dist = 0;
//       for(let i = 0; i < n; i++) visited[i] = new Array(m).fill(false);
//       visited[row][col] = true;
//       while(queue.length) {
//           let len = queue.length;
//           dist++;
//           for(let i = 0; i < len; i++) {
//               let top = queue.shift(); 

//               if(top[0] + 1 < n && !visited[top[0]+1][top[1]]) {
//                   if(matrix[top[0]+1][top[1]] === 0) return dist;
//                   queue.push([top[0]+1, top[1]]);
//                   visited[top[0]+1][top[1]] = true;
//               }
//               if(top[0] - 1 >= 0 && !visited[top[0]-1][top[1]]) {
//                   if(matrix[top[0]-1][top[1]] === 0) return dist;
//                   queue.push([top[0]-1, top[1]]);
//                   visited[top[0]-1][top[1]] = true;
//               }
//               if(top[1] + 1 < m && !visited[top[0]][top[1]+1]) {
//                   if(matrix[top[0]][top[1]+1] === 0) return dist;
//                   queue.push([top[0], top[1]+1]);
//                   visited[top[0]][top[1]+1] = true;
//               }
//               if(top[1] - 1 >= 0 && !visited[top[0]][top[1]-1]) {
//                   if(matrix[top[0]][top[1]-1] === 0) return dist;
//                   queue.push([top[0], top[1]-1]);
//                   visited[top[0]][top[1]-1] = true;
//               }
//           }
//       }
//   }
// };


// 0 0 0 
// 0 1 0
// 1 1 1  
var updateMatrix = function (matrix) {
  if (!matrix.length || !matrix[0].length) return null;

  let n = matrix.length;
  let m = matrix[0].length;
  let ans = new Array(n);
  for (let i = 0; i < n; i++) ans[i] = new Array(m).fill(n + m);

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (matrix[i][j] === 0) ans[i][j] = 0;

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) {
      if (i - 1 >= 0) ans[i][j] = Math.min(ans[i][j], ans[i - 1][j] + 1);
      if (j - 1 >= 0) ans[i][j] = Math.min(ans[i][j], ans[i][j - 1] + 1);
    }

  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--) {
      if (i + 1 < n) ans[i][j] = Math.min(ans[i][j], ans[i + 1][j] + 1);
      if (j + 1 < m) ans[i][j] = Math.min(ans[i][j], ans[i][j + 1] + 1);
    }

  return ans;

};
let a = [[0, 0, 0], [0, 1, 0], [1, 1, 1]]
let b = updateMatrix(a);
console.log(b)