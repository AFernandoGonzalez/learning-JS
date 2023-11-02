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
        if (products[i].id === selectedProduct.id) {
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
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === selectedProduct.id && products[i].quantity > 0) {
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


// console.log(checkAvailability(products, selectedProduct));
// console.log(checkAvailability2(products, selectedProduct));





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
    if (firstName && lastName) {
        return firstName + " " + lastName
    }
    return firstName || lastName || ""
}


const firstN = "fer"
const lastN = "gon"

//console.log(formatFullName1(firstN, lastN));







//Unclean Function 1:
function calculateArea(length, width) {
    if (length > 0 && width > 0) {
        return length * width;
    } else {
        return 0;
    }
}


//clean Function 1:
function calculateArea(length, width) {
    if (length > 0 && width > 0) {
        return length * width
    }
    return 0
}
function calculateArea(length, width) {
    return length > 0 && width > 0 ? length * width : 0;
}



// Unclean Function 2:
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

// clean Function 2:
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'even'
    }
    return 'odd'
}
function isEvenOrOdd(number) {
    return number % 2 === 0 ? 'even' : 'odd';
}

// Unclean Function 3:
function greet(name) {
    if (name) {
        return 'Hello, ' + name + '!';
    } else {
        return 'Hello, stranger!';
    }
}


// clean Function 3:
function greet(name) {
    return name ? 'Hello, ' + name + '!' : 'Hello, stranger!';
}
//console.log(greet());


//unclean Function
function calculatePrice(quantity, unitPrice) {
    if (quantity > 0 && unitPrice > 0) {
        return quantity * unitPrice;
    } else {
        return 0;
    }
}

// clean function
function calculatePrice(quantity, unitPrice) {
    return quantity > 0 && unitPrice > 0 ? quantity * unitPrice : 0;
}

//console.log(calculatePrice(2,3));






// intermediate - level functions

// Unclean Function 1
function findLargest(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

function findLargest1(numbers) {
    if (numbers.length === 0) {
        return undefined
    }
    return Math.max(...numbers)
}

function findLargest2(numbers) {
    return numbers.length > 0 ? numbers.reduce((max, num) => Math.max(max, num)) : undefined;
}



let numbersArrays = [1, 2, 3, 10, 45]
//console.log(findLargest2(numbersArrays));



//using reduce
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
//console.log(flatArray);

const data = [
    { category: 'A', value: 10 },
    { category: 'B', value: 15 },
    { category: 'A', value: 20 },
    { category: 'A', value: 5 },
];

const groupedData = data.reduce((accumulator, item) => {
    accumulator[item.category] = (accumulator[item.category] || 0) + item.value;
    return accumulator;
}, {});

//console.log(groupedData);



// Unclean Function 2
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

function calculateAverage1(numbers) {
    //calculating the average of an empty array doesn't make mathematical sense because division by zero is undefined.
    if (numbers.length === 0) {
        return 0
    }
    const avg = numbers.reduce((accumulator, num) => accumulator + num, 0) / numbers.length
    return avg
}

const numbersListAvg = [1, 2, 3, 4, 5]
// console.log("numbersListAvg: ", calculateAverage1(numbersListAvg));


// Unclean Function 3
function filterPositiveNumbers(numbers) {
    let positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        }
    }
    return positiveNumbers;
}


function filterPositiveNumbers1(numbers) {
    return numbers.filter(number => number > 0)
}


const positiveNumList = [-1, 1, -2, 3, 4, 5]
//console.log("positive numbers ", filterPositiveNumbers1(positiveNumList));






// Unclean Function 4:

function mergeArrays(arr1, arr2) {
    const mergedArray = [];
    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        mergedArray.push(arr2[i]);
    }
    return mergedArray;
}


// clean Function 4:
// cleaner version
function mergeArrays1(arr1, arr2) {
    return [...arr1, ...arr2]
}

function mergeArrays2(arr1, arr2) {
    const a1 = arr1.reduce((accumulator, val) => accumulator.concat(val), [])
    const a2 = arr2.reduce((accumulator, val2) => accumulator.concat(val2), [])
    return a1.concat(a2);

}

const mergeArr1 = [1, 2]
const mergeArr2 = ["hi", 1, 5, 'fernando']
// console.log("mergeArrays", mergeArrays1(mergeArr1, mergeArr2));
// console.log("mergeArrays", mergeArrays2(mergeArr1, mergeArr2));



