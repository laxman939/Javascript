//1-For arrays
const citrus = ["Oranges", "Grapes", "Limes"];
const melons = ["Watermelon", "Rockmelon"];
const berries = ["Strawberry", "Respberry", "Blueberry", "Kiwifruit"];

const fruits = [
  ...citrus,
  "Apple",
  "PineApple",
  "pomeGranate",
  ...melons,
  ...berries,
];
console.log(fruits);

//2-For objects
const fullName = {
  fName: "Ram",
  lName: "Laxman",
};

const frontEnd = {
  languages: ["HTML", "CSS", "JavaScript"],
};
const employee = {
  ...fullName,
  profession: "JavaScript Developer",
  exp: 0,
  ...frontEnd,
  "back-end": ["NodeJS", "ExpressJS", "MongoDB", "PostgreSQL"],
};

console.log(employee);
