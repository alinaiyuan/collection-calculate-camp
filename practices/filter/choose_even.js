'use strict';

function choose_even(collection) {
  //在这里写入代码
  var result=[];
  for(var i in collection){
    if(collection[i]%2===0){
      result.push(collection[i]);
    }
  }
  return result;
}

module.exports = choose_even;
