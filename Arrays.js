'use strict'
const _ = require('./underscore');

let arr = [2,4,6,8];
console.log(_.first(arr));
console.log(_.last(arr))
console.log('-------------------------')

console.log(_.flatten([1,2, [3,4, [5,6,7]], 8, 9]))

console.log('-------------------------')

let name = ['xiaoming', 'xiaowang', 'xiaoli'];
let scores = [89, 90, 100];

console.log(_.zip(name, scores));

let data = [['xiaoming', 100], ['xiaowang', 90], ['xiaoli', 70]];
console.log(_.unzip(data));
console.log('-------------------------');
console.log(_.object(name, scores));
console.log('-------------------------');
console.log(_.range(10))
console.log(_.range(1, 11))
console.log(_.range(1, 30, 5))