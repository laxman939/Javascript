//1-Example Guessing Game
// const MIN = prompt(`Enter Min Number`);
// const MAX = prompt(`Enter Max Number`);

let MIN = 2;
let MAX = 10;

let text = document.querySelector(".Rule");
text.innerHTML = `Please Enter a Number between ${MIN} & ${MAX}`;

let guesses = 0;

let num = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN; // guessed number .
//console.log(num);

const btn = document.querySelector(".btn");
const result = document.querySelector(".output");

btn.addEventListener("click", function () {
  let message = "";

  const input = document.querySelector(".input").value;
  if (input == num) {
    message = `You win! Correct number was ${num}, and guesses = ${guesses} `;
  } else if (input > num) {
    message = `Your guess is hight!`;
  } else if (input < num) {
    message = `Your guess is low!`;
  }
  guesses++;

  result.innerHTML = message;
  document.querySelector(".input").value = "";
});
