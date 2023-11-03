const titleInput = document.getElementById('titleInput')
const authorInput = document.getElementById('authorInput')
const descriptionInput = document.getElementById('descriptionInput')
const isbnInput = document.getElementById('isbnInput')
const yearInput = document.getElementById('yearInput')
const addButton = document.getElementById('addButton')

const bookList = document.getElementById('bookList')
const books = []

const addBook = (title, author, description, ISBN, year) => {
    const newBook = {
        title,
        author,
        description,
        ISBN,
        year
        // title: titleInput.value,
        // author: authorInput.value,
        // description: descriptionInput.value,
        // ISBN: isbnInput.value,
        // year: yearInput.value
    }
    books.push(newBook)
}
const listBooks = () => {
    return books
}
const displayBooks = () => {
    bookList.innerHTML = ''; // Clear the book list

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
        spanISBN.innerText = "#" + book.ISBN
        spanYear.innerText = book.year
    })
}

addButton.addEventListener('click', () => {
    const title = titleInput.value
    const author = authorInput.value
    const description = descriptionInput.value
    const ISBN = isbnInput.value
    const year = yearInput.value

    if (titleInput && authorInput && descriptionInput && isbnInput && year) {
        addBook(title, author, description, ISBN, year);
        displayBooks();
    }
})


listBooks()