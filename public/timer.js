var timer = document.getElementById("timer");
let timerStart = setInterval(chrono, 1000);
setInterval(chrono, 1000);

function chrono() {
    const d = new Date();
    timer.innerHTML = d.toLocaleTimeString();
  } 