// reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other

const h1 = document.getElementsByClassName('myTitle');
h1.htmlText = "hi";

const square = (x) => {
    return x * x;
}
console.log(square(3));



const makeNoise = function () {
    console.log("Pling!");
}

makeNoise()

const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base
    }
    return result;
}

console.log(power(2, 10));





