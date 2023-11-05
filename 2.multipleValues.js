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






//arrays methods

//push() adds to end
favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push('grapes')

let anotherFruit = favoriteFruits.push('apple')
let anotherFruitForArray = favoriteFruits.push('strawberries')
console.log("favoriteFruits with PUSH: added to end", favoriteFruits);

// pop() last item delete
let popItem = favoriteFruits.pop()
console.log("popItem: last Item", popItem);

//shift() first item delete
let shiftItem = favoriteFruits.shift()
console.log("shiftItem: first Item", shiftItem);

// add after 2 items not index which starts at 0
favoriteFruits.splice(2, 0 , "knife", "car")
console.log("favoriteFruits with SLICE: ", favoriteFruits);

// adds after 2 and deletes 1 after added items
favoriteFruits.splice(2, 1 , "2", "3")
console.log("favoriteFruits with SLICE: ", favoriteFruits);




let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arrConcat = arr5.concat(arr6)
console.log("Concatenated array:", arrConcat);
let arr8 = arrConcat.concat(123, 190)
console.log("New Concatenated array:", arr8);



const arr9 = [1,2,3,4,"car",6,7,8,9,0]
const arrIndexUndefined = arr9.find(e => e === 10)
console.log("arrIndex: ", arrIndexUndefined);
const arrIndex = arr9.find(e => e === "car")
console.log("arrIndex: ", arrIndex);

let arrFindIndex = arr9.indexOf("car")
console.log("arrFindIndex: ", arrFindIndex);


let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log("lastDog: ", lastDog);


//SORTING
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
console.log("Sort: ", names.sort());
let ages = [18, 72, 33, 56, 40];
console.log("Ages: ", ages.sort());


// REVERSING
console.log("REVERSE: ", names.reverse());






// Practice exercise 3.2
// 1. Create an empty array to use as a shopping list.
let arrShoppingList = new Array()
// 2. Add Milk, Bread, and Apples to your list.
arrShoppingList.push("Milk", "Bread", "Apples")
// 3. Update "Bread" with Bananas and Eggs.
arrShoppingList.splice(1, 1,"Bananas", "Eggs")
// 4. Remove the last item from the array and output it into the console.
arrShoppingList.pop()
// 5. Sort the list alphabetically.
arrShoppingList.sort()
// 6. Find and output the index value of Milk.
let indexOfMilk = arrShoppingList.indexOf('Milk')
console.log("indexOfMilk: ", indexOfMilk);
// 7. After Bananas, add Carrots and Lettuce.
arrShoppingList.splice(1, 0 , "Carrots", "Lettuce")
// 8. Create a new list containing Juice and Pop.
let newList = ["Juice", "Pop"]
// 9. Combine both lists, adding the new list twice to the end of the first list.
let concatList = arrShoppingList.concat(newList).concat(newList)
// 10. Get the last index value of Pop and output it to the console
console.log("concatList: ", concatList);
console.log(arrShoppingList);

// (7) ['Bananas', 'Carrots', 'Lettuce', 'Eggs', 'Milk', 'Juice', 'Pop']



let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);

let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};

console.log(Object.keys({
    work: "Went to work",
    "touched tree": "Touched a tree"
}));
console.log(Object.values({
    work: "Went to work",
    "touched tree": "Touched a tree"
}));




// Push - adds to end
// shift - removes first item
//unshift - add item at the beginning 

const allTasks = []

const addTasks = (task)=>{
    allTasks.push(task)
}

const getTask = () => {
    console.log("shift: ",allTasks.shift());
    return allTasks.shift()
}

const addUrgent = () => {
    console.log("unshift: ", allTasks.unshift());
    allTasks.unshift()
}

const tasksList = [ "one", "two", "three"]
addTasks(tasksList)
getTask()
addUrgent()

console.log("allTasks" , allTasks);