let canUpgrade = true;

let clicks = 0;
const circle = document.getElementById("circle");

let priceMultiplier = 1; 
let clicksMultiplier = 1;
let tempclicksMultipler = null

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
let evotradetext = " Evolutions";
let evotrade1Done = false;
let evotrade2Cost = 10;
let evotrade2Done = false;
let evotradesDone = 0; //Counts clicks on evo trade button not the ammount of trades!  (can be safely remove (i think))


let rank = "Your rank: Loading";

let autopower = 0 * evopower + (10 * permapower) - 10 * clicksMultiplier;
const autoupgrade = document.getElementById("autoupgrade")

let autoprice = 100;

let mysteryprice = 1000;
let mystery = Math.random();
let rewardMessage = "";

let powerupgrades = 0;
let autoupgrades = 0;
let evoupgrades = 0; //resets with 2d evo trade


let CurrentClickPower = power * clicksMultiplier
let CurrentAutoPower = autopower * clicksMultiplier
let CurrentEvolutionLevel = evolveLVL

let Time = "";
let TimeLeft;


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
        if (evotrade1Done == true ) {
            evotradeCostElement.innerText = evotrade2Cost + evotradetext;
        }
        if (evotrade1Done == false) {
            evotradeCostElement.innerText = evotrade1Cost + evotradetext;
        }
        if (evotrade1Done && evotrade2Done) {
            evotradeCostElement.innerText = evotradetext;
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
    if (canUpgrade == true) {
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
        else {
            return
        }
    }

}

