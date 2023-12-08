const leaderbord = document.getElementById("leaderboard");
let isOpened = false;

function openLeaderboard(){
    if(!isOpened){
        isOpened = true;
        console.log("Ouvert");
        showLeaderboard();
    }else{
        console.log("Fermer");
        isOpened = false;
        closeLeaderboard();
    }
}

function showLeaderboard(){
    const leadContent = document.getElementById("leadContent");
    leadContent.style.display = "block";
}

function closeLeaderboard(){
    const leadContent = document.getElementById("leadContent");
    leadContent.style.display = "none";
}