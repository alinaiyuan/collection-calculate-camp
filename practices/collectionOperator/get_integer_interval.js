'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var result=[];
  if(number_a<number_b){
    var num=number_a-1;
    for(var i=0;i<number_b;i++){
      num=num+1;
      result.push(num);
    }
  }
  else if(number_a>number_b){
    var num=number_a+1;
    for(var j=0;j<number_a;j++){
      num=num-1;
      result.push(num);
    }
  }
  else{
    result.push(number_a);
  }
    return result;
}
module.exports = get_integer_interval;

