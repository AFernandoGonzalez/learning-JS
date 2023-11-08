function repeat(times, callback) {
    for (let i = 0; i < times; i++) {
        callback(i);
    }
}

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});
// console.log(labels);


// ['1','2','3'].forEach(element => {
//    console.log(element); 
// });




let arrays = [[1, 2, 3], [4, 5], [6]];

const flatteningArray = (arr) => {
    return arr.reduce((initialValue, b) => initialValue.concat(b));
}

console.log(flatteningArray(arrays));


// Your code here.
// → [1, 2, 3, 4, 5, 6]




// basic calculator
// 1. Set up two variables containing number values.
// 2. Set up a variable to hold an operator, either + or -.
// 3. Create a function that retrieves the two values and the operator string value within its parameters.Use those values with a condition to check if the operator is + or -, and add or subtract the values accordingly(remember if not presented with a valid operator, the function should default to addition).
// 4. Within console.log(), call the function using your variables and output the response to the console.
// 5. Update the operator value to be the other operator type—either plus or minus—and call to the function again with the new updated arguments.

const basicCalculator = (num1, num2, operator) => {
    result = "";
    if(operator === "-"){
        result = num1 - num2
    }else{
        result = num1 + num2
    }

    return result
}

console.log(basicCalculator(1, 2, "-"));
console.log(basicCalculator(1, 2, "+"));
console.log(basicCalculator(1, 2, ""));