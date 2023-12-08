console.log("hey! hi!");

let inscriptionForm = document.getElementById("inscription-form");

function launchPage(){
    const name = document.getElementById("nom").value;
    if(name === ""){
        console.log("CONNARD");
    }else{
        window.open("main.html");
    }
}

inscriptionForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const nom = document.getElementById("nom").value;

    console.log(nom);

    // Envoyer les données au serveur via Axios
    /*
    axios.post("/utilisateurs", { nom, motdepasse })
        .then(function (response) {
            console.log("Réponse du serveur:", response.data);
            window.location.href = "/home.html";
        })
        .catch(function (error) {
            console.error("Erreur lors de l'inscription:", error);
            alert("Une erreur est survenue lors de l'inscription. Veuillez réessayer.");
        });*/
});
let isLightMode = true
function switchMode(){
    if(isLightMode){
        document.getElementById("logo").setAttribute("src", "./Assets/Logo_Dark.svg")
        document.getElementById("mode").setAttribute("src", "./Assets/Sun.svg")
        document.getElementById("container").setAttribute("class", "mainContainer-dark")
        document.getElementById("pfp").setAttribute("class", "circle-dark")
        document.getElementById("nom").setAttribute("class", "name-dark")
        isLightMode = false
    }else{
        document.getElementById("logo").setAttribute("src", "./Assets/Logo_Light.svg")
        document.getElementById("mode").setAttribute("src", "./Assets/Moon.svg")
        document.getElementById("container").setAttribute("class", "mainContainer-light")
        document.getElementById("pfp").setAttribute("class", "circle-light")
        document.getElementById("nom").setAttribute("class", "name-light")
        isLightMode = true
    }
}