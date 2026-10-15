<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title> Knowledge hub Library</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            background-color: #f4f7fa;
            color: #222;
        }

        header {
            background-color: #174a6e;
            color: white;
            text-align: center;
            padding: 25px;
        }

        nav {
            background-color: #10354f;
            padding: 15px;
            text-align: center;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin: 10px;
            display: inline-block;
        }

        main {
            max-width: 1100px;
            margin: auto;
            padding: 20px;
        }

        section {
            background-color: white;
            margin-bottom: 20px;
            padding: 20px;
            border-radius: 8px;
        }

        h2 {
            color: #174a6e;
        }

        img {
            max-width: 100%;
            height: auto;
            border-radius: 6px;
        }

        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 15px;
        }

        .gallery img {
            width: 100%;
            height: 180px;
            object-fit: cover;
        }

        .table-container {
            overflow-x: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background-color: white;
        }

        th, td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: left;
        }

        th {
            background-color: #174a6e;
            color: white;
        }

        input, select, button {
            padding: 10px;
            margin: 5px 0;
            max-width: 100%;
        }

        button {
            background-color: #174a6e;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        footer {
            background-color: #10354f;
            color: white;
            text-align: center;
            padding: 20px;
        }

        footer a {
            color: white;
        }
    </style>
</head>

