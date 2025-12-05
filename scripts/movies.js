// Importy the JSON formatted data
import { allmovies } from "../data/movies.mjs";
console.log(allmovies);

//Select items in HTML document
const destination = document.querySelector("#showmovies");
const dialogpopup = document.querySelector("#moreinfo")
const popuptitle = document.querySelector(".title")
const poprelease = document.querySelector(".release")
const popupdirector = document.querySelector(".director")
const popupstudio = document.querySelector(".studio")
const popupsummary = document.querySelector(".summary")
const closepopupbutton = document.querySelector('#moreinfo button');

// HIDE THE DIALOG
closepopupbutton.addEventListener('click', () => {
  dialogpopup.close();
});

// DISPLAY ALL THE MOVIES
allmovies.forEach((movie) => {
  //Park Photo and Name
  console.log(movie);

  //Build Each Movie Card
  const moviecard = document.createElement("section")
  //build the movie title
  const movietitle = document.createElement("h2")
  movietitle.innerText = movie.title
  // build the movie photo
  const movieimage = document.createElement("img")
  movieimage.src = `images/${movie.image_url}`
  movieimage.alt = movie.title
  movieimage.width = "250"
  movieimage.height = "350"
  //build the movie button
  const moviebutton = document.createElement("button")
  moviebutton.innerText = 'Movie Details'
  moviebutton.addEventListener('click', () => showStuff(movie));

  moviecard.appendChild(movietitle)
  moviecard.appendChild(movieimage)
  moviecard.appendChild(moviebutton)
  destination.appendChild(moviecard);
});


function showStuff(x) {
  popuptitle.innerHTML = x.title
  poprelease.innerHTML = `<span>DATE:</span> ${x.release_date}`
  popupdirector.innerHTML = `<span>DIRECTOR:</span> ${x.director}`
  popupstudio.innerHTML = `<span>STUDIO:</span> ${x.studio}`
  popupsummary.innerHTML = `<span>SUMMARY:</span> ${x.summary}`
  dialogpopup.showModal()
}