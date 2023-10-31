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
    span.innerText = fahrenheitTemp  
    celsiusInput.value = ''  
    celsiusInput.focus()
}


convertButton.addEventListener('click', handleFahrenheitConversion);

