/**
 * with 块可以将一个对象处理为词法作用域，但是这个块内部正常的 var
 * 声明并不会被限制在这个块的作用域中，而是被添加到 with 所处的函数作
 * 用域中。
 */
function foo(obj) {
  with (obj) {
    a = 2;
  }
}

var o1 = {
  a: 3,
};
var o2 = {
  b: 3,
};
foo(o1);
console.log(o1.a); // 2
foo(o2);
console.log(o2.a); // undefined
console.log(a); // 2
