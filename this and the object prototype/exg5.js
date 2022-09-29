// 显式绑定中，传入 null 或者 undefined 会导致this依然绑定到全局！
// 如果需要可以传入 ø
function foo() {
  console.log(this.a);
}
var a = 2;
foo.call(null);

var ø = Object.create(null);

function foo() {
  console.log(this.a);
}

var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };
o.foo(); // 3
// 这里会发生默认绑定 因为p.foo的值是foo的引用！
(p.foo = o.foo)(); // 2

// 箭头函数的this绑定无法被修改！！
function foo() {
  // 返回一个箭头函数
  return (a) => {
    //this 继承自 foo()
    console.log(this.a);
  };
}
var obj1 = {
  a: 2,
};
var obj2 = {
  a: 3,
};
var bar = foo.call(obj1);
bar.call(obj2); // 2, 不是 3 ！
