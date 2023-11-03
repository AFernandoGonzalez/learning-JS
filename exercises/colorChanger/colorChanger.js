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
        body.style.backgroundColor = 'red'
        colorState = true
        console.log(colorState);
    }

}

changeColorButton.addEventListener('click', bgColor)