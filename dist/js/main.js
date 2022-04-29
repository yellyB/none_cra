"use strict";

var _lib = require("./lib");

console.log(_lib.pi);
console.log((0, _lib.power)(_lib.pi, _lib.pi));
var f = new _lib.Foo();
console.log(_lib.pi);
console.log(_lib.pi);

// polyfill이 필요한 코드
console.log(
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 100);
  })
);
console.log(Object.assign({}, { x: 1 }, { y: 2 }));
console.log(Array.from([1, 2, 3], (v) => v + v));
