let update = setInterval(myTimer ,1000);
var time = 0;

function myTimer() {
  time += 1;
  document.getElementById("timer").innerHTML = time ;
}