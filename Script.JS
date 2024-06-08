let clicks = 0;
const circle = document.getElementById("circle");

let evolveLVL = 1;
const evolve = document.getElementById("evolve");

let power = 1 * evolveLVL;
const powerupgrade = document.getElementById("powerupgrade");

let powerprice = 10 * (power / evolveLVL);

let evoCost = evolveLVL * 1250;

let rank = "Skere gozer";

let autopower = 0;
const autoupgrade = document.getElementById("autoupgrade")

let autoprice = autopower * 125 + 100;

document.getElementById("pointValue").innerText = clicks;
document.getElementById("upgradeCost").innerText = powerprice;
document.getElementById("evoCost").innerText = evoCost;
document.getElementById("autoCost").innerText = autoprice;

circle.onclick = function(){
    clicks += power;
    document.getElementById("pointValue").innerText = clicks;
}

powerupgrade.onclick = function(){
    if (clicks >= powerprice) {
        clicks -= powerprice;
        power += 1 * evolveLVL;
        powerprice = 10 * (power / evolveLVL);
        document.getElementById("pointValue").innerText = clicks;
        document.getElementById("upgradeCost").innerText = powerprice;

    }
}

evolve.onclick = function() {
    if (clicks >= (evoCost = evolveLVL * 1250)) {
        clicks = 0;
        evolveLVL ++;
        power = 1 * evolveLVL; 
        powerprice = 10 * (power / evolveLVL);
        evoCost = evolveLVL * 1250;
        autopower = 0;
        autoprice = autopower * 125 + 100;
        updateRank();
        document.getElementById("pointValue").innerText = clicks;
        document.getElementById("evoCost").innerText = evoCost;
        document.getElementById("upgradeCost").innerText = powerprice;
        document.getElementById("autoCost").innerText = autoprice;
    }
}
//Wtf gebeurt hieronder ): Chatgpt red levens: ik leer dit later wel.
const rankButton = document.getElementById("rankButton");
const currentRank = document.getElementById("currentRank");

currentRank.style.display = "none"; 
rankButton.innerText = "Show rank"; 
//dit stuk is niet om te janken
rankButton.onclick = function() {
    if (evolveLVL >= 1) {
        rank = "Beginner"
    }
    if (evolveLVL >= 2) {
        rank = "Enge tatta"
    }
    updateRank();
}
//vanaf hier gaat janken verder
rankButton.addEventListener("click", function() {
    if (currentRank.style.display === "none") {
        currentRank.style.display = "block";
        currentRank.innerText = "Your rank is: " + rank;
        rankButton.innerText = "Hide rank";
    } else {
        currentRank.style.display = "none";
        rankButton.innerText = "Show rank";
    }
});

function updateRank() {
    currentRank.innerText = "Your rank is: " + rank;
}
//Tot hier ben ik aan het janken (:

autoupgrade.onclick = function() {
    if (clicks >= autoprice) {
        clicks -= autoprice;
        autopower += 1;
        autoprice = (autopower * 125 + 100);
        document.getElementById("pointValue").innerText = clicks;
        document.getElementById("autoCost").innerText = autoprice;
        updateAuto();
    }
}

function updateAuto() {
    clicks += autopower * evolveLVL;
    document.getElementById("pointValue").innerText = clicks;
}

setInterval (updateAuto, 1000)