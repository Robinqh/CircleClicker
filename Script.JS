let clicks = 0;
const circle = document.getElementById("circle");

let increasePower = 1;
let increaseAuto = 100;
let increaseEvolve =1000;

let evolveLVL = 1;
const evolve = document.getElementById("evolve");

let permapower = 1;
let permaprice = 10000 * permapower;

let power = 1 * evolveLVL + (10 * permapower) - 10;
const powerupgrade = document.getElementById("powerupgrade");

let powerprice = 10;

let evoCost = evolveLVL * 1250;

let rank = "Nobody";

let autopower = 0 * evolveLVL + (10 * permapower) - 10;
const autoupgrade = document.getElementById("autoupgrade")

let autoprice = 100;

let powerupgrades = 0;
let autoupgrades = 0;


let CurrentClickPower = power
let CurrentAutoPower = autopower
let CurrentEvolutionLevel = evolveLVL
//let /// = ///

document.getElementById("pointValue").innerText = clicks;
document.getElementById("upgradeCost").innerText = powerprice;
document.getElementById("evoCost").innerText = evoCost;
document.getElementById("autoCost").innerText = autoprice;
document.getElementById("CurrentClickPower").innerText = CurrentClickPower;
document.getElementById("CurrentAutoPower").innerText = CurrentAutoPower;
document.getElementById("CurrentEvolutionLevel").innerText = CurrentEvolutionLevel;
document.getElementById("permanentCost").innerText = permaprice;

circle.onclick = function(){
    clicks += power;
    document.getElementById("pointValue").innerText = clicks;
}

powerupgrade.onclick = function(){
    if (clicks >= powerprice) {
        clicks -= powerprice;
        powerupgrades += 1;
        power += 1 * evolveLVL;
        increasePower *= 1.2;
        powerprice = Math.round(20 * powerupgrades + increasePower);
        CurrentClickPower = power;
        CurrentAutoPower = autopower;
        document.getElementById("pointValue").innerText = clicks;
        document.getElementById("upgradeCost").innerText = powerprice;
        document.getElementById("CurrentClickPower").innerText = CurrentClickPower;
        document.getElementById("CurrentAutoPower").innerText = CurrentAutoPower;
    }
}

autoupgrade.onclick = function() {
    if (clicks >= autoprice) {
        clicks -= autoprice;
        autoupgrades += 1;
        autopower += 1 * evolveLVL;
        increaseAuto *= 1.25;
        autoprice = Math.round(10 * autoupgrades + increaseAuto);
        CurrentClickPower = power;
        CurrentAutoPower = autopower;
        document.getElementById("pointValue").innerText = clicks;
        document.getElementById("autoCost").innerText = autoprice;
        document.getElementById("CurrentClickPower").innerText = CurrentClickPower;
        document.getElementById("CurrentAutoPower").innerText = CurrentAutoPower;
        updateAuto();
    }
}

permanentupgrade.onclick = function() {
    if (clicks >= permaprice) {
        clicks -= permaprice;
        permapower ++;
        permaprice = 10000 * permapower;
        power += 10;
        autopower += 10;
        CurrentClickPower = power
        CurrentAutoPower = autopower
        document.getElementById("pointValue").innerText = clicks;
        document.getElementById("permanentCost").innerText = permaprice;
        document.getElementById("CurrentClickPower").innerText = CurrentClickPower;
        document.getElementById("CurrentAutoPower").innerText = CurrentAutoPower;
    }
}

function PermaUpgradesCheck() {
    power += 10 * permapower - 10;
    autopower += 10 * permapower - 10;
    CurrentClickPower = power
    CurrentAutoPower = autopower
    document.getElementById("CurrentClickPower").innerText = CurrentClickPower;
    document.getElementById("CurrentAutoPower").innerText = CurrentAutoPower;
}


evolve.onclick = function() {
    if (clicks >= (evoCost = evolveLVL * increaseEvolve)) {
        clicks = 0;
        evolveLVL ++;
        increaseEvolve *= 1.3;
        increasePower = 1;
        increaseAuto = 100;
        powerprice = 10;
        autoprice = 100;
        evoCost = evolveLVL * increaseEvolve;
        evoCost = Math.round(evoCost / 1000) * 1000;
        power = 1 * evolveLVL;
        autopower = 0 * evolveLVL;
        powerupgrades = 0;
        autoupgrades = 0;
        CurrentClickPower = power;
        CurrentAutoPower = autopower;
        CurrentEvolutionLevel = evolveLVL;

        PermaUpgradesCheck();
        updateRank();
        document.getElementById("pointValue").innerText = clicks;
        document.getElementById("evoCost").innerText = evoCost;
        document.getElementById("upgradeCost").innerText = powerprice;
        document.getElementById("autoCost").innerText = autoprice;
        document.getElementById("CurrentClickPower").innerText = CurrentClickPower;
        document.getElementById("CurrentAutoPower").innerText = CurrentAutoPower;
        document.getElementById("CurrentEvolutionLevel").innerText = CurrentEvolutionLevel;
    }
}

//Wtf gebeurt hieronder ): Chatgpt red levens: ik leer dit later wel.
const rankButton = document.getElementById("rankButton");
const currentRank = document.getElementById("currentRank");

currentRank.style.display = "none"; 
rankButton.innerText = "Show rank"; 
//dit stuk is niet om te janken
rankButton.onclick = function() {
    if (evolveLVL >= 3) {
        rank = "Beginner"
    }
    if (evolveLVL >= 5) {
        rank = "Enge tatta"
    }
    updateRank();
}
//vanaf hier gaat het janken verder (nog erger dan daar boven btw dat snap ik half!)
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
    if (evolveLVL >= 3) {
        rank = "Beginner"
    }
    if (evolveLVL >= 5) {
        rank = "Master"
    }
    currentRank.innerText = "Your rank is: " + rank;
}
//Tot hier ben ik aan het janken (:


function updateAuto() {
    clicks += autopower;
    document.getElementById("pointValue").innerText = clicks;
}

setInterval (updateAuto, 1000);