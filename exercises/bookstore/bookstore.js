

// use functions to 
// add books to the object, 
// list books, and 
// display book information in the HTML.


const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
        ISBN: "9780743273565",
        year: 1925,
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "The story of racial injustice and the loss of innocence in the American South during the 1930s.",
        ISBN: "9780061120084",
        year: 1960,
    },
    {
        title: "1984",
        author: "George Orwell",
        description: "A dystopian novel that explores the consequences of a totalitarian regime, mass surveillance, and thought control.",
        ISBN: "9780451524935",
        year: 1949,
    },
];


const titleInput = document.getElementById('titleInput')
const authorInput = document.getElementById('authorInput')
const descriptionInput = document.getElementById('descriptionInput')
const isbnInput = document.getElementById('isbnInput')
const yearInput = document.getElementById('yearInput')
const addButton = document.getElementById('addButton')

const bookList = document.getElementById('bookList')

const displayBooks = () => {

    books.map((book) => {
        const bookItem = document.createElement('li')
        bookList.appendChild(bookItem)

        const divContainer = document.createElement('div')
        const headingTitle = document.createElement('h2')
        const headingAuthor = document.createElement('h3')
        const paragraphDesc = document.createElement('p')
        const spanISBN = document.createElement('span')
        const spanYear = document.createElement('span')

        bookItem.appendChild(divContainer)
        bookItem.appendChild(headingTitle)
        bookItem.appendChild(headingAuthor)
        bookItem.appendChild(paragraphDesc)
        bookItem.appendChild(spanISBN)
        bookItem.appendChild(spanYear)

        // bookItem.innerText = book.title
        headingTitle.innerText = book.title
        headingAuthor.innerText = book.author
        paragraphDesc.innerText = book.description
        spanISBN.innerText = book.ISBN
        spanYear.innerText = book.year
    })


    const addBook = () => {
        const newBook = {
            title: titleInput.value,
            author: authorInput.value,
            description: descriptionInput.value,
            ISBN: isbnInput.value,
            year: yearInput.value
        }
        books.push(newBook)

        displayBooks()
    }

    addButton.addEventListener('click', addBook)
    
}

displayBooks()