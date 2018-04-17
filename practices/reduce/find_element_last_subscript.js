'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var arr=[];
  for (var i = 0; i < collection.length; i++) {
    if (element == collection[i]) {
      arr.push(i);
    }
  }
    return arr[arr.length-1];
}

module.exports = calculate_elements_sum;
