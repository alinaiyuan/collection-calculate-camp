'use strict';

function double_to_one(collection) {
  //在这里写入代码
  var result=[];
  for(var i in collection){
    if(collection[i] instanceof Array){
    for(var j in collection[i]){
      result.push(collection[i][j]);
    }
  }
  else{
      result.push(collection[i]);
    }
  }
  return result;
}

module.exports = double_to_one;
