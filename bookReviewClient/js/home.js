document.addEventListener("DOMContentLoaded", function() {
    const bookContainer = document.getElementById("book-container");

    // Fetch the JSON file containing book data
    fetch('http://localhost:8080/bookReview-1.0/api/books')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data); // Log fetched data to console

            // Extract image names from the JSON data
            const imageNames = [
                "images/mazerunner.png",
                "images/hungergames.png",
                "images/mock.png",
                "images/harry.png",
                "images/charlotte.png",
                "images/allegiant.png",
                "images/the_kite_runner.png",
                "images/jupiter.png",
                "images/paper.png",
                "images/fault.png",
                "images/bookthief.png",
                "images/silentpatient.png",
                "images/giver.png",
                "images/cruelprince.png",
                "images/wickedking.png",
                "images/queenofnothing.png",
                "images/vicious.png",
                "images/vengeful.png",
                "images/caraval.png",
                "images/legendary.png",
                "images/finale.png",
                "images/clockworkangel.png",
                "images/clockworkprince.png",
                "images/daisy.png",
                "images/crawdads.png",
                "images/shadowand.png",
                "images/vowof.png",
                "images/danceofthieves.png",
                "images/circe.png",
                "images/songofach.png",
                "images/got.png",
                "images/thoneof.png",
                "images/crownof.png",
                "images/heirof.png",
                "images/queenof.png",
                "images/empireof.png",
                "images/towerof.png",
                "images/kingdomofash.png",
                "images/assasinsblade.png",
                "images/nightingale.png",
                "images/theseviolent.png",
                "images/wehunt.png",
                "images/wefree.png",
                "images/heartless.png",
                "images/thorns.png",
                "images/mist.png",
                "images/wings.png",
                "images/secret.png"
            ];
            // Iterate over each book and create HTML elements for display
            for (let i = 0; i < data.length; i++) {
                const bookDiv = document.createElement("div");
                bookDiv.classList.add("book");

                // Construct the image source using the image name from the array
                const img = document.createElement("img");
                img.src = imageNames[i]; // Assuming images are in the "images" folder
                img.alt = data[i].title;

                bookDiv.appendChild(img);
                bookContainer.appendChild(bookDiv);
            }
        })
        .catch(error => console.error('Error fetching book data:', error));
});

document.addEventListener("DOMContentLoaded", function() {
    // Array of book data (you can load this from JSON if needed)
    const books = [
        // Book data goes here
    ];

    const bookContainer = document.getElementById("book-container");
    const favoriteBooksContainer = document.getElementById("favorite-books");
    const readBooksContainer = document.getElementById("read-books");

    // Function to create book HTML element
    function createBookElement(book) {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        const img = document.createElement("img");
        img.src = book.imgSrc;
        img.alt = book.title;

        bookDiv.appendChild(img);

        // Add event listener to mark as favorite
        bookDiv.addEventListener("click", function() {
            // Toggle favorite status
            book.favorite = !book.favorite;

            if (book.favorite) {
                // Add to favorites
                const favoriteBookDiv = createBookElement(book);
                favoriteBooksContainer.appendChild(favoriteBookDiv);
            } else {
                // Remove from favorites
                const favoriteBookDiv = document.getElementById(book.id + "-favorite");
                if (favoriteBookDiv) {
                    favoriteBooksContainer.removeChild(favoriteBookDiv);
                }
            }
        });

        return bookDiv;
    }

    // Function to mark book as read
    function markAsRead(book) {
        // Check if book is already in read list
        const alreadyRead = document.getElementById(book.id + "-read");

        if (!alreadyRead) {
            const readBookDiv = createBookElement(book);
            readBookDiv.id = book.id + "-read";
            readBooksContainer.appendChild(readBookDiv);
        }
    }

    // Iterate over each book and create HTML elements for display
    books.forEach(book => {
        const bookDiv = createBookElement(book);
        bookContainer.appendChild(bookDiv);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const closeButton = document.getElementById('closeSidebar');

    function toggleSidebar() {
        sidebar.classList.toggle('active');
    }

// Add event listener for the sidebar toggle button
    sidebarToggle.addEventListener('click', toggleSidebar);

// If there's a close button, add event listener to it as well
    if (closeButton) {
        closeButton.addEventListener('click', toggleSidebar);
    }
});