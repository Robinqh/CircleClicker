let clicks = 0;
let increasePower = 0;
let increaseAuto = 0;
let increaseEvolve = 0;
let increasePerma = 0;
let evolveLVL = 0;
let permapower = 0;
let permaprice = 0;
let power = 0;
let powerprice = 0;
let evoCost = 0;
let evotrade1Cost = 0;
let evotrade2Cost = 0;
let rank = 0;
let autopower = 0;
let autoupgrade = 0;
let autoprice = 0;
let mysteryprice = 0;
let mystery = 0;
let powerupgrades = 0;
let autoupgrades = 0;
let evoupgrades = 0;
let CurrentClickPower = 0;
let CurrentAutoPower = 0;
let CurrentEvolutionLevel = 0;
let evotrade = 0;
let evotrade1Done = 0;
let evotrade2Done = 0;
let priceMultiplier = 0;
let tempclicksMultipler = 0;
let evotradetext = 0;
let evotradesDone = 0;
let autoSaveToggle = 0;
let canUpgrade = true;
let clicksMultiplier = 0;
let coins = 0;
let evoloss = 0;
let priceupg1 = 3;

const coinElement = document.getElementById("coins");
const coinupg1 = document.getElementById("coinShop1");
const Gamescreen = document.getElementById("Gamescreen");
const powerUpgradeButton = document.getElementById("powerUpgradeButton");
const autoUpgradeButton = document.getElementById("autoUpgradeButton");
const permanentUpgradeButton = document.getElementById("permanentUpgradeButton");
const evolveButton = document.getElementById("evolveButton");
const loadGameButton = document.getElementById("loadGameButton");
const Infoscreen = document.getElementById("Infoscreen");
const EvolutiontradeDarken = document.getElementById("EvolutiontradeDarken");

function formatNumber(num) {
    return num.toLocaleString('de-DE'); 
}

function UpdateUI2() {
    if (coinElement) {
        coinElement.innerText = formatNumber(coins);
    }
    
    const coinShop1P = document.getElementById("coinShop1P");
    if (coinShop1P) {
        coinShop1P.innerText = priceupg1 === 9999999 ? "Unavailable" : formatNumber(mysteryprice);
    }
}


if (coinupg1) {
    coinupg1.onclick = function() {
        if (coins >= priceupg1) {
            evoloss -= 0.1;
            coins -= priceupg1;

            priceupg1 = 9999999;

            saveGame();  
            UpdateUI2();
        } 
    };
}

function saveGame() {
    if (canUpgrade == true) {
        tempclicksMultipler = clicksMultiplier;
    }
    const gameState = {
        clicks,
        increasePower,
        increaseAuto,
        increaseEvolve,
        increasePerma,
        evolveLVL,
        permapower,
        permaprice,
        power,
        powerprice,
        evoCost,
        evotrade1Cost,
        evotrade2Cost,
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
        evotrade,
        evotrade1Done,
        evotrade2Done,
        priceMultiplier,
        tempclicksMultipler,
        evotradetext,
        evotradesDone,
        autoSaveToggle,
        coins,
        evoloss,
        priceupg1
    };
    localStorage.setItem("GameState", JSON.stringify(gameState));
}

function loadGame() {
    const savedGameState = localStorage.getItem("GameState");
    if (canUpgrade == true) {
        if (savedGameState) {
            const gameState = JSON.parse(savedGameState);
            clicks = gameState.clicks;
            increasePower = gameState.increasePower;
            increaseAuto = gameState.increaseAuto;
            increaseEvolve = gameState.increaseEvolve;
            increasePerma = gameState.increasePerma;
            evolveLVL = gameState.evolveLVL;
            permapower = gameState.permapower;
            permaprice = gameState.permaprice;
            power = gameState.power;
            powerprice = gameState.powerprice;
            evoCost = gameState.evoCost;
            evotrade1Cost = gameState.evotrade1Cost;
            evotrade2Cost = gameState.evotrade2Cost;
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
            evotrade2Done = gameState.evotrade2Done;
            priceMultiplier = gameState.priceMultiplier;
            tempclicksMultipler = gameState.tempclicksMultipler;
            autoSaveToggle = gameState.autoSaveToggle;
            canUpgrade = true;
            evopower = evolveLVL + 1;
            tempclicksMultipler = clicksMultiplier;
            Time = "";
            evotradetext = gameState.evotradetext;
            evotradesDone = gameState.evotradesDone;
            coins = gameState.coins;
            evoloss = gameState.evoloss;
            priceupg1 = gameState.priceupg1;


            UpdateUI2();
        }
        else {
            alert("No saved file found!");
        }
    }
    else {
        return;
    }
}

Gamescreen.onclick = function() {
    saveGame();
    window.location.href = "Index.html";
};


loadGame();
