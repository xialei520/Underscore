const _  = require('./underscore');
'use strict'
let s = 'hello  ';
s.trim();
console.log(s.trim())
var  fn = s.trim;
console.log(fn.call(s))
var  fn = _.bind(s.trim, s);
console.log(fn())
console.log('----------')

var pow2N = _.partial(Math.pow, 2);

console.log(pow2N(3))

var cube = _.partial(Math.pow, _, 3);
console.log(cube(3))
console.log('----------')
function factorial(n){
    console.log('start calculate' + n+ '!----')
    var s = 1,i = n;
    while(i> 1){
        s = s * i;
        i--;
    }
    console.log(n + '!='+ s)
    return s;
}

// console.log(factorial(10))
var factorial = _.memoize(function(n){
    console.log('start calculate' + n+ '!----')
    var s = 1,i = n;
    while(i> 1){
        s = s * i;
        i--;
    }
    console.log(n + '!='+ s)
    return s;
})
factorial(10)
console.log(factorial(10))
console.log('----------')

var register = _.once(function(){
    console.log('Register ok')
})
register()
register()
console.log('----------')
//2秒之后调用alert
var alert = () => {
    console.log('哈韩')
}
_.delay(alert, 2000)

var log = _.bind(console.log, console);
_.delay(log, 2000, 'hello', 'no')