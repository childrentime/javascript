/**
 * 函数声明会cover掉var声明
 * 后面的函数声明会覆盖掉前面的函数声明
 */
foo(); // 1
var foo;
function foo() {
  console.log(1);
}
foo = function () {
  console.log(2);
};
