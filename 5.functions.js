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
