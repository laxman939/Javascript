/*Reduce-->reduces to single value
reduce method takes two arguments accumlater & current value in call back function */
const array = [1, 2, 3, 4, 5];

let sum = array.reduce((acc, cu) => {
  return acc + cu;
});
console.log(sum); //15

//2-reduceRight method-->end to start
const arr = [1, 2, 3, 4];
let add = arr.reduceRight((acc, cur) => {
  return acc + cur;
});
console.log(add); //10
