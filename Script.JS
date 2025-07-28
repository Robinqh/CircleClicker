function formatNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return ""; 
    }
    return num.toLocaleString('de-DE');
}


//offline > online
let lastPlayedTime = null;
let firstload = true;

//X
let clicks = 0;
const circle = document.getElementById("circle");



let ExchangeCost = 4;

let priceMultiplier = 1; 
let clicksMultiplier = 1;

let increasePower = 1;
let increaseAuto = 100;
let increaseEvolve = 500;
let increasePerma = 2500;

let evolveLVL = 0;
let evopower = evolveLVL + 1;
const evolve = document.getElementById("evolve");


let permapower = 0;
let permaprice = 2500 * priceMultiplier;

let power = 1 * evopower 
const powerupgrade = document.getElementById("powerupgrade");

let powerprice = 1;

//evolution variables
let evoCost = 750;
let tempevoCost = null


let evoloss = 1;
let ELMcost = 1;

let autoclick = 750;
let autotimerCost = 3;

let reduceMysterycost = 10;


let rank = "Your rank: Loading";
let RPpS = 0;

let autopower = 0 * evopower 
const autoupgrade = document.getElementById("autoupgrade")

let autoprice = 100;

//coin variables
let coins = 0;
let coinneeded = 500;
let newCoin = 350
let timesClicked = 0;
let neededClicks = newCoin-timesClicked


//mystery variables
let mysteryprice = 1000 + (clicks * 0.75);
let mystery = Math.random();
let rewardMessage = "";
let mgBought = 0 
let maxMGperEvo = 1


//upgrade-count variables
let powerupgrades = 0;
let autoupgrades = 0;



// *power variables*
let CurrentClickPower = power
let CurrentAutoPower = autopower 
let CurrentEvolutionLevel = evolveLVL

//autosave variables
let autoSaveToggle = true;
let autoSaveInterval;
let autosaveMessageFlag = 0;
let autosaveMessageInterval;

//shop variables
let toggle = 1;
let isSpecialShop = false;
let isRankShop = false;

//endgoal variables
let endGoalReached = false
let endgamePoints = 2500000

//rankshop variables
let rankPoints = 0;
let CoinACbought = false;
let Offlinebought = false;

//rankshop prices
let CoinACcost = 3000;
let Offlinecost = 250;
let CNneededcost = 500;

// *stat variables*
let stat = 1;
let multiplier2 = 1; //offlinemultiplier (nog niet verwerkt in de berekening)
let allTimeClicks = 0;
let allTimePoints = 0;

// rommel
let quartered = false;
let plusOneMultiplier = false;


const normalUpgradesContainer = document.getElementById('normal-upgrades');
const specialUpgradesContainer = document.getElementById('special-upgrades');

const ELMButton = document.getElementById('ELM');
const autotimeButton = document.getElementById('autotime');
const mysterypriceButton = document.getElementById('mysteryprice');

const upgtoggle = document.getElementById("Toggle-Upgrades")
const toggleStats = document.getElementById("toggleStats")




