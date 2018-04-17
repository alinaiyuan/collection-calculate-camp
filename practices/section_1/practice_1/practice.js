function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var arr=[];
  for(var i in collection_a){
    for(var j in collection_b){
      if(collection_b[j]===collection_a[i]){
        arr.push(collection_b[j]);
      }
    }
  }
  return arr;
}

module.exports = collect_same_elements;
