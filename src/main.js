import './style.css';
import movies from '../movie-data.json';

// Gloval declarations
let defaultMovies = movies;
Chart.defaults.color = 'white';

// DOM for appending the default movies 
const createDefaultMovies = (movieTitle, criticScore, audienceScore, domesticTotal, genre) => {
    const ul = document.querySelector("#default-movies");
    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    const criticInfo = document.createElement("p");
    const audienceInfo = document.createElement("p");
    const domesticInfo = document.createElement("p");
    const genreaudienceInfo = document.createElement("p");

    h2.textContent = movieTitle;
    criticInfo.textContent = `Critic Score: ${criticScore}`;
    audienceInfo.textContent = `Audience Score: ${audienceScore}`;
    domesticInfo.textContent = `Domestic Total: ${domesticTotal}`;
    genreaudienceInfo.textContent = `Genre: ${genre}`;


    li.append(h2, criticInfo, audienceInfo, domesticInfo, genreaudienceInfo)
    ul.append(li)
}

const displayDefaultMovies = () => {
    try {
        movies.forEach(
            movie => createDefaultMovies(movie.title, movie.criticScore, movie.audienceScore, movie.domestic, movie.genre)
        )
    } catch (error){
        console.log(error)
    }
}

// localstorage functions 
const setLocalStorageKey = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const getLocalStorageValue = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (err) {
        console.log(err)
    }
}
export const getMovies = () => {
    return getLocalStorageValue('movies') || [];             
}
export const setMovies = (movies) => {
    setLocalStorageKey('movies', movies)
}

export const addMovies = (newMovie) => {
    setMovies([newMovie, ...getMovies()])
}

export const initDefaultMoviesIfEmpty = () => {

    const storedMovies = getMovies();
    
    if (storedMovies.length === 0) setMovies(defaultMovies)
}

console.log(localStorage.movies) // to see all our movies inside of localstorage as a string

// Form Submission 
const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const movieTitle = formData.get('movie-title');
    const criticScore = formData.get('critic-score'); 
    const audienceScore = formData.get('audience-score');
    const domesticTotal = formData.get('domestic-gross-sales');
    const genre = formData.get('genre');

    if (!movieTitle || !criticScore || !audienceScore || !domesticTotal || !genre) {
        alert('Please complete all fields before submitting.');
        return;
    }

    const newMovie = {
        title: movieTitle,
        criticScore: criticScore,
        audienceScore: audienceScore,
        domestic: domesticTotal,
        genre: genre
    };

    createDefaultMovies(newMovie.title, newMovie.criticScore, newMovie.audienceScore, newMovie.domestic, newMovie.genre);

    addMovies(newMovie);

    e.target.reset();

}
// DOM to display all the movies, with the newly added movies from our form submission
const displayAddedMovies = () => {
    try {
        const addedMovies = getMovies();
        addedMovies.forEach(movie => {
            createDefaultMovies(movie.title, movie.criticScore, movie.audienceScore, movie.domestic, movie.genre);
        });
    }
     catch (error){
        console.log(error)
    }
}

// Function to clear all our movies inside of localstorage and then running our movie-data DOM function to display the original movies
const resetToDefaultMovies = () => {

    setMovies(defaultMovies);

    const ul = document.querySelector("#default-movies");
    ul.innerHTML = "";

    displayDefaultMovies();
};

const domesticGraph = () => {
    const ctx = document.getElementById('domestic-graph');
    const addedMovies = getMovies();
    console.log("addedmovies", addedMovies)
   
    new Chart(ctx, {
        type: 'bar',
        data: {
          labels: addedMovies.map(row => row.title), 
          datasets: [{
            label: 'Domestic Gross',
            data: addedMovies.map(row => row.domestic),
            borderWidth: 1,
          }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'white'
                    }
                },
                x: {
                    ticks: {
                        color: 'white'
                    }
                }
            },
        }
    });
};


// Allows for all our functions to be called in one place
const main = () => {
    initDefaultMoviesIfEmpty();

    displayDefaultMovies();

    displayAddedMovies();
    
    const form = document.querySelector("#new-movie-adder");
    form.addEventListener("submit", handleSubmit);  

    const resetButton = document.querySelector("#default-button");
    resetButton.addEventListener("click", resetToDefaultMovies);

    domesticGraph();
};

main()


