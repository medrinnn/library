const myLibrary = [];

const dialog = document.querySelector("#dialog");
const addBtn = document.querySelector(".add");
const closeBtn = document.querySelector(".closeBtn");

function Book(title, author, pages, status) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = crypto.randomUUID();
}

function addBookToLibrary() {
    myLibrary.push(new Book(title, author, pages, status));
    displayBooks();
}

function displayBooks() {
    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.className = "book-card";
        
        const cardtitle = document.createElement("p");
        cardtitle.className = "book-title";
        cardtitle.innerText = Book.title;
        
        const cardauthor = document.createElement("p");
        cardauthor.className = "book-author";
        cardauthor.innerText = Book.author;

        const cardpages = document.createElement("p");
        cardpages.className = "book-pages";
        cardpages.innerText = "Pages: " + Book.pages;

        const cardstatus = document.createElement("p");
        cardpages.className = "book-status";
        cardpages.innerText = "Status: " + Book.status;

        const closeBtn = document.createElement("button");
        
        closeBtn.innerText = "X";
        closeBtn.onclick = () => removeBook(book.id);

        card.appendChild(cardtitle);
        card.appendChild(cardauthor);
        card.appendChild(cardpages);
        card.appendChild(cardstatus);
        card.appendChild(closeBtn);
    })
}

window.onload = () => {
    addBookToLibrary("Rich Dad Poor Dad", "Robert kiyosaki", 451, false);
    addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
}

addBtn.addEventListener("click", () => {
    dialog.showModal();
     myLibrary.push(new Book(title, author, pages, status));
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});