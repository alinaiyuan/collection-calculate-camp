'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var arr1= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var arr2 = [];
  for (var i in collection) {
    if (collection[i] % 2 == 0) {
      for (var j in arr1) {
        if (collection[i] == j) {
          arr2.push(arr1[j - 1]);
        }
      }
    }
  }
  return arr2;
}

module.exports = even_to_letter;
