function foo(str) {
  "use strict";
  eval(str);
  console.log(a); // ReferenceError: a is not defined
}
foo("var a = 2");
