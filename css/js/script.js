// ======================================================
// KNOWLEDGE HUB LIBRARY - GROUP 4 JAVASCRIPT
// ICT 2102 GROUP PRACTICAL ASSIGNMENT
// ======================================================


// ------------------------------------------------------
// 1. VARIABLES AND CONSTANTS
// ------------------------------------------------------

const libraryName = "Knowledge Hub Library";
const borrowingPeriod = 14;
let currentYear = new Date().getFullYear();

console.log(libraryName);
console.log("Borrowing period:", borrowingPeriod, "days");
console.log("Current year:", currentYear);


// ------------------------------------------------------
// 2. BOOK ARRAY AND OBJECTS
// ------------------------------------------------------

const books = [
    {
        title: "Introduction to Computer Science",
        author: "John Smith",
        availability: true
    },

    {
        title: "Web Development Basics",
        author: "Sarah Johnson",
        availability: true
    },

    {
        title: "JavaScript for Beginners",
        author: "Michael Brown",
        availability: false
    },

    {
        title: "African Literature",
        author: "Grace Okello",
        availability: true
    },

    {
        title: "Introduction to Science",
        author: "David Wilson",
        availability: false
    }
];


// ------------------------------------------------------
// 3. DISPLAY BOOKS USING A LOOP
// ------------------------------------------------------

