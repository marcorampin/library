let shelves = document.querySelector('.shelves');
//div.innerText = 'Ciao0';

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author) {
    const book = new Book(title, author);
    myLibrary.push(book);
}

function printLibrary(){
    for (const book of myLibrary) {
	createCard(book);
    }
}

function createCard(book) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', myLibrary.indexOf(book));
    shelves.appendChild(card);
    for (const key of Object.keys(book)) {
	if (key === 'title') {
	    addBookInfo(book, card, 'title', 'h2', key, book[key]);
	}
	else {
	    addBookInfo(book, card, 'p', 'key', key, key);
	    addBookInfo(book, card, 'p', 'value', key, book[key]);
	}
    }
}

function addBookInfo(book, card, el, elClass, key, value) {
    const element = document.createElement(el);
    element.classList.add(elClass);
    element.textContent = value;
    card.appendChild(element);
}

addBookToLibrary('Hobbit', 'JFK');
addBookToLibrary('Potter', 'Rowlings');
addBookToLibrary('Foundation', 'Asimov');
addBookToLibrary('Poirot', 'Christie');
addBookToLibrary('Cicciomerda', 'Cicciogamer89');
addBookToLibrary('Cicciomerda2', 'Cicciogamer89');
printLibrary();
