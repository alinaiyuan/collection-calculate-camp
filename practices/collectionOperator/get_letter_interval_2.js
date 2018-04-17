'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var number=['t', 'u', 'v', 'w', 'x',
    'y', 'z', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag',
    'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap',
    'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay',
    'az', 'ba'];
  var result=[];
  if(number_a<number_b){
    for(var i in number){
      result=number;
    }
  }
  else if(number_a>number_b){
    var num=number_a-19;
    for(var j in number){
      num=num-1;
      result.push(number[num]);
    }
  }
  else{
    var num=number_a-1;
    result.push(number[num-19]);
  }
    return result;
}

module.exports = get_letter_interval_2;

