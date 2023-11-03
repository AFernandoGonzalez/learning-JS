// Example 1: Working with Variables and Data Types
const myName = 'Rahul';
const myAge = 25;
const isStudent = false;


console.log(`My name is ${myName} and I am ${myAge} years old. I am a student: ${isStudent? 'Yes' : 'No'}`);

// Example 2: Manipulating Variables and Data Types

const currentAge = 25;
const maxAge = 100;

const yearLeftToMaxAge = maxAge - currentAge;



// Example: Temperature Converter

// a.Create a variable to store the Celsius temperature entered by the user.


const celsiusInput = document.getElementById('celsiusInput');
const convertButton = document.getElementById('convertButton');

const span = document.getElementById('result')

const handleFahrenheitConversion = () => {
    const fahrenheitTemp = (celsiusInput.value * 9/5) + 32;
    span.innerText = `${fahrenheitTemp} F`  
    celsiusInput.value = ''  
    celsiusInput.focus()
}


convertButton.addEventListener('click', handleFahrenheitConversion);



// let newNamesArray = new Array(5)
newNamesArray = ['Jo', 'Fe', 'Tr', 10, 'soup']
console.log(newNamesArray);

const myInitials = newNamesArray[1]
console.log(myInitials);


//length
console.log("length of array: ", newNamesArray.length);
console.log("last index of array: ", newNamesArray[newNamesArray.length - 1])


// Practice exercise 3.1

// Create an array to use as your shopping list with 3 items: "Milk," "Bread," and
// "Apples."
let shoppingList = ["Milk", "Bread","Apples"]
// 2. Check your list length in the console.
console.log("my shopping list length: ", shoppingList.length);
// 3. Update "Bread" to "Bananas."
shoppingList[1] = "Bananas"
// 4. Output your entire list to the console
console.log("updated shopping list: ", shoppingList);