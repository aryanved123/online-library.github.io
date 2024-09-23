const books = [
    { title: "The Maze Runner", imgSrc: "images/mazerunner.png", id: "mazerunner" },
    { title: "The Hunger Games", imgSrc: "images/hungergames.png", id: "hungergames" },
    { title: "Throne of Glass", imgSrc: "images/thoneof.png", id: "thoneof" },
    { title: "MockingJay", imgSrc: "images/mock.png", id: "mock" },
    { title: "Harry Potter and the Sorcerer's Stone", imgSrc: "images/harry.png", id: "harry" },
    { title: "Dance of Thieves", imgSrc: "images/danceofthieves.png", id: "danceofthieves" },
    { title: "The Kite Runner", imgSrc: "images/the_kite_runner.png", id: "the_kite_runner" },
    { title: "Orbiting Jupiter", imgSrc: "images/jupiter.png", id: "jupiter" },
    { title: "Paper Towns", imgSrc: "images/paper.png", id: "paper" },
    { title: "The Fault in Our Stars", imgSrc: "images/fault.png", id: "fault" },
    { title: "The Book Thief", imgSrc: "images/bookthief.png", id: "bookthief" },
    { title: "The Silent Patient", imgSrc: "images/silentpatient.png", id: "silentpatient" },
    { title: "The Giver", imgSrc: "images/giver.png", id: "giver" },
    { title: "The Cruel Prince", imgSrc: "images/cruelprince.png", id: "cruelprince" },
    { title: "Vicious", imgSrc: "images/vicious.png", id: "vicious" },
    { title: "Vengeful", imgSrc: "images/vengeful.png", id: "vengeful" },
    { title: "Caraval", imgSrc: "images/caraval.png", id: "caraval" },
    { title: "Legendary", imgSrc: "images/legendary.png", id: "legendary" },
    { title: "Finale", imgSrc: "images/finale.png", id: "finale" },
    { title: "Clockwork Angel", imgSrc: "images/clockworkangel.png", id: "clockworkangel" },
    { title: "Clockwork Prince", imgSrc: "images/clockworkprince.png", id: "clockworkprince" },
    { title: "The Ballad of Songbirds and Snakes", imgSrc: "images/songbirds.png", id: "songbirds" },
    { title: "Daisy Jones & The Six", imgSrc: "images/daisy.png", id: "daisy" },
    { title: "Where the Crawdads Sing", imgSrc: "images/crawdads.png", id: "crawdads" },
    { title: "A Court of Thorns and Roses", imgSrc: "images/thorns.png", id: "thorns" },
    { title: "Allegiant", imgSrc: "images/allegiant.png", id: "allegiant" },
    { title: "Assassin's Blade", imgSrc: "images/assasinsblade.png", id: "assasinsblade" },
    { title: "The Book Thief", imgSrc: "images/bookthief.png", id: "bookthief" },
    { title: "Circe", imgSrc: "images/circe.png", id: "circe" },
    { title: "Crown of Midnight", imgSrc: "images/crownof.png", id: "crownof" },
    { title: "Empire of Storms", imgSrc: "images/empireof.png", id: "empireof" },
    { title: "The Fault in Our Stars", imgSrc: "images/fault.png", id: "fault" },
    { title: "Finale", imgSrc: "images/finale.png", id: "finale" },
    { title: "The Giver", imgSrc: "images/giver.png", id: "giver" },
    { title: "The Game of Thrones", imgSrc: "images/got.png", id: "got" },
    { title: "Heartless", imgSrc: "images/heartless.png", id: "heartless" },
    { title: "Heir of Fire", imgSrc: "images/heirof.png", id: "heirof" },
    { title: "Orbiting Jupiter", imgSrc: "images/jupiter.png", id: "jupiter" },
    { title: "Kingdom of Ash", imgSrc: "images/kingdomofash.png", id: "kingdomofash" },
    { title: "Legendary", imgSrc: "images/legendary.png", id: "legendary" },
    { title: "A Court of Mist and Fury", imgSrc: "images/mist.png", id: "mist" },
    { title: "The Nightingale", imgSrc: "images/nightingale.png", id: "nightingale" },
    { title: "Paper Towns", imgSrc: "images/paper.png", id: "paper" },
    { title: "Queen of Nothing", imgSrc: "images/queenofnothing.png", id: "queenofnothing" },
    { title: "The Secret History", imgSrc: "images/secret.png", id: "secret" },
    { title: "Shadow and Bone", imgSrc: "images/shadowand.png", id: "shadowand" },
    { title: "Silent Patient", imgSrc: "images/silentpatient.png", id: "silentpatient" },
    { title: "A Ballad of Songbirds and Snakes", imgSrc: "images/songbirds.png", id: "songbirds" },
    { title: "Song of Ach", imgSrc: "images/songofach.png", id: "songofach" },
    { title: "These Violent Delights", imgSrc: "images/theseviolent.png", id: "theseviolent" },
    { title: "Tower of Dawn", imgSrc: "images/towerof.png", id: "towerof" },
    { title: "Vengeful", imgSrc: "images/vengeful.png", id: "vengeful" },
    { title: "Vicious", imgSrc: "images/vicious.png", id: "vicious" },
    { title: "Vow of Thieves", imgSrc: "images/vowof.png", id: "vowof" },
    { title: "We Free the Stars", imgSrc: "images/wefree.png", id: "wefree" },
    { title: "We Hunt the Flame", imgSrc: "images/wehunt.png", id: "wehunt" },
    { title: "The Wicked King", imgSrc: "images/wickedking.png", id: "wickedking" },
    { title: "A Court of Wings and Ruin", imgSrc: "images/wings.png", id: "wings" },

];
function searchBooks() {
    // Get the search input value
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const bookContainer = document.getElementById("book-grid-section");

    // Clear previous search results
    bookContainer.innerHTML = '';

    // Iterate over each book and check if it matches the search input
    books.forEach(book => {
        if (book.title.toLowerCase().includes(searchInput)) {
            const bookDiv = document.createElement("div");
            bookDiv.classList.add("book");

            // Construct the image source using the image name from the array
            const img = document.createElement("img");
            img.src = `images/${book.id}.png`; // Assuming images are in the "images" folder
            img.alt = book.title;

            bookDiv.appendChild(img);
            bookContainer.appendChild(bookDiv);
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("reviewForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get the selected rating
        var rating = document.querySelector('input[name="rating"]:checked').value;

        // Get the entered comment
        var comment = document.getElementById("comment").value;

        // Display the review
        displayReview(rating, comment);
    });
});

function displayReview(rating, comment) {
    // Create a new review element
    var reviewElement = document.createElement("div");
    reviewElement.classList.add("review");

    // Rating element
    var ratingElement = document.createElement("p");
    ratingElement.textContent = "Rating: " + rating + " stars";
    reviewElement.appendChild(ratingElement);

    // Comment element
    var commentElement = document.createElement("p");
    commentElement.textContent = "Comment: " + comment;
    reviewElement.appendChild(commentElement);

    // Add the review to the main container
    var mainContainer = document.querySelector("main");
    mainContainer.appendChild(reviewElement);
}