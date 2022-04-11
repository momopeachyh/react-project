let a = 10;
function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();

// 10, 20, 30

function sum(a, b, c) {
  return a + b + c;
}

// currying
const curry = (fn) => (a) => (b) => (c) => {
  return fn(a, b, c);
};

// same as
// function curry(fn) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return fn(a, b, c);
//       };
//     };
//   };
// }

const curriedFunc = curry(sum);
console.log(curriedFunc(2)(3)(5));
// 10

const val1 = curriedFunc(2, 4);
const val2 = val1(3);
const val3 = val2(5);
console.log(val3);
