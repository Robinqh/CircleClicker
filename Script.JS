//#region --- const ---
//screens
const gameScreen = document.getElementById("game-container")
const achievementScreen = document.getElementById("achievmentScreen")
const largePopUps = document.getElementById("large-pop-ups") //name should be changed - but stops people from clicking elsewhere

//stats
    //Stats A
const ClickPowerElement = document.getElementById("ClickPower");
const AutoPowerElement = document.getElementById("AutoPower");
const evolutionLevelElement = document.getElementById("EvolutionLevel");
const coinElement = document.getElementById("coins");

    //Stats B
const offlinemultiplierstat = document.getElementById("multiplier2")
const priceMultiplierElement = document.getElementById("multiplier")
const totalPoints = document.getElementById("totalPoints");
const totalClicks = document.getElementById("totalClicks");

    //Ranks
const currentRankElement = document.getElementById("currentRank");
const RANK_CLASSES = ['wood', 'bronze', 'iron', 'gold', 'platinum', "champion"];

//Buttons
    //Normal Upgrades
const powerupgradeButton = document.getElementById("powerupgrade");
const autoupgradeButton = document.getElementById("autoupgrade");
const permanentupgradeButton = document.getElementById("permanentupgrade");

const mysterygiftButton = document.getElementById("mysterygift");

        //Evolve Logic
const evolveButton = document.getElementById("evolve");
const evolvedPopUp = document.getElementById("evolved")
const message = document.getElementById("evolved-message");
const choose = document.getElementById("choose")
const clickerSpecialty = document.getElementById("clicker")
const offlinerSpecialty = document.getElementById("offliner")
const buyerSpeciality = document.getElementById("buyer")
const evolverSpeciality = document.getElementById("evolver")
const closeEvolvedPopupButton = document.getElementById("closeEvolvedPopup")


            //Confirm Evolution
const confirmEvolvePopup = document.getElementById("confirm-evolve-popup");
const confirmEvolveYesButton = document.getElementById("confirm-evolve-yes");
const confirmEvolveNoButton = document.getElementById("confirm-evolve-no");

    //Coinshop Upgrades
const ELMButton = document.getElementById('ELM');
const autotimeButton = document.getElementById('autotime');
const mysterypriceButton = document.getElementById('mysteryprice');

    //Rankshop Upgrades
const CoinACButton = document.getElementById("CoinAC");
const OffButton = document.getElementById("Offline");
const CNButton = document.getElementById("CN");
const RPexchangeButton = document.getElementById("RPexchange");

    //Shops
const btnNormal = document.getElementById('btnNormal');
const btnSpecial = document.getElementById('btnSpecial');
const btnRank = document.getElementById('btnRank');



//Pop-Ups
const popupmysterygiftElement = document.getElementById("popupmysterygift");
const popupNCElement = document.getElementById("popupNC")
const exchangeMessage = document.getElementById("exchangeMessage")
const showChangeLogsButton = document.getElementById("showChangeLogs");

//Circle
const circle = document.getElementById("circle");
const pointValueElement = document.getElementById("pointValue");

//Progress Bars
const progressBarRanks = document.getElementById("progress-bar-RANKS")
const progressTextRanks = document.getElementById("progress-text-RANKS")

//Achievements
const unlockedAchievements = new Set();
const claimedAchievements = new Set();

//Extra
    //Multipliers
const pricemultiplier = document.getElementById("pricemultiplier")
const offlinemultiplier = document.getElementById("offlinemultiplier")

    //Upgrade Containers
const normalUpgradesContainer = document.getElementById('normal-upgrades');
const specialUpgradesContainer = document.getElementById('special-upgrades');
const rankUpgradesContainer = document.getElementById("rank-upgrades")

    //Toggles
const toggleStats = document.getElementById("toggleStats")
const toggleScreenButton = document.getElementById("toggleScreen");
const toggleScreenButton2 = document.getElementById("toggleScreen2");

    //Save - Load- Reset Logic
const loadconfirmed = false
const autoSaveStatusElement = document.getElementById("autoSaveStatus");


//Locked Prices/Rewards
    //Permaprices
const permaprice = {
  1: 1500,
  2: 1900,
  3: 2400,
  4: 4500,
  5: 7500,
  6: 28000,
  7: 50000,
  8: 80000,
  9: 160000,
  10: 270000,
  11: 420000,
  12: 680000,
  13: 1150000,
  14: 1800000,
  15: 2900000,
  16: 4600000,
  17: 6500000,
  18: 8500000,
  19: 11300000,
  20: 14800000,
};

