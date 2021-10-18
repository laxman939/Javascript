/*-Label-->In JavaScript, you can label a statement for later use, The label can be any valid identifier.
-->You can reference the label by using the break or continue statement
-Break-->Break statement terminates the loop immediately and passes control over the next statement after the loop*/

/*-->label: statement;

  -->outer: for (let i = 0; i < 5; i++) {
    console.log(i);
}    */

//Ex--1
for (var i = 1; i < 10; i++) {
  if (i % 6 == 0) {
    break;
  }
}
console.log(i); //6
/*In the above example for loop increments from 1 to 10 , Break statement is executed and loop is terminated 
after if condition satisfies and control passes to next loop (console)*/

//Ex-2
//top--label
let iterations = 0;
top: for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    iterations++;
    if (i === 0 && j === 1) {
      break top; //break the lebel
    }
  }
}
console.log(iterations); //2
//break statement to terminate a label statement and transfer control to the next statement
