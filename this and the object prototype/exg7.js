var anotherObject = {
  a: 2,
};

// 创建一个关联到 anotherObject 的对象
var myObject = Object.create(anotherObject);

// for in会枚举出对象原型链上的值！
for (var k in myObject) {
  console.log("found: " + k);
}

myObject.a = 3;
// 创建的属性屏蔽了原型链
console.log(anotherObject.a);
