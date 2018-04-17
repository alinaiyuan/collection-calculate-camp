'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var number=['a', 'b', 'c', 'd', 'e'];
  var result=[];
  if(number_a<number_b){
    for(var i=0;i<number.length;i++){
      result=number;
    }
  }
  else if(number_a>number_b){
    var num=number_a;
    for(var j=0;j<number.length;j++){
      num=num-1;
      result.push(number[num]);
    }
  }
  else{
    var num=number_a-1;
    result.push(number[num]);
  }
  return result;
}

module.exports = get_letter_interval;
