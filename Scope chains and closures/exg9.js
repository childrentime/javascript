function wait(message) {
  setTimeout(function timer() {
    console.log(message);
  }, 1000);
}

// setTimtout函数在执行前都拥有对message变量的引用，这就是闭包！
wait("Hello, closure!");
