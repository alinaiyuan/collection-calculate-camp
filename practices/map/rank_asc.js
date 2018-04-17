'use strict';
var rank_asc = function(collection){
   function number(a, b) {
      return b - a;
    }
    return collection.sort(number);
}

module.exports = rank_asc;
