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

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
  
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  
    const selectedSeatsCount = selectedSeats.length;
  
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
  
    setMovieData(movieSelect.selectedIndex, movieSelect.value);
}