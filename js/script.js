'use strict';

document.addEventListener('DOMContentLoaded', () => {


    const movieDB = {
        movies: [
            "Logan",
            "Justice League",
            "La La Land",
            "Obsession",
            "Scott Pilgrim vs. the World"
        ]
    };

    const   advs = document.querySelectorAll(".promo__adv img"),
            poster = document.querySelector(".promo__bg"),
            movieList = document.querySelector(".promo__interactive-list")
            

      // remove adv
    const removeAdv = (arr) => {
        arr.forEach(item => item.remove())
    }
    removeAdv(advs);

    // change background
    const changeBackground = (bg) => {
        bg.style.backgroundImage = 'url("img/bg.jpg")';
    }
    changeBackground(poster);

    // create films list on a page
    function createFilmList(films, parentElement) {

        parentElement.innerHTML = ""

        films.sort()
        films.forEach((film, i) => {
            // create li element
            let movieItem = document.createElement('li')
            movieItem.className = "promo__interactive-item"
            movieItem.innerHTML = (i + 1) + ". " + film

            //create div element with class "delete"
            let divItem = document.createElement('div')
            divItem.className = "delete"

            movieItem.append(divItem)
            parentElement.append(movieItem)
        });

        // delete movie 
        movieList.querySelectorAll(".delete").forEach( (delBtn, i) => {
            delBtn.addEventListener('click', (event) => {
                const filmItem = event.target.parentElement;
                filmItem.remove();
                movieDB.movies.splice(i, 1);
                createFilmList(films, parentElement)
            })
        })

    }

    createFilmList(movieDB.movies, movieList);

    // add new movie

    const addForm = document.querySelector("form.add"),
        addInput = addForm.querySelector(".adding__input"),
        checkbox = addForm.querySelector('[type="checkbox"]')

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            movieDB.movies.push(newFilm);
            if (favorite) {
                console.log("Add favorite film")
            }
            createFilmList(movieDB.movies, movieList);
        }

        
        event.target.reset();
    })





})