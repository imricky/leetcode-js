// 计算磁盘容量
// 3
// 1T
// 20M
// 3G

// 20M
// 3G
// 1T
function strToObj(str){
  // 统一转换单位
  var obj = {};
  if(str.indexOf('M') > -1){
    var j = str.split('M')[0];
    obj.ori = str;
    obj.m = j;
    obj.v = 'M';
  }else if(str.indexOf('G') > -1){
    var j = str.split('G')[0];
    obj.ori = str;
    obj.m = parseInt(j * 1000);
    obj.v = 'G';
  }else if(str.indexOf('T')> -1){
    var j = str.split('T')[0];
    obj.ori = str;
    obj.m = parseInt(j * 1000 * 1000);
    obj.v = 'T';
  }
  return obj;
}

var ans = [];
function lenToArr(){
    var n = parseInt(readline());

for(var i = 0;i < n; i++){
  var lines = readline()
  var temp = strToObj(lines);
    ans.push(temp);
  //console.log(temp.ori);
}
}

function compare(property){
    return function(a,b){
        var v1 = a[property];
        var v2 = b[property];
        return v1-v2;
    }
}



function sortInfo(arr){
  return arr.sort(compare('m'))
}
lenToArr();
var final = sortInfo(ans);

for(var k = 0;k<final.length;k++){
  console.log(final[k]['ori'])
}



