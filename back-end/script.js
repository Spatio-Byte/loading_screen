const serverName = document.querySelector('#serverName');
const progressBar = document.querySelector('.progress');
const mapName = document.querySelector('#mapName');
const playerCount = document.querySelector('#playerCount');


function GameDetails ( servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language ) {
    serverName.textContent = `${servername}`;
    mapName.textContent = `actuellement sur : ${mapname}, en ${gamemode}`;
    playerCount.textContent = `nombre de joueur max : ${maxplayers}`;
<<<<<<< HEAD
    gameMODE.textContent = `gamemode : ${gamemode}`
=======
>>>>>>> 90f72a00e794a173c9d37e7d8d9aecaf7181a20f
};

function SetStatusChanged (status) {
    console.log("🔄 Nouveau statut de connexion :", status);
    
    
    const steps = [
        "Starting Lua...",
        "Downloading resources...",
        "Mounting addons...",
        "Sending client info...",
        "Finalizing..."
    ];
    
    
    let progress = (steps.indexOf(status) + 1) / steps.length * 100;
    
    
    if (progress === 0 && status !== steps[0]) {
        console.warn("⚠️ Statut inconnu :", status);
        return;
    }

    // Mise à jour de la barre de chargement
    let progressBar = document.getElementById("progress-bar");
    let progressText = document.getElementById("progress-text");

    if (progressBar) {
        progressBar.style.width = progress + "%";
    }
    if (progressText) {
        progressText.innerText = status;
    }
};

document.getElementById("music").volume = 0.2;