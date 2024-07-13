let clicks = 0;
const circle = document.getElementById("circle");

let priceMultiplier = 1; 
let clicksMultiplier = 1;

let increasePower = 1;
let increaseAuto = 100;
let increaseEvolve = 1000;
let increasePerma = 2500;

let evolveLVL = 0;
let evopower = evolveLVL + 1;
const evolve = document.getElementById("evolve");

let evoRemove = 1;

let permapower = 1;
let permaprice = 2500 * priceMultiplier;

let power = 1 * evopower + (10 * permapower) - 10 * clicksMultiplier;
const powerupgrade = document.getElementById("powerupgrade");

let powerprice = 10;

let evoCost = 1250;
let evotrade1Cost = 3;
let evotrade1text = " Evolutions";
let evotrade1Done = false;

let rank = "Your rank: Starter";

let autopower = 0 * evopower + (10 * permapower) - 10 * clicksMultiplier;
const autoupgrade = document.getElementById("autoupgrade")

let autoprice = 100;

let mysteryprice = 1000;
let mystery = Math.random();
let rewardMessage = "";

let powerupgrades = 0;
let autoupgrades = 0;
let evoupgrades = 0;


let CurrentClickPower = power * clicksMultiplier
let CurrentAutoPower = autopower * clicksMultiplier
let CurrentEvolutionLevel = evolveLVL


function formatNumber(num) {
    return num.toLocaleString('de-DE'); 
}


function UpdateUI() {
    const pointValueElement = document.getElementById("pointValue");
    if (pointValueElement) { 
        pointValueElement.innerText = formatNumber(clicks);
        pointValueElement.innerText = Math.round(clicks);
    }
    const upgradeCostElement = document.getElementById("upgradeCost");
    if (upgradeCostElement) {
        upgradeCostElement.innerText = formatNumber(powerprice);
    }
    const evoCostElement = document.getElementById("evoCost");
    if (evoCostElement) {
        evoCostElement.innerText = formatNumber(evoCost);
    }
    const autoCostElement = document.getElementById("autoCost");
    if (autoCostElement) {
        autoCostElement.innerText = formatNumber(autoprice);
    }
    const currentClickPowerElement = document.getElementById("CurrentClickPower");
    if (currentClickPowerElement) {
        currentClickPowerElement.innerText = formatNumber(CurrentClickPower);
        currentClickPowerElement.innerText = Math.round(CurrentClickPower);
    }
    const currentAutoPowerElement = document.getElementById("CurrentAutoPower");
    if (currentAutoPowerElement) {
        currentAutoPowerElement.innerText = formatNumber(CurrentAutoPower);
        currentAutoPowerElement.innerText = Math.round(CurrentAutoPower);
    }
    const currentEvolutionLevelElement = document.getElementById("CurrentEvolutionLevel");
    if (currentEvolutionLevelElement) {
        currentEvolutionLevelElement.innerText = formatNumber(CurrentEvolutionLevel);
    }
    const permanentCostElement = document.getElementById("permanentCost");
    if (permanentCostElement) {
        permanentCostElement.innerText = formatNumber(permaprice);
    }
    const evotradeCostElement = document.getElementById("evotradeCost");
    if (evotradeCostElement) {
        if (evotrade1Cost === 99999999999999 ) {
            evotradeCostElement.innerText = "Unavailable";
        }
        else {
            evotradeCostElement.innerText = formatNumber(evotrade1Cost) + evotrade1text;
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
            mysteryCostElement.innerText = formatNumber(mysteryprice);
        }
    }
    const powerUpgradeIncreaseElement = document.getElementById("powerUpgradeIncrease");
    if (powerUpgradeIncreaseElement) {
        powerUpgradeIncreaseElement.innerText = formatNumber(increasePower);
    }
    const utoUpgradeIncreaseElement = document.getElementById("autoUpgradeIncrease");
    if (utoUpgradeIncreaseElement) {
        utoUpgradeIncreaseElement.innerText = formatNumber(increaseAuto);
    }
    const evolveUpgradeIncreaseElement = document.getElementById("evolveUpgradeIncrease");
    if (evolveUpgradeIncreaseElement) {
        evolveUpgradeIncreaseElement.innerText = formatNumber(increaseEvolve);
    }
    const permaUpgradeIncreaseElement = document.getElementById("permaUpgradeIncrease");
    if (permaUpgradeIncreaseElement) {
        permaUpgradeIncreaseElement.innerText = formatNumber(increasePerma);
    }
    const evolutionLevelElement = document.getElementById("evolutionLevel");
    if (evolutionLevelElement) {
        evolutionLevelElement.innerText = formatNumber(evolveLVL);
    }
    const evoRemoveValueElement = document.getElementById("evoRemoveValue");
    if (evoRemoveValueElement) {
        evoRemoveValueElement.innerText = formatNumber(evoRemove);
    }
    const permanentPowerElement = document.getElementById("permanentPower");
    if (permanentPowerElement) {
        permanentPowerElement.innerText = formatNumber(permapower);
    }
    const mysteryValueElement = document.getElementById("mysteryValue");
    if (mysteryValueElement) {
        mysteryValueElement.innerText = mystery; 
    }
    const autoSaveStatusElement = document.getElementById("autoSaveStatus");
    if (autoSaveStatusElement) {
        autoSaveStatusElement.innerText = autoSaveToggle ? "ON" : "OFF";
    }
    const popupmysterygift = document.getElementById(rewardMessage);
    if (popupmysterygift) { 
        popupmysterygift.innerText = formatNumber(clicks);
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
        power += 1 * evopower * clicksMultiplier;
        increasePower *= 1.2;
        powerprice = Math.round(20 * powerupgrades + increasePower);
        powerprice = Math.round(powerprice * priceMultiplier);
        CurrentClickPower = power;
        CurrentAutoPower = autopower;
        UpdateUI();
    }
}

