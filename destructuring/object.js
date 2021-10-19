//destructuring assigment in destructuring
/*Before ES6--No destructuring*/
const car = {
  name: "swift",
  wheels: "4",
  engine: "diesel",
};
let a1 = car.name;
let a2 = car.engine;
let a3 = car.wheels;

console.log(a1, a2, a3); //swift diesel 4

/*After ES-6--destructuring*/
const bike = {
  name: "shine",
  wheels: 2,
};

let { wheels, name } = bike;
console.log(wheels, name); //2 shine

//using different variables names
const hero = {
  name: "pawan kalyan",
  age: 49,
  hits: 3,
};
let { name: name1, age, hits: hitMovies } = hero;
console.log(name1, hitMovies, age); //'pawan kalyan' 3 49

//Assign default values
const heroine = {
  name2: "samantha",
  status: "single",
};
let { name2, status, hits = 6 } = heroine;
console.log(name2, status, hits); //samantha single 6

//Assign remaining elements to a single variable
const director = {
  name3: "Nelson",
  movies: 3,
  upcoming: "beast",
  industry: "kollywood",
};
let { name3, ...extra } = director;
console.log(name3, extra); //Nelson { movies: 3, upcoming: 'beast', industry: 'kollywood' }

//Nested destructuring assignment
const employee = {
  name4: "Ram",
  Id: 34,
  job_profile: "developer",
  languages: {
    html: "yes",
    css: "yes",
    javascript: "yes",
  },
};
let {
  name4,
  Id,
  job_profile,
  languages: { html, css, javascript },
} = employee;
console.log(css, Id, job_profile); //yes 34 developer
