let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
  if (touchendX < touchstartX) animLeft()
  if (touchendX > touchstartX) animRight()
}
let posXG = 0

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animLeft(){
    let posX = posXG
    let max = -window.screen.width*4;
    while(max < posX){
        document.getElementById("slide").style.left = posX+"px"
        posX = posX - 20
        await sleep(1)
    }
    document.getElementById("slide").remove()
    await sleep(100)
    generateCard("Un arbre tombe", "Un arbre est tombé un jour à un endroit pas loin de Rennes, une équipe de sapeurs pompier est dépêchée sur place afin de dégager l'arbre")
}

async function animRight(){
    let posX = posXG
    let max = window.screen.width*4;
    while(max > posX){
        document.getElementById("slide").style.left = posX+"px"
        posX = posX + 20
        await sleep(1)
    }
    document.getElementById("slide").remove()
    await sleep(100)
    generateCard("Un arbre tombe", "Un arbre est tombé un jour à un endroit pas loin de Rennes, une équipe de sapeurs pompier est dépêchée sur place afin de dégager l'arbre")
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
  
  
})

document.addEventListener("touchmove", e => {
    posXG = e.changedTouches[0].screenX-500
    document.getElementById("slide").style.left = posXG+"px";
    //document.getElementById("slide").style.top = e.changedTouches[0].screenY-1000+"px";
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})

function generateCard(Stitle, Sdesc){
    let container = document.createElement("div");
    container.setAttribute("class", "slideContainer")
    container.setAttribute("id", "slide")
    let title = document.createElement("p")
    title.setAttribute("class", "title")
    title.innerText = Stitle
    container.appendChild(title)
    let desc = document.createElement("p")
    desc.setAttribute("class", "desc")
    desc.innerText = Sdesc
    container.appendChild(desc)
    document.getElementById("container").appendChild(container)
}
generateCard("Un arbre tombe", "Un arbre est tombé un jour à un endroit pas loin de Rennes, une équipe de sapeurs pompier est dépêchée sur place afin de dégager l'arbre")