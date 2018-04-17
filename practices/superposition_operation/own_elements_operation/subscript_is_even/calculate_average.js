'use strict';
var calculate_average = function(collection){
  var arr=[];
  for(var i in collection){
    if(i%2!=0){
      arr.push(collection[i]);
    }
  }
  var sum =0;
  for(var j in arr){
    sum=sum+arr[j];
  }
  return sum/arr.length;
  };
module.exports = calculate_average;
