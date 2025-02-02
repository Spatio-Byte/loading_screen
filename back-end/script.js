const serverName = document.querySelector('#serverName');
const progressBar = document.querySelector('.progress');
const mapName = document.querySelector('#mapName');
const playerCount = document.querySelector('#playerCount');

window.onload = function() {
    serverName.textContent = "";
    mapName.textContent = "";
    playerCount.textContent = "";
    if (typeof game_details !== "undefined") {
        
        
        // Boucle à travers toutes les clés de game_details
        for (let key in game_details) {
            console.log(game_details[key])
        }
    } else {
        console.warn("game_details n'est pas défini.");
    }
};

window.GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language ) {
    serverName.textContent = `Nom du serveur : ${servername}`;

};


document.getElementById("music").volume = 0.2;