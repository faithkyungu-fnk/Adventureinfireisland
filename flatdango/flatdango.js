console.log("Welcome to flatdango!");

    
function selectMovie(movieName) {

    function displayMovieDetails() {
        console.log(`Movie: ${movieName}`);
        console.log("Runtime: 2 hours");
        console.log("Showtime: 7:00 PM");
        console.log("Description: An exciting adventure movie.");
    }

    displayMovieDetails();
}

selectMovie("The NightAgent");
