const serverName = document.querySelector('#serverName');
const mapName = document.querySelector('#mapName');
const playerCount = document.querySelector('#playerCount');
let mountingaddons = false;


function GameDetails ( servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language ) {
    serverName.textContent = `${servername}`;
    mapName.textContent = `actuellement sur : ${mapname}, en ${gamemode}`;
    playerCount.textContent = `nombre de joueur max : ${maxplayers}`;
};

function setProgress(percent) {
    percent = Math.max(1, Math.min(100, percent));

    let progressBar = document.querySelector('.progress');
    let progressText = document.querySelector('.progress-text');
    if (progressBar) {
        progressBar.style.width = percent + "%";
    }
    if (progressText) {
        progressText.innerText = `Chargement : ${percent}%`;
    }

    console.log(`🔄 Progression mise à jour : ${percent}%`);
}

function SetStatusChanged( status ) {
    if(status == "Mounting Addons"){
      mountingaddons = true;
    }
    if(status == "Mounting Addons"){
      mountingaddons = true;
      setProgress(50);
    }
    if(status == "Workshop Complete"){
      mountingaddons = true;
      setProgress(50);
    }
    if(status == "Client info sent!"){
      mountingaddons = true;
      setProgress(92);
    }
    if(status == "Starting Lua..."){
      mountingaddons = true;
      setProgress(99);
    }
    if(status.indexOf("/") !== -1){
        var statusarray = status.split("/");
        downloadedFiles = statusarray[0];
        neededFiles = statusarray[1].split(" ")[0];
        var offset = 20;
        if(mountingaddons == true){
            offset = 50;
        }
        var percent = ((downloadedFiles / neededFiles) * 100) / 3;
        setProgress(offset+percent);
    }
}; 
document.getElementById("music").volume = 0.2;