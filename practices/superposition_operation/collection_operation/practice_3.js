'use strict';

function hybrid_operation_to_uneven(collection) {
  //在这里写入代码
  var arr=[];
  for(var i in collection){
    if(collection[i]%2!==0){
      arr.push(collection[i]*3+5);
    }
  }
  var sum=0;
  for(var j in arr){
    sum=sum+arr[j];
  }
  return sum;
}

module.exports = hybrid_operation_to_uneven;

