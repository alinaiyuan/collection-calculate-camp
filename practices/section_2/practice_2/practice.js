function count_same_elements(collection) {
  //在这里写入代码
  collection.splice(71,1,'d','d','d','d','d');
  var arr = [];
  for (var i = 0; i < collection.length;) {
    var count = 0;
    for (var j = i; j < collection.length; j++) {
      if (collection[i] === collection[j]) {
        count=count+1;
      }
    }
    arr.push({key:collection[i],count:count})
    i=i+count;
  }
  return arr;
}

module.exports = count_same_elements;
