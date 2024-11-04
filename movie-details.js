// movie-overview.js
document.addEventListener('DOMContentLoaded', function() {
    showMovieOverview();
});

function showMovieOverview() {
    const movieOverviewContainer = document.getElementById('movieOverview');

    // Retrieve movie details from local storage
    const title = localStorage.getItem('selectedMovieTitle');
    const overview = localStorage.getItem('selectedMovieOverview');

    // Create HTML content for movie overview[]
    const content = `
        <h2>${title}</h2>
        <p>${overview}</p>
    `;

    // Set the content to the movie overview container
    movieOverviewContainer.innerHTML = content;
}