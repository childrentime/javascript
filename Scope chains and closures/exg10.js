for (var i = 1; i <= 5; i++) {
  // 使用iife来创建闭包！
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}

// 如何创建模块
/**
 * 使用 const+iife
 * iife中使用闭包创建私有变量 并且将模块的返回结果赋值给我们定义的const常量
 * const常量会在当前的块作用域下生效，并不会被挂载到window。
 */
