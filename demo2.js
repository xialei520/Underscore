'use strict'
const _ = require('./underscore');

let obj = {
    name: 'xialei',
    age: 18, 
    sex: '男',
    address: 'taidongyilu road'
}
let upper1 = _.map(obj, (value, key) => {
    return value;
})
let upper2 = _.mapObject(obj, (value, key) => {
    return value;
})
console.log(JSON.stringify(upper1));
console.log(JSON.stringify(upper2));
