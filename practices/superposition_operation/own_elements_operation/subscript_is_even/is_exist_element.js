'use strict';
var is_exist_element = function(collection,element){
  for(var i in collection){
    if(i%2==0){
      if(collection[i]==element){
        return true;
        var temp =true;
      }
    }
  }
  if(!temp){
    return false;
  }
};
module.exports = is_exist_element;
