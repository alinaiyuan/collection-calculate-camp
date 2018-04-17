'use strict';

function average_to_letter(collection) {
  //在这里写入代码
  var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var num = 0;
  for (var i in collection) {
    num =num + collection[i];
  }
  num = num / collection.length;
  for(var j in arr){
    return arr[parseInt(num)];
  }
}

module.exports = average_to_letter;

