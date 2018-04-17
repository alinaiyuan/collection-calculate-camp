'use strict';

function grouping_count(collection) {
  //在这里写入代码
  var result={};
  collection.sort()
  for (var i = 0; i < collection.length;){
    var count = 0;
    for (var j = i; j < collection.length; j++){
      if (collection[i] === collection[j]){
        count=count+1;
      }
    }
    result[collection[i]] = count;
    i=i+count;
  }
  return result;
}

module.exports = grouping_count;
