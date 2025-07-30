function formatNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return ""; 
    }
    return num.toLocaleString('de-DE');
}

const largePopUps = document.getElementById("large-pop-ups") //name should be changed - but stops people from clicking elsewhere


//offline > online
let lastPlayedTime = null;
let firstload = true;

//X
let clicks = 0;
const circle = document.getElementById("circle");

let evoloss = 1;
let ELMcost = 1;

let evolossBought = 0;


let mayEvolve = true;
let noEVOallowedReason = "";

let evolutionReached = new Set();


let ExchangeCost = 20;

//multipliers
let priceMultiplier = 1; 
let clicksMultiplier = 1;
let autoMultiplier = 1;
let coinMultiplier = 1;

let increasePower = 1;
let increaseAuto = 50;
let increaseEvolve = 500;
let increasePerma = 2500;

let evolveLVL = 0;
let evopower = evolveLVL + 1;
const evolve = document.getElementById("evolve");
let freeEvosAllowed = 0;


//permapower
let permapower = 0;
let maxPermaPower = 0
let totalPermaClicksBonus = 0

const permaprice = {
  1: 1250,
  2: 1500,
  3: 1750,
  4: 7000,
  5: 7500,
  6: 85000,
  7: 95000,
  8: 100000,
  9: 500000,
  10: 575000,
  11: 650000,
  12: 750000,
  13: 1275000,
  14: 1925000,
  15: 2900000,
  16: 4300000,
  17: 6500000,
  18: 9700000,
  19: 14500000,
  20: 22000000
}


let power = 1 * evopower 
const powerupgrade = document.getElementById("powerupgrade");

let powerprice = 1;

//evolution variables
let evoCost = 750;
let tempevoCost = null
let specialty = null;



let totalAutoclickTimeReductionBonus = 0;
let autoclick = 750;
let autotimerCost = 3;

let reduceMysterycost = 10;


let rank = "Your rank: Loading";
let RPpS = 0;

let autopower = 0 * evopower 
const autoupgrade = document.getElementById("autoupgrade")

let autoprice = 50;

//coin variables
let coins = 0;
let coinneeded = 400;
let newCoin = 350
let timesClicked = 0;
let neededClicks = newCoin-timesClicked


//mystery variables
let mysteryprice = 1000 + (clicks * 0.75);
let mystery = Math.random();
let rewardMessage = "";
let mgBought = 0 
let maxMGperEvo = 1
let maxMGupgradesBought = 0;


//upgrade-count variables
let powerupgrades = 0;
let autoupgrades = 0;



// *power variables*
let CurrentClickPower = power
let CurrentAutoPower = autopower 

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
let Offlinecost = 750;
let CNneededcost = 500;

// *stat variables*
let stat = 1;
let multiplier2 = 0.25; //offlinemultiplier 
let maxOffTime = 14400
let allTimeClicks = 0;
let allTimePoints = 0;

// rommel
let quartered = false;
let plusOneMultiplier = false;


const normalUpgradesContainer = document.getElementById('normal-upgrades');
const specialUpgradesContainer = document.getElementById('special-upgrades');
const rankUpgradesContainer = document.getElementById("rank-upgrades")

const ELMButton = document.getElementById('ELM');
const autotimeButton = document.getElementById('autotime');
const mysterypriceButton = document.getElementById('mysteryprice');

const toggleStats = document.getElementById("toggleStats")




