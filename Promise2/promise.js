/*Promise object represents the eventual completion/failure) of an asynchronous operation and its resulting value.*/
//promises are same as callbacks
//1-Basic syntax
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

//2-Promise chaining
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
    console.log(z);//11
  }); //11
//In place of Promise chaining we will use async and await to simplyfy;
// async/ await are extension to promises; --await keyword is only valids inside async function


/*3-callback example--using promises*/
function step1(value, error){
  return new Promise((resolve, reject)=>{
      if(!error){
          resolve(value + 10);
      }else{
          reject("Something went wrong");
      }
  });
}
function step2(value, error){
  return new Promise((resolve, reject)=>{
      if(!error){
          resolve(value + 10);
      }else{
          reject("Something went wrong");
      }
  });
}
function step3(value, error){
  return new Promise((resolve, reject)=>{
      if(!error){
          resolve(value + 10);
      } else{
          reject("Something went wrong");
      }
  })
}
//chaining of promises
step1(10, false).then((result1)=>step2(result1, false))
          .then((result2)=>step3(result2, false))
          .then((result3)=>console.log(result3))
          .catch((error)=> console.log(error));

// //4-fetch api
// fetch("https://api.github.com/users").then((response)=>response.json()).then((result)=>console.log(result));
// axios("https://api.github.com/users").then((result)=>console.log(result.data))

/*async/await-->makes chaining promises easier
async function always returns a promise
await makes a function to wait for promise*/