//UnClean Function 5:
function capitalizeWords(words) {
    const capitalizedWords = [];
    for (let i = 0; i < words.length; i++) {
        capitalizedWords.push(words[i].toUpperCase());
    }
    return capitalizedWords;
}

// Clean Function 5:
function capitalizeWords1(words){
    return words.map((word) => word.toUpperCase() )
}

const capArr2 = ["hi", 'fernando']
// console.log("capitalizeWords", capitalizeWords1(capArr2));



//UnClean Function 6:
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

//Clean Function 6:

function reverseString1(str) {
    return revStr = str.reverse().join('')
}


const reverseArr = ["hi", "-", 'fernando']
// console.log("reverseString", reverseString1(reverseArr));






// Unclean all concept Function:

function arrayStatistics(numbers) {
    let sum = 0;
    let average = 0;
    let largest = numbers[0];
    let smallest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];

        if (numbers[i] > largest) {
            largest = numbers[i];
        }

        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }

    average = sum / numbers.length;

    return {
        sum: sum,
        average: average,
        largest: largest,
        smallest: smallest
    };
}

function arrayStatistics1(numbers){
    let sum = numbers.reduce((accumulator, num) => accumulator + num, 0)
    let average = numbers.length > 0 ? sum / numbers.length : 0;
    let largest = numbers.length > 0 ? Math.max(...numbers) : 0;
    let smallest = numbers.length > 0 ? Math.min(...numbers) : 0;

    return { sum: sum, average:average, largest: largest, smallest: smallest}

}

const arrayStat = [1,2,3,4]
// console.log(arrayStatistics1(arrayStat));






const shoppingCart = [];

function addToCart(itemName, itemPrice, quantity = 1) {
    const newItem = {
        name: itemName,
        price: itemPrice,
        quantity: quantity
    };

    // Check if the item already exists in the cart
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].name === itemName) {
            shoppingCart[i].quantity += quantity;
            return;
        }
    }
    

    shoppingCart.push(newItem);
}

function removeFromCart(itemName, quantity = 1) {
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].name === itemName) {
            shoppingCart[i].quantity -= quantity;
            if (shoppingCart[i].quantity <= 0) {
                shoppingCart.splice(i, 1);
            }
            return;
        }
    }
}

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        total += shoppingCart[i].price * shoppingCart[i].quantity;
    }
    return total;
}

function displayCart() {
    console.log('Shopping Cart Contents:');
    for (let i = 0; i < shoppingCart.length; i++) {
        console.log(`${shoppingCart[i].name} - $${shoppingCart[i].price} x ${shoppingCart[i].quantity}`);
    }
    console.log(`Total: $${calculateTotal()}`);
}

// Example usage
// addToCart('Shirt', 20);
// addToCart('Shoes', 50, 3);
// removeFromCart('Shirt', 1);
// displayCart();




// Clean Version
const shoppingCart1 = [];

function addToCart1(itemName, itemPrice, quantity) {
    const existingItem = shoppingCart1.find((item) => item.name === itemName)
    existingItem ? existingItem.quantity += quantity : shoppingCart1.push({name: itemName,price : itemPrice,quantity
    })

}

function removeFromCart1(itemName, quantity){
    const itemIndex = shoppingCart1.findIndex((item) => item.name === itemName);
    if (itemIndex !== -1) {
        shoppingCart1[itemIndex].quantity -= quantity;
        if (shoppingCart1[itemIndex].quantity <= 0) {
            shoppingCart1.splice(itemIndex, 1);
        }
    }

}

function calculateTotal1() {
    return shoppingCart1.reduce((total, item) => total + item.price * item.quantity, 0)
}

function displayCart1() {
    let cartContent = []
    console.log(`New Shopping Cart Contents:`);
    shoppingCart1.forEach((item)=> {
        cartContent += `${item.name} - $${item.price} x ${item.quantity}\n`
    })
    console.log(`${cartContent}===============Total: $${calculateTotal1()}`)
}

// Example usage
addToCart1('Shirt', 20, 1);
addToCart1('Shoes', 50, 3);
removeFromCart1('Shirt', 10);
removeFromCart1('Shoes', 2);
displayCart1();