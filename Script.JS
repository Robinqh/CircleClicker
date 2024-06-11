let clicks = 0;
const circle = document.getElementById("circle");

let increasePower = 1;
let increaseAuto = 100;
let increaseEvolve = 1000;
let increasePerma = 2500;

let evolveLVL = 0;
let evopower = evolveLVL + 1;
const evolve = document.getElementById("evolve");

let evoRemove = 1;

let permapower = 1;
let permaprice = 2500;

let power = 1 * evopower + (10 * permapower) - 10;
const powerupgrade = document.getElementById("powerupgrade");

let powerprice = 10;

let evoCost = 1250;
let evotrade1Cost = 5;
let evotrade1text = " Evolutions";

let rank = "Your rank: Starter";

let autopower = 0 * evopower + (10 * permapower) - 10;
const autoupgrade = document.getElementById("autoupgrade")

let autoprice = 100;

let mysteryprice = 1000;
let mystery = Math.random();

let powerupgrades = 0;
let autoupgrades = 0;
let evoupgrades = 0;


let CurrentClickPower = power
let CurrentAutoPower = autopower
let CurrentEvolutionLevel = evolveLVL


function UpdateUI() {
    const pointValueElement = document.getElementById("pointValue");
    if (pointValueElement) { 
        pointValueElement.innerText = clicks;
    }
    const upgradeCostElement = document.getElementById("upgradeCost");
    if (upgradeCostElement) {
        upgradeCostElement.innerText = powerprice;
    }
    const evoCostElement = document.getElementById("evoCost");
    if (evoCostElement) {
        evoCostElement.innerText = evoCost;
    }
    const autoCostElement = document.getElementById("autoCost");
    if (autoCostElement) {
        autoCostElement.innerText = autoprice;
    }
    const currentClickPowerElement = document.getElementById("CurrentClickPower");
    if (currentClickPowerElement) {
        currentClickPowerElement.innerText = CurrentClickPower;
    }
    const currentAutoPowerElement = document.getElementById("CurrentAutoPower");
    if (currentAutoPowerElement) {
        currentAutoPowerElement.innerText = CurrentAutoPower;
    }
    const currentEvolutionLevelElement = document.getElementById("CurrentEvolutionLevel");
    if (currentEvolutionLevelElement) {
        currentEvolutionLevelElement.innerText = CurrentEvolutionLevel;
    }
    const permanentCostElement = document.getElementById("permanentCost");
    if (permanentCostElement) {
        permanentCostElement.innerText = permaprice;
    }
    const evotradeCostElement = document.getElementById("evotradeCost");
    if (evotradeCostElement) {
        if (evotrade1Cost === 99999999999999 ) {
            evotradeCostElement.innerText = "Unavailable";
        }
        else {
        evotradeCostElement.innerText = evotrade1Cost + evotrade1text;
        }
    }
    const currentRankElement = document.getElementById("currentRank");
    if (currentRankElement) {
        currentRankElement.innerText = rank;
    }
    const mysteryCostElement = document.getElementById("mysteryCost");
    if (mysteryCostElement) {
        if (mysteryprice === 99999999999999) {
            mysteryCostElement.innerText = "Unavailable";
        } 
        else {
            mysteryCostElement.innerText = mysteryprice;
        }
    }
    const powerUpgradeIncreaseElement = document.getElementById("powerUpgradeIncrease");
    if (powerUpgradeIncreaseElement) {
        powerUpgradeIncreaseElement.innerText = increasePower;
    }
    const utoUpgradeIncreaseElement = document.getElementById("autoUpgradeIncrease");
    const evolveUpgradeIncreaseElement = document.getElementById("evolveUpgradeIncrease");
    if (evolveUpgradeIncreaseElement) {
        evolveUpgradeIncreaseElement.innerText = increaseEvolve;
    }
    const permaUpgradeIncreaseElement = document.getElementById("permaUpgradeIncrease");
    if (permaUpgradeIncreaseElement) {
        permaUpgradeIncreaseElement.innerText = increasePerma;
    }
    const evolutionLevelElement = document.getElementById("evolutionLevel");
    if (evolutionLevelElement) {
        evolutionLevelElement.innerText = evolveLVL;
    }
    const evoRemoveValueElement = document.getElementById("evoRemoveValue");
    if (evoRemoveValueElement) {
        evoRemoveValueElement.innerText = evoRemove;
    }
    const permanentPowerElement = document.getElementById("permanentPower");
    if (permanentPowerElement) {
        permanentPowerElement.innerText = permapower;
    }
    const mysteryValueElement = document.getElementById("mysteryValue");
    if (mysteryValueElement) {
        mysteryValueElement.innerText = mystery;
    }
    const autoSaveStatusElement = document.getElementById("autoSaveStatus");
    if (autoSaveStatusElement) {
        autoSaveStatusElement.innerText = autoSaveToggle ? "ON" : "OFF";
    }
}