function displayBooks(bookList = books) {

    const bookContainer = document.getElementById("book-list");

    if (!bookContainer) {
        return;
    }

    bookContainer.innerHTML = "";

    bookList.forEach(function(book) {

        const bookCard = document.createElement("div");

        bookCard.className = "book-card";

        const status = book.availability
            ? "Available"
            : "Currently Unavailable";

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Status:</strong> ${status}</p>
        `;

        bookContainer.appendChild(bookCard);
    });
}


// ------------------------------------------------------
// 4. SEARCH BOOKS
// ------------------------------------------------------

function searchBooks() {

    const searchInput = document.getElementById("book-search");

    if (!searchInput) {
        return;
    }

    const searchTerm = searchInput.value.toLowerCase().trim();

    const matchingBooks = books.filter(function(book) {
        return book.title.toLowerCase().includes(searchTerm);
    });

    displayBooks(matchingBooks);

    const resultMessage = document.getElementById("search-result");

    if (resultMessage) {

        if (matchingBooks.length > 0) {
            resultMessage.textContent =
                matchingBooks.length + " book(s) found.";
        } else {
            resultMessage.textContent =
                "No books found matching your search.";
        }
    }
}


// ------------------------------------------------------
// 5. BOOK DETAILS FUNCTION
// ------------------------------------------------------

function showBookDetails(bookTitle) {

    const result = books.find(function(book) {
        return book.title.toLowerCase() === bookTitle.toLowerCase();
    });

    const details = document.getElementById("book-details");

    if (!details) {
        return;
    }

    if (result) {

        const status = result.availability
            ? "Available"
            : "Currently Unavailable";

        details.innerHTML = `
            <h3>${result.title}</h3>
            <p><strong>Author:</strong> ${result.author}</p>
            <p><strong>Availability:</strong> ${status}</p>
        `;

    } else {

        details.textContent = "Book not found.";
    }
}


// ------------------------------------------------------
// 6. BORROWING PERIOD / RETURN DATE CALCULATION
// ------------------------------------------------------

function calculateReturnDate(days) {

    const today = new Date();

    today.setDate(today.getDate() + days);

    return today.toLocaleDateString();
}


// ------------------------------------------------------
// 7. AVAILABILITY CHECK USING IF/ELSE
// ------------------------------------------------------

function checkBookAvailability(bookTitle) {

    const selectedBook = books.find(function(book) {
        return book.title.toLowerCase() === bookTitle.toLowerCase();
    });

    const result = document.getElementById("availability-result");

    if (!result) {
        return false;
    }

    if (selectedBook && selectedBook.availability) {

        result.textContent =
            "The book is available. You can submit your borrowing request.";

        return true;

    } else if (selectedBook && !selectedBook.availability) {

        result.textContent =
            "Sorry, this book is currently unavailable.";

        return false;

    } else {

        result.textContent =
            "Please select a valid book.";

        return false;
    }
}


// ------------------------------------------------------
// 8. FORM VALIDATION
// ------------------------------------------------------

function validateBorrowingForm(event) {

    event.preventDefault();

    const name = document.getElementById("borrowerName");
    const contact = document.getElementById("borrowerContact");
    const selectedBook = document.getElementById("borrowBook");

    const confirmation = document.getElementById("borrow-confirmation");

    if (!name || !contact || !selectedBook || !confirmation) {
        return;
    }

    const borrowerName = name.value.trim();
    const borrowerContact = contact.value.trim();
    const bookTitle = selectedBook.value;

    // Validate borrower name
    if (borrowerName === "") {

        confirmation.textContent =
            "Please enter your name.";

        return;
    }

    // Validate contact
    if (borrowerContact === "") {

        confirmation.textContent =
            "Please enter your contact information.";

        return;
    }

    // Validate selected book
    if (bookTitle === "") {

        confirmation.textContent =
            "Please select a book.";

        return;
    }

    // Check book availability
    const selectedBookObject = books.find(function(book) {
        return book.title === bookTitle;
    });

    if (!selectedBookObject || !selectedBookObject.availability) {

        confirmation.textContent =
            "Borrowing request cannot be submitted because the selected book is unavailable.";

        return;
    }

    const returnDate = calculateReturnDate(borrowingPeriod);

    confirmation.innerHTML = `
        <strong>Borrowing request submitted successfully!</strong><br>
        Borrower: ${borrowerName}<br>
        Contact: ${borrowerContact}<br>
        Book: ${bookTitle}<br>
        Expected return date: ${returnDate}
    `;
}


// ------------------------------------------------------
// 9. MOBILE NAVIGATION
// ------------------------------------------------------

function toggleMobileMenu() {

    const nav = document.querySelector("nav");

    if (!nav) {
        return;
    }

    nav.classList.toggle("mobile-open");
}


// ------------------------------------------------------
// 10. EVENT LISTENERS
// ------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {

    console.log("Knowledge Hub Library JavaScript loaded successfully.");


    // Display books
    displayBooks();


    // Search event
    const searchInput = document.getElementById("book-search");

    if (searchInput) {

        searchInput.addEventListener("input", searchBooks);
    }


    // Borrowing form submit event
    const borrowingForm =
        document.getElementById("borrowing-form");

    if (borrowingForm) {

        borrowingForm.addEventListener(
            "submit",
            validateBorrowingForm
        );
    }


    // Book selection change event
    const borrowBook =
        document.getElementById("borrowBook");

    if (borrowBook) {

        borrowBook.addEventListener("change", function() {

            checkBookAvailability(this.value);
        });
    }


    // Mobile menu button
    const menuButton =
        document.getElementById("menu-button");

    if (menuButton) {

        menuButton.addEventListener(
            "click",
            toggleMobileMenu
        );
    }


    // Existing slideshow
    setupSlideshow();
});


// ------------------------------------------------------
// 11. EXISTING IMAGE SLIDESHOW
// ------------------------------------------------------

const images = [
    "images/library.jpg.avif",
    "images/books.jpg",
    "images/reading.jpg",
    "images/event.jpg"
];

let currentImage = 0;


function showImage() {

    const slideshow =
        document.getElementById("slideshow");

    if (!slideshow) {
        return;
    }

    slideshow.src = images[currentImage];
}


function nextImage() {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    showImage();
}


function previousImage() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    showImage();
}


function setupSlideshow() {

    showImage();

    setInterval(function() {

        currentImage++;

        if (currentImage >= images.length) {
            currentImage = 0;
        }

        showImage();

    }, 3000);
}