const rankData = { //evoloss needs to be positive to turn negative! Also for autoclicktimer
 1: { flag: 1 },
 2: { flag: 2 },
 3: {
  flag: 3, priceMultiplier: -0.075, clicksMultiplier: 0.15, multiplier2: 0.05, maxPermaPower: 3, chooseSpecialty: true,
  specialtyBonuses: { //all other bonuses are done outside of this const
   buyer: { pricemultiplier2: -0.20, RPpS: 0.05 }
  }
 },
 4: { flag: 4 },
 5: {
  flag: 5, priceMultiplier: -0.075, clicksMultiplier: 0.25, autoMultiplier: 0.25, RPpS: 0.75, multiplier2: 0.1, maxPermaPower: 5
 },
 6: { flag: 6, evoloss: 0.05 },
 7: { flag: 7, maxMysteryGifts: 1 },
 8: { flag: 8 },
 9: {
  flag: 9,
  specialtyBonuses: {
   clicker: { clicksMultiplier: 0.15 },
   offliner: { multiplier2: 0.1 },
   buyer: { priceMultiplier: -0.05, pricemultiplier2: -0.05 },
   evolver: { evoloss: 0.075 }
  }
 },
10: {
  flag: 10, priceMultiplier: -0.1, clicksMultiplier: 0.3, autoMultiplier: 0.3, RPpS: 1.75, multiplier2: 0.1, maxPermaPower: 8
 },
11: {
  flag: 11,
  specialtyBonuses: {
   clicker: { clicksMultiplier: 0.125 },
   offliner: { autoclickerTime: 100 },
   buyer: { priceMultiplier: -0.1 },
   evolver: { RPpS: 0.5 }
  }
 },
12: { flag: 12, maxMysteryGifts: 1 },
13: { flag: 13 },
14: { flag: 14, evoloss: 0.05 },
15: {
  flag: 15, priceMultiplier: -0.1, clicksMultiplier: 0.3, autoMultiplier: 0.3, RPpS: 5, multiplier2: 0.075, maxPermaPower: 12
 },
16: { flag: 16 },
17: { flag: 17 },
18: {
  flag: 18,
  specialtyBonuses: { //coinmultiplier for "clicker" is done outsife of this const
   offliner: { multiplier2: 0.1, autoclickerTime: 50 },
   buyer: { priceMultiplier: -0.05, pricemultiplier2: -0.05 },
   evolver: { evoloss: 0.05 }
  }
 },
19: { flag: 19 },
20: {
  flag: 20,
  specialtyBonuses: {
   clicker: { clicksMultiplier: 0.5 },
   offliner: { multiplier2: 0.25, autoMultiplier: 0.25 },
   buyer: { priceMultiplier: -0.25 },
   evolver: { evoloss: 0.20 }
  }
 },
21: { flag: 21 },
22: {
  flag: 22,
  specialtyBonuses: {
   clicker: { clicksMultiplier: 0.05 },
   offliner: { multiplier2: 0.05 },
   buyer: { priceMultiplier: -0.025, pricemultiplier2: -0.025 },
   evolver: { evoloss: 0.05 }
  }
 },
23: { flag: 23, maxMysteryGifts: 1 },
24: { flag: 24 },
25: {
  flag: 25, priceMultiplier: -0.15, clicksMultiplier: 0.5, autoMultiplier: 0.5, multiplier2: 0.075, maxPermaPower: 20
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
 3: "Bronze rank:<br> -7.5% price multiplier<br>+15% clicks multiplier<br>+5% offline multiplier<br>+3 max permapower<br>Choose your speciality",
 //clicker gets +1 coin multipier and unlocks the Coin Shop earlier (3 instead of 4), offliner unlocks offline autoclicker (and coin autoclicker) for free and earlier (3 instead of 8), evolver removes evolution requierements, buyer gain acces to pricemultiplier for coins and Rankshop and has a lower minimum pricemultiplier
 4: "Coin Shop unlocked!*",
 5: "Iron rank:<br> -7.5% price multiplier<br>+25% clicks multiplier<br>+25% auto multiplier<br>+0.75 RankPoints per second<br>+10% offline multiplier<br>+5 max permapower",
 6: "Evoloss -5%",
 7: "+1 max mystery gift per evo",
 8: "Rank Shop unlocked!*",
 9: "Clicker: +15% click multiplier<br>Offliner: +10% offline multiplier<br>Buyer: -5% on both price multipliers<br>Evolver: -7.5% evoloss",
 10: "Gold rank:<br> -10% price multiplier<br>+30% clicks multiplier<br>+30% auto multiplier<br>+1.75 RankPoints per second<br>+10% offline multiplier<br>+8 max permapower",
 11: "Clicker: +12.5% click multiplier<br>Offliner: -100MS on autoclick<br>Buyer: -10% on normal prices<br>Evolver: +0.5RPpS",
 12: "+1 max mystery gift per evo",
 13: "Nothing",
 14: "Evoloss -5%",
 15: "Platinum rank:<br> -10% price multiplier<br>+30% clicks multiplier<br>+30% auto multiplier<br>+5 RankPoints per second<br>+7.5% offline multiplier<br>+12 max permapower",
 16: "Nothing",
 17: "Nothing",
 18: "Clicker: += 1 Coin Multiplier <br>Offliner: +10% offline multiplier, -50MS on autoclick<br>Buyer: -5% on both price multipliers<br>Evolver:-5% on evoloss",
 19: "Nothing",
 20: "Clicker: +50% clicks multiplier<br>Offliner: +25% offline multiplier, +25% auto multiplier<br>Buyer:-25% on normal upgrades<br>Evolver: -20% on evoloss",
 21: "Nothing",
 22: "Clicker: +5% click multiplier<br>Offliner: +5% offline multiplier<br>Buyer: -2.5% on both price multiplier<br>Evolver: -5% on evoloss",
 23: "+1 max mystery gift per evo",
 24: "Nothing",
 25: "Champion rank:<br> -15% price multiplier<br>+50% clicks multiplier<br>+50% auto multiplier<br>+7.5% offline multiplier<br>+20 max permapower",
 26: "Nothing",
 27: "Nothing",
 28: "Nothing",
 29: "Nothing",
 30: "Nothing"
};
//#endregion --- const ---
    

//#region --- Variables --- 


// --- Core Game Economy & Progress ---
let clicks = 0;
let coins = 0;
let rankPoints = 0;
let permapower = 0;
let maxPermaPower = 0;
let totalPermaClicksBonus = 0;
let totalcoins = 0;
let allTimeClicks = 0;
let allTimePoints = 0;
let rank = "Your rank: Loading";
let RPpS = 0;
let endGoalReached = false;
let endgamePoints = 2500000;

// --- Evolution System ---
let evolveLVL = 0;
let evopower = evolveLVL + 1;
let evoCost = 750;
let tempevoCost = null;
let specialty = null;
let evoloss = 1;
let evolossBought = 0;
let ELMcost = 1;
let mayEvolve = true;
let noEVOallowedReason = "";
let evolutionReached = new Set();
let freeEvosAllowed = 0;

// --- Click & Auto-Click Mechanics ---
let power = 1 * evopower;
let powerprice = 1;
let powerupgrades = 0;

let autoclick = 750;
let autopower = 0 * evopower;
let autoprice = 50;
let autoupgrades = 0;
let autotimerCost = 3;
let autoTimerBought = 0;
let totalAutoclickTimeReductionBonus = 0;
let increaseAuto = 50;

// --- Multipliers & Bonuses ---
let clicksMultiplier = 1;
let autoMultiplier = 1;
let coinMultiplier = 1;
let priceMultiplier = 1;
let pricemultiplier2 = 1;

let increasePower = 1;
let increaseEvolve = 500;
let increasePerma = 2500;

let plusOneMultiplier = false;
let quartered = false;

// --- Coin Generation & Mystery Box ---
let coinneeded = 400;
let newCoin = 350;
let timesClicked = 0;
let neededClicks = newCoin - timesClicked;
let ExchangeCost = 20;

let mysteryprice = 1000 + (clicks * 0.75);
let mystery = Math.random();
let rewardMessage = "";
let mgBought = 0;
let maxMGperEvo = 1;
let maxMGupgradesBought = 0;
let reduceMysterycost = 10;

// --- Offline Progress ---
let lastPlayedTime = null;
let firstload = true;
let stat = 1;
let multiplier2 = 0.25;
let maxOffTime = 14400;

// --- Game State & UI Management ---
let autoSaveToggle = true;
let autoSaveInterval;
let autosaveMessageFlag = 0;
let autosaveMessageInterval;

let toggle = 1;
let isSpecialShop = false; //coinshop
let isRankShop = false;
let screenToggle = 1;

// --- Rank Shop Purchases & Costs ---
let totalRankPoints = 0;
let CoinACbought = false;
let Offlinebought = false;
let CNBought = 0;

let CoinACcost = 3000;
let Offlinecost = 750;
let CNneededcost = 500;
//#endregion --- Variables --- 


//#region --- Functions ---

    //#region --- UI ---
function formatNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return ""; 
    }
    return num.toLocaleString('de-DE');
}


