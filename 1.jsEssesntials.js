//variables are values in the code

firstName = "Mike";
x = 2;

// variables can be replaced
firstName = "Thomas";
x = 10.0;



// declaring variables

let myCar = "BMW";
myCar = "Mercedes Benz";


//variables defining keywords
let meaningLet = "has a block scope";
var meaningVar = "has a global scope"
const meaningConst = "can be only assigned onces"


//Primitive data types
// 1. String
let singleString = 'im a single string'
let doubleString = 'im a double string';
//2. Number
let intNr = 1;
let decNr = 1.0;
let expNr = 1.4e15;


// Boolean
let bool1 = false;
let bool2 = true;


//Symbol
let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";
console.log("These two strings are the same:", str1 === str2);
let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two Symbols are the same:", sym1 === sym2);


// Undefined
//  this can be done, but it is recommended to not do this.
let unassigned
console.log(unassigned);

// null
// better to assign null to a variable when you want to say it is empty and unknown at
// first

let empty = null;



// built-in JavaScript methods
// that will help us deal with common problems related to primitives.

// for ex.
let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;
console.log("str", typeof str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown);




// Converting data types
let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);
let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);
let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);