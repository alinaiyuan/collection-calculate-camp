'use strict';
var single_element = function(collection){
  var arr=[];
  for(var i in collection) {
    if (i % 2 != 0) {
      arr.push(collection[i]);
    }
  }
  var result = [];
  arr.forEach(function (item) {
    if (arr.indexOf(item) != arr.lastIndexOf(item) && result.indexOf(item) == -1)
      result.push(item);
  })
  var arr2=[];
  for (var j in arr) {
    for (var k in result) {
      if (arr[j] != result[k]) {
        arr2.push(arr[j])
      }
    }
  }
  return arr2;
};
module.exports = single_element;
