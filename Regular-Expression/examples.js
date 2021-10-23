//1-Check whether the first character of a string is uppercase or not
function upperCase(name) {
  reg = /^[A-Z]/; //^-->for starting
  if (reg.test(name)) {
    console.log("First character is in uppercase");
  } else {
    console.log("First character is not in uppercase");
  }
}
upperCase("laxman"); //First character is not uppercase

//2--Count No of vowels in a string
function vowelsCount(str) {
  return str.match(/[aeiou]/gi).length;
}

console.log(vowelsCount("Hi everyone")); //5