<body>

    <!-- HEADER AND NAVIGATION -->
    <header id="home">
        <h1>Knowledge hub Library</h1>
        <p><strong>Read, Learn and Grow</strong></p>
        <p>
            A welcoming centre for reading, research,
            education and lifelong learning.
        </p>
    </header>

    <nav>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#books">Books</a>
        <a href="#membership">Membership</a>
        <a href="#gallery">Gallery</a>
        <a href="#schedule">Schedule</a>
        <a href="#fine-calculator">Fine Calculator</a>
        <a href="#contact">Contact</a>
    </nav>

    <main>

        <!-- WEEK 2: WELCOME SECTION -->
        <section>
            <h2>Welcome to Our Library</h2>

            <p>
                Welcome to <strong>Knowledge  hub Library</strong>,
                a learning and research centre that provides students,
                teachers, researchers and community members with access
                to useful educational resources.
            </p>

            <p>
                Visitors can read books, conduct research, use digital
                learning resources and apply for library membership.
                Our goal is to make learning accessible to everyone.
            </p>

            <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=80"
                alt="Bookshelves and reading resources inside a library">
        </section>

        <!-- ABOUT THE LIBRARY -->
        <section id="about">
            <h2>About the Library</h2>

            <p>
                Knowledge hub Library is a community learning
                centre designed to support education, reading, research
                and the sharing of knowledge.
            </p>

            <p>
                Our mission is to promote academic excellence and
                lifelong learning by providing access to books,
                reference materials, digital resources and a peaceful
                reading environment.
            </p>

            <h3>Our Main Objectives</h3>

            <ul>
                <li>Promote a culture of reading.</li>
                <li>Support students and teachers with learning materials.</li>
                <li>Encourage research and independent learning.</li>
                <li>Provide educational resources to the community.</li>
            </ul>

            <p>
                We value <em>knowledge, respect, equal access and
                responsible use of information</em>.
            </p>
        </section>

        <!-- BOOK AND RESOURCE CATEGORIES -->
        <section id="books">
            <h2>Our Book and Resource Categories</h2>

            <p>Visitors can explore the following categories:</p>

            <ul>
                <li>Computer Science</li>
                <li>Education</li>
                <li>Business and Entrepreneurship</li>
                <li>Literature</li>
                <li>History</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Geography</li>
                <li>Health and Medicine</li>
                <li>Religion and Philosophy</li>
                <li>Reference Books</li>
                <li>Research Journals</li>
            </ul>

            <h3>Detailed Book Categories</h3>

            <!-- NESTED UNORDERED LIST -->
            <ul>
                <li>Technology
                    <ul>
                        <li>Computer Programming</li>
                        <li>Computer Networking</li>
                        <li>Information Technology</li>
                    </ul>
                </li>

                <li>Education
                    <ul>
                        <li>Teaching Methods</li>
                        <li>Educational Psychology</li>
                        <li>Curriculum Development</li>
                    </ul>
                </li>

                <li>Literature
                    <ul>
                        <li>Novels</li>
                        <li>Poetry</li>
                        <li>Drama</li>
                    </ul>
                </li>
            </ul>
        </section>

        <!-- MEMBERSHIP PROCESS -->
        <section id="membership">
            <h2>How to Become a Library Member</h2>

            <p>Follow these steps to register for membership:</p>

            <ol>
                <li>Visit the library reception or membership desk.</li>
                <li>Request and complete a membership form.</li>
                <li>Provide the required identification and details.</li>
                <li>Select the appropriate membership category.</li>
                <li>Pay a membership fee if one applies.</li>
                <li>Receive your membership confirmation or card.</li>
                <li>Read and follow the library borrowing rules.</li>
            </ol>

            <p>
                <strong>Important:</strong> Membership fees and
                identification requirements should be confirmed
                with the librarian.
            </p>
        </section>

        <!-- LIBRARY RESOURCES -->
        <section>
            <h2>Other Library Resources</h2>

            <ul>
                <li>Textbooks and reference books</li>
                <li>Research journals</li>
                <li>Newspapers and magazines</li>
                <li>Past examination papers</li>
                <li>Computers and internet access</li>
                <li>Digital educational resources</li>
                <li>Reading and study spaces</li>
                <li>Community learning materials</li>
            </ul>
        </section>

        <!-- LIBRARY SERVICES -->
        <section>
            <h2>Library Services</h2>

            <p>We aim to provide the following services:</p>

            <ul>
                <li>Book lending and borrowing</li>
                <li>Reference and research assistance</li>
                <li>Reading and study facilities</li>
                <li>Access to digital learning resources</li>
                <li>Guidance in locating books</li>
                <li>Reading clubs and educational activities</li>
            </ul>
        </section>

        <!-- LIBRARY GALLERY: SIX RELEVANT IMAGES -->
        <section id="gallery">
            <h2>Library Gallery</h2>

            <p>
                Explore the library environment and activities
                that support learning and reading.
            </p>

            <div class="gallery">
                <img
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80"
                    alt="Library interior with organised bookshelves">

                <img
                    src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"
                    alt="Rows of books arranged in a library">

                <img
                    src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80"
                    alt="Books and study materials on a reading desk">

                <img
                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
                    alt="Collection of books for reading and learning">

                <img
                    src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=600&q=80"
                    alt="Books and learning materials arranged for study">

                <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
                    alt="Learners participating in an educational setting">
            </div>
        </section>

        <!-- BOOK INFORMATION TABLE -->
        <section>
            <h2>Book Information and Loan Periods</h2>

            <p>
                The following table provides example catalogue
                information. Confirm actual availability with
                the librarian.
            </p>

            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Book/Resource</th>
                            <th>Category</th>
                            <th>Author</th>
                            <th>Availability</th>
                            <th>Loan Period</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Introduction to Programming</td>
                            <td>Technology</td>
                            <td>Example Author</td>
                            <td>Check with librarian</td>
                            <td>14 days</td>
                        </tr>

                        <tr>
                            <td>Foundations of Education</td>
                            <td>Education</td>
                            <td>Example Author</td>
                            <td>Check with librarian</td>
                            <td>14 days</td>
                        </tr>

                        <tr>
                            <td>Basic Mathematics</td>
                            <td>Mathematics</td>
                            <td>Example Author</td>
                            <td>Check with librarian</td>
                            <td>14 days</td>
                        </tr>

                        <tr>
                            <td>General Biology</td>
                            <td>Science</td>
                            <td>Example Author</td>
                            <td>Check with librarian</td>
                            <td>14 days</td>
                        </tr>

                        <tr>
                            <td>World History</td>
                            <td>History</td>
                            <td>Example Author</td>
                            <td>Check with librarian</td>
                            <td>14 days</td>
                        </tr>

                        <tr>
                            <td>Principles of Business</td>
                            <td>Business</td>
                            <td>Example Author</td>
                            <td>Check with librarian</td>
                            <td>14 days</td>
                        </tr>

                        <tr>
                            <td>Introduction to Geography</td>
                            <td>Geography</td>
                            <td>Example Author</td>
                            <td>Check with librarian</td>
                            <td>14 days</td>
                        </tr>

                        <tr>
                            <td>Selected Poems</td>
                            <td>Literature</td>
                            <td>Example Author</td>
                            <td>Check with librarian</td>
                            <td>14 days</td>
                        </tr>

                        <tr>
                            <td>Research Methods</td>
                            <td>Research</td>
                            <td>Example Author</td>
                            <td>Check with librarian</td>
                            <td>14 days</td>
                        </tr>

                        <tr>
                            <td>Dictionary of English</td>
                            <td>Reference</td>
                            <td>Example Author</td>
                            <td>Library use</td>
                            <td>Reference only</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- WEEKLY LIBRARY SCHEDULE -->
        <section id="schedule">
            <h2>Weekly Library Schedule</h2>

            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Morning</th>
                            <th>Afternoon</th>
                            <th>Evening</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>Reading</td>
                            <td>Computer Access</td>
                            <td>Study Session</td>
                        </tr>

                        <tr>
                            <td>Tuesday</td>
                            <td>Children's Reading</td>
                            <td>Research</td>
                            <td>Study Session</td>
                        </tr>

                        <tr>
                            <td>Wednesday</td>
                            <td>Book Club</td>
                            <td>Computer Access</td>
                            <td>Study Session</td>
                        </tr>

                        <tr>
                            <td>Thursday</td>
                            <td>Reading</td>
                            <td>Community Training</td>
                            <td>Study Session</td>
                        </tr>

                        <tr>
                            <td>Friday</td>
                            <td>Research</td>
                            <td>Book Club</td>
                            <td>Study Session</td>
                        </tr>

                        <tr>
                            <td>Saturday</td>
                            <td>Children's Activities</td>
                            <td>Reading</td>
                            <td>Closed / Special Events</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- BOOK BORROWING AND LIBRARY RULES -->
        <section>
            <h2>How to Borrow a Book</h2>

            <ol>
                <li>Search the catalogue for the required book.</li>
                <li>Locate the book or ask the librarian for assistance.</li>
                <li>Present your membership details at the desk.</li>
                <li>Confirm the return date with the librarian.</li>
                <li>Keep the book safe and return it on time.</li>
            </ol>

            <h3>Library Rules</h3>

            <p>
                <strong>Maintain silence and respect other library users.</strong>
            </p>

            <p>
                <strong>Return borrowed books on or before the agreed date.</strong>
            </p>

            <p>Handle books and computer equipment with care.</p>

            <p>Keep the library clean and do not damage resources.</p>

            <p>
                <em>Respect shared learning spaces and other readers.</em>
            </p>
        </section>

        <!-- OVERDUE BOOK FINE CALCULATOR -->
        <section id="fine-calculator">
            <h2>Overdue Book Fine Calculator</h2>

            <p>
                Use this calculator to estimate an overdue book fine.
                Select a membership category and enter the number
                of overdue days.
            </p>

            <label for="fineRate">Membership Category:</label>
            <br>

            <select id="fineRate">
                <option value="500">Student Member - UGX 500 per day</option>
                <option value="1000">General Member - UGX 1,000 per day</option>
                <option value="1500">Special Collection - UGX 1,500 per day</option>
            </select>

            <br>

            <label for="days">Number of Overdue Days:</label>
            <br>

            <input
                type="number"
                id="days"
                min="0"
                step="1"
                value="0"
                required>

            <br>

            <button type="button" onclick="calculateFine()">
                Calculate Fine
            </button>

            <p id="result" aria-live="polite">
                Your estimated fine will appear here.
            </p>

            <p>
                <em>
                    These rates are examples for demonstrating JavaScript.
                    Replace them with the actual library rates if available.
                </em>
            </p>
        </section>

        <!-- USEFUL EXTERNAL READING LINKS -->
        <section id="reading-links">
            <h2>Useful Reading Resources</h2>

            <ul>
                <li>
                    <a href="https://www.gutenberg.org/"
                       target="_blank"
                       rel="noopener noreferrer">
                        Project Gutenberg
                    </a>
                    — Access free electronic books.
                </li>

                <li>
                    <a href="https://openlibrary.org/"
                       target="_blank"
                       rel="noopener noreferrer">
                        Open Library
                    </a>
                    — Discover books and explore its online catalogue.
                </li>

                <li>
                    <a href="https://www.khanacademy.org/"
                       target="_blank"
                       rel="noopener noreferrer">
                        Khan Academy
                    </a>
                    — Access educational lessons and learning materials.
                </li>
            </ul>
        </section>

        <!-- CONTACT AND OPENING INFORMATION -->
        <section id="contact">
            <h2>Opening Hours and Member Information</h2>

            <p><strong>Library:</strong> Knowledge hub Library</p>

            <p>
                <strong> Location:</strong>
                UNITE Campus, Kaliro.
            </p>

            <p>
                <strong>Opening Hours:</strong>
                Monday to Friday, 8:00 AM - 6:00 PM;
                Saturday, 9:00 AM - 4:00 PM.
            </p>

            <p>
                <strong>Telephone:</strong>
                <a href="tel:+256753756968">+256 753756968</a>
            </p>

            <p>
                <strong>Email: bwiremathias19@gmail.com</strong>
                <a href="mailto:info@unite.com">info@example.com</a>
            </p>

            <h3>Membership and Borrowing Information</h3>

            <ul>
                <li>Ask the librarian about membership requirements.</li>
                <li>Confirm the borrowing period before taking a book.</li>
                <li>Return borrowed materials by the agreed date.</li>
                <li>Ask about applicable fees and fines before payment.</li>
            </ul>
        </section>

    </main>

    <!-- WEBSITE FOOTER -->
    <footer>
        <p>
            <strong>Knowledge hub Library</strong>
        </p>

        <p>Read, Learn and Grow</p>

        <p>
            <a href="#home">Home</a> |
            <a href="#books">Books</a> |
            <a href="#membership">Membership</a> |
            <a href="#gallery">Gallery</a> |
            <a href="#contact">Contact</a>
        </p>

        <p>
            Email:
            <a href="mailto:info@unite.com">info@unite.com</a>
        </p>

        <p>
            &copy; 2026 Knowledge hub Library.
            All rights reserved.
        </p>
    </footer>

    <!-- JAVASCRIPT FOR CALCULATING OVERDUE FINES -->
    <script>
        function calculateFine() {
            const dailyFine =
                Number(document.getElementById("fineRate").value);

            const daysInput = document.getElementById("days");
            const days = Number(daysInput.value);
            const result = document.getElementById("result");

            if (
                daysInput.value === "" ||
                !Number.isInteger(days) ||
                days < 0
            ) {
                result.textContent =
                    "Please enter a valid whole number of overdue days.";
                return;
            }

            const totalFine = dailyFine * days;

            result.textContent =
                "Total Fine: UGX " +
                totalFine.toLocaleString("en-UG");
        }
    </script>

</body>
</html>
