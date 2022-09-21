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

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  
    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          console.log(seat.classList.add("selected"));
        }
      });
    }
  
    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  
    if (selectedMovieIndex !== null) {
      movieSelect.selectedIndex = selectedMovieIndex;
      console.log(selectedMovieIndex);
    }
  }
  console.log(populateUI());