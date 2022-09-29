foo(); // 不是 ReferenceError, 而是 TypeError!
// 声明会被提升 函数表达式不会
/* 如果是const 或者 let定义 则是 ReferenceError: Cannot access 'foo' before initialization
 * 也就是暂时性死区
 */
var foo = function bar() {
  // ...
};
