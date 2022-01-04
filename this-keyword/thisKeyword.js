//this always refers to an object
let person = {
  firstName: "Ram",
  getName: function () {
    console.log(this);
    console.log(this.firstName);
  },
};
let result = person.getName();

//this refers to window object in global context

console.log(this);

//this refers to an object where we call it
const counter = {
  count: 0,
  increment: function () {
    console.log(this);
    this.count++;
    console.log(this.count); //lost count context--> uses 3 methods to rescue "this"
  },
};

document.querySelector(".btn").addEventListener("click", counter.increment);
