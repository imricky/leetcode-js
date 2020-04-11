// 567. 字符串的排列
// 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。

// 换句话说，第一个字符串的排列之一是第二个字符串的子串。

// 示例1:

// 输入: s1 = "ab" s2 = "eidbaooo"
// 输出: True
// 解释: s2 包含 s1 的排列之一 ("ba").
//  

// 示例2:

// 输入: s1= "ab" s2 = "eidboaoo"
// 输出: False
//  

// 注意：

// 输入的字符串只包含小写字母
// 两个字符串的长度都在 [1, 10,000] 之间

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length === 0) {
    return false
  }
  if (s1.length === 1) {
    return s2.indexOf(s1) > -1 ? true : false
  }

  function fullpermutate(str) {
    var result = [];
    if (str.length > 1) {
      //遍历每一项
      for (var m = 0; m < str.length; m++) {
        //拿到当前的元素
        var left = str[m];
        //除当前元素的其他元素组合
        var rest = str.slice(0, m) + str.slice(m + 1, str.length);
        //上一次递归返回的全排列
        var preResult = fullpermutate(rest);
        //组合在一起
        for (var i = 0; i < preResult.length; i++) {
          var tmp = left + preResult[i]
          result.push(tmp);
        }
      }
    } else if (str.length == 1) {
       result.push(str);
    }
    return result;
   }
  // 1.先求字符串的全排列
  // 2.循环全排列，看是否存在indexOf
  var allArr = fullpermutate(s1);
  let flg = false;

  for(let j = 0;j<allArr.length;j++){
    if(s2.indexOf(allArr[j]) > -1){
      flg = true
    }
  }
  return flg;
};
var s1 = 'abc';
var s2 = 'eidbacooo';
var c = checkInclusion(s1,s2);
console.log(c)