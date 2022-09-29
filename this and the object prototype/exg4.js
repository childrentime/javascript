// 默认绑定 nodejs中的this默认指向global this 不会把 var a = 2变成全局变量
function foo() {
  console.log(this.a);
}
var a = 2;
foo(); // 2

// 隐式绑定 最终生效的是末端上下文
function foo() {
  console.log(this.a);
}
var obj2 = {
  a: 42,
  foo: foo,
};
var obj1 = {
  a: 2,
  obj2: obj2,
};
obj1.obj2.foo(); // 42

// 硬绑定 通过bind apply等函数来绑定this值
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}

var obj = {
  a: 2,
};
var bar = foo.bind(obj);
var b = bar(3); // 2 3
console.log(b); // 5

// new绑定 注意new调用的时候 如果返回的结果为对象 会直接返回对象，而不是我们的this值！
function foo(a) {
  this.a = a;
}
var bar = new foo(2);
console.log(bar.a);
