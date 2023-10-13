'use strict';

const movieDB = {
    movies: [
        "Logan",
        "Justice League",
        "La La Land",
        "Obsession",
        "Scott Pilgrim vs. the World"
    ]
};

// remove adv
const adv = document.querySelectorAll(".promo__adv img")
adv.forEach(item => item.remove())

// change background
const poster = document.querySelector(".promo__bg");
poster.style.backgroundImage   = 'url("img/bg.jpg")';

const movieList = document.querySelector(".promo__interactive-list");

movieDB.movies.sort()
movieDB.movies.forEach((film, i) => {
    // create li element
    let movieItem = document.createElement('li')
    movieItem.className = "promo__interactive-item"
    movieItem.innerHTML = (i + 1) + ". " + film

    //create div element with class "delete"
    let divItem = document.createElement('div')
    divItem.className = "delete"

    movieItem.append(divItem)
    movieList.append(movieItem)
});