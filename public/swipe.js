let touchstartX = 0
let touchendX = 0
let isLeaderOpen = false
    
function checkDirection() {
  if (touchendX < touchstartX) animLeft()
  if (touchendX > touchstartX) animRight()
}
let posXG = 0

function closeLeaderboard(){
    document.getElementById("leadContent").setAttribute("style", "display:none;")
    isLeaderOpen = false
}
closeLeaderboard()
function openLeaderboard(){
    document.getElementById("leadContent").setAttribute("style", "")
    isLeaderOpen = true
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function swipeButtonNo(){
    animLeft()
}

function swipeButtonYes(){
    animRight()
}
let isResponse = true
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
    if(isResponse){
        generateResponse("Un arbre tombe", "Lorem ipsum dolor sit amet. Cum dignissimos consequuntur aut praesentium voluptatem in blanditiis magni sed eligendi alias ad ullam aliquid! Ab voluptatem dignissimos 33 perferendis ratione nam animi neque et voluptatem accusantium et galisum voluptatum est rerum aliquid.")
        isResponse = false
        document.getElementById("bottom").style.display = "none";
    }else{
        generateCard("Un arbre tombe", "./Assets/BG_Dark.svg")
        isResponse = true
        document.getElementById("bottom").style.display = "flex";
    }
    
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
    if(isResponse){
        generateResponse("Un arbre tombe", "Lorem ipsum dolor sit amet. Cum dignissimos consequuntur aut praesentium voluptatem in blanditiis magni sed eligendi alias ad ullam aliquid! Ab voluptatem dignissimos 33 perferendis ratione nam animi neque et voluptatem accusantium et galisum voluptatum est rerum aliquid.")
        isResponse = false
        document.getElementById("bottom").style.display = "none";
    }else{
        generateCard("Un arbre tombe", "./Assets/BG_Dark.svg")
        isResponse = true
        document.getElementById("bottom").style.display = "flex";
    }
}

document.addEventListener('touchstart', e => {
    if(e.changedTouches[0].screenY < 6*( window.screen.height/4) && !isLeaderOpen){
        touchstartX = e.changedTouches[0].screenX
    }
})

document.addEventListener("touchmove", e => {
    if(e.changedTouches[0].screenY < 6*(window.screen.height/4) && !isLeaderOpen){
    posXG = e.changedTouches[0].screenX-500
    document.getElementById("slide").style.left = posXG+"px";
    }
    //document.getElementById("slide").style.top = e.changedTouches[0].screenY-1000+"px";
})

document.addEventListener('touchend', e => {
    if(e.changedTouches[0].screenY < 6*(window.screen.height/4) && !isLeaderOpen){
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
        document.getElementById("modeLeaderboard").setAttribute("class", "leaderboardContent-dark")
        document.getElementById("player1").setAttribute("class", "playerName-dark")
        document.getElementById("player2").setAttribute("class", "playerName-dark")
        document.getElementById("player3").setAttribute("class", "playerName-dark")
        lightMode = false
    }else{
        document.getElementById("mode").setAttribute("src", "./Assets/Moon.svg")
        document.getElementById("container").setAttribute("class", "mainContainer-light")
        document.getElementById("logo").setAttribute("src", "./Assets/Logo_Light.svg")
        document.getElementById("no").setAttribute("src", "./Assets/No_Light.svg")
        document.getElementById("yes").setAttribute("src", "./Assets/Yes_Light.svg")
        document.getElementById("slide").setAttribute("class", "slideContainer-light")
        document.getElementById("modeLeaderboard").setAttribute("class", "leaderboardContent-light")
        document.getElementById("player1").setAttribute("class", "playerName-light")
        document.getElementById("player2").setAttribute("class", "playerName-light")
        document.getElementById("player3").setAttribute("class", "playerName-light")
        lightMode = true
    }
}

function generateCard(Stitle, Simg){
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
    let image = document.createElement("img")
    image.setAttribute("class", "imageSlider")
    image.setAttribute("src", Simg)
    container.appendChild(image)
    document.getElementById("sliders").appendChild(container)
}
generateCard("Un arbre tombe", "./Assets/BG_Dark.svg")
function generateResponse(Stitle, Sdesc){
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
    let desc = document.createElement("p")
    desc.setAttribute("class", "desc")
    desc.innerText = Sdesc
    container.appendChild(desc)
    let hint = document.createElement("p")
    hint.setAttribute("class", "hint")
    hint.innerText = "Swipez pour continuer"
    container.appendChild(hint)
    document.getElementById("sliders").appendChild(container)
}
function verifyPhone(){
    if(window.screen.height < window.screen.width){
        alert("L'application à été développé pour les mobiles, veuillez utiliser votre téléphone pour une exprérience optimale")
    }
}
verifyPhone()