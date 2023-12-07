console.log("hey! hi!");

let inscriptionForm = document.getElementById("inscription-form");

function launchPage(){
    window.open("main.html");
}

function change(){
    const circle = document.getElementById("circle")
    circle.style.backgroundColor = "blue";
}

inscriptionForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const motdepasse = document.getElementById("motdepasse").value;

    console.log(nom, motdepasse);

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