function UpdateUI() {
    const pointValueElement = document.getElementById("pointValue");
    if (pointValueElement) {
        if (toggle === 1 || toggle === 2) {
            pointValueElement.innerText = "Points: " + formatNumber(Math.round(clicks));
        } else if (toggle === 3) { 
        pointValueElement.innerHTML = "Rankpoints (" + (RPpS) + "): <br>" +  formatNumber(rankPoints);
        }
    }

    const upgradeCostElement = document.getElementById("upgradeCost");
    if (upgradeCostElement) {
        upgradeCostElement.innerText = formatNumber(powerprice);
    }
    const evoCostElement = document.getElementById("evoCost");
  if (evoCostElement) {
    evoCostElement.innerText = formatNumber(tempevoCost !== null ? tempevoCost : evoCost);
  }
    const autoCostElement = document.getElementById("autoCost");
    if (autoCostElement) {
        autoCostElement.innerText = formatNumber(autoprice);
    }
const currentClickPowerElement = document.getElementById("CurrentClickPower");
if (currentClickPowerElement) {
    const percentageValue = (clicksMultiplier * 100).toFixed(1);
    currentClickPowerElement.innerText = formatNumber(Math.round(CurrentClickPower)) + " (*" + percentageValue + "%)";
}

const currentAutoPowerElement = document.getElementById("CurrentAutoPower");
if (currentAutoPowerElement) {
    const percentageValue = (clicksMultiplier * 100).toFixed(1);
    currentAutoPowerElement.innerText = formatNumber(Math.round(CurrentAutoPower)) + " (*" + percentageValue + "%)" + " - " + (autoclick) + "ms";
}

    const currentEvolutionLevelElement = document.getElementById("CurrentEvolutionLevel");
    if (currentEvolutionLevelElement) {
        currentEvolutionLevelElement.innerText = formatNumber(CurrentEvolutionLevel) + " - evoloss: " + Math.round(evoloss *100) + "%";
    }



    const permanentCostElement = document.getElementById("permanentCost");
    if (permanentCostElement) {
        if (permaprice !== null)
        permanentCostElement.innerText = formatNumber(permaprice);
    }   
    if (permaprice === null) {
        permanentCostElement.innerText = "Completed";

    }


    const currentRankElement = document.getElementById("currentRank");
    if (currentRankElement) {
        currentRankElement.innerText = rank;
    }
        const mysteryCostElement = document.getElementById("mysteryCost");
    if (mysteryCostElement) {
        if (mysteryprice === null) {
            mysteryCostElement.innerText = "Unavailable";
        } else {
            mysteryCostElement.innerText = formatNumber(Math.round(mysteryprice));
        }
    }
   const popupmysterygiftElement = document.getElementById("popupmysterygift");
    if (popupmysterygiftElement) {
        if (rewardMessage && rewardMessage !== "") { // Check if rewardMessage has content
            popupmysterygiftElement.innerText = rewardMessage;
            popupmysterygiftElement.style.display = "block"; // Make it visible
        } else {
            popupmysterygiftElement.innerText = ""; // Clear the text
            popupmysterygiftElement.style.display = "none"; // Hide it
        }
    }
    const powerUpgradeIncreaseElement = document.getElementById("powerUpgradeIncrease");
    if (powerUpgradeIncreaseElement) {
        powerUpgradeIncreaseElement.innerText = formatNumber(increasePower);
    }
    const autoUpgradeIncreaseElement = document.getElementById("autoUpgradeIncrease");
    if (autoUpgradeIncreaseElement) {
        autoUpgradeIncreaseElement.innerText = formatNumber(increaseAuto);
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
    const priceMultiplierElement = document.getElementById("multiplier")
    if (priceMultiplierElement) {
        priceMultiplierElement.innerText = (priceMultiplier * 100).toFixed(1) + "%*";
    }

    const offlinemultiplierstat = document.getElementById("multiplier2")
        if (offlinemultiplierstat) {
            offlinemultiplierstat.innerText = formatNumber((multiplier2 * 100).toFixed(1)) + "%"
        }

    const coinElement = document.getElementById("coins");
    if (coinElement) {
        coinElement.innerText = formatNumber(Math.round(coins)) + " - next coin: " + (neededClicks);
    }

    const powerupgradeButton = document.getElementById("powerupgrade");
    if (powerupgradeButton) {
        if (clicks >= powerprice) {
            powerupgradeButton.classList.remove("buyoff");
        } else {
            powerupgradeButton.classList.add("buyoff");
        }
    }


    const RPexchangeButton = document.getElementById("RPexchange");
        if (RPexchangeButton) {
            if (rankPoints >= ExchangeCost)
            RPexchangeButton.classList.remove("buyoff");
        } if (rankPoints < ExchangeCost) {
            RPexchangeButton.classList.add("buyoff");
        }


    const ATP = document.getElementById("ATP");
        if (ATP) {
            ATP.innerText = formatNumber(Math.round(allTimePoints))
        }

        
    const ATC = document.getElementById("ATC");
    if (ATC) {
        ATC.innerText = formatNumber(allTimeClicks)
    }

    const autoupgradeButton = document.getElementById("autoupgrade");
    if (autoupgradeButton) {
        if (clicks >= autoprice) {
            autoupgradeButton.classList.remove("buyoff");
        } else {
            autoupgradeButton.classList.add("buyoff");
        }
    }


    const permanentupgradeButton = document.getElementById("permanentupgrade");
    if (permanentupgradeButton) {
        if (clicks < permaprice && permaprice !== null) {
            permanentupgradeButton.classList.add("buyoff");
            permanentupgradeButton.classList.remove("completed")
        } 
        if (clicks >= permaprice && permaprice !== null) {
            permanentupgradeButton.classList.remove("buyoff");
            permanentupgradeButton.classList.remove("completed")
        }
        if (permaprice === null) {
            permanentupgradeButton.classList.remove("buyoff")
            permanentupgradeButton.classList.add("completed")
        }
    }


    const evolveButton = document.getElementById("evolve");
    if (evolveButton) {
        const effectiveEvoCost = (tempevoCost !== null) ? tempevoCost : evoCost;

        if (clicks >= effectiveEvoCost) {
            evolveButton.classList.remove("buyoff");
        } else {
            evolveButton.classList.add("buyoff");
        }
    }


    //mysterygift
    const mysterygiftButton = document.getElementById("mysterygift");
    if (mysterygiftButton) {
        if (mgBought >= maxMGperEvo) {
            mysterygiftButton.classList.add("out-of-stock");
            mysterygiftButton.classList.remove("buyoff");

        } else { 
            mysterygiftButton.classList.remove("out-of-stock"); 

            if (clicks < mysteryprice) {
                mysterygiftButton.classList.add("buyoff");
            } else {
                mysterygiftButton.classList.remove("buyoff");
            }
        }
    }

    const mgleftnotifier = document.getElementById("mg-left");
    if (mgleftnotifier) {
        mgleftnotifier.innerText = "(" + (maxMGperEvo - mgBought) + " left)"
    }

    //special upgrades
    const ELMButton = document.getElementById("ELM");
    if (ELMButton) {
      
        if (coins < ELMcost) {
            ELMButton.classList.add("buyoff");
            ELMButton.classList.remove("completed");
        } 
        if (coins >= ELMcost) {
            ELMButton.classList.remove("buyoff")
            ELMButton.classList.remove("completed");
        }
        if (ELMcost === null) {
            ELMButton.classList.remove("buyoff");
            ELMButton.classList.add("completed");
        }
    
        ELMButton.innerText = (ELMcost === null) ? "Evolve loss multiplier: MAX" : "Evolve loss multiplier -0.1: " + ELMcost + " coins";
    }

    const autotimeButton = document.getElementById("autotime");
    if (autotimeButton) {
        if (coins < autotimerCost) {
            autotimeButton.classList.add("buyoff");
            autotimeButton.classList.remove("completed");
        } 
        if (coins >= autotimerCost){
            autotimeButton.classList.remove("buyoff");
            autotimeButton.classList.remove("completed");
        }
        if (autotimerCost === null) {
            autotimeButton.classList.remove("buyoff");
            autotimeButton.classList.add("completed") 
        }
        autotimeButton.innerText = (autotimerCost === null) ? "Reduce autotimer: MAX" : "Reduce autotimer -50ms (max 333ms): " + formatNumber(autotimerCost) + " coins";
    }


 const mysterypriceButton = document.getElementById("mysteryprice");
    if (mysterypriceButton) {
        if (coins < reduceMysterycost) {
            mysterypriceButton.classList.add("buyoff");
            mysterypriceButton.classList.remove("completed");
        } 
        if (coins >= reduceMysterycost) {
            mysterypriceButton.classList.remove("buyoff");
            mysterypriceButton.classList.remove("completed");
        }
        if (reduceMysterycost === null) {
            mysterypriceButton.classList.remove("buyoff")
            mysterypriceButton.classList.add("completed")
        }
        mysterypriceButton.innerText = (reduceMysterycost === null) ? "Increase max mystergifts per evo price: MAX" : "Increase max mystergifts per evo (max 4): " + formatNumber(reduceMysterycost) + " coins";
    }

    //rankupgrades !Hier de groene knop voegen!
    const CoinACButton = document.getElementById("CoinAC");
    if (CoinACButton) {
        if ( rankPoints < CoinACcost) {
            CoinACButton.classList.add("buyoff");
            CoinACButton.classList.remove("completed");
        } 
        if (rankPoints >= CoinACcost) {
            CoinACButton.classList.remove("buyoff");
            CoinACButton.classList.remove("completed");
        }
        if (CoinACcost === null) {
            CoinACButton.classList.remove("buyoff");
            CoinACButton.classList.add("completed");
        }
        CoinACButton.innerText = (CoinACbought === true) ? "Coin autoclicker: Activated" : "Coin autoclicker: " + formatNumber(CoinACcost) + "RP";
    }

    const OffButton = document.getElementById("Offline");
    if (OffButton) {
        if (rankPoints < Offlinecost) {
            OffButton.classList.add("buyoff");
            OffButton.classList.remove("completed");
        }
            if (rankPoints >= Offlinecost) {
                OffButton.classList.remove("buyoff");
                OffButton.classList.remove("completed");
            }
            if (Offlinecost === null) {
                OffButton.classList.remove("buyoff");
                OffButton.classList.add("completed");
            }
        OffButton.innerText = (Offlinebought === true) ? "Offline autoclick; Activated" : "Offline autoclick: " + formatNumber(Offlinecost) + "RP";
    }

    const CNButton = document.getElementById("CN");
        if (CNButton) {
            if (rankPoints < CNneededcost) {
                CNButton.classList.add("buyoff");
                CNButton.classList.remove("completed");
            } 
            if (rankPoints >= CNneededcost) {
                CNButton.classList.remove("buyoff");
                CNButton.classList.remove("completed");
            }
            if (CNneededcost === null) {
                CNButton.classList.remove("buyoff");
                CNButton.classList.add("completed");
            }
            CNButton.innerText = (CNneededcost === null) ? "Lowest range reached (" + (coinneeded) + ")" : "Decrease next coin range (-50): " + formatNumber(CNneededcost) + "RP " + "(0-" + (coinneeded) + ")";
        }

    //evo titles
    const RANK_CLASSES = ['wood', 'bronze', 'iron', 'gold', 'platinum', "champion"];

    if (evolveLVL < 3) {
        rank = "Your rank: Wood";
        currentRankElement.classList.remove(...RANK_CLASSES);
        currentRankElement.classList.add('wood');
    } else if (evolveLVL >= 3 && evolveLVL < 5) { 
        rank = "Your rank: Bronze";
        currentRankElement.classList.remove(...RANK_CLASSES);
        currentRankElement.classList.add('bronze');
    } else if (evolveLVL >= 5 && evolveLVL < 10) { 
        rank = "Your rank: Iron"; 
        currentRankElement.classList.remove(...RANK_CLASSES);
        currentRankElement.classList.add('iron'); 
    } else if (evolveLVL >= 10 && evolveLVL < 15) {
        rank = "Your rank: Gold";
        currentRankElement.classList.remove(...RANK_CLASSES);
        currentRankElement.classList.add('gold');
    } else if (evolveLVL >= 15 && evolveLVL < 25) {
        rank = "Your rank: Platinum";
        currentRankElement.classList.remove(...RANK_CLASSES);
        currentRankElement.classList.add('platinum');
    } else if (evolveLVL >= 25) {
        rank = "Your rank: Champion";
        currentRankElement.classList.remove(...RANK_CLASSES);
        currentRankElement.classList.add('champion');
    }

 


    //stat-changes

    const coincount = document.getElementById("coincount")
    const EvolutionLevel = document.getElementById("EvolutionLevel")
    const ClickPower = document.getElementById("ClickPower")
    const AutoPower = document.getElementById("AutoPower")
    const pricemultiplier = document.getElementById("pricemultiplier")
    const offlinemultiplier = document.getElementById("offlinemultiplier")
    const totalClicks = document.getElementById("totalClicks")
    const totalPoints = document.getElementById("totalPoints")

    if (stat === 1) {
        coincount.classList.remove("hidden-stats");
        EvolutionLevel.classList.remove("hidden-stats");
        ClickPower.classList.remove("hidden-stats");
        AutoPower.classList.remove("hidden-stats");

        pricemultiplier.classList.add("hidden-stats")
        offlinemultiplier.classList.add("hidden-stats")
        totalClicks.classList.add("hidden-stats")
        totalPoints.classList.add("hidden-stats")
    }
    if (stat === 2) {
        coincount.classList.add("hidden-stats")
        EvolutionLevel.classList.add("hidden-stats")
        ClickPower.classList.add("hidden-stats")
        AutoPower.classList.add("hidden-stats")

        pricemultiplier.classList.remove("hidden-stats")
        offlinemultiplier.classList.remove("hidden-stats")
        totalClicks.classList.remove("hidden-stats")
        totalPoints.classList.remove("hidden-stats")
    }

    updateProgressBar() 
}



const popupNCElement = document.getElementById("popupNC")


function priceChanges() { //function is only for things bought by points

    if (priceMultiplier <= 0.1) {
        priceMultiplier = 0.1
    }

    powerprice = Math.round(15 * powerupgrades + increasePower);
    powerprice = Math.round(powerprice * priceMultiplier);
    powerprice = Math.round(powerprice / 1) * 1;

    autoprice = Math.round(10 * autoupgrades + increaseAuto);
    autoprice = Math.round(autoprice * priceMultiplier);
    autoprice = Math.round(autoprice / 5) * 5;

    if (permapower === 0) {
        permaprice = 2500 * priceMultiplier;
        permaprice = Math.round(permaprice * priceMultiplier);
        permaprice = Math.round(permaprice / 500) * 500;
  
    } else if (permaprice !== null) {
        permaprice = permapower * increasePerma;
        permaprice = Math.round(permaprice * priceMultiplier);
        permaprice = Math.round(permaprice / 500) * 500;
    }

    if (permapower === 20) {
        permaprice = null;
    }


    if (tempevoCost !== null) {
        evoCost = tempevoCost;
    } else {
        evoCost = Math.round(evolveLVL * increaseEvolve * priceMultiplier / 100) * 100;
        if (evolveLVL === 0) {
            evoCost = 750 * priceMultiplier;
        }
    }
    evoCost = Math.round(evoCost / 250) * 250;

 
            mysteryprice = 1000 + ((clicks - 1000) * 0.75);
            if (clicks <= 1000) {
                mysteryprice = 1000;
            }
            
        

    if (mgBought === maxMGperEvo) {
        mysteryprice = null;
    }

    UpdateUI();
}

circle.onclick = function(){
    clicks += power * clicksMultiplier;
    allTimePoints += power * clicksMultiplier
    timesClicked ++;
    allTimeClicks ++;
    Math.round(clicks);
    neededClicks = newCoin-timesClicked

    if (timesClicked == (newCoin)) {
        coins += 1;
        timesClicked = 0;
        newCoin = Math.floor(Math.random() * coinneeded) + 1; 
        neededClicks = newCoin - timesClicked
         popupNCElement.innerText = "+1 Coin!"
        setTimeout(() => {
            popupNCElement.innerText = ""
        }, 2000);
    }

    priceChanges();
    UpdateUI();
}

function updateProgressBar() {
  
  if (endGoalReached === false) {
    const percentage = Math.min((clicks / endgamePoints) * 100, 100);
  document.getElementById("progress-bar").style.width = percentage + "%";
  document.getElementById("progress-text").innerHTML =  "Goal: 2.500.000 --- " +  `${Math.floor(percentage)}%`;
  }
  if (endGoalReached === true) {
  document.getElementById("progress-bar").style.width = "100%";
  document.getElementById("progress-text").innerHTML =  "Goal reached (-0.5 pricemultiplier activated)";  
  }
} 

    

powerupgrade.onclick = function(){
        if (clicks >= powerprice) {
            clicks -= powerprice;
            powerupgrades += 1;
            power += 1 * evopower
            increasePower *= 1.2;

            CurrentClickPower = power;
            CurrentAutoPower = autopower;
  
            priceChanges();
            UpdateUI();
        }
        else {
            return
        }
    }



autoupgrade.onclick = function() {
    
        if (clicks >= autoprice) {
            clicks -= autoprice;
            autoupgrades += 1;
            autopower += 1 * evopower
            increaseAuto *= 1.2;

            CurrentClickPower = power;
            CurrentAutoPower = autopower;

            priceChanges();
            UpdateUI();
            updateAuto();
        }
    }


permanentupgrade.onclick = function() {
    if (permaprice !== null) {
        if (clicks >= permaprice) {
            clicks -= permaprice;
            permapower ++;
            increasePerma *= 1.35;

            clicksMultiplier += 0.075

            if (permapower === 20) {
                permaprice = null;
            }

            priceChanges();            
            UpdateUI();
        }
    }
}





//Mysterygift function
mysterygift.onclick = function() {
    if (mgBought === maxMGperEvo) {
        return
    }
    else if (clicks >= mysteryprice) {
        mystery = Math.random() * 2;
        mgBought += 1;
        if (mystery < 0.4) {
            clicks *= 2;
            rewardMessage = "Points Doubled!";
        } 
        else if (mystery <0.7){
            clicks -= mysteryprice;
            clicks = Math.round(clicks /= 3);
            rewardMessage = "Great loss!";
        }
        else if (mystery <0.9) {
            clicks -= mysteryprice
            rewardMessage = "No reward";
        }
         else if (mystery <1.1) {
            rewardMessage = "A free evolution!";
            tempevoCost = 0;
        }
        else if (mystery <1.4) {
            rewardMessage = "Reward broken (No Reward - no MG usage!)";
            mgBought -= 1
            return
            clicks -= mysteryprice;
            clicksMultiplier += 1;
            setTimeout(() => {
            clicksMultiplier -=1;
        }, 60000);
        }
        else if (mystery <1.7) {
            rewardMessage = "Reward broken (No Reward - no MG usage!)";
            mgBought -= 1
            return
            clicks -= mysteryprice;
            quartered = true; //NOT IMPLEMENTED YET
            setTimeout(() => {
                quartered = false;
            }, 600000);
        }
        else if (mystery <2) {
            rewardMessage = "Reward WIP (No Reward - no MG usage!)";
            mgBought -= 1
        }

        setTimeout(() => {
            rewardMessage = ""
        }, 2500);

        if (maxMGperEvo === mgBought) {
            mysteryprice = null;
        }
        UpdateUI();
        saveGame();
        priceChanges();
        
    }
}




function endgame() {
    if (endGoalReached === false && clicks >= 2500000) {
 
        priceMultiplier -= 0.5;
        if (priceMultiplier <= 0.1) {
            priceMultiplier = 0.1;
        }

        endGoalReached = true;
        priceChanges();
        UpdateUI();

    }
}

evolve.onclick = function() {
        let actualEvoCost;
        let isFreeEvolution = false;

        if (tempevoCost !== null) {
            actualEvoCost = tempevoCost;
            isFreeEvolution = (tempevoCost === 0);
        } else {
            actualEvoCost = Math.round(evolveLVL * increaseEvolve * priceMultiplier / 100) * 100;
        }

        if (clicks >= actualEvoCost || isFreeEvolution) {
            if (!isFreeEvolution) {
                clicks -= actualEvoCost;
            }

            evolveLVL++;
            evopower = evolveLVL + 1;
            CurrentEvolutionLevel = evolveLVL;
            updateRank();

            power = Math.round(powerupgrades * evopower * (1-evoloss)) + (1 * evopower);
            autopower = Math.round(autoupgrades * evopower * (1-evoloss)) + (1*evopower);

            clicks -= Math.round(clicks * evoloss);

            increaseEvolve *= 1.4   ;
            increasePower = 1;
            increaseAuto = 100;

            powerupgrades = 0;
            autoupgrades = 0;

            mgBought = 0; 

            tempevoCost = null;

            CurrentClickPower = power;
            CurrentAutoPower = autopower;

            multiplier2 += 0.025
            priceMultiplier -= 0.025
            clicksMultiplier += 0.025

            priceChanges();
            UpdateUI();
            startautoclick();
        } else {
            return;
        }
    }


let rank1Reached = false;
let rank2Reached = false;
let rank3Reached = false;
let rank4Reached = false;
let rank5Reached = false;


const exchangeMessage = document.getElementById("exchangeMessage")
let exchangedPoints

RPexchange.onclick = function() {
    if (rankPoints >= ExchangeCost) {
        rankPoints -= ExchangeCost;

        exchangedPoints = clicks * 0.01;
        allTimePoints += clicks * 0.01;
        clicks += clicks * 0.01;

        exchangeMessage.innerText = "You bought " + formatNumber(Math.round(exchangedPoints)) + " points!"

        exchangedPoints = null

        setTimeout(() => {
        exchangeMessage.innerText = "" 
        }, 3000);

        UpdateUI();
        priceChanges();
    }
}

function updateRank() {
    if (evolveLVL >= 0) {
        rank = "Your rank: Wood";
    }
    if (evolveLVL === 3 && rank1Reached === false) {
        rank = "Your rank: Bronze";
        priceMultiplier -= 0.05;
            if (priceMultiplier <= 0.1) {
                priceMultiplier = 0.1;
            }
            clicksMultiplier += 0.1;
            RPpS += 0.25
            multiplier2 += 0.05
            rank1Reached = true;
    }
    if (evolveLVL === 5 && rank2Reached === false) {
        rank = "Your rank: Iron";
        priceMultiplier -= 0.1;
                    if (priceMultiplier <= 0.1) {
                priceMultiplier = 0.1;
            }
            clicksMultiplier += 0.15;
            RPpS += 0.75
            multiplier2 += 0.15
            rank2Reached = true;
    }
    if (evolveLVL === 10 && rank3Reached === false) {
        rank = "Your rank: Gold";
        priceMultiplier -= 0.15;
                if (priceMultiplier <= 0.1) {
                priceMultiplier = 0.1;
            }
            clicksMultiplier += 0.35;
            RPpS += 1.5
            multiplier2 += 0.2
            rank3Reached = true;
    }
    if (evolveLVL === 15 && rank4Reached === false) {
        rank = "Your rank: Platinum";
        priceMultiplier -= 0.1;
                if (priceMultiplier <= 0.1) {
                priceMultiplier = 0.1;
            }
            clicksMultiplier += 0.2;
            RPpS += 7.5
            multiplier2 += 0.1;
            rank4Reached = true;        
    }
    if (evolveLVL === 25 && rank5Reached === false) {
        priceMultiplier -= 0.1;
                if (priceMultiplier <= 0.1) {
            priceMultiplier = 0.1;   
    }
            clicksMultiplier += 0.45   ;
            multiplier2 += 0.25;
            rank5Reached = true;           
        UpdateUI();
    }
}

function updateAuto() {
        clicks += autopower * clicksMultiplier;
        allTimePoints += autopower * clicksMultiplier
        clicks = Math.round(clicks);


        if (CoinACbought === true) {
            timesClicked += 1;
            neededClicks = newCoin-timesClicked
     
            if (timesClicked == (newCoin)) {
                coins += 1;
                timesClicked = 0;
                newCoin = Math.floor(Math.random() * 500) + 1; 
                neededClicks = newCoin - timesClicked
                popupNCElement.innerText = "+1 Coin!"
                setTimeout(() => {
                    popupNCElement.innerText = ""
                }, 2000);
            }
        }

    UpdateUI();
    priceChanges
}

function giveRankPoints() {
    rankPoints += RPpS;
    UpdateUI();
}

//shopspecial

ELMButton.onclick = function() {
    if (ELMcost === null) {
        return; 
    }

    if (coins >= ELMcost) {
        coins -= ELMcost;
        evoloss -= 0.1;
        ELMcost += 1;

        UpdateUI ();

        if (ELMcost >= 6) {
            ELMcost = null;
        }
    }
    else {
        return
    }
}


autotimeButton.onclick = function() {
    if (autotimerCost === null) {
        return;
    }

    if (coins >= autotimerCost) {
        coins -= autotimerCost;
        autoclick -= 50;
        autotimerCost += 2;

        startautoclick();
        UpdateUI();

        if (autoclick <= 350) {
            autotimerCost = null;
            autoclick = 333;
        }
    }
    else {
        return
    }
}

mysterypriceButton.onclick = function() { //old variable name but still works 
    if (reduceMysterycost === null) {
        return; 
    }

    if (coins >= reduceMysterycost) {  //old variable name but still works
    coins -= reduceMysterycost; //old variable name but still works
    reduceMysterycost += 5 //old variable name but still works
    maxMGperEvo += 1
    }

    if (maxMGperEvo === 4) {
        reduceMysterycost = null; //old variable name but still works
    }
     UpdateUI(); 
     priceChanges();  
}



//rankshop



CoinAC.onclick = function() {
    if (rankPoints >= CoinACcost) {
        rankPoints -= CoinACcost;
        CoinACbought = true;
        CoinACcost = null;
    }
    UpdateUI();
}


Offline.onclick = function() {
    if (rankPoints >= Offlinecost) {
        rankPoints -= Offlinecost;
        Offlinebought = true;
        Offlinecost = null;
    }
}

CN.onclick = function () {
    if (rankPoints >= CNneededcost) {
        rankPoints -= CNneededcost;
        coinneeded -= 50;
        CNneededcost += 250;
        if (coinneeded <= 200) {
            CNneededcost = null;
        }
    }
}




//upgtoggle

upgtoggle.onclick = function() {
    if (toggle === 1) {
        toggle = 2; 
        isSpecialShop = true;
        isRankShop = false; 
    } else if (toggle === 2) {
        toggle = 3; 
        isSpecialShop = false; 
        isRankShop = true;
    } else if (toggle === 3) {
        toggle = 1; 
        isSpecialShop = false; 
        isRankShop = false;
    }
    if (isSpecialShop) {
        normalUpgradesContainer.classList.add('hidden-upgrades');
        specialUpgradesContainer.classList.remove('hidden-upgrades');
        document.getElementById('rank-upgrades').classList.add('hidden-upgrades'); 
    } else if (isRankShop) {
        normalUpgradesContainer.classList.add('hidden-upgrades');
        specialUpgradesContainer.classList.add('hidden-upgrades');
        document.getElementById('rank-upgrades').classList.remove('hidden-upgrades'); 
    } else { 
        normalUpgradesContainer.classList.remove('hidden-upgrades');
        specialUpgradesContainer.classList.add('hidden-upgrades');
        document.getElementById('rank-upgrades').classList.add('hidden-upgrades'); 
    }
    UpdateUI();
};

//stat-toggle

toggleStats.onclick = function() {
    if (stat === 1) {
        stat = 2
    }
    else if (stat === 2) {
        stat = 1
    }

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
        permapower,
        permaprice,
        power,
        powerprice,
        evoCost,
        newCoin,
        timesClicked,
        tempevoCost,
        rank,
        autopower,
        autoupgrade,
        autoprice,
        mysteryprice,
        mystery,
        powerupgrades,
        autoupgrades,
        CurrentClickPower,
        CurrentAutoPower,
        CurrentEvolutionLevel,
        priceMultiplier,
        autoSaveToggle,
        coins,
        evoloss,
        ELMcost,
        autoclick,
        autotimerCost,
        reduceMysterycost,
        mgBought,
        maxMGperEvo,
        CNneededcost,
        endGoalReached,
        clicksMultiplier,
        rankPoints,
        RPpS,
        rank1Reached,
        rank2Reached,
        rank3Reached,
        rank4Reached,
        rank5Reached,
        Offlinebought,
        Offlinecost,
        coinneeded,
        CoinACbought,
        allTimeClicks,
        allTimePoints,
        multiplier2,
        quartered,
        lastPlayedTime: Date.now()
    };
    localStorage.setItem("GameState", JSON.stringify(gameState));
    autosaveMessageFlag = 1;
    autosaveMessage();
}

