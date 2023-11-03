import './style.css';
import movies from '../movie-data.json';
let defaultMovies = movies;

console.log("ufggn");

// DOM
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

displayDefaultMovies();



// localstorage functions 

