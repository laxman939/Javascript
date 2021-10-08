/*Map-->Map method calls a cb fn on every element of an array and returns a new array that contains the results.*/

//1-finding circle area
let array = [2, 4, 5]; //radius values
let areas = array.map((radius) => {
  return Math.floor(Math.PI * radius * radius);
});
console.log(areas);

//2-finding square root values-->using Math.sqrt
let numbers = [4, 16, 36, 81, 100, 140];
let sqrtValues = numbers.map((ele) => {
  return Math.sqrt(ele);
  //(or)numbers.map(Math.sqrt);
});
console.log(sqrtValues);

//3-Changing first letter to upperCase-->using toUpperCase() & slice() methods
let names = ["ram", "aradhya", "anjan", "prajwal", "nag", "mahesh"];
let firstCapNames = names.map((n) => {
  return n[0].toUpperCase() + n.slice(1); //adds  remaining letters from index 1
});
console.log(firstCapNames);