function FirstLoadGame() {
    const savedGameState = localStorage.getItem("GameState");
    

    if (savedGameState) {
        loadGame();
        UpdateUI();
    }
    else {
        return;
    }
}

const loadconfirmed = false

function loadGame() {
    let loadconfirmed = true;

    if (!firstload) {
        loadconfirmed = confirm("Are you sure you want to load your save?");
    }

    const savedGameState = localStorage.getItem("GameState");

 
    if (savedGameState && (loadconfirmed || firstload)) {
        const gameState = JSON.parse(savedGameState);

        evoloss = gameState.evoloss;
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
        tempevoCost = gameState.tempevoCost;
        CNneededcost = gameState.CNneededcost;
        rank = gameState.rank;
        autopower = gameState.autopower;
        autoprice = gameState.autoprice;
        mystery = gameState.mystery;
        mysteryprice = gameState.mysteryprice;
        powerupgrades = gameState.powerupgrades;
        autoupgrades = gameState.autoupgrades;
        CurrentClickPower = gameState.CurrentClickPower;
        CurrentAutoPower = gameState.CurrentAutoPower;
        CurrentEvolutionLevel = gameState.CurrentEvolutionLevel;
        priceMultiplier = gameState.priceMultiplier;
        autoSaveToggle = gameState.autoSaveToggle;
        evopower = evolveLVL + 1;
        rankPoints = gameState.rankPoints;
        RPpS = gameState.RPpS;
        clicksMultiplier = gameState.clicksMultiplier;
        coins = gameState.coins;
        newCoin = gameState.newCoin;
        timesClicked = gameState.timesClicked;
        isSpecialShop = false; 
        isRankShop = false;
        ELMcost = gameState.ELMcost;
        autoclick = gameState.autoclick;
        mgBought = gameState.mgBought;
        maxMGperEvo = gameState.maxMGperEvo;
        autotimerCost = gameState.autotimerCost;
        CoinACbought= gameState.CoinACbought;
        reduceMysterycost = gameState.reduceMysterycost;
        endGoalReached = gameState.endGoalReached;
        rank1Reached = gameState.rank1Reached;
        rank2Reached = gameState.rank2Reached;
        rank3Reached = gameState.rank3Reached;
        rank4Reached = gameState.rank4Reached
        rank5Reached = gameState.rank5Reached
        Offlinecost = gameState.Offlinecost;
        Offlinebought = gameState.Offlinebought;
        coinneeded = gameState.coinneeded;
        allTimeClicks = gameState.allTimeClicks;
        allTimePoints = gameState.allTimePoints;
        multiplier2 = gameState.multiplier2;
        quartered = gameState.quartered;
        lastPlayedTime = gameState.lastPlayedTime || null;


        if (mgBought === maxMGperEvo) {
            mysteryprice = null;
        }

        neededClicks = newCoin - timesClicked;
        firstload = false; 
        ExchangeCost = 4;

        startautoclick();
        startrankpoints();
        updateRank();
        UpdateUI();
    } else {
        if (!firstload) {
            alert("No save loaded!");
        }
    }
}




