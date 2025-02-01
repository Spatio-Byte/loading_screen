const serverName = document.querySelector('#serverName');
const progressBar = document.querySelector('.progress');
const mapName = document.querySelector('#mapName');
const playerCount = document.querySelector('#playerCount');

window.onload = function() {
    serverName.textContent = "";
    mapName.textContent = "";
    playerCount.textContent = "";
    if (typeof game_details !== "undefined") {
        let output = "<h2>Détails du serveur</h2><ul>";
        
        // Boucle à travers toutes les clés de game_details
        for (let key in game_details) {
            output += `<li><strong>${key}:</strong> ${game_details[key]}</li>`;
        }

        output += "</ul>";
        document.getElementById("details").innerHTML = output;
    } else {
        console.warn("game_details n'est pas défini.");
    }
};




document.getElementById("music").volume = 0.2;