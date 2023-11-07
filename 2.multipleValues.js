// // Example 1: Working with Variables and Data Types
// const myName = 'Rahul';
// const myAge = 25;
// const isStudent = false;


// console.log(`My name is ${myName} and I am ${myAge} years old. I am a student: ${isStudent? 'Yes' : 'No'}`);

// // Example 2: Manipulating Variables and Data Types

// const currentAge = 25;
// const maxAge = 100;

// const yearLeftToMaxAge = maxAge - currentAge;



// // Example: Temperature Converter

// // a.Create a variable to store the Celsius temperature entered by the user.


// const celsiusInput = document.getElementById('celsiusInput');
// const convertButton = document.getElementById('convertButton');

// const span = document.getElementById('result')

// const handleFahrenheitConversion = () => {
//     const fahrenheitTemp = (celsiusInput.value * 9/5) + 32;
//     span.innerText = `${fahrenheitTemp} F`  
//     celsiusInput.value = ''  
//     celsiusInput.focus()
// }


// convertButton.addEventListener('click', handleFahrenheitConversion);



// // let newNamesArray = new Array(5)
// newNamesArray = ['Jo', 'Fe', 'Tr', 10, 'soup']
// console.log(newNamesArray);

// const myInitials = newNamesArray[1]
// console.log(myInitials);


// //length
// console.log("length of array: ", newNamesArray.length);
// console.log("last index of array: ", newNamesArray[newNamesArray.length - 1])


// // Practice exercise 3.1

// // Create an array to use as your shopping list with 3 items: "Milk," "Bread," and
// // "Apples."
// let shoppingList = ["Milk", "Bread","Apples"]
// // 2. Check your list length in the console.
// console.log("my shopping list length: ", shoppingList.length);
// // 3. Update "Bread" to "Bananas."
// shoppingList[1] = "Bananas"
// // 4. Output your entire list to the console
// console.log("updated shopping list: ", shoppingList);






// //arrays methods

// //push() adds to end
// favoriteFruits = ["grapefruit", "orange", "lemon"];
// favoriteFruits.push('grapes')

// let anotherFruit = favoriteFruits.push('apple')
// let anotherFruitForArray = favoriteFruits.push('strawberries')
// console.log("favoriteFruits with PUSH: added to end", favoriteFruits);

// // pop() last item delete
// let popItem = favoriteFruits.pop()
// console.log("popItem: last Item", popItem);

// //shift() first item delete
// let shiftItem = favoriteFruits.shift()
// console.log("shiftItem: first Item", shiftItem);

// // add after 2 items not index which starts at 0
// favoriteFruits.splice(2, 0 , "knife", "car")
// console.log("favoriteFruits with SLICE: ", favoriteFruits);

// // adds after 2 and deletes 1 after added items
// favoriteFruits.splice(2, 1 , "2", "3")
// console.log("favoriteFruits with SLICE: ", favoriteFruits);




// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let arrConcat = arr5.concat(arr6)
// console.log("Concatenated array:", arrConcat);
// let arr8 = arrConcat.concat(123, 190)
// console.log("New Concatenated array:", arr8);



// const arr9 = [1,2,3,4,"car",6,7,8,9,0]
// const arrIndexUndefined = arr9.find(e => e === 10)
// console.log("arrIndex: ", arrIndexUndefined);
// const arrIndex = arr9.find(e => e === "car")
// console.log("arrIndex: ", arrIndex);

// let arrFindIndex = arr9.indexOf("car")
// console.log("arrFindIndex: ", arrFindIndex);


// let animals = ["dog", "horse", "cat", "platypus", "dog"];
// let lastDog = animals.lastIndexOf("dog");
// console.log("lastDog: ", lastDog);


// //SORTING
// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// console.log("Sort: ", names.sort());
// let ages = [18, 72, 33, 56, 40];
// console.log("Ages: ", ages.sort());


// // REVERSING
// console.log("REVERSE: ", names.reverse());






