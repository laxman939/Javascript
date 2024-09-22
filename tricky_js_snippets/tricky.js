// Javascript interview questions
// 1. What is the difference between null and undefined?

// Guessing questions

// 1.In JavaScript, when you use an object as a key in another object, the object is converted to a string.
//  The default string representation of an object is "[object Object]".
let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

// 2.
let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = { key: "another value" };

console.log(obj1.key, obj2.key, obj3.key);

// 3. If you want c() to log "foo" as well, you can bind the function to the correct context using bind:

const obj = {
  a: "foo",
  b: function () {
    console.log(this.a);
  },
};

const c2 = obj.b;
//   const c2 = obj.b.bind(obj);

obj.b();
c2(); // foo -- If we use bind()

// 4.
const x = { foo: 1 };
const y = { foo: 2 };

function addFoo(obj) {
  return obj.foo + 1;
}

console.log(addFoo(x));
console.log(addFoo(y));

// 5.
const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(i, "setTimeout");
  }, 1000);
}

// 6.
const arr6 = [1, 2, 3, 4, 5];

arr6.forEach(function (element) {
  console.log(element, "forEach");
});

// 7. -- In JavaScript, functions are truthy values
let x7 = 1;

if (function f() {}) {
  x7 += typeof f;
}

console.log(x7);

// 8. - JavaScript objects are passed by reference. So when we assigned a object to b. b also pointing to the same object in memory.
//  When we change the value of a.x it also affects b.x

let a8 = {
  x: 1,
  y: 2,
};
let b8 = a8;
a8.x = 5;
console.log(a8);
console.log(b8);

// 9.
let x9 = [1, 2, 3];
let y9 = [1, 2, 3];
let z9 = y9;

console.log(x9 == y9);
console.log(x9 === y9);
console.log(z9 == y9);
console.log(z9 == x9);

// 10.
var x10 = 0;
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    x10++;
    console.log(x10);
  }, 1000);
}

// 11.
let a11 = { x: 1 };
let b11 = { x: 2 };
let c11 = { x: 3 };
let d11 = { x: 4 };
let e11 = { x: 5 };
let arr11 = [a11, b11, c11, d11, e11];

arr.forEach((obj) => (obj.x = obj.x * 2));

console.log(a11.x, b11.x, c11.x, d11.x, e11.x);

// 12. -- Because the global and local variables have different scope and different memory allocation.
let num = 0;

function test() {
  var num = 1;
  return num;
}

console.log(test());
console.log(num);

// 13. -- The spread operator ... creates a new object with properties copied from the original object.
let obj13 = { name: "John", age: 25 };
// let newObj13 = { ...obj13, age: 30 }; or  let newObj13 = { ...obj13 }; newObj13.age = 30
// above code doesn't change the original obj, but below code changes the original object if we change the new object.
let newObj13 = obj13;
newObj13.age = 30;

console.log(obj13.age, "obj13.age");
console.log(newObj13.age, "newObj13.age");

// 14. Default parameters for the function
const add = (a = 1, b = 2) => a + b;
console.log(add());
console.log(add(5));
console.log(add(undefined, 10));

// 15. In ES6+, you can use object literal notation to create objects with properties using the same name as the variables with the values assigned to them.
// Object Literal Notation
const name = "John";
const age = 25;

const user = { name, age };
console.log(user);

// 16. In ES6+, you can use destructuring assignment to extract values from arrays and objects and assign them to variables in a concise way.
// Destructuring Assignment
const arr16 = [1, 2, 3];
const [a16, b16, c16, d16] = arr16;

console.log(a16, "a16", "b16", "c16", "d16");
console.log(b16);
console.log(c16);
console.log(d16, "d16");

// 17. typeof null returns object which is an error in JavaScript. This is a historical bug in the language that cannot be fixed without breaking existing code.
// == is the loose equality operator
console.log(typeof null);
console.log(typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
