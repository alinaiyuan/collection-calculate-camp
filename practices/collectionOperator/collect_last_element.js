'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  var a=0;
  for(var i=0;i<collection.length;i++){
    a=a+1;
  }
  return a;
  console.log(collection[a]);
}

module.exports = collect_last_element;
