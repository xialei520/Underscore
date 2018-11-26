const _  = require('./underscore');
'use strict'
function Student(name, age){
    this.name = name;
    this.age = name;
}
Student.prototype.school = 'qianzhuang middle school'
var xiaoming = new Student('xiaoming', 19);
_.keys(xiaoming);
console.log(_.keys(xiaoming))
console.log(_.allKeys(xiaoming))
console.log('-------------')
var obj = {
    name: 'xiaomig',
    age: 18
}

console.log(_.values(obj))
console.log('-------------')
var obj = {
    a: 1,
    b: 2, 
    c: 3
}
var newObj = _.mapObject(obj, (v, k) => {
    return v+100;
})
console.log(newObj)
console.log('-------------')
var obj = {
    David: 80,
    Lusan: 90,
    Jason: 50
}
console.log(_.invert(obj));
console.log('-------------')
var a = {
    name: 'Bob',
    age: 18
}
console.log(_.extend(a, {age: 15}, {age: 88, city: 'Beijing'}))
console.log(a)
console.log('-------------')
var source = {
    name: 'wang',
    age: 18,
    skills: ['js', 'html', 'css']
}
var copied = _.clone(source);
console.log(copied)
console.log(source.skills === copied.skills)
console.log('-------------')
var o1 = {
    name: 'Bob',
    skills: {
        java: 100,
        javascript: 99
    }
}
var o2 = {
    name: 'Bob',
    skills: {
        javascript: 99,
        java: 100
    }
}
console.log(o1 == o2)
console.log(_.isEqual(o1, o2));

var o1 = ['Bob', { skills: ['Java', 'JavaScript'] }];
var o2 = ['Bob', { skills: ['Java', 'JavaScript'] }];
console.log(o1 == o2)
console.log(_.isEqual(o1, o2));