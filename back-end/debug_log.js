console.log("Chargement du loading screen...");

if (typeof game_details !== "undefined") {
    console.log("✅ game_details est disponible :", game_details);
} else {
    console.warn("❌ game_details N'EST PAS défini !");
}
console.log("🗃️ localStorage :", localStorage);
console.log("🗃️ sessionStorage :", sessionStorage);
for (let key in window) {
    if (typeof window[key] === "object") {
        console.log(`📦 Objet détecté : ${key}`, window[key]);
    }
}
console.log("📋 Liste des variables globales :");
console.log(Object.keys(window));
