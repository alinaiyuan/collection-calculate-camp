'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var max=collection[0];
  for(var i in collection){
    if(max<collection[i]){
      max=collection[i];
    }
  }
  return max;
}

module.exports = collect_max_number;
