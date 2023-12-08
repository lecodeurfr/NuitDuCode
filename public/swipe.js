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

function swipeButtonNo(){
    animLeft()
}

function swipeButtonYes(){
    animRight()
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
    if(e.changedTouches[0].screenY < 6*( window.screen.height/4)){
        touchstartX = e.changedTouches[0].screenX
    }
})

document.addEventListener("touchmove", e => {
    if(e.changedTouches[0].screenY < 6*(window.screen.height/4)){
    posXG = e.changedTouches[0].screenX-500
    document.getElementById("slide").style.left = posXG+"px";
    }
    //document.getElementById("slide").style.top = e.changedTouches[0].screenY-1000+"px";
})

document.addEventListener('touchend', e => {
    if(e.changedTouches[0].screenY < 6*(window.screen.height/4)){
        touchendX = e.changedTouches[0].screenX
        checkDirection()
    }
})

let lightMode = true

function changeMode(){
    if(lightMode){
        document.getElementById("mode").setAttribute("src", "./Assets/Sun.svg")
        document.getElementById("container").setAttribute("class", "mainContainer-dark")
        document.getElementById("logo").setAttribute("src", "./Assets/Logo_Dark.svg")
        document.getElementById("no").setAttribute("src", "./Assets/No_Dark.svg")
        document.getElementById("yes").setAttribute("src", "./Assets/Yes_Dark.svg")
        document.getElementById("slide").setAttribute("class", "slideContainer-dark")
        lightMode = false
    }else{
        document.getElementById("mode").setAttribute("src", "./Assets/Moon.svg")
        document.getElementById("container").setAttribute("class", "mainContainer-light")
        document.getElementById("logo").setAttribute("src", "./Assets/Logo_Light.svg")
        document.getElementById("no").setAttribute("src", "./Assets/No_Light.svg")
        document.getElementById("yes").setAttribute("src", "./Assets/Yes_Light.svg")
        document.getElementById("slide").setAttribute("class", "slideContainer-light")
        lightMode = true
    }
}

function generateCard(Stitle, Sdesc){
    let container = document.createElement("div");
    if(lightMode){
        container.setAttribute("class", "slideContainer-light")
    }else{
        container.setAttribute("class", "slideContainer-dark")
    }
        
    container.setAttribute("id", "slide")
    let title = document.createElement("p")
    title.setAttribute("class", "title")
    title.innerText = Stitle
    container.appendChild(title)
    //let image = document.createAttribute("img")
    //image.setAttribute("class", "imageSlider")
    //container.appendChild(image)
    document.getElementById("sliders").appendChild(container)
}
generateCard("Un arbre tombe", "Un arbre est tombé un jour à un endroit pas loin de Rennes, une équipe de sapeurs pompier est dépêchée sur place afin de dégager l'arbre")