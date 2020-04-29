// 752. 打开转盘锁
// 你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。每个拨轮可以自由旋转：例如把 '9' 变为  '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。

// 锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。

// 列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。

// 字符串 target 代表可以解锁的数字，你需要给出最小的旋转次数，如果无论如何不能解锁，返回 -1。



// 示例 1:

// 输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
// 输出：6
// 解释：
// 可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
// 注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
// 因为当拨动到 "0102" 时这个锁就会被锁定。
// 示例 2:

// 输入: deadends = ["8888"], target = "0009"
// 输出：1
// 解释：
// 把最后一位反向旋转一次即可 "0000" -> "0009"。
// 示例 3:

// 输入: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
// 输出：-1
// 解释：
// 无法旋转到目标数字且不被锁定。
// 示例 4:

// 输入: deadends = ["0000"], target = "8888"
// 输出：-1


// 提示：

// 死亡列表 deadends 的长度范围为 [1, 500]。
// 目标数字 target 不会在 deadends 之中。
// 每个 deadends 和 target 中的字符串的数字会在 10,000 个可能的情况 '0000' 到 '9999' 中产生。
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  //注意ES5不支持Set、Map等ES6中新增的数据结构。
  let deadSet = new Set(deadends);
  let que = [];
  que.push("0000");
  que.push("");  
  let seen = new Set();
  seen.add("0000");
  var depth = 0;
  while (que.length != 0) {
      let node = que.shift();
      // console.log(que.length,"node")
      // 遇到"" 就要加一，代表一轮所有可能已经循环结束
      if (node == "") {
          depth ++;
          //注意这里如果不判断下que的长度，当死锁时会陷入死循环
          if (que.length > 0) {
              que.push("");
          }
      }
      else if (node == target) {
          return depth;
      }
      else if (!deadSet.has(node)) {
          for (let i = 0; i < 4; i++) {
              // 注释的这一段代码和下面👇两段代码效果一样，
              // for (let d = -1; d <= 1; d += 2) {
              //     let y = (Number(node.charAt(i)) + d + 10) % 10;
              //     let newStr = node.substring(0, i) + y + node.substring(i + 1);
              //     if (!seen.has(newStr)) {
              //         seen.add(newStr);
              //         que.push(newStr);
              //     }
              // }
              var up = plusOne(node,i);
              if(!seen.has(up)){
                que.push(up);
                seen.add(up);
              }
              
              var dpwn = minusOne(node,i);
              if(!seen.has(dpwn)){
                que.push(dpwn);
                seen.add(dpwn);
              }
          }
      }
  }
  return -1;
};

var plusOne = (str, j) => {
  var temp = str[j];
  var final;
  if (temp == '9') {
    final = '0'
  } else {
    final = (parseInt(temp) + 1).toString();
  }
  return str.substring(0, j) + final + str.substring(j + 1, str.length);
}

var minusOne = (str, j) => {
  var temp = str[j];
  var final;
  if (temp == '0') {
    final = '9'
  } else {
    final = (parseInt(temp) - 1).toString();
  }
  return str.substring(0, j) + final + str.substring(j + 1, str.length);
}

// deadends = ["0201","0101","0102","1212","2002"], target = "0202"
var a = ["8888"];
var b = '0008';
var c = openLock(a, b)
console.log(c);