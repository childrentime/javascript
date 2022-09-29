var obj = {
  id: "awesome",
  cool: function coolFn() {
    console.log(this.id);
  },
};
var id = "not awesome";
obj.cool(); // cool
// 如果函数不是对象点的形式调用 this会指向上一级
setTimeout(obj.cool, 100); // undefined