// // Practice exercise 3.2
// // 1. Create an empty array to use as a shopping list.
// let arrShoppingList = new Array()
// // 2. Add Milk, Bread, and Apples to your list.
// arrShoppingList.push("Milk", "Bread", "Apples")
// // 3. Update "Bread" with Bananas and Eggs.
// arrShoppingList.splice(1, 1,"Bananas", "Eggs")
// // 4. Remove the last item from the array and output it into the console.
// arrShoppingList.pop()
// // 5. Sort the list alphabetically.
// arrShoppingList.sort()
// // 6. Find and output the index value of Milk.
// let indexOfMilk = arrShoppingList.indexOf('Milk')
// console.log("indexOfMilk: ", indexOfMilk);
// // 7. After Bananas, add Carrots and Lettuce.
// arrShoppingList.splice(1, 0 , "Carrots", "Lettuce")
// // 8. Create a new list containing Juice and Pop.
// let newList = ["Juice", "Pop"]
// // 9. Combine both lists, adding the new list twice to the end of the first list.
// let concatList = arrShoppingList.concat(newList).concat(newList)
// // 10. Get the last index value of Pop and output it to the console
// console.log("concatList: ", concatList);
// console.log(arrShoppingList);

// // (7) ['Bananas', 'Carrots', 'Lettuce', 'Eggs', 'Milk', 'Juice', 'Pop']



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





// Practice exercise 3.4
// 1. Create a new myCar object for a car.Add some properties, including, but not
// limited to, make and model, and values for a typical car or your car.Feel free
// to use booleans, strings, or numbers.
// JavaScript Multiple Values
// [64]
const myCar = {
    make: "Honday",
    model: "Toyota",
    year: 1990,
    isUsed: true,
    pastDrivers: [1,2,3]
}

// 2. Create a variable that can hold the string value color.This variable containing a string value color can now be used to reference the property name within myCar.Then, use the variable within the square bracket notation to assign a new value to the color property in myCar.
let color = "blue"
myCar[color] = color
myCar[color] = "red"

// 3. Use that same variable and assign a new property string value to it, such as forSale.Use the bracket notation once again to assign a new value to the forSale property to indicate whether the car is available for purchase.
let forSale = true
myCar.forSale = forSale



// 4. Output make and model into the console.
console.log(`Make: ${myCar.make}\nModel: ${myCar.model}`);

// 5. Output the value of forSale into the console.
console.log(`For sale: ${forSale}`);

console.log(myCar);

let company = {
    companyName: "Healthy Candy",
    activities: ["food manufacturing",
        "improving kids' health", "manufacturing toys"],
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment: 2021
};

console.log("objs in objs", company["address"]["city"]);
console.log("objs in objs", company.address.city);


console.log("arrays in objs: ", company.activities[1]);



// Practice exercise 3.5
// 1. Create an object named people that contains an empty array that is called friends.
const people = {
    friends : []
}

// 2. Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value.
const friend1 = {
    id: 1,
    firstName: "fer",
    lastName: "Gon"
}
const friend2 = {
    id: 2,
    firstName: "Thro",
    lastName: "Lop"
}
const friend3 = {
    id: 3,
    firstName: "Lop",
    lastName: "Phil"
}

// 3. Add the three friends to the friend array.

people.friends = [friend1, friend2, friend3]
// OR
people.friends.push(friend1, friend2, friend3)

// 4. Output it to the console.

console.log("People: ", people);




const theList = ['Laurence', 'Svekis', true, 35, null,undefined, { test: 'one', score: 55 }, ['one', 'two']];

theList.shift()
theList.pop()
theList.unshift('FIRST')
theList[3] = "hello world"
theList[2] = "MIDDLE"
theList.push("LAST")


console.log("theList: ", theList);




// Company product catalog
// In this project, you will implement a data structure for a product catalog and create queries to retrieve data.
// 1. Create an array to hold an inventory of store items.

const inventory = []

// 2. Create three items, each having the properties of name, model, cost, and quantity.
const item1  = {
    name: "item1",
    model: "n/a",
    cost: 12,
    quantity: 4
}
const item2  = {
    name: "item2",
    model: "vitamins",
    cost: 34,
    quantity: 66
}
const item3  = {
    name: "item3",
    model: "energy",
    cost: 120,
    quantity: 0
}
// 3. Add all three objects to the main array using an array method, and then log the inventory array to the console.

inventory.push(item1,item2, item3)

// 4. Access the quantity element of your third item, and log it to the console. Experiment by adding and accessing more elements within your data structure.
console.log("third element quantity: ", inventory[2].quantity);


const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2);
console.log(myArr2[2]);

