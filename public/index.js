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