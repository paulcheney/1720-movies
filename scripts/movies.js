// Importy the JSON formatted data
import { allmovies } from "../data/movies.mjs";
console.log(allmovies);

const destination = document.querySelector("#showmovies");

allmovies.forEach((movie) => {
  //Park Photo and Name
  console.log(movie);

  //Build Each Movie Card
  const movcard = document.createElement("div")

  const movimage = document.createElement("img")
  movimage.src = `images/${movie.image_url}`
  movimage.alt=movie.title
  movimage.width="250"
  movimage.height="350"
  
  const movbutton = document.createElement("button")
  movbutton.innerText = 'Movie Details'
  movbutton.addEventListener('click', () => showStuff(x));

  movcard.appendChild(movbutton)
  movcard.appendChild(movimage)
  destination.appendChild(movcard);
});


function showStuff(x) {
  mytitle.innerHTML = x.title
  myimg.src = `images/${x.image_url}`

  size.innerHTML = `Serving Size<span>${x.serving_size_oz}oz</span>`

  carb.innerHTML = `Carbohydrate<span>${x.carbohydrates_g}g</span>`

  cal.innerHTML = `Calories<span>${x.carbohydrates_g}cal</span>`

  mydialog.showModal()
}