circle.onclick = function(){
    clicks += power;
    Math.round(clicks);
    UpdateUI();
}

powerupgrade.onclick = function(){
    if (clicks >= powerprice) {
        clicks -= powerprice;
        powerupgrades += 1;
        power += 1 * evopower;
        increasePower *= 1.2;
        powerprice = Math.round(20 * powerupgrades + increasePower);
        CurrentClickPower = power;
        CurrentAutoPower = autopower;
        UpdateUI();
    }
}

autoupgrade.onclick = function() {
    if (clicks >= autoprice) {
        clicks -= autoprice;
        autoupgrades += 1;
        autopower += 1 * evopower;
        increaseAuto *= 1.25;
        autoprice = Math.round(10 * autoupgrades + increaseAuto);
        CurrentClickPower = power;
        CurrentAutoPower = autopower;
        UpdateUI();
        updateAuto();
    }
}
permanentupgrade.onclick = function() {
    if (clicks >= permaprice) {
        clicks -= permaprice;
        permapower ++;
        increasePerma *= 1.3;
        permaprice = permapower * increasePerma;
        permaprice = Math.round(permaprice / 500 ) * 500;
        power += 10;
        autopower += 10;
        CurrentClickPower = power
        CurrentAutoPower = autopower
        UpdateUI();
    }
}

function PermaUpgradesCheck() {
    power += 10 * permapower - 10;
    autopower += 10 * permapower - 10;
    CurrentClickPower = power
    CurrentAutoPower = autopower
    UpdateUI();
}

mysterygift.onclick = function() {
    if (clicks >= mysteryprice) {
        mystery = Math.random();
        mysteryprice = 99999999999999;
        if (mystery >= 0.5) {
            clicks *= 2;
        }
        else {
        clicks = Math.round(clicks /= 2);
        }
        UpdateUI();
        saveGame();
    }
}


evolve.onclick = function() {
    if (clicks >= (evoCost = evolveLVL * increaseEvolve)) {
        clicks -= Math.round(clicks * evoRemove);
        evolveLVL ++;
        evopower = evolveLVL + 1;
        evoupgrades ++;
        increaseEvolve *= 1.3;
        increasePower = 1;
        increaseAuto = 100;
        powerprice = 10;
        autoprice = 100;
        mysteryprice = 1000;
        evoCost = (evoupgrades + 1) * increaseEvolve;
        evoCost = Math.round(evoCost / 1000) * 1000;
        power = 1 * evopower;
        autopower = 0 * evopower;
        powerupgrades = 0;
        autoupgrades = 0;
        CurrentClickPower = power;
        CurrentAutoPower = autopower;
        CurrentEvolutionLevel = evolveLVL;

        PermaUpgradesCheck();
        updateRank();
        UpdateUI();
    }
}


evotrade1.onclick = function() {
    if (evolveLVL >= evotrade1Cost) {
        evolveLVL -= evotrade1Cost;
        evopower = evolveLVL + 1;
        CurrentEvolutionLevel = evolveLVL;
        evoRemove -=0.1
        evotrade1Cost = 99999999999999
        updateRank();
        UpdateUI();
    }
}


function updateRank() {
    if (evolveLVL >= 0) {
        rank = "Your rank: Starter"
    }
    if (evolveLVL >= 3) {
        rank = "Your rank: Well-Known"
    }
    if (evolveLVL >= 5) 
        rank = "Your rank: Master"
    
        UpdateUI();
}

function updateAuto() {
    clicks += autopower;
    Math.round(clicks);
    UpdateUI();
}


