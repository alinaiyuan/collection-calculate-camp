'use strict';

function double_to_one(collection) {
  //在这里写入代码
  var result=[];
  for(var i in collection){
      for(var j in collection[i]){
        result.push(collection[i][j]);
    }
  }
    var r = [];
    for(var i = 0; i < result.length; i ++) {
      var flag = true;
      var temp = result[i];
      for(var j = 0; j < r.length; j ++) {
        if(temp === r[j]) {
          flag = false;
          break;
        }
      }
      if(flag) {
        r.push(temp);
      }
    }
    return r;
}

module.exports = double_to_one;
