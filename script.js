// ===== LIBRARY DATA =====
class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        this.id = crypto.randomUUID();
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author, pages, status) {
        const book = new Book(title, author, pages, status);
        this.books.push(book);
        this.displayBooks();
    }

    removeBook(id) {
        this.books = this.books.filter(book => book.id !== id);
        this.displayBooks();
    }

    displayBooks() {
        booksDiv.innerHTML = "";

        this.books.forEach(book => {
            const card = document.createElement("div");
            card.className = "book-card";

            const title = document.createElement("p");
            title.textContent = `Title: ${book.title}`;

            const author = document.createElement("p");
            author.textContent = `Author: ${book.author}`;

            const pages = document.createElement("p");
            pages.textContent = `Pages: ${book.pages}`;

            const status = document.createElement("p");
            status.textContent = `Status: ${book.status ? "Read" : "Not read"}`;

            const removeBtn = document.createElement("button");
            removeBtn.textContent = "X";
            removeBtn.onclick = () => this.removeBook(book.id);

            card.append(title, author, pages, status, removeBtn);
            booksDiv.appendChild(card);
        });
    }
}

const dialog = document.querySelector("#dialog");
const addBtn = document.querySelector(".add");
const closeBtn = document.querySelector(".closeBtn");
const form = document.querySelector("#form");
const booksDiv = document.querySelector(".books");

const library = new Library();

addBtn.onclick = () => dialog.showModal();

closeBtn.onclick = () => dialog.close();

form.onsubmit = (e) => {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const status = document.querySelector("#status").checked;

    library.addBook(title, author, pages, status);

    form.reset();
    dialog.close();
};

// DEFAULT BOOKS
library.addBook("Rich Dad Poor Dad", "Robert Kiyosaki", 451, false);
library.addBook("The Hobbit", "J.R.R. Tolkien", 310, true);
