const myLibrary = [];

const dialog = document.querySelector("#dialog");
const addBtn = document.querySelector(".add");
const closeBtn = document.querySelector(".closeBtn");
const form = document.querySelector("#form");
const booksDiv = document.querySelector(".books");

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, status) {
    const book = new Book(title, author, pages, status);
    myLibrary.push(book);
    displayBooks();
}

function removeBook(id) {
    const index = myLibrary.findIndex(book => book.id === id);
    myLibrary.splice(index, 1);
    displayBooks();
}

function displayBooks() {
    booksDiv.innerHTML = "";

    myLibrary.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";

        const title = document.createElement("p");
        title.textContent = "Title: " + book.title;

        const author = document.createElement("p");
        author.textContent = "Author: " + book.author;

        const pages = document.createElement("p");
        pages.textContent = "Pages: " + book.pages;

        const status = document.createElement("p");
        status.textContent = "Status: " + (book.status ? "Read" : "Not read");

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.onclick = function () {
            removeBook(book.id);
        };

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(status);
        card.appendChild(removeBtn);

        booksDiv.appendChild(card);
    });
}

/* EVENTS */

addBtn.onclick = function () {
    dialog.showModal();
};

closeBtn.onclick = function () {
    dialog.close();
};

form.onsubmit = function (e) {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const status = document.querySelector("#status").checked;

    addBookToLibrary(title, author, pages, status);

    form.reset();
    dialog.close();
};

/* DEFAULT BOOKS */
addBookToLibrary("Rich Dad Poor Dad", "Robert Kiyosaki", 451, false);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