autoupgrade.onclick = function() {
    if (clicks >= autoprice) {
        clicks -= autoprice;
        autoupgrades += 1;
        autopower += 1 * evopower * clicksMultiplier;
        increaseAuto *= 1.2;
        autoprice = Math.round(10 * autoupgrades + increaseAuto);
        autoprice = Math.round(autoprice * priceMultiplier);
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
        increasePerma *= 1.35;
        permaprice = permapower * increasePerma;
        permaprice = Math.round(permaprice / 500 ) * 500;
        permaprice = Math.round(permaprice * priceMultiplier);
        power += 10 * clicksMultiplier;
        autopower += 10 * clicksMultiplier;
        CurrentClickPower = mathpower;
        CurrentAutoPower = autopower;
        UpdateUI();
    }
}

function PermaUpgradesCheck() {
    power += 10 * permapower - 10;
    autopower += 10 * permapower - 10;
    power = power * clicksMultiplier;
    autopower = autopower * clicksMultiplier;
    CurrentClickPower = power;
    CurrentAutoPower = autopower;
    UpdateUI();
}

mysterygift.onclick = function() {
    if (clicks >= mysteryprice) {
        mystery = Math.random();
        mysteryprice = 99999999999999;
        if (mystery >= 0.5) {
            clicks *= 2;
            rewardMessage = "Clicks Doubled!";
        } else {
            clicks = Math.round(clicks /= 2);
            rewardMessage = "Clicks Halved!";
        }
        popupmysterygift.innerText = rewardMessage;
        popupmysterygift.style.display = "block";
        setTimeout(() => {
            popupmysterygift.style.display = "none";
        }, 2000);
        UpdateUI();
        saveGame();
    }
}



evolve.onclick = function() {
    if (clicks >= (evoCost = evolveLVL * increaseEvolve * priceMultiplier)) {
        if (evotrade1Done) {
            evolveLVL ++;
            evopower = evolveLVL + 1;
            updateRank();

            let tempPower = powerupgrades * evopower * clicksMultiplier;
            let tempAutopower = autoupgrades * evopower * clicksMultiplier;

            tempPower = Math.round(tempPower * 0.2);  
            tempAutopower = Math.round(tempAutopower * 0.2);  

            power = tempPower + 1 * evopower;
            autopower = tempAutopower;

            clicks -= Math.round(clicks * 0.8);
            evoupgrades ++;
            increaseEvolve *= 1.3;
            increasePower = 1;
            increaseAuto = 100;
            powerprice = Math.round(10 * priceMultiplier);
            autoprice = Math.round(100 * priceMultiplier);;
            mysteryprice = Math.round(1000 * priceMultiplier);;
            evoCost = (evoupgrades + 1) * increaseEvolve;
            evoCost = Math.round(evoCost / 1000) * 1000;
            evoCost = Math.round(evoCost * priceMultiplier);
            powerupgrades = 0;
            autoupgrades = 0;
            CurrentClickPower = power;
            CurrentAutoPower = autopower;
            CurrentEvolutionLevel = evolveLVL;

            PermaUpgradesCheck();
            UpdateUI();
            }

        else {
            evolveLVL ++;
            evopower = evolveLVL + 1;
            updateRank();
            clicks = 0
            evoupgrades ++;
            increaseEvolve *= 1.3;
            increasePower = 1;
            increaseAuto = 100;
            powerprice = Math.round(10 * priceMultiplier);
            autoprice = Math.round(100 * priceMultiplier);
            mysteryprice = Math.round(1000 * priceMultiplier);
            power = 1 * evopower * clicksMultiplier;
            autopower = 0 * clicksMultiplier;
            powerupgrades = 0;
            autoupgrades = 0;
            CurrentClickPower = power;
            CurrentAutoPower = autopower;
            CurrentEvolutionLevel = evolveLVL;

            PermaUpgradesCheck();
            UpdateUI();
            }
        }
        evoCost = (evoupgrades + 1) * increaseEvolve;
        evoCost = Math.round(evoCost / 1000) * 1000;
        evoCost = Math.round(evoCost * priceMultiplier);
        if (autoSaveToggle === true) {
            saveGame();
        }


    }


