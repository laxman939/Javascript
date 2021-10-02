/*Promise object represents the eventual completion/failure) of an asynchronous operation and its resulting value.*/
//promises are same as callbacks
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

//Promise chaining
function cal(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(a + b);
    }, 2000);
  });
}
cal(2, 3)
  .then((x) => {
    return x + 2;
  })
  .then((y) => {
    return y + 4;
  })
  .then((z) => {
    console.log(z);
  }); //11
//In place of Promise chaining we will use async and await;
// async/ await are extension to promises; --await keyword is only valids inside async function
