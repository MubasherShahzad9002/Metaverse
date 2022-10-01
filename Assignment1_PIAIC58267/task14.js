var a = 2;
var b = 1;
var result = (--a - --b) + (++b + b--);
// --a = 1
// --b = 0
// --a - --b = 1 - 0 = 1
// 1 + 1 = 2
// 2 + 1 = 3
console.log(result);
