const changeColorButton = document.getElementById('changeColorButton')

const randomColor = [
    'red', 'gray', 'blue', 'orange', 'black'
]

let colorState = false;

const bgColor = () => {
    let body = document.body

    const randomColorIndex = Math.floor(Math.random() * randomColor.length)

    let result = randomColor[randomColorIndex]


    if(colorState){
        body.style.backgroundColor = result
        colorState = false
        console.log(colorState);
    }else{
        body.style.backgroundColor = 'white'
        colorState = true
        console.log(colorState);
    }

}

changeColorButton.addEventListener('click', bgColor)




//random exercise from textbook

const minFunc =(min, max)=>{
    return Math.min(min,max)
}

// console.log(minFunc(0, 10));
// // → 0
// console.log(minFunc(0, -10));
// // → -10





// Recursion
// Your code here.

const isEven = (num) => {
    if (num < 0) {
        num = Math.abs(num); // Convert negative numbers to positive
    }

    if (num === 0) {
        return true;  // Zero is even
    } else if (num === 1) {
        return false;  // One is odd
    } else {
        return isEven(num - 2); // Recursively check for evenness
    }
};


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??





// Bean counting
// Your code here.

const countBs = (myString) => {
    let allBs = 0;
    for(let i = 0 ; i < myString.length; i++){
        myString[i] === 'B'? allBs += 1 : allBs
    }
    return allBs
}

const countChar = (myString, letter) => {
    let allChars = 0;
    for (let i = 0; i < myString.length; i++) {
        myString[i] === letter ? allChars += 1 : allChars
    }
    return allChars
}

console.log(countBs("BBC"));
// console.log(countBs(""));
// → 2
// console.log(countChar("", ""));
console.log(countChar("kakkerlak", "k"));
// → 4
