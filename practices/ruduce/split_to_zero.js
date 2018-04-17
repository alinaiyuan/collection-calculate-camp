'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var arr = [];
  var num;
  for (var i = 0; i < 100; i++) {
    if (number % interval == 0) {
      num = number - interval * i;
      arr.push(parseFloat((num).toFixed(2)))
      if (number - interval * i === 0) {
        break;
      }
    } else {
      num = number - interval * i;
      arr.push(parseFloat((num).toFixed(2)))
      if (number - interval * i < 0) {
        break;
      }
    }
  }
  return arr;
}

module.exports = spilt_to_zero;
