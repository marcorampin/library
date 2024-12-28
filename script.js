const shelves = document.querySelector('.shelves');
const myLibrary = [];
const dialog = document.querySelector('dialog');
const dialogInput = Array.from(document.querySelectorAll('dialog input'));
const newBookBtn = document.querySelector('.newBookBtn');
newBookBtn.addEventListener('click', newBookInfo);
const cancelBtn = document.querySelector('.cancelFormBtn');
cancelBtn.addEventListener('click', closeDialog);
const confirmBtn = document.querySelector('.confirmFormBtn');
confirmBtn.addEventListener('click', submitBook);


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function printLibrary() {
    for (const book of myLibrary) {
	createCard(book);
    }
}

function deleteLibrary() {
    const cards = document.querySelectorAll('.card');
    for (const card of cards) {
	shelves.removeChild(card);
    }
}

function resetLibrary() {
    deleteLibrary();
    printLibrary();
}

function createCard(book) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', myLibrary.indexOf(book));
    shelves.appendChild(card);
    for (const key of Object.keys(book)) {
	if (key === 'title') {
	    addBookInfo(book, card, 'h2', 'title', book[key]);
	}
	else {
	    addBookInfo(book, card, 'p', 'key', key);
	    addBookInfo(book, card, 'p', 'value', book[key]);
	}
    }
    addBookInfo(book, card, 'button', 'delBtn', 'Delete');
    addBookInfo(book, card, 'button', 'readStat', 'Read status');
    card.addEventListener('click', e => console.log(e.target.parentElement.id));
}

function addBookInfo(book, card, el, elClass, value) {
    const element = document.createElement(el);
    element.classList.add(elClass);
    element.textContent = value;
    card.appendChild(element);
}

function newBookInfo() {
    dialog.showModal();
    dialog.style.display = 'grid';
}

function closeDialog() {
    clearInput();
    dialog.close();
    dialog.style.display = 'none';
}

function submitBook() {
    const book = {};
    dialogInput.forEach( input => {
	if (input.id === 'read') {
	    book[input.id] = input.checked;
	}
	else {
	    book[input.id] = input.value;
	}
    });
    addBookToLibrary(book.title, book.author, book.pages, book.read);
    resetLibrary();
    clearInput();
}

function clearInput() {
    for (const input of dialogInput) {
	input.value = '';
	input.checked = '';
    }
}

addBookToLibrary('Hobbit', 'JFK');
addBookToLibrary('Potter', 'Rowlings');
addBookToLibrary('Foundation', 'Asimov');
addBookToLibrary('Poirot', 'Christie');
addBookToLibrary('Cicciomerda', 'Cicciogamer89');
addBookToLibrary('Cicciomerda2', 'Cicciogamer89');
addBookToLibrary('Cicciomerda2', 'Cicciogamer89');
printLibrary();
