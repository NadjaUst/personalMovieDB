/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms

function start() {
    numberOfFilms = +prompt("How many films have you watched?")

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have you watched?")
    }

}

start()

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {

    let lastFilm, lastFilmsValue

    for (let i = 1; i < 3; i++) {
        lastFilm = prompt("One of the last movies you watched?")
        lastFilmsValue = prompt("How much would you rate it?")

        if (lastFilm.length === 0 || lastFilm.length > 50 || lastFilm === null || lastFilmsValue === null || lastFilmsValue.length === 0) {
            alert("You have to write your answer")
            i--;
        } else {
            personalMovieDB.movies[lastFilm] = lastFilmsValue
        }


    }

}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("You watched quite a few films");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("You are a classic viewer.");
    } else if (personalMovieDB.count >= 30) {
        alert("You are a film buff.");
    } else {
        alert("Something is going wrong.")
    }
}

detectPersonalLevel();

function writeYourGenres() {
    
    let favoriteGenre

    for (let i = 0; i < 3; i++) {
        favoriteGenre = prompt(`What is your favorite genre № ${i+1}?`)
        personalMovieDB.genres.push(favoriteGenre)
        
    }
}

writeYourGenres()

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB)
    }
}

showMyDB();