function UpdateUI() {
    // Update point value display
    if (pointValueElement) {
        if (toggle === 1 || toggle === 2 || (toggle === 3 && evolveLVL < 8 && specialty !== "buyer")) {
            pointValueElement.innerText = "Points: " + formatNumber(Math.round(clicks));
        } else if (toggle === 3) {
            pointValueElement.innerHTML = "Rankpoints (" + (RPpS) + "): <br>" + formatNumber(rankPoints);
        }
    }

    // Update current click power display
    if (ClickPowerElement) {
        ClickPowerElement.innerHTML = "Current Clicking Power: " + formatNumber(Math.round(power)) + "<br>*" + (clicksMultiplier * 100).toFixed(1) + "%";
    }

    // Update current auto power display
    if (AutoPowerElement) {
        AutoPowerElement.innerHTML = "Current Autopower Power: " + formatNumber(Math.round(autopower)) + "<br>*" + (clicksMultiplier * 100).toFixed(1) + "%" + " - " + (autoclick) + "ms";
    }

    // Update current rank display
    if (currentRankElement) {
        currentRankElement.innerText = rank;
    }

    // Update mystery gift popup
    if (popupmysterygiftElement) {
        if (rewardMessage && rewardMessage !== "") {
            popupmysterygiftElement.innerText = rewardMessage;
            popupmysterygiftElement.style.display = "block";
        } else {
            popupmysterygiftElement.innerText = "";
            popupmysterygiftElement.style.display = "none";
        }
    }

    // Update evolution level display
    if (evolutionLevelElement) {
        evolutionLevelElement.innerHTML = "Current evolution level: " + formatNumber(evolveLVL) + "<br> Evoloss: " + Math.round(evoloss * 100) + "%";
    }

    // Update auto save status
    if (autoSaveStatusElement) {
        autoSaveStatusElement.innerText = autoSaveToggle ? "ON" : "OFF";
    }

    // Update price multiplier display
    if (priceMultiplierElement) {
        priceMultiplierElement.innerHTML = "Points: " + (priceMultiplier * 100).toFixed(1) + "%<br> " + "Coins/RankPoints: " + (pricemultiplier2 * 100).toFixed(1) + "%";
    }

    // Update offline multiplier stat
    if (offlinemultiplierstat) {
        offlinemultiplierstat.innerText = formatNumber(Number((multiplier2 * 100).toFixed(1))) + "%" + " - max time: " + (maxOffTime / 3600) + " hours";
    }

    // Update coin display
    if (coinElement) {
        coinElement.innerHTML = "Coins: " + formatNumber(Math.round(coins)) + "<br> Next coin in: " + (neededClicks) + " clicks (*" + (coinMultiplier) + ")";
    }

    // Update click power upgrade button
    if (powerupgradeButton) {
        if (clicks >= powerprice) {
            powerupgradeButton.classList.remove("buyoff");
        } else {
            powerupgradeButton.classList.add("buyoff");
        }
        powerupgradeButton.innerHTML = "ClickPower: " + formatNumber(powerprice);
    }

    // Update RP exchange button
    if (RPexchangeButton) {
        if (rankPoints >= ExchangeCost) {
            RPexchangeButton.classList.remove("buyoff");
        } else {
            RPexchangeButton.classList.add("buyoff");
        }
        RPexchangeButton.innerHTML = "Trade RankPoints for a Click Bonus<br>" + ExchangeCost + " RP ➤ +3% clicks (max: 2% of evolution cost)";
    }

    // Update total points display
    if (totalPoints) {
        totalPoints.innerText = "All-time points: " + formatNumber(Math.round(allTimePoints));
    }

    // Update total clicks display
    if (totalClicks) {
        totalClicks.innerText = "All-time Clicks: " + formatNumber(allTimeClicks);
    }

    // Update autopower upgrade button
    if (autoupgradeButton) {
        if (evolveLVL < 1) {
            autoupgradeButton.classList.add("buyoff");
            autoupgrade.innerText = "Autopower unlocks after evolution 1";
        } else if (clicks < autoprice) {
            autoupgradeButton.classList.add("buyoff");
            autoupgrade.innerText = "Autopower: " + formatNumber(autoprice);
        } else {
            autoupgradeButton.classList.remove("buyoff");
            autoupgrade.innerText = "Autopower: " + formatNumber(autoprice);
        }
    }

    // Update permanent upgrade button
    if (permanentupgradeButton) {
        const currentPermapowerPrice = permaprice[permapower + 1];

        if (evolveLVL < 3) {
            permanentupgradeButton.classList.add("buyoff");
            permanentupgradeButton.classList.remove("completed");
            permanentupgrade.innerText = "Permapower unlocks after evolution 3";
        } else if (permapower === 20) { // Assuming 20 is the absolute max
            permanentupgradeButton.classList.remove("buyoff");
            permanentupgradeButton.classList.add("completed");
            permanentupgrade.innerText = "Permapower: MAXED ";
        } else if (permapower === maxPermaPower) { // If reached max for current rank
            permanentupgradeButton.classList.remove("buyoff");
            permanentupgradeButton.classList.add("completed");
            permanentupgrade.innerText = "Unlock more permapower upon reaching the next rank ";
        } else if (currentPermapowerPrice !== undefined && currentPermapowerPrice !== null) {
            if (clicks < currentPermapowerPrice) {
                permanentupgradeButton.classList.add("buyoff");
                permanentupgradeButton.classList.remove("completed");
            } else {
                permanentupgradeButton.classList.remove("buyoff");
                permanentupgradeButton.classList.remove("completed");
            }
            permanentupgrade.innerText = "Permapower (" + (maxPermaPower - permapower) + " left): " + formatNumber(currentPermapowerPrice);
        }
    }

    // Update evolve button
    if (evolveButton) {
        const effectiveEvoCost = (tempevoCost !== null) ? tempevoCost : evoCost;
        if (mayEvolve === false) {
            evolveButton.innerText = "Evolving is not allowed: " + noEVOallowedReason;
        } else if (evolveLVL === 2) {
            evolveButton.innerText = "Evolve: " + formatNumber(effectiveEvoCost) + " (Autosaves just before evolving!)";
        } else {
            evolveButton.innerText = "Evolve: " + formatNumber(effectiveEvoCost);
        }

        if (clicks >= effectiveEvoCost && mayEvolve === true) {
            evolveButton.classList.remove("buyoff");
        } else {
            evolveButton.classList.add("buyoff");
        }
    }

    // Update mystery gift button
    if (mysterygiftButton) {
        if (evolveLVL < 2) {
            mysterygiftButton.classList.add("buyoff");
            mysterygift.innerText = "Mystery gifts unlocks after evolution 2";
        } else if (mgBought >= maxMGperEvo) {
            mysterygiftButton.classList.add("out-of-stock");
            mysterygiftButton.classList.remove("buyoff");
            mysterygift.innerText = "Mystery gift: Out of stock";
        } else {
            mysterygiftButton.classList.remove("out-of-stock");
            if (clicks < mysteryprice) {
                mysterygiftButton.classList.add("buyoff");
            } else {
                mysterygiftButton.classList.remove("buyoff");
            }
            mysterygift.innerHTML = "Mystery gift: " + formatNumber(Math.round(mysteryprice)) + " (" + (maxMGperEvo - mgBought) + " left) <br> Saves Game!";
        }
    }

    // Update special upgrades
    if (ELMButton) {
        if (ELMcost === null) {
            ELMButton.classList.remove("buyoff");
            ELMButton.classList.add("completed");
            ELMButton.innerText = "Evolve loss multiplier: MAX";
        } else {
            if (coins < ELMcost) {
                ELMButton.classList.add("buyoff");
                ELMButton.classList.remove("completed");
            } else {
                ELMButton.classList.remove("buyoff");
                ELMButton.classList.remove("completed");
            }
            ELMButton.innerText = "Evolve loss multiplier -0.1: " + ELMcost + " coins";
        }
    }

    if (autotimeButton) {
        if (autotimerCost === null) {
            autotimeButton.classList.remove("buyoff");
            autotimeButton.classList.add("completed");
            autotimeButton.innerText = "Reduce autotimer: MAX";
        } else {
            if (coins < autotimerCost) {
                autotimeButton.classList.add("buyoff");
                autotimeButton.classList.remove("completed");
            } else {
                autotimeButton.classList.remove("buyoff");
                autotimeButton.classList.remove("completed");
            }
            autotimeButton.innerText = "Reduce autotimer -50ms (max 333ms): " + formatNumber(autotimerCost) + " coins";
        }
    }

    if (mysterypriceButton) {
        if (evolveLVL < 20 && specialty !== "buyer") {
            mysterypriceButton.classList.add("buyoff");
            mysterypriceButton.innerText = "Unlocked at evolution level 20!";
        } else if (reduceMysterycost === null) {
            mysterypriceButton.classList.remove("buyoff");
            mysterypriceButton.classList.add("completed");
            mysterypriceButton.innerText = "Increase max mystergifts per evo: MAX";
        } else {
            if (coins < reduceMysterycost) {
                mysterypriceButton.classList.add("buyoff");
                mysterypriceButton.classList.remove("completed");
            } else {
                mysterypriceButton.classList.remove("buyoff");
                mysterypriceButton.classList.remove("completed");
            }
            mysterypriceButton.innerText = "Increase max mystergifts per evo: " + formatNumber(reduceMysterycost) + " coins";
        }
    }

    // Update rank upgrades
    if (CoinACButton) {
        if (evolveLVL < 12 && specialty !== "buyer" && specialty !== "offliner") {
            CoinACButton.classList.add("buyoff");
            CoinACButton.innerText = "Unlock at evo level 12";
        } else if (CoinACbought === true) {
            CoinACButton.classList.remove("buyoff");
            CoinACButton.classList.add("completed");
            CoinACButton.innerText = "Coin autoclicker: Activated";
        } else {
            if (rankPoints < CoinACcost) {
                CoinACButton.classList.add("buyoff");
                CoinACButton.classList.remove("completed");
            } else {
                CoinACButton.classList.remove("buyoff");
                CoinACButton.classList.remove("completed");
            }
            CoinACButton.innerText = "Coin autoclicker: " + formatNumber(CoinACcost) + "RP";
        }
    }

    if (OffButton) {
        if (Offlinebought === true) {
            OffButton.classList.remove("buyoff");
            OffButton.classList.add("completed");
            OffButton.innerText = "Offline autoclick; Activated";
        } else {
            if (rankPoints < Offlinecost) {
                OffButton.classList.add("buyoff");
                OffButton.classList.remove("completed");
            } else {
                OffButton.classList.remove("buyoff");
                OffButton.classList.remove("completed");
            }
            OffButton.innerText = "Offline autoclick: " + formatNumber(Offlinecost) + "RP";
        }
    }

    if (CNButton) {
        if (CNneededcost === null) {
            CNButton.classList.remove("buyoff");
            CNButton.classList.add("completed");
            CNButton.innerText = "Lowest range reached (" + (coinneeded) + ")";
        } else {
            if (rankPoints < CNneededcost) {
                CNButton.classList.add("buyoff");
                CNButton.classList.remove("completed");
            } else {
                CNButton.classList.remove("buyoff");
                CNButton.classList.remove("completed");
            }
            CNButton.innerText = "Decrease next coin range (-50): " + formatNumber(CNneededcost) + "RP " + "(0-" + (coinneeded) + ")";
        }
    }

    // Set evolution titles and classes
    if (currentRankElement) {
        currentRankElement.classList.remove(...RANK_CLASSES); // Assuming RANK_CLASSES is defined elsewhere
        if (evolveLVL < 3) {
            rank = "Your rank: Wood";
            currentRankElement.classList.add('wood');
        } else if (evolveLVL >= 3 && evolveLVL < 5) {
            rank = "Your rank: Bronze" + (specialty === null ? " - Speciality: not chosen" : " - Speciality: " + specialty);
            currentRankElement.classList.add('bronze');
        } else if (evolveLVL >= 5 && evolveLVL < 10) {
            rank = "Your rank: Iron" + " - Speciality: " + (specialty);
            currentRankElement.classList.add('iron');
        } else if (evolveLVL >= 10 && evolveLVL < 15) {
            rank = "Your rank: Gold" + " - Speciality: " + (specialty);
            currentRankElement.classList.add('gold');
        } else if (evolveLVL >= 15 && evolveLVL < 25) {
            rank = "Your rank: Platinum" + " - Speciality: " + (specialty);
            currentRankElement.classList.add('platinum');
        } else if (evolveLVL >= 25) {
            rank = "Your rank: Champion" + " - Speciality: " + (specialty);
            currentRankElement.classList.add('champion');
        }
    }

    // Toggle stat visibility
    if (stat === 1) {
        coinElement.classList.remove("hidden-stats");
        EvolutionLevel.classList.remove("hidden-stats");
        ClickPower.classList.remove("hidden-stats");
        AutoPowerElement.classList.remove("hidden-stats");

        pricemultiplier.classList.add("hidden-stats");
        offlinemultiplier.classList.add("hidden-stats");
        totalClicks.classList.add("hidden-stats");
        totalPoints.classList.add("hidden-stats");
    } else if (stat === 2) {
        coinElement.classList.add("hidden-stats");
        EvolutionLevel.classList.add("hidden-stats");
        ClickPower.classList.add("hidden-stats");
        AutoPowerElement.classList.add("hidden-stats");

        pricemultiplier.classList.remove("hidden-stats");
        offlinemultiplier.classList.remove("hidden-stats");
        totalClicks.classList.remove("hidden-stats");
        totalPoints.classList.remove("hidden-stats");
    }

    // Update specialty shop button visibility/text
    if (btnSpecial) {
        if (evolveLVL < 4 && specialty !== "clicker" && specialty !== "buyer") {
            btnSpecial.classList.add("buyoff");
            btnSpecial.innerText = "Unlocks after evo- 4";
        } else {
            btnSpecial.classList.remove("buyoff");
            btnSpecial.innerText = "Coin Shop";
        }
    }

    // Update rank shop button visibility/text
    if (btnRank) {
        if (evolveLVL < 8 && !(evolveLVL >= 3 && specialty === "buyer")) {
            btnRank.classList.add("buyoff");
            btnRank.innerText = "Unlocks after evo- 8";
        } else {
            btnRank.classList.remove("buyoff");
            btnRank.innerText = "Rank shop";
        }
    }

    updateProgressBar();
}


