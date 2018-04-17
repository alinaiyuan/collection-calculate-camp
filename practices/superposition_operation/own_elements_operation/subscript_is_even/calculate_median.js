'use strict';
var calculate_median = function(collection){
  var count=0;
  var arr=[];
  for(var i in collection){
    if (i%2!= 0) {
      arr.push(collection[i]);
      count=count+1;
    }
  }
  if(count%2!=0){
    return arr[(count-1)/2];
  }
  if(count%2==0){
    return (arr[count/2-1]+arr[count/2])/2;
  }
};
module.exports = calculate_median;