function saveGame() {
    const gameState = {
        clicks,
        increasePower,
        increaseAuto,
        increaseEvolve,
        increasePerma,
        evolveLVL,
        evoRemove,
        permapower,
        permaprice,
        power,
        powerprice,
        evoCost,
        evotrade1Cost,
        evotrade1text,
        rank,
        autopower,
        autoupgrade,
        autoprice,
        mysteryprice,
        mystery,
        powerupgrades,
        autoupgrades,
        evoupgrades,
        CurrentClickPower,
        CurrentAutoPower,
        CurrentEvolutionLevel,
        evotrade1
    };
    localStorage.setItem("GameState", JSON.stringify(gameState));
}

function loadGame() {
    const savedGameState = localStorage.getItem("GameState");
    if (savedGameState) {
        const gameState = JSON.parse(savedGameState);
        clicks = gameState.clicks;
        increasePower = gameState.increasePower;
        increaseAuto = gameState.increaseAuto;
        increaseEvolve = gameState.increaseEvolve;
        increasePerma = gameState.increasePerma;
        evolveLVL = gameState.evolveLVL;
        evoRemove = gameState.evoRemove;
        permapower = gameState.permapower;
        permaprice = gameState.permaprice;
        power = gameState.power;
        powerprice = gameState.powerprice;
        evoCost = gameState.evoCost;
        evotrade1Cost = gameState.evotrade1Cost;
        evotrade1text = gameState.evotrade1text;
        rank = gameState.rank;
        autopower = gameState.autopower;
        autoprice = gameState.autoprice;
        mysteryprice = gameState.mysteryprice;
        mystery = gameState.mystery;
        powerupgrades = gameState.powerupgrades;
        autoupgrades = gameState.autoupgrades;
        evoupgrades = gameState.evoupgrades;
        CurrentClickPower = gameState.CurrentClickPower;
        CurrentAutoPower = gameState.CurrentAutoPower;
        CurrentEvolutionLevel = gameState.CurrentEvolutionLevel;

        evopower = evolveLVL + 1;
        UpdateUI();
    }
    else {
        alert("No safe file found!");
    }
}

function resetGame() {
    const confirmed = confirm("Are you sure you want to reset the game?");
    
    if (confirmed) {
        clicks = 0;
        increasePower = 1;
        increaseAuto = 100;
        increaseEvolve = 1000;
        increasePerma = 2500;
        evolveLVL = 0;
        evoRemove = 1;
        evopower = evolveLVL + 1;
        permapower = 1;
        power = 1 * evopower + (10 * permapower) - 10;
        powerprice = 10;
        evoCost = 1250;
        evotrade1Cost = 5;
        evotrade1text = " Evolutions";
        rank = "Your rank: Starter";
        autopower = 0 * evopower + (10 * permapower) - 10;
        autoprice = 100;
        mysteryprice = 1000;
        mystery = Math.random();
        powerupgrades = 0;
        autoupgrades = 0;
        evoupgrades = 0;
        CurrentClickPower = power;
        CurrentAutoPower = autopower;
        CurrentEvolutionLevel = evolveLVL;
        localStorage.removeItem("GameState");
        UpdateUI();
    } else {
        return;
    }
}


let autoSaveToggle = true;
let autoSaveInterval;
let autosaveMessageFlag = 0;
let autosaveMessageInterval;

toggleAutoSave.onclick = function() {
    autoSaveToggle = !autoSaveToggle;
    autosave();
    UpdateUI();
}

function autosave() {
    if (autoSaveInterval) {
        clearInterval(autoSaveInterval); 
    }
    if (autoSaveToggle) {
        autoSaveInterval = setInterval(function() {
            saveGame();
            autosaveMessageFlag = 1;
            autosaveMessage();
        }, 180000);
    }
}


function autosaveMessage() {
    var popupAutoSave = document.getElementById("popupAutoSave");
    if (autosaveMessageFlag === 1) {
        popupAutoSave.innerText = "Auto saved";
        autosaveMessageInterval = setInterval(function() {
            autosaveMessageFlag = 0;
            clearInterval(autosaveMessageInterval);
            popupAutoSave.innerText = "";
        }, 3000);
    } else {
        popupAutoSave.innerText = "";
    }
}

saveGameButton.onclick = saveGame;
loadGameButton.onclick = loadGame;
resetGameButton.onclick = resetGame;


setInterval (updateAuto, 750);
autosave();
UpdateUI();