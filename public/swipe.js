let touchstartX = 0
let touchendX = 0
let isLeaderOpen = false

let titles = ["La pollution de l’air aggrave et augmente les risques d’asthme.", 
"Les chimpanzés ne sont pas capables de filtrer leur eau.",
"En 30 ans, la température a augmenté de 0,5°C.",
"L’énergie renouvelable permet de diminuer les émissions de gaz à effet de serre.",
"La fonte du permafrost ne présente aucun risque.",
"De nombreuses analyses montrent que les zones glacées contiennent des bactéries et agents viraux dangereux. Leurs libérations peuvent provoquer des désastres.",
"Les feux de forêts seront 50% plus fréquents avant la fin du siècle.",
"Le niveau des océans a augmenté de 5 centimètres en un siècle.",
"L’amplitude des marées est proportionnelle à l’augmentation du niveau marin.",
"Le réchauffement climatique a entraîné de nombreuses espèces invasives.",
"Il y a 3 facteurs qui favorisent l’apparition d’un “méga feu”",
"La canicule de l’été 2003 en Europe n’a pas eu de conséquences majeures.",
"Près de 3 milliards d’animaux morts ou déportés à cause du réchauffement climatique en 2019-2020."]
let desc = ["Il est prouvé que la surexposition et l’augmentation de la pollution de l’air a une incidence élevée sur les maladies atopiques, y compris l’asthme.",
 "Au Sénégal, lors de sécheresses extrêmes, des chimpanzés ont été vus en train de filtrer leur eau à l'aide de trous dans le sable afin de filtrer les bactéries.",
"Malheureusement, la température a augmenté de 1.5°C en 30 ans.",
"L’énergie renouvelable réduit la pollution mais la fabrication et l’installation de systèmes produit des émissions de gaz à effet de serre.",
"D’après les Nations Unies, à l'horizon 2030, la fréquence des feux de forêts augmentera de 14%, voire même 50% d’ici 2050.",
"Entre 1901 et 2010, les niveaux des océans et des mers de la planète ont augmenté d’environ 19 centimètres à cause de la fonte des glaces.",
"Les spécialistes du BRGM démontrent que l’amplitude des marées n’est pas forcément proportionnelle à l’augmentation du niveau marin.",
"Les espèces adaptées à des climats chaud ont migré dans des zones plus froides au détriment des espèces locales.",
"Les conditions atmosphériques (T° > 40°C) Taux d’humidité très bas ( < 20% ) Des rafales de vents entre 70 et 80 km/h.",
"Les canicules deviennent de plus en plus fréquentes et longues et mettent en péril les populations fragiles, qui souffrent de déshydratation.",
"Un rapport sur les feux de forêt en Australie rapporte près de 3 milliards de morts ou de migrations d'animaux."]
//images : ./images/Q + nb +.webp
let responses = [true,false,false,true,false,true,false,false,true,true,false,true]
    
let curQuestion = 0

document.getElementById("bottomResponse").style.display = "none"

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
function validateResponse(){
    animRight()
}

let isResponse = true
async function animLeft(){
    let posX = posXG
    if(window.screen.height < window.screen.width){
        let max = -window.screen.width+50;
    }else{
        let max = -window.screen.width*4;
    }
    
    while(max < posX){
        document.getElementById("slide").style.left = posX+"px"
        posX = posX - 20
        await sleep(1)
    }
    document.getElementById("slide").remove()
    if(isResponse){
        generateResponse(titles[curQuestion], desc[curQuestion], responses[curQuestion])
        isResponse = false
        document.getElementById("bottom").style.display = "none";
        document.getElementById("bottomResponse").style.display = "flex"
        if(curQuestion < titles.length){
            curQuestion++
        }else{
            curQuestion = 0
        }
    }else{
        let nb = curQuestion+1
        generateCard(titles[curQuestion], "./images/Q"+nb+".webp")
        isResponse = true
        document.getElementById("bottom").style.display = "flex";
        document.getElementById("bottomResponse").style.display = "none"
    }
    
}

async function animRight(){
    let posX = posXG
    let max = 0
    if(window.screen.height < window.screen.width){
        max = window.screen.width+50;
    }else{
        max = window.screen.width*4;
    }
    while(max > posX){
        document.getElementById("slide").style.left = posX+"px"
        posX = posX + 20
        await sleep(1)
    }
    document.getElementById("slide").remove()
    if(isResponse){
        generateResponse(titles[curQuestion], desc[curQuestion], responses[curQuestion])
        isResponse = false
        document.getElementById("bottom").style.display = "none";
        document.getElementById("bottomResponse").style.display = "flex"
        if(curQuestion < titles.length){
            curQuestion++
        }else{
            curQuestion = 0
        }
    }else{
        let nb = curQuestion+1
        generateCard(titles[curQuestion], "./images/Q"+nb+".webp")
        isResponse = true
        document.getElementById("bottom").style.display = "flex";
        document.getElementById("bottomResponse").style.display = "none"
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
        document.getElementById("yesResponse").setAttribute("src", "./Assets/Yes_Dark.svg")
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
        document.getElementById("yesResponse").setAttribute("src", "./Assets/Yes_Light.svg")
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
let nb = curQuestion+1
generateCard(titles[curQuestion], "./images/Q"+nb+".webp")
function generateResponse(Stitle, Sdesc, isTrue){
    let container = document.createElement("div");
    if(lightMode){
        container.setAttribute("class", "slideContainer-light")
    }else{
        container.setAttribute("class", "slideContainer-dark")
    }
    container.setAttribute("id", "slide")
    let isCorrect = document.createElement("p")
    if(isTrue){
        isCorrect.setAttribute("class", "isValid")
        isCorrect.innerText = "Vrai !"
    }else{
        isCorrect.setAttribute("class","isInvalid")
        isCorrect.innerText = "Faux"
    }
    container.appendChild(isCorrect)
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