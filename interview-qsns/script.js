// alert("hello");
// Question 1-->
function abc() {
  console.log(a, b, c);

  // const and let going to hoisted but in temprary dead zone
  // TDZ- is the term to describe the where variables are in the scope but they are not yet declared.
  const c = 5;
  let b = 8;
  var a = 10;
}
// abc();

// Question 2 --> Implicit and Explicit Binding
var obj = {
  name: "laxman",
  //  arrow func and normal(anonymous) function -> this not works in arrow function
  display: () => {
    //   display: function () {
    console.log(this.name);
  },
};

var obj1 = {
  name: "Ram",
};

obj.display(); //laxman
obj.display.call(obj1); //Ram

// Question 4 --> output based question on event loop
console.log("a");
setTimeout(() => console.log("set"), 0); //setTimeout part of web Api(browser)
Promise.resolve(() => console.log("pro")).then((res) => res());
console.log("b");
//First it is added to Task Queue. setTimeout executes after javascript eventhough time is 0 sec.
//Promise is also executes at last, but is is added to Micro Task queue or Priority queue
// Priority Task has higher priority than task queue, so PTQ is executed before TQ

// Output
// a , b , pro , set