function UpdateUI() {
    const pointValueElement = document.getElementById("pointValue");
    if (pointValueElement) {
        if (toggle === 1 || toggle === 2 || toggle === 3 && evolveLVL < 8) {
            pointValueElement.innerText = "Points: " + formatNumber(Math.round(clicks));
        } else if (toggle === 3 ) { 
        pointValueElement.innerHTML = "Rankpoints (" + (RPpS) + "): <br>" +  formatNumber(rankPoints);
        }
    }

    const upgradeCostElement = document.getElementById("upgradeCost");
    if (upgradeCostElement) {
        upgradeCostElement.innerText = formatNumber(powerprice);
    }
    const evoCostElement = document.getElementById("evoCost");
  if (evoCostElement) {
    evoCostElement.innerText = "Evolve: " + formatNumber(tempevoCost !== null ? tempevoCost : evoCost);
  } 
  if (evoCostElement && mayEvolve === false) {
    evoCostElement.innerText = "Evolving is not allowed: " + (noEVOallowedReason);
  }


const currentClickPowerElement = document.getElementById("CurrentClickPower");
if (currentClickPowerElement) {
    const percentageValue = (clicksMultiplier * 100).toFixed(1);
    currentClickPowerElement.innerText = formatNumber(Math.round(CurrentClickPower)) + " (*" + percentageValue + "%)";
}

const currentAutoPowerElement = document.getElementById("CurrentAutoPower");
if (currentAutoPowerElement) {
    const percentageValue = (autoMultiplier * 100).toFixed(1);
    currentAutoPowerElement.innerText = formatNumber(Math.round(CurrentAutoPower)) + " (*" + percentageValue + "%)" + " - " + (autoclick) + "ms";
}

    const currentEvolutionLevelElement = document.getElementById("CurrentEvolutionLevel");
    if (currentEvolutionLevelElement) {
        currentEvolutionLevelElement.innerText = formatNumber(evolveLVL) + " - evoloss: " + Math.round(evoloss *100) + "%";
    }




    const currentRankElement = document.getElementById("currentRank");
    if (currentRankElement) {
        currentRankElement.innerText = rank;
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
    const evolutionLevelElement = document.getElementById("evolutionLevel");
    if (evolutionLevelElement) {
        evolutionLevelElement.innerText = formatNumber(evolveLVL);
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
            offlinemultiplierstat.innerText = formatNumber(Number((multiplier2 * 100).toFixed(1))) + "%" + " - max time: " + (maxOffTime / 3600) + " hours";
        }

    const coinElement = document.getElementById("coins");
    if (coinElement) {
        coinElement.innerText = formatNumber(Math.round(coins)) + " - next coin: " + (neededClicks) + " (*" + (coinMultiplier) + ")";
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
        if (evolveLVL < 1) {
            autoupgradeButton.classList.add("buyoff");
            autoupgrade.innerText = "Autopower unlocks after evolution 1"
        } 
        if (clicks < autoprice && evolveLVL >= 1) {
        autoupgradeButton.classList.add("buyoff");   
            autoupgrade.innerText = "Autopower: " + formatNumber(autoprice)           
        }
        if (clicks >= autoprice && evolveLVL >= 1) {
            autoupgradeButton.classList.remove("buyoff");   
            autoupgrade.innerText = "Autopower: " + formatNumber(autoprice)
        }
    }


const permanentupgradeButton = document.getElementById("permanentupgrade");
if (permanentupgradeButton) {
    const currentPermapowerPrice = permaprice[permapower + 1];

    if (evolveLVL < 3) {
        permanentupgradeButton.classList.add("buyoff");
        permanentupgradeButton.classList.remove("completed");
        permanentupgrade.innerText = "Permapower unlocks after evolution 3";
    }

    else if (currentPermapowerPrice !== undefined && currentPermapowerPrice !== null) { 
        if (clicks < currentPermapowerPrice && evolveLVL >= 3) {
            permanentupgradeButton.classList.add("buyoff");
            permanentupgradeButton.classList.remove("completed");
            permanentupgrade.innerText = "Permapower (" + (maxPermaPower - permapower) + " left): " + formatNumber(currentPermapowerPrice);
        } else if (clicks >= currentPermapowerPrice && evolveLVL >= 3) {
            permanentupgradeButton.classList.remove("buyoff");
            permanentupgradeButton.classList.remove("completed");
            permanentupgrade.innerText = "Permapower (" + (maxPermaPower - permapower) + " left): " + formatNumber(currentPermapowerPrice);
        }
    }

    if (permapower === 20) {
        permanentupgradeButton.classList.remove("buyoff");
        permanentupgradeButton.classList.add("completed");
        permanentupgrade.innerText = "Permapower: MAXED ";
    }
    else if (permapower === maxPermaPower && evolveLVL >= 3) { 
        permanentupgradeButton.classList.remove("buyoff");
        permanentupgradeButton.classList.add("completed");
        permanentupgrade.innerText = "Unlock more permapower upon reaching the next rank ";
    }
}








    const evolveButton = document.getElementById("evolve");
    if (evolveButton) {
        const effectiveEvoCost = (tempevoCost !== null) ? tempevoCost : evoCost;

        if (clicks >= effectiveEvoCost && mayEvolve === true) {
            evolveButton.classList.remove("buyoff");
        } else {
            evolveButton.classList.add("buyoff");
        }
    }


    //mysterygift
    const mysterygiftButton = document.getElementById("mysterygift");
    if (mysterygiftButton) {
        if (evolveLVL <2) {
             mysterygiftButton.classList.add("buyoff");
            mysterygift.innerText = "Mystery gifts unlocks after evolution 2"
        }
        if (evolveLVL >= 2) {           
            if (mgBought >= maxMGperEvo) {
                mysterygiftButton.classList.add("out-of-stock");
                mysterygiftButton.classList.remove("buyoff");
                 mysterygift.innerText = "Mystery gift: Out of stock" 

            } else { 
                mysterygiftButton.classList.remove("out-of-stock");


                if (clicks < mysteryprice) {
                    mysterygiftButton.classList.add("buyoff");
                    mysterygift.innerText = "Mystery gift: " + formatNumber(Math.round(mysteryprice))
                } else {
                    mysterygiftButton.classList.remove("buyoff");
                    mysterygift.innerText = "Mystery gift: " + formatNumber(Math.round(mysteryprice))
                }
            }
        }            
        }


    const mgleftnotifier = document.getElementById("mg-left");
    if (mgleftnotifier) {
        mgleftnotifier.innerText = "(" + (maxMGperEvo - mgBought) + " left)"
    }

    //special upgrades

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
        mysterypriceButton.innerText = (reduceMysterycost === null) ? "Increase max mystergifts per evo price: MAX" : "Increase max mystergifts per evo: " + formatNumber(reduceMysterycost) + " coins";
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
    } else if (evolveLVL >= 3 && evolveLVL < 5 && specialty === null) { 
        rank = "Your rank: Bronze" + " - Speciality: not chosen" ;
        currentRankElement.classList.remove(...RANK_CLASSES);
        currentRankElement.classList.add('bronze');
    }   else if (evolveLVL >= 3 && evolveLVL < 5 && specialty !== null) { 
        rank = "Your rank: Bronze" + " - Speciality: " + (specialty);
        currentRankElement.classList.remove(...RANK_CLASSES);
        currentRankElement.classList.add('bronze');
    } else if (evolveLVL >= 5 && evolveLVL < 10) { 
        rank = "Your rank: Iron" + " - Speciality: " + (specialty); 
        currentRankElement.classList.remove(...RANK_CLASSES);
        currentRankElement.classList.add('iron'); 
    } else if (evolveLVL >= 10 && evolveLVL < 15) {
        rank = "Your rank: Gold" + " - Speciality: " + (specialty);
        currentRankElement.classList.remove(...RANK_CLASSES);
        currentRankElement.classList.add('gold');
    } else if (evolveLVL >= 15 && evolveLVL < 25) {
        rank = "Your rank: Platinum" + " - Speciality: " + (specialty);
        currentRankElement.classList.remove(...RANK_CLASSES);
        currentRankElement.classList.add('platinum');
    } else if (evolveLVL >= 25) {
        rank = "Your rank: Champion" + " - Speciality: " + (specialty);
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

    const btnNormal = document.getElementById('btnNormal');

    const btnSpecial = document.getElementById('btnSpecial');
    if (evolveLVL < 4 && specialty !== "clicker" || evolveLVL < 3 && specialty === "clicker") {
        btnSpecial.classList.add("buyoff")
        btnSpecial.innerText = "Unlocks after evo-  4"
    } if (evolveLVL >= 4 && specialty !== "clicker" || evolveLVL >= 3 && specialty === "clicker") {
        btnSpecial.classList.remove("buyoff")
        btnSpecial.innerText = "Coin Shop"
    }

    const btnRank = document.getElementById('btnRank');
    if (evolveLVL < 8) {
        btnRank.classList.add("buyoff")
         btnRank.innerText = "Unlocks after evo- 8"
    } if (evolveLVL >= 8) {
        btnRank.classList.remove("buyoff")
        btnRank.innerText = "Rank shop"
    }

    updateProgressBar() 
}



const popupNCElement = document.getElementById("popupNC")


function applyTieredRounding(rawCost) {
    let roundingFactor;

    if (rawCost < 10000) {
        roundingFactor = 250;
    } else if (rawCost >= 10000 && rawCost < 75000) {
        roundingFactor = 1000
    } else if (rawCost >= 75000 && rawCost < 250000) {
        roundingFactor = 5000;
    } else if (rawCost >= 250000 && rawCost < 2500000) {
        roundingFactor = 25000;
    } else if (rawCost >= 2500000 && rawCost < 10000000) {
        roundingFactor = 100000;
    } else {
        roundingFactor = 500000
    }

    return Math.round(rawCost / roundingFactor) * roundingFactor;
}


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



    if (freeEvosAllowed !== 0 && tempevoCost === null) {
        tempevoCost = 0;
        freeEvosAllowed --;
    }
        if (tempevoCost !== null) {
            evoCost = tempevoCost;
        } else {
            evoCost = (evolveLVL * increaseEvolve * priceMultiplier)
            if (evolveLVL === 0) {
                evoCost = 750 * priceMultiplier;
            }
        }

    evoCost = applyTieredRounding(evoCost);

    if (clicks < 1000) {
        mysteryprice = 1000;
    } else {
        let baseMysteryPrice = 1000 + ((clicks - 1000) * 0.75);
        if (clicks <= 1000) {
            baseMysteryPrice = 1000;
        }

        mysteryprice = applyTieredRounding(baseMysteryPrice);

        if (mysteryprice > clicks) {
            let roundingFactor = 500000;

            if (clicks < 10000) {
                roundingFactor = 250;
            } else if (clicks >= 10000 && clicks < 75000) {
                roundingFactor = 1000;
            } else if (clicks >= 75000 && clicks < 250000) {
                roundingFactor = 5000;
            } else if (clicks >= 250000 && clicks < 2500000) {
                roundingFactor = 25000;
            } else if (clicks >= 2500000 && clicks < 10000000) {
                roundingFactor = 100000;
            } else {
                roundingFactor = 500000;
            }
            
            mysteryprice = Math.floor(clicks / roundingFactor) * roundingFactor;
            
            if (mysteryprice < 0) {
                mysteryprice = 0;
            }
        }
    }
       
        

    if (mgBought === maxMGperEvo) {
        mysteryprice = null;
    }

    if (evolveLVL === 0 && allTimeClicks < 200) {
        mayEvolve = false;
        noEVOallowedReason = "All-time clicks need to be above 200!";
    }
    else if (evolveLVL === 3 && specialty === null) {
        mayEvolve = false;
        noEVOallowedReason = "Choose a specialty!";
    } else if (evolveLVL === 8 && allTimePoints < 150000) {
        mayEvolve = false;
        noEVOallowedReason = "All-time points need to be above 150.000!";
    } else if (evolveLVL === 19 && permapower < 5) {
        mayEvolve = false;
        noEVOallowedReason = "You need atleast permapower lvl 5! - current level: " + (permapower);
    }
    else {
        mayEvolve = true;
        noEVOallowedReason = "";
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
        coins += coinMultiplier * 1;
        timesClicked = 0;
        newCoin = Math.floor(Math.random() * coinneeded) + 1; 
        neededClicks = newCoin - timesClicked
        popupNCElement.innerText = "New Coin(s)!"
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
  document.getElementById("progress-text").innerHTML =  "Goal: 2.500.000 --- " +  `${percentage.toFixed(2)}%`;
  }
  if (endGoalReached === true) {
  document.getElementById("progress-bar").style.width = "100%";
  document.getElementById("progress-text").innerHTML =  "Goal reached (-0.5 pricemultiplier activated)";  
  }
  
  //
  const progressBarRanks = document.getElementById("progress-bar-RANKS")
  const progressTextRanks = document.getElementById("progress-text-RANKS")


  if (evolveLVL === 0) {
     progressBarRanks.style.width = "0%"
     progressTextRanks.innerText = "Next rank: Bronze (0%)"
  }

  else if (evolveLVL <3 && evolveLVL !== 0) {
    progressBarRanks.style.width = (evolveLVL / 3 * 100) + "%"
    progressTextRanks.innerText = "Next rank: Bronze " + formatNumber(Math.round(evolveLVL / 3 * 100)) + "%"
  }
  else if (evolveLVL <5) {
    progressBarRanks.style.width = ((evolveLVL - 3) / 2 * 100) + "%"
    progressTextRanks.innerText = "Next rank: Iron " + formatNumber(Math.round((evolveLVL - 3) / 2 * 100)) + "%"
  }
  else if (evolveLVL <10) {
    progressBarRanks.style.width = ((evolveLVL - 5) / 5 * 100) + "%"
    progressTextRanks.innerText = "Next rank: Gold " + formatNumber(Math.round((evolveLVL - 5) / 5 * 100)) + "%"
  }
  else if (evolveLVL <15) {
    progressBarRanks.style.width = ((evolveLVL - 10) / 5 * 100) + "%"
    progressTextRanks.innerText = "Next rank: Platinum " + formatNumber(Math.round((evolveLVL - 10) / 5 * 100)) + "%"
  }
  else if (evolveLVL <25) {
    progressBarRanks.style.width = ((evolveLVL - 15) / 10 * 100) + "%"
    progressTextRanks.innerText = "Next rank: [REDACTED] " + formatNumber(Math.round((evolveLVL - 15) / 10 * 100)) + "%"
  } 
  else if (evolveLVL >= 25) {
    progressBarRanks.style.width = 100 + "%"
    progressTextRanks.innerText = "RANK MAXED"    
  }
} 



    

