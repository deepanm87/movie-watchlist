let watchlistHtml = ''
let watchlistArr = JSON.parse(localStorage.getItem('watchlist') || "[]")
const watchlist = document.getElementById("watchlist-container")

render()

document.addEventListener('click', e => {
    if(e.target.dataset.id) {
        watchlistArr = watchlistArr.filter(
            movie => movie.imdbID !== e.target.dataset.id
        )
        localStorage.setItem('watchlist', JSON.stringify(watchlistArr))
        render()
    }
})

function updateWatchlistHtml(movie) {
    watchlistHtml += `
        <div class="movie">
            <div class="movie-poster">
                <img src="${movie.Poster}" alt="poster of movie" />
            </div>
            <div class="movie-body">
                <div class="movie-data">
                    <h2 class="movie-title">${movie.Title}</h2>
                    <p class="movie-rating">${movie.imdbRating}</p>
                </div>
                <div class="movie-details">
                    <p class="movie-runtime">${movie.Runtime}</p>
                    <p class="movie-genres">${movie.Genre}</p>
                    <button class="add-remove-btn" data-id=${movie.imdbID}>
                    
                    Remove
                    </button>
                </div>
                <p class="movie-description">
                    ${movie.Plot}
                </p>
            </div>
        </div>
        <hr>
    `
}

function render() {
    watchlistHtml = ''
    if(watchlistArr.length) {
        watchlistArr.forEach( movie => {
            updateWatchlistHtml(movie)
            renderWatchlist()
        })
    } else {
        renderWatchlistApology()
    }
}

function renderWatchlist() {
    watchlist.innerHTML = watchlistHtml
}

function renderWatchlistApology() {
    watchlist.innerHTML = `
        <div class="body-wrapper">
            <a href="index.html" class="header-nav">
                Add some movies
            </a>
        </div>
    `
}