function resetGame() {
    const resetconfirmed = confirm("Are you sure you want to reset the game?");
    
    if (resetconfirmed) {
        clicks = 0;
        increasePower = 1;
        increaseAuto = 100;
        increaseEvolve = 500;
        increasePerma = 2500;
        evolveLVL = 0;
        evopower = 1;
        permapower = 0;
        permaprice = 2500;
        priceMultiplier = 1; 
        power = 1 ;
        powerprice = 1;
        evoCost = 750;
        tempevoCost = null;
        evoloss = 1
        autopower = 0 ;
        autoprice = 100 ;
        mysteryprice = 1000
        mystery = Math.random();
        powerupgrades = 0;
        CNneededcost = 500;
        autoupgrades = 0;
        CurrentClickPower = power;
        CurrentAutoPower = autopower;
        CurrentEvolutionLevel = evolveLVL;
        coins = 0;
        isSpecialShop = false;
        ELMcost = 1;
        autoclick = 750;
        autotimerCost = 3;
        newCoin = 350
        timesClicked = 0;
        reduceMysterycost = 10;
        mgBought = 0;
        maxMGperEvo = 1;
        endGoalReached = false;
        neededClicks = newCoin-timesClicked
        clicksMultiplier = 1;
        RPpS = 0;
        rankPoints = 0;
        rank1Reached = false;
        rank2Reached = false;
        rank3Reached = false;
        rank4Reached = false;
        rank5Reached = false;
        Offlinecost = 250;
        CoinACcost = 3000;
        CoinACbought = false;
        Offlinebought = false; 
        lastPlayedTime = null
        coinneeded = 500;
        stat = 1;
        allTimeClicks = 0;
        allTimePoints = 0;
        multiplier2 = 1;
        ExchangeCost = 4;
        quartered = false;
        localStorage.removeItem("GameState");


        startautoclick();
        startrankpoints();
        updateRank();
        UpdateUI();
        setInterval (endgame, 1000);
    } else {
        return;
    }
}


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


