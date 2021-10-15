/*let vs var
let-->1.Block scoped, 2.can't redeclare, 3.Hoisting not occur
var-->1.Function scoped, 2.can redeclare, 3.Hoisting occurs*/
//Hoisting is JavaScript's default behavior of moving declarations to the top.

//1-Scope
function sum1(n) {
  let value = 0;
  for (let i = 1; i <= n; i++) {
    //console.log(i); //Accessed
    value += i;
  }
  //console.log(i); //undefined-->Block scoped(Only in if block)
  return value;
}
//console.log(sum1(5));

function sum2(n) {
  var value = 0;
  for (var i = 1; i <= n; i++) {
    value += i; //var anywhere inside block as well as function
  }
  console.log(i); //4-->accessed
  return value;
}
sum2(3);

//2-Redeclare
var a = 6;
var a = 4;
//console.log(a); //4

let b = 5;
//let b = 2; //b has already declared
//console.log(b)

let d = 2;
for (let d = 0; a < 3; a++) {
  console.log("hello");
}
console.log(d); // 2-->for loop doesn't change outer variable

var k = 2;
for (var k = 0; a < 3; a++) {
  console.log("hello");
}
console.log(k); // 0 -->for loop doesn't change outer variable

//3-Hoisting-->declarations(var x) can be hoisted but not initializations(var x = 5)
l = 5;
console.log(l);
var l; // 5-->declaration-->Hoisted

console.log(a);
var a = 5; // initialization--> not Hoisted

console.log(x);
var x; //undefined(not an error)

console.log(y); //Cannot access 'y' before initialization
let y = 4;

//Note-->Both let and var can be used as global variables
