/*filter() mtd creates a new array with all the elements that pass the test 
implemented by the callback() function   */

const array = [1, 2, 3, 4, 5, 6, 7, 8];
let even = array.filter((e) => {
  return e % 2 === 0;
});
console.log(even); //[ 2, 4, 6, 8 ]

const persons = [
  { name: "ram", age: 25 },
  { name: "anjan", age: 23 },
  { name: "prajwal", age: 24 },
  { name: "aradhya", age: 27 },
  { name: "nag", age: 24 },
  { name: "sai", age: 18 },
  { name: "kiran", age: 13 },
  { name: "manoj", age: 15 },
  { name: "poorna", age: 17 },
];
let minor = persons
  .filter((e) => e.age < 18)
  .sort((a, b) => b.age - a.age)
  .map((e) => {
    return e.name + ":" + e.age;
  });
console.log(minor); //[ 'poorna:17', 'manoj:15', 'kiran:13' ]

let major = persons
  .filter((e) => e.age > 18)
  .sort((a, b) => b.age - a.age)
  .map((e) => {
    return e.name + ":" + e.age;
  });
console.log(major); //[ 'aradhya:27', 'ram:25', 'prajwal:24', 'nag:24', 'anjan:23' ]
