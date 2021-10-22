/*this references the object of which the function is a property. In other words, 
the this references the object that is currently calling the function.*/

/*Ex--Suppose that you have an object called counter. This object counter has a method called next().
     --When you call the next() method, you can access the this object      */
//Method-->when a function is a property of an object, it is called a method.

const counter = {
  count: 0,
  next: function () {
    console.log(this); //counter object-->{ count: 0, next: [Function: next] }
    return ++this.count;
  },
};
console.log(counter.next()); //1
console.log(counter.next()); //2

/*Global context
-->In the global context, the this references the global object, which is the window object on the web browser 
or global object on Node.js*/
// Welcome to Node.js v14.17.6.
// Type ".help" for more information.
// > this   -->node
// <ref *1> Object [global] {

// this-->browser-->this. == window.
// Window

//Function Context-->we invoke a function in the following ways
/*1--Simple function invocation
--In non strict mode this refers to window
--In strict mode not refers to window*/
function show() {
  console.log(this === global); // true
}

show();

function show1() {
  "use strict";
  console.log(this === global); // false
}

show1();

/*--strict mode can use for function(place before body of function)
  --can use for inner function(place before inner function)
  --can use for all(place begining of the file)*/

function show2() {
  "use strict";
  console.log(this === undefined); //undefined-- true;   global -- false

  function display1() {
    console.log(this === global); //undefined-- true;   global -- false
  }
  display1();
}

show2(); //strict mode applied to both main and inner function

/*2) Method invocation
--When you call a method of an object, JavaScript sets this to the object that owns the method*/

let car = {
  brand: "Honda",
  getBrand: function () {
    return this.brand; //method is a property of an object
  },
};

console.log(car.getBrand()); // Honda

//Since a method is a property of an object which is a value, you can store it in a variable.
let brand1 = car.getBrand; //
console.log(brand1); //[Function: getBrand]-->not showing Honda

//To fix this issue, you use the bind() method of the Function.prototype object
//bind() method-->creates a new function whose the this keyword is set to a specified value.

let brand = car.getBrand.bind(car);
console.log(brand()); //bind method set to a value(Creates new function)--> Honda

let car1 = {
  brandName: "Honda",
  getBrandName: function () {
    return this.brandName;
  },
};

let bike = {
  brandName: "Harely Davidson",
};

let brand2 = car1.getBrandName.bind(bike); //bind creates a new function
console.log(brand2()); //Harely Davidson

/*3) Constructor invocation*/
