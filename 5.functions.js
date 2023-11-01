// reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other


const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

const result = document.getElementById('result');

const addButton = document.getElementById('addButton');

const subtractButton = document.getElementById('subtractButton');

const multiplyButton = document.getElementById('multiplyButton');

const divideButton = document.getElementById('divideButton');


const handleAddition = () => {
    const sum = Number(num1.value) + Number(num2.value);
    result.innerText = sum;
}

const handleSubtraction = () => {
    const sub = Number(num1.value) - Number(num2.value);
    result.innerText = sub;
}

const handleMultiplication = () => {
    const mult = Number(num1.value) * Number(num2.value);
    result.innerText = mult;
}

 const handleDivision = () => {
    const division = Number(num1.value) / Number(num2.value);
    result.innerText = division;
 }


addButton.addEventListener('click', handleAddition);
subtractButton.addEventListener('click', handleSubtraction);
multiplyButton.addEventListener('click', handleMultiplication);
divideButton.addEventListener('click', handleDivision);



// Practicing Functions:

// Unclean Function:
function checkAvailability(products, selectedProduct) {
    let isAvailable = false;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === selectedProduct.id ) {
            if (products[i].quantity > 0) {
                isAvailable = true;
                break;
            }
        }
    }
    return isAvailable;
}

// clean function
function checkAvailability2(products, selectedProduct) {
    for (let i = 0; i < products.length; i++){
        if(products[i].id === selectedProduct.id && products[i].quantity >  0){
            return true;
        }
    }
    return false
}


// Sample data
const products = [
    { id: 1, quantity: 0 },
    { id: 2, quantity: 3 },
    { id: 3, quantity: 5 },
];
const selectedProduct = { id: 2 };


console.log(checkAvailability(products, selectedProduct));
console.log(checkAvailability2(products, selectedProduct));





// Unclean Function:
function formatFullName(firstName, lastName) {
    if (firstName && lastName) {
        return firstName + ' ' + lastName;
    } else if (firstName && !lastName) {
        return firstName;
    } else if (!firstName && lastName) {
        return lastName;
    } else {
        return '';
    }
}


// clean Function:
function formatFullName1(firstName, lastName) {
    if(firstName && lastName){
        return firstName + " " + lastName
    }
    return firstName || lastName || ""
}


const firstN = "fer"
const lastN = "gon"

console.log(formatFullName1(firstN, lastN));







//Unclean Function 1:
function calculateArea(length, width) {
    if (length > 0 && width > 0) {
        return length * width;
    } else {
        return 0;
    }
}

// Unclean Function 2:
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

// Unclean Function 3:
function greet(name) {
    if (name) {
        return 'Hello, ' + name + '!';
    } else {
        return 'Hello, stranger!';
    }
}



//clean Function 1:
function calculateArea(length, width) {
    if (length > 0 && width > 0) {
        return length * width;
    } else {
        return 0;
    }
}

// clean Function 2:
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

// clean Function 3:
function greet(name) {
    if (name) {
        return 'Hello, ' + name + '!';
    } else {
        return 'Hello, stranger!';
    }
}