powerupgrade.onclick = function(){
        if (clicks >= powerprice) {
            clicks -= powerprice;
            powerupgrades += 1;
            power += 1 * evopower
            increasePower *= 1.15;

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
            increaseAuto *= 1.25;

            CurrentClickPower = power;
            CurrentAutoPower = autopower;

            priceChanges();
            UpdateUI();
            updateAuto();
        }
    }


permanentupgrade.onclick = function() {
    const currentPermapowerPrice = permaprice[permapower + 1];

    if (currentPermapowerPrice !== undefined && currentPermapowerPrice !== null && permapower < maxPermaPower) {
        if (clicks >= currentPermapowerPrice) {
            clicks -= currentPermapowerPrice; 
            permapower ++; 
            increasePerma *= 1.35;

            totalPermaClicksBonus += 0.075;

            priceChanges();
            UpdateUI();
            updateRank();
        }
    }
}





//Mysterygift function
mysterygift.onclick = function() {
    if (mgBought === maxMGperEvo) {
        return
    }
    else if (clicks >= mysteryprice) {
        mystery = Math.random();
        mgBought += 1;
        if (mystery < 0.3) {
            clicksgained = Math.round(clicks);
            clicks += clicksgained
            allTimePoints += clicksgained;
            rewardMessage = "Points Doubled!";
            clicksgained = null
        } 
        else if (mystery <0.4){
            clicksgained = Math.round(clicks *= 4);
            clicks += clicksgained
            allTimePoints += clicksgained
            rewardMessage = "Points timed by 5!";
            clicksgained = null;
        }
        else if (mystery <0.9) {
            clicks -= mysteryprice
            rewardMessage = "No reward";
        }
         else if (mystery < 1) {
            rewardMessage = "A free evolution!";
            freeEvosAllowed ++;
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
    if (endGoalReached === false && clicks >= endgamePoints) {
 
        priceMultiplier -= 0.5;
        if (priceMultiplier <= 0.1) {
            priceMultiplier = 0.1;
        }

        endGoalReached = true;
        priceChanges();
        UpdateUI();

    }
}

//evolve logic (I need to fix the indents ASAP)

const evolvedPopUp = document.getElementById("evolved")
const message = document.getElementById("evolved-message");
const choose = document.getElementById("choose")
const clickerSpecialty = document.getElementById("clicker")
const offlinerSpecialty = document.getElementById("offliner")
const closeEvolvedPopupButton = document.getElementById("closeEvolvedPopup")

const rankData = {
 1: { flag: 1 },
 2: { flag: 2 },
 3: {
  flag: 3,
  priceMultiplier: -0.075,
  clicksMultiplier: 0.15,
  autoMultiplier: 0.15,
  RPpS: 0.25,
  multiplier2: 0.05,
  maxPermaPower: 3,
  chooseSpecialty: true
 },
 4: { flag: 4 },
 5: {
  flag: 5,
  priceMultiplier: -0.075,
  clicksMultiplier: 0.25,
  autoMultiplier: 0.25,
  RPpS: 0.75,
  multiplier2: 0.1,
  maxPermaPower: 5
 },
 6: { flag: 6,
    evoloss: 0.05,
  },
 7: {
  flag: 7,
  maxMysteryGifts: 1
 },
 8: { flag: 8 },
 9: {
  flag: 9,
  specialtyBonuses: {
   clicker: {
    clicksMultiplier: 0.05
   },
   offliner: {
    multiplier2: 0.05
   }
  }
 },
 10: {
  flag: 10,
  priceMultiplier: -0.1,
  clicksMultiplier: 0.3,
  autoMultiplier: 0.3,
  RPpS: 1.5,
  multiplier2: 0.1,
  maxPermaPower: 8
 },
 11: {
  flag: 11,
  specialtyBonuses: {
   clicker: {
    clicksMultiplier: 0.025
   },
   offliner: {
    autoclickerTime: 100
   }
  }
 },
 12: {
  flag: 12,
  maxMysteryGifts: 1
 },
 13: { flag: 13 },
 14: { flag: 14,
    evoloss: 0.05,
  },
 15: {
  flag: 15,
  priceMultiplier: -0.1,
  clicksMultiplier: 0.3,
  autoMultiplier: 0.3,
  RPpS: 7.5,
  multiplier2: 0.075,
  maxPermaPower: 12
 },
 16: { flag: 16 },
 17: { flag: 17 },
 18: {
  flag: 18,
  specialtyBonuses: {
   offliner: {
    multiplier2: 0.075,
    autoclickerTime: 100
   }
  }
 },
 19: { flag: 19 },
 20: {
  flag: 20,
  specialtyBonuses: {
   clicker: {
    clicksMultiplier: 0.5
   },
   offliner: {
    multiplier2: 0.25,
    autoMultiplier: 0.25,
   }
  }
 },
 21: { flag: 21 },
 22: {
  flag: 22,
  specialtyBonuses: {
   clicker: {
    clicksMultiplier: 0.025
   },
   offliner: {
    multiplier2: 0.025
   }
  }
 },
 23: { flag: 23 ,
    maxMysteryGifts: 1
 },
 24: { flag: 24 },
 25: {
  flag: 25,
  priceMultiplier: -0.15,
  clicksMultiplier: 0.5,
  autoMultiplier: 0.5,
  multiplier2: 0.075,
  maxPermaPower: 20
 },
 26: { flag: 26 },
 27: { flag: 27 },
 28: { flag: 28 },
 29: { flag: 29 },
 30: { flag: 30 }
};

const evoRewards = { //Some things are done outside of the rankData!
 1: "Autopower unlocked!",
 2: "Mystery gift unlocked!",
 3: "Bronze rank:<br> -7.5% price multiplier<br>+15% clicks multiplier<br>+15% auto multiplier<br>+0.25 RankPoints per second<br>+5% offline multiplier<br>+3 max permapower<br>Choose your specialty",
 //clicker gets +1 coin multipier and unlocks the Coin Shop earlier (3 instead of 4), offliner unlocks offline autoclicker for free and earlier (3 instead of 10)
 4: "Coin Shop unlocked!*",
 5: "Iron rank:<br> -7.5% price multiplier<br>+25% clicks multiplier<br>+25% auto multiplier<br>+0.75 RankPoints per second<br>+10% offline multiplier<br>+5 max permapower",
 6: "Evoloss -5%",
 7: "+1 max mystery gift per evo",
 8: "Rank Shop unlocked!",
 9: "Clicker: +5% click multiplier<br>Offliner: +5% offline multiplier",
 10: "Gold rank:<br> -10% price multiplier<br>+30% clicks multiplier<br>+30% auto multiplier<br>+1.5 RankPoints per second<br>+10% offline multiplier<br>+8 max permapower",
 11: "Clicker: +2.5% click multiplier<br>Offliner: -100MS on autoclick",
 12: "+1 max mystery gift per evo",
 13: "Nothing",
 14: "Evoloss -5%",
 15: "Platinum rank:<br> -10% price multiplier<br>+30% clicks multiplier<br>+30% auto multiplier<br>+7.5 RankPoints per second<br>+7.5% offline multiplier<br>+12 max permapower",
 16: "Nothing",
 17: "Nothing",
 18: "Clicker: += 1 Coin Multiplier <br>Offliner: +7.5% offline multiplier, -50MS on autoclick",
 19: "Nothing",
 20: "Clicker: +50% clicks multiplier<br>Offliner: +25% offline multiplier, +25% auto multiplier",
 21: "Nothing",
 22: "Clicker: +2.5% click multiplier<br>Offliner: +2.5% offline multiplier",
 23: "+1 max mystery gift per evo",
 24: "Nothing",
 25: "Champion rank:<br> -15% price multiplier<br>+50% clicks multiplier<br>+50% auto multiplier<br>+7.5% offline multiplier<br>+20 max permapower",
 26: "Nothing",
 27: "Nothing",
 28: "Nothing",
 29: "Nothing",
 30: "Nothing"
};


let currentRewards = evoRewards[evolveLVL] || "No rewards available";

const confirmEvolvePopup = document.getElementById("confirm-evolve-popup");
const confirmEvolveYesButton = document.getElementById("confirm-evolve-yes");
const confirmEvolveNoButton = document.getElementById("confirm-evolve-no");

evolve.onclick = function() {
  if (mayEvolve === true) {
    document.getElementById('evolved').style.display = 'block';
    largePopUps.style.display = 'block';
    largePopUps.classList.remove("hidden");
    confirmEvolvePopup.classList.remove("hidden");
    evolvedPopUp.style.display = "none";

  } else {
    return;
  }
}

confirmEvolveYesButton.onclick = () => {

 executeEvolutionLogic();
};

confirmEvolveNoButton.onclick = () => {
 hideConfirmationPopup();
};

function hideConfirmationPopup() {
  confirmEvolvePopup.classList.add("hidden");
  largePopUps.classList.add("hidden");
}

function executeEvolutionLogic() {
  confirmEvolvePopup.classList.add("hidden");

  let actualEvoCost;
  let isFreeEvolution = false;

  priceChanges();

  if (tempevoCost !== null) {
    actualEvoCost = tempevoCost;
    isFreeEvolution = (tempevoCost === 0);
  } else {
    actualEvoCost = (evolveLVL * increaseEvolve * priceMultiplier);
    if (evolveLVL === 0) {
      actualEvoCost = 750 * priceMultiplier;
    }
    actualEvoCost = applyTieredRounding(actualEvoCost);
  }

  if (clicks >= actualEvoCost || isFreeEvolution) {
    if (!isFreeEvolution) {
      clicks -= actualEvoCost;
    }

    evolveLVL++;
    evopower = evolveLVL + 1;
    updateRank();

    power = Math.round(powerupgrades * evopower * (1 - evoloss)) + (1 * evopower);
    autopower = Math.round(autoupgrades * evopower * (1 - evoloss));

    clicks -= Math.round(clicks * evoloss);

    increaseEvolve *= 1.4;
    increasePower = 1;
    increaseAuto = 50;

    powerupgrades = 0;
    autoupgrades = 0;

    mgBought = 0;

    tempevoCost = null;

    CurrentClickPower = power;
    CurrentAutoPower = autopower;

    if (evolveLVL <= 25) {
      currentRewards = evoRewards[evolveLVL] || "No rewards available";
    } else {
      currentRewards = evoRewards[26] || "No rewards available";
    }

    if (evolveLVL === 18 && specialty === "clicker") {
        coinMultiplier += 1;
    }

    message.innerHTML = "You evolved! <br> New evolution level: " + (evolveLVL) + " <br><div style='text-align: left; border-bottom: 1px solid black; padding-bottom: 5px; margin-bottom: 5px;'>Rewards:</div>" + "<div style='text-align: left;'>" + (currentRewards) + "</div>";

    evolvedPopUp.style.display = "block";

    if (evolveLVL === 3 && specialty === null) {
      choose.classList.remove("hidden")
      offlinerSpecialty.classList.remove("hidden")
      clickerSpecialty.classList.remove("hidden")
      closeEvolvedPopupButton.classList.add("hidden")
    } else {
      closeEvolvedPopupButton.classList.remove("hidden")
      choose.classList.add("hidden");
      offlinerSpecialty.classList.add("hidden");
      clickerSpecialty.classList.add("hidden");
    }

    priceChanges();
    UpdateUI();
    startautoclick();
  } else {
    hideConfirmationPopup();
  }
}



clickerSpecialty.onclick = function() {
  specialty = "clicker";
  const evolvedPopUp = document.getElementById("evolved");
  evolvedPopUp.style.display = "none";
  choose.classList.add("hidden")
  offlinerSpecialty.classList.add("hidden")
  clickerSpecialty.classList.add("hidden")
  closeEvolvedPopupButton.classList.remove("hidden")
  const largePopUps = document.getElementById("large-pop-ups")
  largePopUps.style.display = "none"

    coinMultiplier += 1;

  updateRank()
  UpdateUI();
  priceChanges();
};

offlinerSpecialty.onclick = function() {
  specialty = "offliner";
  const evolvedPopUp = document.getElementById("evolved");
  evolvedPopUp.style.display = "none";
  choose.classList.add("hidden")
  offlinerSpecialty.classList.add("hidden")
  clickerSpecialty.classList.add("hidden")
  closeEvolvedPopupButton.classList.remove("hidden")
  const largePopUps = document.getElementById("large-pop-ups")
  largePopUps.style.display = "none"

  Offlinebought = true;
  Offlinecost = null;

  updateRank()
  UpdateUI();
  priceChanges();
};


closeEvolvedPopup.onclick = function () {
  const evolvedPopUp = document.getElementById("evolved");
  evolvedPopUp.style.display = "none";
  choose.classList.add("hidden")
  offlinerSpecialty.classList.add("hidden")
  clickerSpecialty.classList.add("hidden")
  closeEvolvedPopupButton.classList.remove("hidden")
  const largePopUps = document.getElementById("large-pop-ups")
  largePopUps.style.display = "none"
  updateRank()
  UpdateUI();
  priceChanges();
}


function updateRank() {
 priceMultiplier = 1;
 clicksMultiplier = 1;
 autoMultiplier = 1;
 RPpS = 0;
 multiplier2 = 0.25;
 maxPermaPower = 0;
 autoclick = 750;
 maxMGperEvo = 1
 evoloss = 1;

 for (const lvlStr in rankData) {
  const lvl = Number(lvlStr);
  const data = rankData[lvl];

  if (lvl <= evolveLVL) {
   if (data.priceMultiplier !== undefined) {
    priceMultiplier += data.priceMultiplier;
   }
   if (data.clicksMultiplier !== undefined) {
    clicksMultiplier += data.clicksMultiplier;
   }
      if (data.autoMultiplier !== undefined) {
    autoMultiplier += data.autoMultiplier;
   }
   if (data.RPpS !== undefined) {
    RPpS += data.RPpS;
   }
   if (data.multiplier2 !== undefined) {
    multiplier2 += data.multiplier2;
   }
   if (data.maxPermaPower !== undefined) {
    maxPermaPower = Math.max(maxPermaPower, data.maxPermaPower);
   }
  if (data.maxMysteryGifts !== undefined) {
    maxMGperEvo += data.maxMysteryGifts;
   }
   if (data.autoclickerTime !== undefined) { 
    autoclick -= data.autoclickerTime;
   }
    if (data.evoloss !== undefined) { // Check for evoloss property
    evoloss -= data.evoloss; // Update evoloss
   }

   if (data.specialtyBonuses && specialty !== null) {
    const bonus = data.specialtyBonuses[specialty];
    if (bonus) {
     for (const key in bonus) {
      if (bonus.hasOwnProperty(key)) {
       const value = bonus[key];
       switch (key) {
        case 'priceMultiplier':
         priceMultiplier += value;
         break;
        case 'clicksMultiplier':
         clicksMultiplier += value;
         break;
                case 'autoMultiplier':
         autoMultiplier += value;
         break;
        case 'RPpS':
         RPpS += value;
         break;
        case 'multiplier2':
         multiplier2 += value;
         break;
        case 'maxPermaPower':
         maxPermaPower += value;
        case 'maxMysteryGifts':
         maxMGperEvo += value;
         break;
        case 'autoclickerTime': 
         autoclick -= value;
         break;
        case 'evoloss': // Add evoloss to specialty bonuses if needed
         evoloss -= value;
        default:
         break;
       }
      }
     }
    }
   }
  }
 }


  clicksMultiplier += totalPermaClicksBonus;
  autoMultiplier += totalPermaClicksBonus;
  autoclick -= totalAutoclickTimeReductionBonus
  maxMGperEvo += maxMGupgradesBought
  evoloss -= (evolossBought * 0.1);


  if (priceMultiplier < 0.1) {
    priceMultiplier = 0.1;
  }
  if (autoclick <= 350) {
    autotimerCost = null;
    autoclick = 333;
  }
  if (evoloss < 0.05 ) {
    evoloss = 0.05
  }

 for (const lvlStr in rankData) {
  const lvl = Number(lvlStr);
  if (lvl <= evolveLVL && !evolutionReached.has(lvl)) {
   evolutionReached.add(lvl);
  }
 }
}


//end of evolve logic

function updateAuto() {
        clicks += autopower * autoMultiplier;
        allTimePoints += autopower * autoMultiplier
        clicks = Math.round(clicks);


        if (CoinACbought === true) {
            timesClicked += 1;
            neededClicks = newCoin-timesClicked
     
            if (timesClicked == (newCoin)) {
                coins += coinMultiplier * 1;
                timesClicked = 0;
                newCoin = Math.floor(Math.random() * coinneeded) + 1
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
        evolossBought += 1;

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
        autotimerCost += 2;
        totalAutoclickTimeReductionBonus += 50;

        startautoclick();
        UpdateUI();
        updateRank();

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
    maxMGupgradesBought += 1
    }

    if (maxMGupgradesBought === 3) {
        reduceMysterycost = null; //old variable name but still works
    }
     UpdateUI(); 
     priceChanges();  
     updateRank();
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

const exchangeMessage = document.getElementById("exchangeMessage")


RPexchange.onclick = function() {
    if (rankPoints >= ExchangeCost) {
        rankPoints -= ExchangeCost;
        let clicksgained = Math.round(clicks * 0.03);
        let clicksGainedCapped = null;
        evoCost = (evolveLVL * increaseEvolve * priceMultiplier)
        if (clicksgained > evoCost * 0.02) {
            clicksgained = Math.round(evoCost *0.02);
            clicksGainedCapped = true;
        } 

        clicks += clicksgained
        allTimePoints += clicksgained //clicks and points are used interchangeable

        
        if (clicksGainedCapped) {
            exchangeMessage.innerText = "You gained " + (clicksgained) + " clicks! (capped at 2% of evolution price)" 
        } else {
            exchangeMessage.innerText = "You gained " + (clicksgained) + " clicks!"
        }

        setTimeout(() => {
            exchangeMessage.innerText = ""
        }, 2500);

        clicksGainedCapped = false;
        clicksgained = 0;

        UpdateUI();
        priceChanges();
    }
}




//upgtoggle (old function name but it works)


function upgtoggle() {


    // Toggle status updaten
    if (toggle === 1) {
        isSpecialShop = false;
        isRankShop = false;
    } else if (toggle === 2) {
        isSpecialShop = true;
        isRankShop = false;
    } else if (toggle === 3) {
        isSpecialShop = false;
        isRankShop = true;
    }

    // Containers tonen/verbergen
    if (isSpecialShop) {
        normalUpgradesContainer.classList.add('hidden-upgrades');
        specialUpgradesContainer.classList.remove('hidden-upgrades');
        rankUpgradesContainer.classList.add('hidden-upgrades');
    } else if (isRankShop) {
        normalUpgradesContainer.classList.add('hidden-upgrades');
        specialUpgradesContainer.classList.add('hidden-upgrades');
        rankUpgradesContainer.classList.remove('hidden-upgrades');
    } else {
        normalUpgradesContainer.classList.remove('hidden-upgrades');
        specialUpgradesContainer.classList.add('hidden-upgrades');
        rankUpgradesContainer.classList.add('hidden-upgrades');
        
    }
}

// Event listeners voor knoppen
// Knoppen ophalen



// Subfuncties per knop
btnNormal.onclick = function() {
    toggle = 1;
    upgtoggle();
}

btnSpecial.onclick = function() {
    if (evolveLVL >= 4 || evolveLVL >= 3 && specialty === "clicker") {
        toggle = 2;
        upgtoggle();
    }
}

btnRank.onclick = function() {
    if (evolveLVL >= 8) {
        toggle = 3;
        upgtoggle();
    }
}




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
        power,
        powerprice,
        evoCost,
        newCoin,
        timesClicked,
        tempevoCost,
        freeEvosAllowed,
        rank,
        autopower,
        autoupgrade,
        autoprice,
        mysteryprice,
        mystery,
        powerupgrades,
        autoupgrades,
        evolossBought,
        CurrentClickPower,
        CurrentAutoPower,
        priceMultiplier,
        autoSaveToggle,
        totalPermaClicksBonus,
        coins,
        evoloss,
        ELMcost,
        autoclick,
        autotimerCost,
        reduceMysterycost,
        mgBought,
        maxMGperEvo,
        maxMGupgradesBought,
        CNneededcost,
        endGoalReached,
        clicksMultiplier,
        autoMultiplier,
        rankPoints,
        RPpS,
        Offlinebought,
        Offlinecost,
        coinneeded,
        CoinACbought,
        allTimeClicks,
        coinMultiplier,
        allTimePoints,
        multiplier2,
        totalAutoclickTimeReductionBonus,
        maxPermaPower,
        specialty,
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
        maxMGupgradesBought = gameState.maxMGupgradesBought;
        increasePerma = gameState.increasePerma;
        evolveLVL = gameState.evolveLVL;
        permapower = gameState.permapower;
        power = gameState.power;
        powerprice = gameState.powerprice;
        evoCost = gameState.evoCost;
        tempevoCost = gameState.tempevoCost;
        CNneededcost = gameState.CNneededcost;
        rank = gameState.rank;
        evolossBought = gameState.evolossBought
        autopower = gameState.autopower;
        freeEvosAllowed = gameState.freeEvosAllowed
        autoprice = gameState.autoprice;
        mystery = gameState.mystery;
        mysteryprice = gameState.mysteryprice;
        powerupgrades = gameState.powerupgrades;
        autoupgrades = gameState.autoupgrades;
        CurrentClickPower = gameState.CurrentClickPower;
        CurrentAutoPower = gameState.CurrentAutoPower;
        priceMultiplier = gameState.priceMultiplier;
        autoSaveToggle = gameState.autoSaveToggle;
        evopower = evolveLVL + 1;
        rankPoints = gameState.rankPoints;
        RPpS = gameState.RPpS;
        clicksMultiplier = gameState.clicksMultiplier;
        autoMultiplier = gameState.autoMultiplier
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
        Offlinecost = gameState.Offlinecost;
        Offlinebought = gameState.Offlinebought;
        coinneeded = gameState.coinneeded;
        allTimeClicks = gameState.allTimeClicks;
        allTimePoints = gameState.allTimePoints;
        multiplier2 = gameState.multiplier2;
        quartered = gameState.quartered;
        specialty = gameState.specialty
        totalPermaClicksBonus = gameState.totalPermaClicksBonus
        totalAutoclickTimeReductionBonus = gameState.totalAutoclickTimeReductionBonus
        maxPermaPower = gameState.maxPermaPower
        coinMultiplier = gameState.coinMultiplier
        lastPlayedTime = gameState.lastPlayedTime || null;


        if (mgBought === maxMGperEvo) {
            mysteryprice = null;
        }

        neededClicks = newCoin - timesClicked;
        firstload = false; 
        ExchangeCost = 20;

        startautoclick();
        startrankpoints();
        updateRank();
        UpdateUI();
        priceChanges();
    } else {
        if (!firstload ||!savedGameState || !loadconfirmed) {
        alert("No save loaded!");
        }
    }
}


const resetAupdate = document.getElementById("resetAupdate")
const changelogPopup = document.getElementById("changelogPopup")
resetAupdate.onclick = function() {
        resetGame();
        changelogPopup.style.display='none'; localStorage.setItem('cc_changelog_V5.01', 'seen');
    }



function resetGame() {
    const resetconfirmed = confirm("Are you sure you want to reset the game?");
    
    if (resetconfirmed) {
        clicks = 0;
        increasePower = 1;
        increaseAuto = 50;
        increaseEvolve = 500;
        increasePerma = 2500;
        evolveLVL = 0;
        evopower = 1;
        permapower = 0;
        priceMultiplier = 1; 
        power = 1 ;
        powerprice = 1;
        evoCost = 750;
        tempevoCost = null;
        coinMultiplier = 1;
        freeEvosAllowed = 0
        evoloss = 1
        evolossBought = 0;
        autopower = 0 ;
        autoprice = 50 ;
        mysteryprice = 1000
        mystery = Math.random();
        powerupgrades = 0;
        CNneededcost = 500;
        autoupgrades = 0;
        CurrentClickPower = power;
        CurrentAutoPower = autopower;
        coins = 0;
        isSpecialShop = false;
        ELMcost = 1;
        autoclick = 750;
        totalPermaClicksBonus = 0
        autotimerCost = 3;
        newCoin = 350
        endgamePoints = 2500000
        timesClicked = 0;
        reduceMysterycost = 10;
        mgBought = 0;
        maxMGperEvo = 1;
        endGoalReached = false;
        neededClicks = newCoin-timesClicked
        clicksMultiplier = 1;
        autoMultiplier = 1;
        RPpS = 0;
        rankPoints = 0;
        totalAutoclickTimeReductionBonus = 0;
        Offlinecost = 750;
        CoinACcost = 3000;
        CoinACbought = false;
        Offlinebought = false; 
        lastPlayedTime = null
        coinneeded = 400;
        specialty = null; 
        stat = 1;
        allTimeClicks = 0;
        allTimePoints = 0;
        multiplier2 = 0.25;
        ExchangeCost = 20;
        quartered = false;
        maxMGupgradesBought = 0;
        maxPermaPower = 0
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
    

function OfflineProgress() { //vergeet niet dat de cap niet dynamisch is
    if (lastPlayedTime) {
        if (Offlinebought === true) {
        const currentTime = Date.now();
        let timeElapsedMs = currentTime - lastPlayedTime;
        let maxOffTimeOverlapped = false;

        let timeElapsedS = timeElapsedMs / 1000;

        if (timeElapsedS >= maxOffTime) {
            timeElapsedS = maxOffTime
            maxOffTimeOverlapped = true;
        }

        const autoClicksPerSecondRate = autoclick > 0 ? (1000 / autoclick) : 0;
        const clicksGainedOffline = autopower * autoClicksPerSecondRate * autoMultiplier * timeElapsedS * multiplier2;

        clicks += Math.round(clicksGainedOffline); 
        totalClicks += Math.round(clicksGainedOffline)

        if (maxOffTimeOverlapped === false) {
            Backmessage.innerHTML = "Welcome back! You gained<br> " + formatNumber(Math.round((clicksGainedOffline))) + " clicks!" + " (time away: " + (timeElapsedS / 60).toFixed(0) + " minutes)"
        } else {
            Backmessage.innerHTML = "Welcome back! You gained<br> " + formatNumber(Math.round((clicksGainedOffline))) + " clicks!" + " (time away: capped at 4 hours)"
        }
      
            maxOffTimeOverlapped = false;


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


priceChanges();
upgtoggle();
setInterval (endgame, 1000);
startautoclick();
startrankpoints();
autosave();
FirstLoadGame();
OfflineProgress(); 
updateRank();
UpdateUI();

