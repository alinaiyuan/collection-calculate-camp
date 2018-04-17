'use strict';
var rank_desc = function(collection){
  function number(a, b) {
    return a - b;
  }
  return collection.sort(number);
}

module.exports = rank_desc;
