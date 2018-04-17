'use strict';
var even_asc_odd_desc = function(collection){
  var collection_a=[];
  var collection_b=[];
  var result=[];
  for(var i in collection){
    if(collection[i]%2==0){
      collection_a.push(collection[i]);
    }
    else{
      collection_b.push(collection[i]);
    }
  }
  function sortNumber(a,b) {
    return a - b;
  }
  collection_a = collection_a.sort(sortNumber);
  function sort2Number(c,d) {
    return d - c;
  }
  collection_b = collection_b.sort(sort2Number);
  for (var j in collection_b) {
    collection_a.push(collection_b[j]);
  }
  return collection_a;
};
module.exports = even_asc_odd_desc;
