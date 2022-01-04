//Box object containing height and width
function Box(h, w) {
  this.h = h;
  this.w = w;
}

//Widget object containing h, w, and c
function Widget(h, w, c) {
  Box.call(this, h, w);
  this.c = c;
}

//create an instance for widget
let widget = new Widget(10, 20, "green");
console.log(widget); //Widget {h: 10, w: 20, c: 'green'}

//Another example

const person = {
  name: "Laxman",
};

function sample(a, b, c) {
  console.log(Widget, a, b, c);
  //   ƒ Widget(h, w, c) {
  //     Box.call(this, h, w);
  //     this.c = c;
  //   } 1 2 3

  console.log("Sample", a, b, c); //Sample 1 2 3
  console.log(Box, 1, 2);
  //   ƒ Box(h, w) {
  //     this.h = h;
  //     this.w = w;
  //   } 1 2
  console.log(this, 1, 0); //--> this refers to person/Box func
  //Window {window: Window, self: Window, document: document, name: '', location: Location, …} 1 0
  console.log(this.name); //--> this refers to person
  //Laxman / Box
}

sample.call(person, 1, 2, 3);
sample.call(Box, 1, 2, 3);
//person will be any object person obj or Box function or ..
