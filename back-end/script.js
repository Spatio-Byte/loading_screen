const serverName = document.querySelector('#serverName');
const progressBar = document.querySelector('.progress');
const mapName = document.querySelector('#mapName');
const playerCount = document.querySelector('#playerCount');

window.onload = function() {
    serverName.textContent = "";
    mapName.textContent = "";
    playerCount.textContent = "";
    

    
};
if (typeof game_details !== "undefined") { 
    game_details.forEach(element => {
        i = document.createElement("p");
        i.textContent = game_details;
    });
}



document.getElementById("music").volume = 0.2;