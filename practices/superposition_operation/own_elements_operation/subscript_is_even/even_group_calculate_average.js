'use strict';
var even_group_calculate_average = function(collection){
  var arr=[];
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  for(var i in collection){
    if (i % 2 != 0) {
      arr.push(collection[i]);
    }
  }
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  for (var j in arr) {
    if (arr[j] % 2 == 0) {
      if (arr[j] < 10) {
        arr1.push(arr[j]);
        count1=count1+1;
      }
      else if (arr[j] < 100) {
          arr2.push(arr[j]);
          count2=count2+1;
        }
      else {
          arr3.push(arr[j]);
          count3=count3+1;
        }
    }
  }
  var sum1 = 0;
  var sum2 = 0;
  var sum3 = 0;
  for (var j in arr1) {
    sum1 = sum1 + arr1[j];
  }
    for (var k in arr2) {
      sum2 = sum2 + arr2[k];
    }
    for (var l in arr3) {
        sum3 = sum3 + arr3[l];
    }
        if (count1 + count2 + count3 == 0) {
          return [0];
        }
        else if (count1 + count2 == 0) {
          return [sum3 / count3];
        }
        else {
          return [sum1 / count1, sum2 / count2, sum3 / count3];
        }
};
module.exports = even_group_calculate_average;
