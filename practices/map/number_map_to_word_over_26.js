'use strict';
var number_map_to_word_over_26 = function(collection){
  var words = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap', 'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay', 'az'];
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    result.push(words[collection[i] - 1])
  }
  return result;
}

module.exports = number_map_to_word_over_26;