function applyTieredRounding(rawCost) {
    let roundingFactor;

    if (rawCost < 10000) {
        roundingFactor = 250;
    } else if (rawCost < 75000) {
        roundingFactor = 1000;
    } else if (rawCost < 250000) {
        roundingFactor = 5000;
    } else if (rawCost < 2500000) {
        roundingFactor = 25000;
    } else if (rawCost < 10000000) {
        roundingFactor = 100000;
    } else {
        roundingFactor = 500000;
    }

    return Math.round(rawCost / roundingFactor) * roundingFactor;
}

//#endregion --- UI ---


    //#region --- Price Fixing ---
function priceChanges() { 

    if (specialty !== "buyer") {
        if (priceMultiplier <= 0.2) {
            priceMultiplier = 0.2
    }
    } else {
        if (priceMultiplier <= 0.01) {
            priceMultiplier = 0.01
    }
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
       

//#region --- Evo Requirements ---

//evoreqs --- Make it in it's own function ---

if (evolveLVL === 0 && allTimeClicks < 150) {
    mayEvolve = false;
    noEVOallowedReason = "All-time clicks need to be above 150!";
} 
else if (evolveLVL === 3 && (specialty === null || specialty === null)) {
    mayEvolve = false;
    noEVOallowedReason = "Choose a specialty!";
} 
else if (evolveLVL === 8 && specialty !== "evolver" && allTimePoints < 200000) {
    mayEvolve = false;
    noEVOallowedReason = "All-time points need to be above 200,000!";
} 
else if (evolveLVL === 12 && specialty !== "evolver" &&  (maxMGperEvo !== mgBought)) {
     mayEvolve = false;
    noEVOallowedReason = "Buy all available mystery gifts!";
}
else if (evolveLVL === 13 && specialty !== "evolver" &&  autopower < 200) {
    mayEvolve = false;
    noEVOallowedReason = "Have atleast 200 Auto Power";
}
else if (evolveLVL === 15 && specialty !== "evolver" &&  power < 400) {
    mayEvolve = false;
    noEVOallowedReason = "Have atleast 400 Clicking Power";
}
else if (evolveLVL === 19 && specialty !== "evolver" && permapower < 6) {
    mayEvolve = false;
    noEVOallowedReason = "You need at least permapower level 6! - current level: " + permapower;
} 
else if (evolveLVL === 24 && specialty !== "evolver" &&  autopower < 1000 && power < 1000) {
    mayEvolve = false;
    noEVOallowedReason = "Have atleast 1000 Clicker and Auto Power";
}
else {
    mayEvolve = true;
    noEVOallowedReason = "";
}
//#endregion --- Evo Requirements ---

//price reductions for coin-/rankshop

    if (CoinACcost != null) {
        CoinACcost = 3000 
        CoinACcost = Math.round(CoinACcost * pricemultiplier2);
    }
    if (Offlinecost != null) {
        Offlinecost = 750
        Offlinecost = Math.round(Offlinecost * pricemultiplier2);
    }
    if (CNneededcost != null) {
        CNneededcost = 500 + (CNBought * 250)
        CNneededcost = Math.round(CNneededcost * pricemultiplier2);
    }
    if (ExchangeCost != null) {
        ExchangeCost = 20;
        ExchangeCost = Math.round(ExchangeCost * pricemultiplier2);
    }
    if (autotimerCost != null) {
        autotimerCost = 3 + (autoTimerBought * 2)
        autotimerCost = Math.round(autotimerCost * pricemultiplier2);
    }
    if (reduceMysterycost != null) {
        reduceMysterycost = 10 + (5* maxMGupgradesBought)
        reduceMysterycost = Math.round(reduceMysterycost * pricemultiplier2);
    }



    UpdateUI();
}

//#endregion --- Price Fixing ---


    //#region --- Circle ---
circle.onclick = function(){
    clicks += power * clicksMultiplier;
    allTimePoints += power * clicksMultiplier
    timesClicked ++;
    allTimeClicks ++;
    Math.round(clicks);
    neededClicks = newCoin-timesClicked



    if (timesClicked == (newCoin)) {
        coins += coinMultiplier * 1;
        totalcoins += coinMultiplier *1;
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

//#endregion --- Circle ---


    //#region --- Progress Bars ---
function updateProgressBar() { 
  
  if (endGoalReached === false) {
  document.getElementById("progress-bar").style.width = Math.min((clicks / endgamePoints) * 100, 100) + "%";
  document.getElementById("progress-text").innerHTML =  "Goal: 2.500.000 --- " +  `${Math.min((clicks / endgamePoints) * 100, 100).toFixed(2)}%`;
  }
  if (endGoalReached === true) {
  document.getElementById("progress-bar").style.width = "100%";
  document.getElementById("progress-text").innerHTML =  "Goal reached (-0.3 pricemultiplier activated)";  
  }
  


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
//#endregion --- Progress Bars ---


    //#region --- Clicker, Auto, and Perma upgrade ---
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
//#endregion --- Clicker, Auto, and Perma upgrade ---


    //#region --- Mystery Gifts ---
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
//#endregion --- Mystery Gifts ---


    //#region --- End Goal ---
function endgame() {
    if (endGoalReached === false && clicks >= endgamePoints) {
 
        priceMultiplier -= 0.3;
        if (specialty !== "buyer") {
            if (priceMultiplier <= 0.2) {
                priceMultiplier = 0.2
        }
        } else {
            if (priceMultiplier <= 0.01) {
                priceMultiplier = 0.01
        }
        }

        endGoalReached = true;
        priceChanges();
        UpdateUI();

    }
}
//#endregion --- End Goal ---


    //#region --- Evolve System ---
    //Fix the indents!
let currentRewards = evoRewards[evolveLVL] || "No rewards available";



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

  if (evolveLVL === 2) {
    saveGame();
  }

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
        buyerSpeciality.classList.remove("hidden")
        evolverSpeciality.classList.remove("hidden")

      closeEvolvedPopupButton.classList.add("hidden")
    } else {
      closeEvolvedPopupButton.classList.remove("hidden")
      choose.classList.add("hidden");
      offlinerSpecialty.classList.add("hidden");
      clickerSpecialty.classList.add("hidden");
        buyerSpeciality.classList.add("hidden")
        evolverSpeciality.classList.add("hidden")
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
  evolvedPopUp.style.display = "none";
  choose.classList.add("hidden")
  offlinerSpecialty.classList.add("hidden")
  clickerSpecialty.classList.add("hidden")
  closeEvolvedPopupButton.classList.remove("hidden")
  largePopUps.style.display = "none"

    coinMultiplier += 1;

  updateRank()
  UpdateUI();
  priceChanges();
};

offlinerSpecialty.onclick = function() {
  specialty = "offliner";
  evolvedPopUp.style.display = "none";
  choose.classList.add("hidden")
  offlinerSpecialty.classList.add("hidden")
  clickerSpecialty.classList.add("hidden")
  closeEvolvedPopupButton.classList.remove("hidden")
  largePopUps.style.display = "none"

  Offlinebought = true;
  Offlinecost = null;

  CoinACbought = true;
  CoinACcost = null;

  updateRank()
  UpdateUI();
  priceChanges();
};

buyerSpeciality.onclick = function() {
  specialty = "buyer";
  evolvedPopUp.style.display = "none";
  choose.classList.add("hidden")
  offlinerSpecialty.classList.add("hidden")
  clickerSpecialty.classList.add("hidden")
  closeEvolvedPopupButton.classList.remove("hidden")
  largePopUps.style.display = "none"


  updateRank()
  UpdateUI();
  priceChanges();
};

evolverSpeciality.onclick = function() {
  specialty = "evolver";
  evolvedPopUp.style.display = "none";
  choose.classList.add("hidden")
  offlinerSpecialty.classList.add("hidden")
  clickerSpecialty.classList.add("hidden")
  closeEvolvedPopupButton.classList.remove("hidden")
  largePopUps.style.display = "none"


  updateRank()
  UpdateUI();
  priceChanges();
};


closeEvolvedPopup.onclick = function () {
  evolvedPopUp.style.display = "none";
  choose.classList.add("hidden")
  offlinerSpecialty.classList.add("hidden")
  clickerSpecialty.classList.add("hidden")
  closeEvolvedPopupButton.classList.remove("hidden")
  largePopUps.style.display = "none"
  updateRank()
  UpdateUI();
  priceChanges();
}


function updateRank() {
 priceMultiplier = 1;
 pricemultiplier2 = 1;
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
   if (data.pricemultiplier2 !== undefined) {
    pricemultiplier2 += data.pricemultiplier2
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
        case "pricemultiplier2":
            pricemultiplier2 += value;
            break
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


    if (specialty !== "buyer") {
        if (priceMultiplier <= 0.2) {
            priceMultiplier = 0.2
    }
    } else {
        if (priceMultiplier <= 0.01) {
            priceMultiplier = 0.01
    }
    }


    if (specialty !== "buyer") {
        if (pricemultiplier2 <= 0.2) {
            pricemultiplier2 = 0.2
    }
    } else {
        if (pricemultiplier2 <= 0.01) {
            pricemultiplier2 = 0.01
    }
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

//#endregion --- Evolve System ---


    //#region --- Auto Systems ---
function updateAuto() {
        clicks += autopower * autoMultiplier;
        allTimePoints += autopower * autoMultiplier
        clicks = Math.round(clicks);


        if (CoinACbought === true) {
            timesClicked += 1;
            neededClicks = newCoin-timesClicked
     
            if (timesClicked == (newCoin)) {
                coins += coinMultiplier * 1;
                totalcoins += coinMultiplier * 1
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
    totalRankPoints += RPpS;
    UpdateUI();
}
//#endregion --- Auto Systems ---


    //#region --- Coin Shop ---
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
        priceChanges();

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
        autoTimerBought ++;

        startautoclick();
        UpdateUI();
        updateRank();
        priceChanges();

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

    if (maxMGupgradesBought >= 3) {
        reduceMysterycost = null; //old variable name but still works
    }

     UpdateUI(); 
     priceChanges();  
     updateRank();
}
//#endregion --- Coin Shop ---


    //#region --- Rank Shop ---
CoinAC.onclick = function() {
    if (rankPoints >= CoinACcost) {
        rankPoints -= CoinACcost;
        CoinACbought = true;
        CoinACcost = null;
    }
    UpdateUI();
    priceChanges();
}


Offline.onclick = function() {
    if (rankPoints >= Offlinecost) {
        rankPoints -= Offlinecost;
        Offlinebought = true;
        Offlinecost = null;
    }
    priceChanges();
}


CN.onclick = function () {
    if (rankPoints >= CNneededcost) {
        rankPoints -= CNneededcost;
        coinneeded -= 50;
        CNBought ++;
        if (coinneeded <= 200) {
            CNneededcost = null;
        }
        priceChanges();
    }
}


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
//#endregion --- Rank Shop ---


    //#region --- Toggle Systems ---


function upgtoggle() {
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



btnNormal.onclick = function() {
    toggle = 1;
    upgtoggle();
}

btnSpecial.onclick = function() {
    if (evolveLVL >= 4 || evolveLVL >= 3 && specialty === "clicker" || evolveLVL >= 3 && specialty === "buyer") {
        toggle = 2;
        upgtoggle();
    }
}

btnRank.onclick = function() {
    if (evolveLVL >= 8 || evolveLVL >= 3 && specialty === "buyer")  {
        toggle = 3;
        upgtoggle();
    }
}


toggleStats.onclick = function() {
    if (stat === 1) {
        stat = 2
    }
    else if (stat === 2) {
        stat = 1
    }

    UpdateUI();
}

//#endregion --- Toggle Systems ---  


    //#region --- Save - Load - Reset ---

function saveGame() {


    const gameState = {
        clicks,
        increasePower,
        increaseAuto,
        increaseEvolve,
        increasePerma,
        evolveLVL,
        achievementsCompleted,
        permapower,
        power,
        autoTimerBought,
        powerprice,
        evoCost,
        newCoin,
        timesClicked,
        tempevoCost,
        freeEvosAllowed,
        CNBought,
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
        pricemultiplier2,
        autoSaveToggle,
        totalPermaClicksBonus,
        coins,
        totalcoins,
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
        totalRankPoints,
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
        lastPlayedTime: Date.now(),


        unlockedAchievements: Array.from(unlockedAchievements),
        claimedAchievements: Array.from(claimedAchievements),
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
        achievementsCompleted = gameState.achievementsCompleted
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
        autoTimerBought = gameState.autoTimerBought;
        CNneededcost = gameState.CNneededcost;
        rank = gameState.rank;
        evolossBought = gameState.evolossBought
        autopower = gameState.autopower;
        freeEvosAllowed = gameState.freeEvosAllowed
        CNBought = gameState.CNBought
        autoprice = gameState.autoprice;
        mystery = gameState.mystery;
        mysteryprice = gameState.mysteryprice;
        powerupgrades = gameState.powerupgrades;
        autoupgrades = gameState.autoupgrades;
        CurrentClickPower = gameState.CurrentClickPower;
        CurrentAutoPower = gameState.CurrentAutoPower;
        priceMultiplier = gameState.priceMultiplier;
        pricemultiplier2 = gameState.pricemultiplier2
        autoSaveToggle = gameState.autoSaveToggle;
        evopower = evolveLVL + 1;
        rankPoints = gameState.rankPoints;
        totalRankPoints = gameState.totalRankPoints
        RPpS = gameState.RPpS;
        clicksMultiplier = gameState.clicksMultiplier;
        autoMultiplier = gameState.autoMultiplier
        coins = gameState.coins;
        totalcoins = gameState.totalcoins
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
        unlockedAchievements.clear();
        claimedAchievements.clear();


        if (gameState.unlockedAchievements && Array.isArray(gameState.unlockedAchievements)) {
            gameState.unlockedAchievements.forEach(id => {
                unlockedAchievements.add(id);
                const btn = document.getElementById(id);
                if (btn) {
                    btn.classList.add("achieved");
                    btn.classList.remove("received");
                }
            });
        }


        if (gameState.claimedAchievements && Array.isArray(gameState.claimedAchievements)) {
            gameState.claimedAchievements.forEach(id => {
                claimedAchievements.add(id);

                unlockedAchievements.delete(id);

                const btn = document.getElementById(id);
                if (btn) {
                    btn.classList.add("received");
                    btn.classList.remove("achieved");
                }
            });
        }

        unlockedAchievements.forEach(id => {
            const btn = document.getElementById(id);
            if (btn && !claimedAchievements.has(id)) {
            btn.classList.add('achieved');
            btn.classList.remove('received');
            }
        });

        claimedAchievements.forEach(id => {
            const btn = document.getElementById(id);
            if (btn) {
            btn.classList.add('received');
            btn.classList.remove('achieved');
            }    
        })

        
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
        setInterval(checkAchievements, 5000);
        checkAchievements()
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
        pricemultiplier2 = 1; 
        CNBought = 0;
        power = 1 ;
        powerprice = 1;
        evoCost = 750;
        tempevoCost = null;
        coinMultiplier = 1;
        freeEvosAllowed = 0
        evoloss = 1
        screenToggle = 1;
        achievementsCompleted = 0;
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
        totalcoins = 0;
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
        totalRankPoints = 0;
        autoTimerBought = 0
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
   

            unlockedAchievements.clear();
            claimedAchievements.clear();

            // Remove achievement classes from buttons
            document.querySelectorAll('#Basic-Achievments button').forEach(btn => {
            btn.classList.remove('achieved', 'received');
            });

            // Remove saved game from localStorage
            localStorage.removeItem("GameState");


        startautoclick();
        startrankpoints();
        updateRank();
        UpdateUI();
        checkAchievements()
        setInterval(checkAchievements, 5000);
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
    if (autoSaveToggle && (evolveLVL !== 3 && specialty === null)) {
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

//#endregion --- Save - Load - Reset ---

    //#region --- Unordened Function ---
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
        let coinsGainedOffline = 0 

        if (CoinACbought === true) {
            coinsGainedOffline = autoClicksPerSecondRate / (coinneeded * 0.66) * timeElapsedS;
        } else {
            coinsGainedOffline = 0;
        }
        

        clicks += Math.round(clicksGainedOffline); 
        allTimePoints += Math.round(clicksGainedOffline)

        coins += Math.round(coinsGainedOffline);
        totalcoins += Math.round(coinsGainedOffline);

        if (maxOffTimeOverlapped === false) {
            Backmessage.innerHTML = "Welcome back! You gained<br> " + formatNumber(Math.round((clicksGainedOffline))) + " clicks and " + Math.round(coinsGainedOffline) + " coins! (time away: " + (timeElapsedS / 60).toFixed(0) + " minutes)"
        } else {
            Backmessage.innerHTML = "Welcome back! You gained<br> " + formatNumber(Math.round((clicksGainedOffline))) + " clicks and " + Math.round(coinsGainedOffline) + " coins! (time away: capped at 4 hours)"
        }


            UpdateUI();
            endgame();


        setTimeout(() => {
        Backmessage.innerHTML = ""
        }, 5000);
    }   
    }
}




if (showChangeLogsButton) {
    showChangeLogsButton.addEventListener("click", function () {
        const changelogPopup = document.getElementById("changelogPopup");
        if (changelogPopup) {
            changelogPopup.style.display = "block";
        }
    });
}

toggleScreenButton.onclick = togglescreen
toggleScreenButton2.onclick = togglescreen

 function togglescreen() {
    if (screenToggle === 1) {
        screenToggle = 2;
        gameScreen.classList.add("hidden")
        achievementScreen.classList.remove("hidden")
    }
    else if (screenToggle === 2) {
        screenToggle = 1;
        gameScreen.classList.remove("hidden")
        achievementScreen.classList.add("hidden")
    }
}



//achievements:
// Click achievements
const click1000 = document.getElementById("click1000");
const click2500 = document.getElementById("click2500");
const click10000 = document.getElementById("click10000");
const click25000 = document.getElementById("click25000");
const click100000 = document.getElementById("click100000");

// Points achievements
const points100000 = document.getElementById("points100000");
const points250000 = document.getElementById("points250000");
const points1000000 = document.getElementById("points1000000");
const points2500000 = document.getElementById("points2500000");
const points10000000 = document.getElementById("points10000000");

// Coins achievements
const coin20 = document.getElementById("coin20");
const coin50 = document.getElementById("coin50");
const coin200 = document.getElementById("coin200");
const coin500 = document.getElementById("coin500");
const coin2000 = document.getElementById("coin2000");

// RankPoints achievements
const rp500 = document.getElementById("rp500");
const rp1250 = document.getElementById("rp1250");
const rp5000 = document.getElementById("rp5000");
const rp12500 = document.getElementById("rp12500");
const rp50000 = document.getElementById("rp50000");

// Evolutions achievements
const evolve3 = document.getElementById("evolve3");
const evolve5 = document.getElementById("evolve5");
const evolve10 = document.getElementById("evolve10");
const evolve15 = document.getElementById("evolve15");
const evolve25 = document.getElementById("evolve25");

//
const click_1000 = 1000;
const click_2500 = 2500;
const click_10000 = 10000;
const click_25000 = 25000;
const click_100000 = 100000;

const points_100000 = 100000;
const points_250000 = 250000;
const points_1000000 = 1000000;
const points_2500000 = 2500000;
const points_10000000 = 10000000;

const coin_20 = 20;
const coin_50 = 50;
const coin_200 = 200;
const coin_500 = 500;
const coin_2000 = 2000;

const rp_500 = 500;
const rp_1250 = 1250;
const rp_5000 = 5000;
const rp_12500 = 12500;
const rp_50000 = 50000;

const evolve_3 = 3;
const evolve_5 = 5;
const evolve_10 = 10;
const evolve_15 = 15;
const evolve_25 = 25;


//
function checkAchievements() {
  // Click achievements
  checkClickAchievement(click1000, allTimeClicks, click_1000);
  checkClickAchievement(click2500, allTimeClicks, click_2500);
  checkClickAchievement(click10000, allTimeClicks, click_10000);
  checkClickAchievement(click25000, allTimeClicks, click_25000);
  checkClickAchievement(click100000, allTimeClicks, click_100000);

  // Points achievements
  checkClickAchievement(points100000, allTimePoints, points_100000);
  checkClickAchievement(points250000, allTimePoints, points_250000);
  checkClickAchievement(points1000000, allTimePoints, points_1000000);
  checkClickAchievement(points2500000, allTimePoints, points_2500000);
  checkClickAchievement(points10000000, allTimePoints, points_10000000);

  // Coins achievements
  checkClickAchievement(coin20, totalcoins, coin_20);
  checkClickAchievement(coin50, totalcoins, coin_50);
  checkClickAchievement(coin200, totalcoins, coin_200);
  checkClickAchievement(coin500, totalcoins, coin_500);
  checkClickAchievement(coin2000, totalcoins, coin_2000);

  // RankPoints achievements
  checkClickAchievement(rp500, totalRankPoints, rp_500);
  checkClickAchievement(rp1250, totalRankPoints, rp_1250);
  checkClickAchievement(rp5000, totalRankPoints, rp_5000);
  checkClickAchievement(rp12500, totalRankPoints, rp_12500);
  checkClickAchievement(rp50000, totalRankPoints, rp_50000);

  // Evolutions achievements
  checkClickAchievement(evolve3, evolveLVL, evolve_3);
  checkClickAchievement(evolve5, evolveLVL, evolve_5);
  checkClickAchievement(evolve10, evolveLVL, evolve_10);
  checkClickAchievement(evolve15, evolveLVL, evolve_15);
  checkClickAchievement(evolve25, evolveLVL, evolve_25);
}

const achievementRewards = {
  // Evolutions: reward in rankPoints = required * 100
  evolve3: () => {
    const reward = 3 * 100;
    rankPoints += reward;
    totalRankPoints += reward;
    alert(`You gained ${reward} RankPoints for 3 evolutions!`);
  },
  evolve5: () => {
    const reward = 5 * 100;
    rankPoints += reward;
    totalRankPoints += reward;
    alert(`You gained ${reward} RankPoints for 5 evolutions!`);
  },
  evolve10: () => {
    const reward = 10 * 100;
    rankPoints += reward;
    totalRankPoints += reward;
    alert(`You gained ${reward} RankPoints for 10 evolutions!`);
  },
  evolve15: () => {
    const reward = 15 * 100;
    rankPoints += reward;
    totalRankPoints += reward;
    alert(`You gained ${reward} RankPoints for 15 evolutions!`);
  },
  evolve25: () => {
    const reward = 25 * 100;
    rankPoints += reward;
    totalRankPoints += reward;
    alert(`You gained ${reward} RankPoints for 25 evolutions!`);
  },

  // Clicks: reward in coins = required / 500
  click1000: () => {
    const reward = 1000 / 500;
    coins += reward;
    totalcoins += reward;
    alert(`You gained ${reward} coins for 1000 clicks!`);
  },
  click2500: () => {
    const reward = 2500 / 500;
    coins += reward;
    totalcoins += reward;
    alert(`You gained ${reward} coins for 2500 clicks!`);
  },
  click10000: () => {
    const reward = 10000 / 500;
    coins += reward;
    totalcoins += reward;
    alert(`You gained ${reward} coins for 10000 clicks!`);
  },
  click25000: () => {
    const reward = 25000 / 500;
    coins += reward;
    totalcoins += reward;
    alert(`You gained ${reward} coins for 25000 clicks!`);
  },
  click100000: () => {
    const reward = 100000 / 500;
    coins += reward;
    totalcoins += reward;
    alert(`You gained ${reward} coins for 100000 clicks!`);
  },

  // Points: reward is 20% of required points → adds to clicks and allTimePoints
  points100000: () => {
    const reward = 100000 * 0.2;
    clicks += reward;
    allTimePoints += reward;
    alert(`You gained ${reward} points for 100,000 points!`);
  },
  points250000: () => {
    const reward = 250000 * 0.2;
    clicks += reward;
    allTimePoints += reward;
    alert(`You gained ${reward} points for 250,000 points!`);
  },
  points1000000: () => {
    const reward = 1000000 * 0.2;
    clicks += reward;
    allTimePoints += reward;
    alert(`You gained ${reward} points for 1,000,000 points!`);
  },
  points2500000: () => {
    const reward = 2500000 * 0.2;
    clicks += reward;
    allTimePoints += reward;
    alert(`You gained ${reward} points for 2,500,000 points!`);
  },
  points10000000: () => {
    const reward = 10000000 * 0.2;
    clicks += reward;
    allTimePoints += reward;
    alert(`You gained ${reward} points for 10,000,000 points!`);
  },

  // Coins: reward is 20% of required coins
  coin20: () => {
    const reward = 20 * 0.2;
    coins += reward;
    totalcoins += reward;
    alert(`You gained ${reward} coins for 20 coins!`);
  },
  coin50: () => {
    const reward = 50 * 0.2;
    coins += reward;
    totalcoins += reward;
    alert(`You gained ${reward} coins for 50 coins!`);
  },
  coin200: () => {
    const reward = 200 * 0.2;
    coins += reward;
    totalcoins += reward;
    alert(`You gained ${reward} coins for 200 coins!`);
  },
  coin500: () => {
    const reward = 500 * 0.2;
    coins += reward;
    totalcoins += reward;
    alert(`You gained ${reward} coins for 500 coins!`);
  },
  coin2000: () => {
    const reward = 2000 * 0.2;
    coins += reward;
    totalcoins += reward;
    alert(`You gained ${reward} coins for 2000 coins!`);
  },

  // RankPoints: reward is 20% of required rankPoints
  rp500: () => {
    const reward = 500 * 0.2;
    rankPoints += reward;
    totalRankPoints += reward;
    alert(`You gained ${reward} RankPoints for 500 RankPoints!`);
  },
  rp1250: () => {
    const reward = 1250 * 0.2;
    rankPoints += reward;
    totalRankPoints += reward;
    alert(`You gained ${reward} RankPoints for 1250 RankPoints!`);
  },
  rp5000: () => {
    const reward = 5000 * 0.2;
    rankPoints += reward;
    totalRankPoints += reward;
    alert(`You gained ${reward} RankPoints for 5000 RankPoints!`);
  },
  rp12500: () => {
    const reward = 12500 * 0.2;
    rankPoints += reward;
    totalRankPoints += reward;
    alert(`You gained ${reward} RankPoints for 12500 RankPoints!`);
  },
  rp50000: () => {
    const reward = 50000 * 0.2;
    rankPoints += reward;
    totalRankPoints += reward;
    alert(`You gained ${reward} RankPoints for 50000 RankPoints!`);
  },
};



function checkClickAchievement(button, currentValue, threshold) {
  if (
    currentValue >= threshold &&
    !button.classList.contains("achieved") &&
    !button.classList.contains("received")
  ) {
    button.classList.add("achieved");
    unlockedAchievements.add(button.id);
  }
}

function setupAchievementClicks() {
  const allButtons = document.querySelectorAll("#Basic-Achievments button");

  allButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("achieved")) {
        claimAchievement(button);
      }
    });
  });
}

function claimAchievement(id) {
    if (unlockedAchievements.has(id) && !claimedAchievements.has(id)) {
        unlockedAchievements.delete(id);
        claimedAchievements.add(id);
        const btn = document.getElementById(id);
        if (btn) {
            btn.classList.remove("achieved");
            btn.classList.add("received");
        }
    }
}

let achievementsCompleted = 0;

function setupAchievementButtons() {
  document.querySelectorAll('#Basic-Achievments button').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.id;

      if (unlockedAchievements.has(id) && !claimedAchievements.has(id)) {

        claimedAchievements.add(id);

        btn.classList.remove('achieved');
        btn.classList.add('received');

        //trigger award
        if (achievementRewards[id]) {
          achievementRewards[id]();
        }
        achievementsCompleted ++;

      }
    });
  });
}
//#endregion --- Unordened Function ---


//#endregion --- Functions ---


//#region --- Starting Functions ---
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
checkAchievements();
setInterval(checkAchievements, 5000);
setupAchievementButtons();
//#endregion --- Starting Functions ---