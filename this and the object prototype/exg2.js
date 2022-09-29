const value = 1;

// 箭头的函数绑定在定义的地方
// 词法作用域是静态的，this是动态绑定的.
const log = () => {
  console.log(value);
  console.log(this.value);
};

function f() {
  const value = 3;

  log();

  const myLog = log.bind({ value: 4 });

  myLog();
}

f();
