'use strict';
var number_map_to_word = function(collection){
  var words = ['a', 'b', 'c', 'd', 'e'];
  var result = [];
  for (var i in collection) {
    result.push(words[collection[i] - 1]);
  }
  return result;
};

module.exports = number_map_to_word;
