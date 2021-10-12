//for in and for applicable for arrays only
const obj = ["ram", "kiran", "age"];

for (let e of obj) {
  console.log(e); //ram kiran age
}

for (let e in obj) {
  console.log(e); //0 1 2
}