autoupgrade.onclick = function() {
    if (canUpgrade == true) {
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
    else {
        return
    }
}

permanentupgrade.onclick = function() {
    if (canUpgrade == true) {
        if (clicks >= permaprice) {
            clicks -= permaprice;
            permapower ++;
            increasePerma *= 1.35;
            permaprice = permapower * increasePerma;
            permaprice = Math.round(permaprice / 500 ) * 500;
            permaprice = Math.round(permaprice * priceMultiplier);
            power += 10 * clicksMultiplier;
            autopower += 10 * clicksMultiplier;
            CurrentClickPower = power;
            CurrentAutoPower = autopower;
            UpdateUI();
        }
    }
    else {
        return
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
        if (mystery <= 0.3) {
            clicks *= 2;
            rewardMessage = "Points Doubled!";
        } 
        if (mystery >= 0.3 && mystery <= 0.5){
            clicks = Math.round(clicks /= 2);
            rewardMessage = "Points Halved!";
        }
        if (mystery >= 0.5 && mystery <= 0.7) {
            mysterybonus1();
            rewardMessage = "1.5 points multiplier! (30 Seconds)"
        }
        if (mystery >= 0.7 && mystery <0.9) {
            rewardMessage = "Nothing";
        }
        if (mystery >= 0.9) {
            evolveLVL += 1;
            rewardMessage = "An extra evolution level!";
            evopower = evolveLVL + 1;
            updateRank();
            UpdateUI();
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
    if (canUpgrade == true) {
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
    else {
        return
    }
}

const EvolutiontradeDarken = document.getElementById("evotrade");

evotrade.onclick = function() {
    evotradesDone ++;
    if (evotrade1Done == false) {
        if (evolveLVL >= evotrade1Cost) {
            evolveLVL -= evotrade1Cost;
            evopower = evolveLVL + 1;
            CurrentEvolutionLevel = evolveLVL;
            updateRank();
            evoRemove -=0.1
            evotrade1Cost = null;
            evotrade1Done = true;

            UpdateUI();
            return
        }
    }
    if (evotrade1Done == true && evotrade2Done == false) {
        if (evolveLVL >= evotrade2Cost) {
            evolveLVL -= evotrade2Cost;
            CurrentEvolutionLevel = evolveLVL;
            evopower = evolveLVL + 1;
            updateRank();
            increaseEvolve = 1000;
            evoupgrades = 0;
            evoCost = 1250;
            evotrade2Done = true;
            evotrade2Cost = null;
            evotradesDone ++;

            UpdateUI();
        }
    }
    if (evotrade1Done && evotrade2Done) {
        EvolutiontradeDarken.addEventListener('click', function() {
            toggleBuyOffClass(EvolutiontradeDarken);
        });
        EvolutiontradeDarken.classList.add("buyoff");
        evotradetext = "Evolution Trades Completed!";
    }
}

function updateRank() {
    if (evolveLVL >= 0) {
        rank = "Your rank: Unknown";
        priceMultiplier = 1;
        clicksMultiplier = 1;
    }
    if (evolveLVL >= 3) {
        rank = "Your rank: Local Celebrity";
        priceMultiplier = 0.8;
        clicksMultiplier =1;
    }
    if (evolveLVL >= 5) {
        rank = "Your rank: National Hero";
        priceMultiplier = 0.67;
        clicksMultiplier = 1;
    }
    if (evolveLVL >= 10) {
        rank = "Your rank: World Famous";
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

let tempPower2 = null;
let tempAutopower2 = null;

function  mysterybonus1() {
    Time = 30;
    TimerMGift();
    tempclicksMultipler = clicksMultiplier;
    clicksMultiplier *= 1.5;
    tempPower2 = power
    tempAutopower2 = autopower
    power = power * clicksMultiplier;
    autopower = autopower * clicksMultiplier;
    CurrentClickPower = power;
    CurrentAutoPower = autopower;
    canUpgrade = false;
    UpdateUI();
    upgradeToggle();
    setTimeout(function() {
        clicksMultiplier = tempclicksMultipler;
        canUpgrade = true;
        power = tempPower2;
        autopower = tempAutopower2;
        CurrentClickPower = power;
        CurrentAutoPower = autopower;

        UpdateUI();
        upgradeToggle();
    }, 30000);
}


const powerUpgradeButton = document.getElementById('powerupgrade');
const autoUpgradeButton = document.getElementById('autoupgrade');
const permanentUpgradeButton = document.getElementById('permanentupgrade');
const evolveButton = document.getElementById('evolve');
const loadGameButton = document.getElementById("loadGameButton");
const Infoscreen = document.getElementById("Informationscreen");

function upgradeToggle() {
    if (canUpgrade == true) {
        powerUpgradeButton.addEventListener('click', function() {
            toggleBuyOffClass(powerUpgradeButton);
        });

        autoUpgradeButton.addEventListener('click', function() {
            toggleBuyOffClass(autoUpgradeButton);
        });

        permanentUpgradeButton.addEventListener('click', function() {
            toggleBuyOffClass(permanentUpgradeButton);
        });

        evolveButton.addEventListener('click', function() {
            toggleBuyOffClass(evolveButton);
        });
        loadGameButton.addEventListener("click", function() {
            toggleBuyOffClass(loadGameButton);
        })
        Infoscreen.addEventListener("click", function() {
            toggleBuyOffClass(Infoscreen);
        })
    }
    else {
        powerUpgradeButton.classList.add('buyoff');
        autoUpgradeButton.classList.add('buyoff');
        permanentUpgradeButton.classList.add('buyoff');
        evolveButton.classList.add('buyoff');
        loadGameButton.classList.add("buyoff");
        Infoscreen.classList.add("buyoff");

    }
}
function buyon() {
    powerUpgradeButton.classList.remove('buyoff');
    autoUpgradeButton.classList.remove('buyoff');
    permanentUpgradeButton.classList.remove('buyoff');
    evolveButton.classList.remove('buyoff');
    loadGameButton.classList.remove("buyoff")
    Infoscreen.classList.remove("buyoff")
    UpdateUI();
}



document.getElementById("TimerMGift").innerHTML = Time;

function TimerMGift() {
   TimeLeft = setInterval(() =>{
    Time --;
    document.getElementById("TimerMGift").innerHTML = Time;
    if (Time == 0) {
        clearInterval(TimeLeft);
        buyon();
        document.getElementById("TimerMGift").innerHTML = "";
    }
    }, 1000);
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
        evoRemove,
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
        
    };
    localStorage.setItem("GameState", JSON.stringify(gameState));
    autosaveMessageFlag = 1;
    autosaveMessage();
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
            evoRemove = gameState.evoRemove;
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
            canUpgrade = true;
            evopower = evolveLVL + 1;
            tempclicksMultipler = clicksMultiplier
            Time = ""
            evotradetext = gameState.evotradetext;
            evotradesDone = gameState.evotradesDone;
            updateRank();
            UpdateUI();
            powerUpgradeButton.classList.remove('buyoff');
            autoUpgradeButton.classList.remove('buyoff');
            permanentUpgradeButton.classList.remove('buyoff');
            evolveButton.classList.remove('buyoff');
            loadGameButton.classList.remove("buyoff")
            Infoscreen.classList.remove("buyoff")

            if (evotrade1Done == true && evotrade2Done == true) {
                EvolutiontradeDarken.addEventListener('click', function() {
                    toggleBuyOffClass(EvolutiontradeDarken);
                });
                EvolutiontradeDarken.classList.add("buyoff");
            }
    }
        else {
            alert("No safe file found!");
        }
    }
    else {
        return
    }
}

function FirstLoadGame() {
    const savedGameState = localStorage.getItem("GameState");
    if (savedGameState) {
        loadGame();
    }
    else {
        return;
    }
}

function resetGame() {
    const confirmed = confirm("Are you sure you want to reset the game?");
    
    if (confirmed) {
        canUpgrade = true
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
        evotrade2Cost = null;
        evotradetext = " Evolutions";
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
        evotrade2Done = false;
        Time = "";
        evotradesDone = 1;
        localStorage.removeItem("GameState");
        powerUpgradeButton.classList.remove('buyoff');
        autoUpgradeButton.classList.remove('buyoff');
        permanentUpgradeButton.classList.remove('buyoff');
        evolveButton.classList.remove('buyoff');
        loadGameButton.classList.remove("buyoff")
        evotrade.classList.remove("buyoff")
        updateRank();
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
upgradeToggle();
updateRank();

const Informationscreen = document.getElementById('Informationscreen');
Informationscreen.onclick = Infoscreen2;

function Infoscreen2() {
    if (canUpgrade == true) {
         saveGame();
        location.href = "InfoScreen.html";
    }
    else {
        return
    }
}


Gamescreen.onclick = loadGame;