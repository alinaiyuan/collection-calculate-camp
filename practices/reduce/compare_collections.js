'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  if(collection_a.length=collection_b.length){
    for(var i in collection_a){
      for(var i in collection_b){}
      if(collection_a[i]=collection_b[i]){
        return true;
      }
      else{
        return false;
      }
    }

  }
  else{
    return false;
  }
}

module.exports = compare_collections;


