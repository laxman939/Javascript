/*Promise object represents the eventual completion/failure) of an asynchronous operation and its resulting value.*/
//Basic syntax
let p = new Promise((resolve, reject) => {
  let a = 3 + 2;
  if (a === 3) {
    resolve("success");
  } else {
    reject("failed");
  }
});
p.then((msg) => {
  console.log(`This is in the then ${msg}`);
}).catch((msg) => {
  console.log(`This is in the catch ${msg}`);
});
