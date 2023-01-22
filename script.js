const counter = {
  days: document.getElementById("days"),
  hrs: document.getElementById("hrs"),
  mins: document.getElementById("mins"),
  secs: document.getElementById("secs"),
};

let days = 0;
let hrs = 0;
let mins = 0;
let secs = 2;

setInterval(() => {
  if (secs == 0) {
    if (mins == 0) {
      if (hrs == 0) {
        if (days == 0) {
          alert("We are live!");
          return;
        }
        days--;
        hrs = 23;
      }
      hrs--;
      mins = 59;
    }
    mins--;
    secs = 59;
  }
  secs--;

  counter.days.innerHTML = days;
  counter.hrs.innerHTML = hrs;
  counter.mins.innerHTML = mins;
  counter.secs.innerHTML = secs;
}, 5000);
