'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var mix=collection[0];
  for(var i in collection){
    if(mix>collection[i]){
      mix=collection[i];
    }
  }
  return mix;
}

module.exports = collect_min_number;

