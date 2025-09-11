'use strict';

const func = (iface) => {
  let res = [];
  for(const i in iface){
    const count = iface[i].length;
    res.push([i, count]);
  }
  return res;
};

const obj = func({
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
});

console.dir({obj});