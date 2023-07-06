let x;
x = 5;

let y = 10;

let name = "John";
let age = 23;
let isStudent = true;
let school = "University of Michigan";

let introduction = `My name is ${name} and I'm ${y} years old.`
// use backticks to quote a string, with a dollar sign 

let message = "My name is " + name + " and I study at " + school + ".";
// use concatenation to join variables to a message when double quote is used

//Round-down division
let dividend = 13;
let divisor = 3;

let result = Math.floor(dividend / divisor) // round-down division

let modulo = dividend % divisor; // modulo means calculate remainder

let number = 24;
let squareRoot = Math.sqrt(number); // find the square root of the number
let roundedSquareRoot = Math.round(squareRoot); // round up when more than 0.5

console.log(result)