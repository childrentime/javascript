// try catch制造块作用域
try {
  undefined(); // 执行一个非法操作来强制制造一个异常
} catch (err) {
  console.log(err); // 能够正常执行！
}
