let div = document.querySelector('.prova');
//div.innerText = 'Ciao0';

const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author) {
    const book = new Book(title, author);
    myLibrary.push(book);
}

function printLibrary (){
    for (const book of myLibrary) {
	console.log(book);
    }
}

addBookToLibrary('Hobbit', 'JFK');
addBookToLibrary('Potter', 'Rowlings');
addBookToLibrary('Foundation', 'Asimov');
addBookToLibrary('Poirot', 'Christie');
printLibrary();
