const _ = require('./underscore');
'use strict'
let arr = _.map([1, 2, 3], (x) => x * x);
console.log(arr)
let arr1 = _.map([2, 3, 4], (item) => item * item);
console.log(arr1)

let arr2 = _.map({
    a: 1,
    b: 2,
    c: 3
}, (v, k) => k + '=' + v);
console.log(arr2)