function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var arr=[];
  for(var i in collection_a){
    for(var j in collection_b[0]){
      if(collection_b[0][j]===collection_a[i]){
        arr.push(collection_b[0][j]);
      }
    }
  }
  return arr;
}

module.exports = collect_same_elements;