let autoclicktime;

function startautoclick() {
    if (autoclicktime) {
        clearInterval (autoclicktime)
    }
    autoclicktime = setInterval (updateAuto, autoclick);
};

let autorankpoints

function startrankpoints() {
    if (autorankpoints) {
        clearInterval (autorankpoints)
    }
    autorankpoints = setInterval (giveRankPoints, 1000);
}

const Backmessage = document.getElementById("backmessage");
    

function OfflineProgress() {
    if (lastPlayedTime) {
        if (Offlinebought === true) {
        const currentTime = Date.now();
        let timeElapsedMs = currentTime - lastPlayedTime;

        const timeElapsedS = timeElapsedMs / 1000;

        const autoClicksPerSecondRate = autoclick > 0 ? (1000 / autoclick) : 0;
        const clicksGainedOffline = autopower * autoClicksPerSecondRate * clicksMultiplier * timeElapsedS * multiplier2;
        clicks += Math.round(clicksGainedOffline); 
        totalClicks += Math.round(clicksGainedOffline)

        Backmessage.innerHTML = "Welcome back! You gained<br> " + formatNumber(Math.round((clicksGainedOffline))) + " clicks!"

            UpdateUI();
            endgame();


        setTimeout(() => {
        Backmessage.innerHTML = ""
        }, 5000);
    }   
    }
}


const showChangeLogsButton = document.getElementById("showChangeLogs");

if (showChangeLogsButton) {
    showChangeLogsButton.addEventListener("click", function () {
        const changelogPopup = document.getElementById("changelogPopup");
        if (changelogPopup) {
            changelogPopup.style.display = "block";
        }
    });
}




setInterval (endgame, 1000);
startautoclick();
startrankpoints();
autosave();
FirstLoadGame();
OfflineProgress(); 
updateRank();
UpdateUI();
