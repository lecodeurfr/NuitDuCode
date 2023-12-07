var slide = document.getElementById("slide");
let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
  if (touchendX < touchstartX) alert('swiped left!')
  if (touchendX > touchstartX) alert('swiped right!')
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener("touchmove", e => {
    
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  slide.translate(e.changedTouches[0].screenX, 0);
  checkDirection()
})