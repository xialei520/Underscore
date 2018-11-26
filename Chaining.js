'use strict'
const _ = require('./underscore');

var r = _.chain([1, 4, 9, 16, 25])
         .map(Math.sqrt)
         .filter(x => x % 2 === 1)
         .value();
console.log(r)