const container = document.querySelector(".container");
const count = document.getElementById("count");
const movieSelect = document.getElementById("movie");
const total = document.getElementById("total");
const seats = document.querySelectorAll(".row .seat:not(.booked)");

populateUI();

let ticketPrice = +movieSelect.value;

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
}