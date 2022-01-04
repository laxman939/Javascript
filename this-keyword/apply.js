//Math.max
let numbers = [1, 2, 3, 4];
console.log(Math.max([1, 2, 3])); //NaN

//which one from call, bind, apply will be helpful here?

console.log(Math.max.apply(null, [1, 2, 3])); //3
console.log(Math.max.apply(null, numbers)); //4

//sample
function sample(name) {
  console.log("sample", name);
}

sample(); //sample undefined
sample.apply(); //sample undefined
sample.apply(["Laxman"]); //sample undefined
sample.apply(null, ["Laxman"]); //sample Laxman
