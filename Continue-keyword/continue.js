/*Continue statement -- skips the current iteration of the loop and immediately jumps to the next iteration
  -->Similar to the break statement, the continue statement has two forms: labeled and unlabeled*/

/*A-- In a for loop jumps to i++
  B--In while or do-while jumps to expression*/

/*for(let i = 0 ; i < count; i++){
    if(condition)
    continue;--jumps to i++
}

do{
if(condition){
    continue;--jumps to expression
}
}while(expression);//continue jumps here

while(expression){
    if(condition){
        continue;--jumps to expression
    }
}
*/

//1-unlabeled(without label)
let s = "This is a javascript continue statement";
let count = 0;
for (let i = 0; i < s.length; i++) {
  if (s.charAt(i) !== " ") {
    continue; //if char is not empty continue works and jumps to i++; if char is empty goes to next loop(count++) and increases by 1
  }
  count++;
}
console.log("Empty spaces is " + count);

//2-with a label-->The label can be any valid identifier
outer: for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    if (i == 2 && j == 1) {
      console.log("continue time");
      continue outer; //if i = 2, j = 1 continue works and console 'continue time' and goes to next i++; if not asusual console i and j values
    }
    console.log("i: " + i + " ; " + "j: " + j);
  }
}
