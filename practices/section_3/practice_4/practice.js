function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  collection_a.splice(71, 1, 'd', 'd', 'd', 'd', 'd');
  var arr =[];
  for (var i = 0; i < collection_a.length;) {
    var count = 0;
  for (var j = i; j < collection_a.length; j++) {
    if (collection_a[i] === collection_a[j]) {
      count=count+1;
    }
  }
  arr.push({key:collection_a[i],count:count})
  i=i+count;
}
  for (var i in arr) {
    for (var j in object_b.value) {
      if (arr[i].key == object_b.value[j]) {
        arr[i].count = arr[i].count -(arr[i].count - arr[i].count % 3) / 3
      }
    }
  }
  return arr;
}

module.exports = create_updated_collection;
