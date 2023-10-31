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
// console.log("These two strings are the same:", str1 === str2);
let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
// console.log("These two Symbols are the same:", sym1 === sym2);


// Undefined
//  this can be done, but it is recommended to not do this.
let unassigned
// console.log(unassigned);

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
// console.log("str", typeof str);
// console.log("nr", typeof nr);
// console.log("bigNr", typeof bigNr);
// console.log("bool", typeof bool);
// console.log("sym", typeof sym);
// console.log("undef", typeof undef);
// console.log("unknown", typeof unknown);




// Converting data types
let nrToStr = 6;
nrToStr = String(nrToStr);
// console.log(nrToStr, typeof nrToStr);
let strToNr = "12";
strToNr = Number(strToNr);
// console.log(strToNr, typeof strToNr);
let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
// console.log(strToBool, typeof strToBool);



//Converting data types

let myNum1 = 12;
let myNum2 = "12";
//console.log("multiplication :", myNum1 * myNum2);

// this works but if you do an addition + you will
// end up concatinating it

let numToString = 6
numToString = String(numToString)
// console.log(numToString, typeof numToString);

let strToNum = "5"
strToNum = Number(strToNum)
// console.log(strToNum, typeof strToNum);

let strToBool1 = "this is a boolean?"
strToBool1 = Boolean(strToBool1)
// console.log(strToBool1, typeof strToBool1);








// 3. create a function that will change the text of the h1
const handleChangeText = () => {
    const h1 = document.getElementById('demo')
    if (h1) {
        h1.innerText = 'This text has hanged'
    } else {
        console.error('this h1 was not found');
    }
}

// 1. get the button
const buttonText = document.getElementById('changeTextButton')

// 2. add an event listener to the button
if (buttonText) {
    buttonText.addEventListener('click', handleChangeText)
} else {
    console.error("Button with id 'changeTextButton' not found' ")
}





// Example 1: Understanding the Basics
const paragraph1 = document.getElementById('demo1')
const buttonChangeText = document.getElementById('changeTextButton1')
const buttonResetText = document.getElementById('resetTextButton1')

const handleChangeText1 = () => {
    if (buttonChangeText != null) {
        paragraph1.innerText = 'This text has changed'
    } else {
        console.error('this h1 was not found');
    }
}

const handleResetText = () => {
    if (paragraph1 != null) {
        paragraph1.innerText = 'This is a demo paragraph.'
    }
}

buttonChangeText.addEventListener('click', handleChangeText1)
buttonResetText.addEventListener('click', handleResetText)






// Example 2: DOM Manipulation with Various Methods and Event Listeners

// a.Select the "demo" paragraph element and store it in a variable.
const paragraph2 = document.getElementById('demo2');

// b.Create a function that changes the text color of the paragraph to red when called.
const handleChangeColor = () => {
    if(paragraph2.style.color === 'black'){
        paragraph2.style.color = 'red'
    }else{
        paragraph2.style.color = 'black'
    }
}

// c.Create another function that toggles the text's visibility (hides/shows) when called.

const handleToggleVisibility = () => {
    if(paragraph2.style.visibility === 'visible'){
        paragraph2.style.visibility = 'hidden'
    }else{
        paragraph2.style.visibility = 'visible'
    }
}

// d.Add an event listener to the paragraph itself that toggles the text visibility when clicked.
paragraph2.addEventListener('click', handleToggleVisibility)

// e.Select the "changeTextButton" button and store it in a variable.
const changeTextButton2 = document.getElementById('changeTextButton2')

// f.Add an event listener to the "changeTextButton" that changes the text content of the paragraph when clicked.
changeTextButton2.addEventListener('click', handleChangeColor )

// g.Select the "resetTextButton" button and store it in a variable.

const resetTextButton2 = document.getElementById('resetTextButton2')

// h.Add an event listener to the "resetTextButton" that resets the paragraph's text and visibility.
resetTextButton2.addEventListener('click', handleToggleVisibility)