evotrade1.onclick = function() {
    if (evolveLVL >= evotrade1Cost) {
        evolveLVL -= evotrade1Cost;
        evopower = evolveLVL + 1;
        CurrentEvolutionLevel = evolveLVL;
        evoRemove -=0.1
        evotrade1Cost = 99999999999999;
        evotrade1Done = true;
        updateRank();
        UpdateUI();
    }
}


function updateRank() {
    if (evolveLVL >= 0) {
        rank = "Your rank: Nobody";
    }
    if (evolveLVL >= 3) {
        rank = "Your rank: Well-Known";
        priceMultiplier = 0.8;
    }
    if (evolveLVL >= 5) {
        rank = "Your rank: Famous";
        priceMultiplier = 0.66;
    }
    if (evolveLVL >= 10) {
        rank = "Your rank: WorldStar";
        priceMultiplier = 0.5;
        clicksMultiplier = 1.5;
    }
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
        evotrade1,
        evotrade1Done,
        priceMultiplier,
        clicksMultiplier,
    };
    localStorage.setItem("GameState", JSON.stringify(gameState));
    autosaveMessageFlag = 1;
    autosaveMessage();
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
        evotrade1Done = gameState.evotrade1Done;
        priceMultiplier = gameState.priceMultiplier;
        clicksMultiplier = gameState.clicksMultiplier;

        evopower = evolveLVL + 1;
        UpdateUI();
    }
    else {
        alert("No safe file found!");
    }
}

function FirstLoadGame() {
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
        evotrade1Done = gameState.evotrade1Done;
        priceMultiplier = gameState.priceMultiplier;
        clicksMultiplier = gameState.clicksMultiplier;

        evopower = evolveLVL + 1;
        UpdateUI();
    }
    else {
        return;
    }
}

function resetGame() {
    const confirmed = confirm("Are you sure you want to reset the game?");
    
    if (confirmed) {
        priceMultiplier = 1;
        clicksMultiplier = 1;
        clicks = 0;
        increasePower = 1;
        increaseAuto = 100;
        increaseEvolve = 1000;
        increasePerma = 2500;
        evolveLVL = 0;
        evoRemove = 1;
        evopower = evolveLVL + 1;
        permapower = 1;
        permaprice = 2500 * priceMultiplier;
        power = 1 * evopower + (10 * permapower) - 10;
        powerprice = 10 * priceMultiplier;
        evoCost = 1250 * priceMultiplier;
        evotrade1Cost = 3;
        evotrade1text = " Evolutions";
        rank = "Your rank: Starter";
        autopower = 0 * evopower + (10 * permapower) - 10;
        autoprice = 100 * priceMultiplier;
        mysteryprice = 1000 * priceMultiplier;
        mystery = Math.random();
        powerupgrades = 0;
        autoupgrades = 0;
        evoupgrades = 0;
        CurrentClickPower = power;
        CurrentAutoPower = autopower;
        CurrentEvolutionLevel = evolveLVL;
        evotrade1Done = false;
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
        }, 120000);
    }
}


function autosaveMessage() {
    var popupAutoSave = document.getElementById("popupAutoSave");
    if (autosaveMessageFlag === 1) {
        popupAutoSave.innerText = "Saved";
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
FirstLoadGame();

Informationscreen.onclick = saveGame;
Gamescreen.onclick = loadGame;