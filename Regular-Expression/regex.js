/*-->Regular expressions are useful for searching and replacing strings that match a pattern
--A regular expression is a string that describes a pattern
--In JavaScript, regular expressions are objects.
 -->Creates in two ways
 1-->using forward slashes
 let re = /hi/;
 2--> using RegExp constructor
 let re = new RegExp('hi');*/

/* Flags are settings that change the searching behavior.
 Ignore flag (i)-->i flag ignores cases when searching.
 Global flag (g)-->looks for all matches and returns all of them.*/

//Method-1-->Testing--returns true if the string argument contains a match.

let re = /A/gi; // or let re = new RegExp("A", "gi")
let result = re.test("This is about JavaScript regular expressions");
console.log(result); //gi--true; g--false

//Method-2-->exec()--it returns a single match at once. To get all matches, need to execute the exec() multiple times(use while loop).
// To find the match and return an array that contains the information of the match.--> use rarely
var str = " script script is an interesting scripting language";
var oneStr = new RegExp("script", "g");

var reresult;
var final = [];

do {
  reresult = oneStr.exec(str);
  if (reresult) {
    final.push(reresult);
  }
} while (reresult != null);
console.log(final);

//Method-3-->match()-->str.match(regexp) returns all matches of regexp in the string str.

let msg1 =
  "css is a scripting language it changes static web pages to dynamic web pages and aads behiour to html elemnts. To";
let reg1 = msg1.match(/to/gi);

console.log(reg1); //[ 'to', 'to', 'To' ]--> returns all matches

//Method-4-->replace() method to replace the first/all occurrence of the string

let name = "my n is ram, what is your n";

let names = name.replace(/n/, "name");

console.log(names); //my name is laxman, what is your n-->replace first occurance

console.log(name.replace(/n/g, "name")); //my name is ram, what is your name--> replaces all

console.log(name.replace(/m/g, "z")); //zy n is raz, what is your n -->replace all m's with z
