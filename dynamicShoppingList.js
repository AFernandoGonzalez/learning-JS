
const myUl = document.querySelector('ul')
const myInput = document.querySelector('input')
const myBtn = document.querySelector('button')



const onSummitBtn = () => {
    let myInputValue = myInput.value

    //creating new elements
    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');
    
    newSpan.innerText = myInputValue
    newBtn.textContent = 'Delete'
    

    const deleteLi = () => {
        myUl.removeChild(newLi)
    }
    newBtn.addEventListener('click', deleteLi)
    
    newLi.appendChild(newSpan)
    newLi.appendChild(newBtn)
    myUl.appendChild(newLi)

    myInput.value = '';
    myInput.focus()
    
}


myBtn.addEventListener('click', onSummitBtn)