//1-Check whether the first character of a string is uppercase or not
function upperCase(name) {
  reg = /^[A-Z]/; //^-->for starting
  if (reg.test(name)) {
    console.log("First character is uppercase");
  } else {
    console.log("First character is not uppercase");
  }
}
upperCase("laxman"); //First character is not uppercase
