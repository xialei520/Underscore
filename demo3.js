'use strict'
const _ = require('./underscore');

let arr = [1, 2, 3,4]
let every = _.every(arr, (x) => x>0);
let some = _.some(arr, x => x >3);
console.log(every);
console.log(some);

let obj = {
    name: 'xialei',
    age: 18, 
    SEX: '男',
    address: 'taidongyilu road'
}
let v1 = _.every(obj, (v,k) => {
    return k == k.toUpperCase();
})
console.log(v1)
let v2 = _.some(obj, (v,k) => {
    return k == k.toUpperCase();
})
console.log(v2)

console.log(_.max(arr))
console.log(_.min(arr))
console.log(_.max([])) //-Infinity 负无穷
console.log(_.min([])) //-Infinity 正无穷
console.log(_.max(obj)) //18
console.log(_.min(obj)) //18

console.log('-----------------------------------------')

let scores = [20, 81, 75, 40, 91, 59, 77, 66, 72, 88, 99];
let goups = _.groupBy(scores, x => {
    if(x < 60){
        return 'C';
    }else if(x < 80){
        return 'B';
    }else{
        return 'A';
    }
})

console.log(goups)
// { C: [ 20, 40, 59 ],
//     A: [ 81, 91, 88, 99 ],
//     B: [ 75, 77, 66, 72 ] }

console.log('-----------------------------------------')

console.log(_.shuffle(arr))
console.log('-----------------------------------------')
console.log(_.sample(arr, 3))