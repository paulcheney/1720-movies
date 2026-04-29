// Import JSON formatted data
import { allMovies } from "../data/movies.mjs";
//console.log(allmovies);

//Select items in HTML document
const showMovies = document.querySelector("#show-movies");
const dialogPopup = document.querySelector("#more-info")
const dialogInfo = document.querySelector("#more-info div")
const dialogClose = document.querySelector("#more-info button")


// DISPLAY ALL THE MOVIES
allMovies.forEach((movie) => {
  const movieCard = document.createElement("section");
  
  movieCard.innerHTML = `
    <h2>${movie.title}</h2>
    <img src="images/${movie.image_url}" alt="${movie.title}" width="250" height="350">
    <button>Movie Details</button>
  `
  movieCard.querySelector("button").addEventListener("click", () => showStuff(movie));
  showMovies.appendChild(movieCard);
});


function showStuff(m) {
  dialogInfo.innerHTML = `
  <div class="title">${m.title}</div>
  <p><b>RELEASED: </b>${m.release_date}</p>
  <p><b>DIRECTOR: </b>${m.director}</p>
  <p><b>STUDIO: </b>${m.studio}</p>
  <p><b>SUMMARY: </b>${m.summary}</p>
  `
  dialogPopup.showModal()
}

// HIDE THE DIALOG
 dialogClose.addEventListener('click', () => {
   dialogPopup.close();
 })