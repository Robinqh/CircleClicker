//this script contains the save/load/reset system as well as the changelog system (which should be placed somewhere else TBH)

function saveGame() {

    gamesaved = true

    const gameState = {
        clicks,
        upgradesBoughtThisEvo, 
        gamesaved,
        increasePower,
        coinBoughtMaxPermaPower,
        increaseAuto,
        increaseEvolve,
        increasePerma,
        totalExtraMGs,
        evolveLVL,
        achievementsCompleted,
        permapower,
        power,
        autoTimerBought,
        powerprice,
        newCoin,
        timesClicked,
        freeEvosAllowed,
        CNBought,
        CNBought,
        rank,
        FreeAutoPrice,
        ExtraMGCost,
        autopower,
        autoupgrade,
        autoprice,
        mysteryprice,
        mystery,
        powerupgrades,
        autoupgrades,
        evolossBought,
        upgradesSinceLastMEGA,
        totalExtraEvoloss,
        priceMultiplier,
        pricemultiplier2,
        autoSaveToggle,
        soundToggle,
        musicToggle,
        totalPermaClicksBonus,
        extraClickMultiplier,
        coins,
        totalcoins,
        evoloss,
        ogModeFound,
        offlineRPBought,
        ELMcost,
        autoclick,
        autotimerCost,
        reduceMysterycost,
        mgBought,
        maxMGperEvo,
        maxMGupgradesBought,
        CNneededcost,
        clicksMultiplier,
        autoMultiplier,
        rankPoints,
        extraFreePower,
        extraFreeAuto,
        totalRankPoints,
        RPpS,
        Offlinebought,
        Offlinecost,
        FreePowerPrice,
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
    const savedGameState = localStorage.getItem("GameState");
    const saveExists = savedGameState && savedGameState.trim() !== "";

    if (!firstload) {
        loadPopUp.style.display = 'block';
        loadPopUp.classList.remove("hidden");

        cancelload.onclick = function () {
            loadPopUp.style.display = 'none';
            loadPopUp.classList.add("hidden");
        };

        confirmload.onclick = function () {
            loadPopUp.style.display = 'none';
            loadPopUp.classList.add("hidden");

            if (saveExists) {
                loadgamePart2(savedGameState);
            } else {
                showPopup("otherPopUps", "No Save Found!", 2500);
            }
        };

    } else {
        if (saveExists) {
            loadgamePart2(savedGameState);
        }
    }
}

function loadgamePart2() {
    const savedGameState = localStorage.getItem("GameState");

        const gameState = JSON.parse(savedGameState);

        gamesaved = gameState.gamesaved
        evoloss = gameState.evoloss;
        clicks = gameState.clicks;
        increasePower = gameState.increasePower;
        achievementsCompleted = gameState.achievementsCompleted
        increaseAuto = gameState.increaseAuto;
        increaseEvolve = gameState.increaseEvolve;
        maxMGupgradesBought = gameState.maxMGupgradesBought;
        totalExtraMGs = gameState.totalExtraMGs
        FreeAutoPrice = gameState.FreeAutoPrice
        ExtraMGCost = gameState.ExtraMGCost
        coinBoughtMaxPermaPower = gameState.coinBoughtMaxPermaPower 
        increasePerma = gameState.increasePerma;
        extraFreeAuto = gameState.extraFreeAuto
        extraFreePower = gameState. extraFreePower
        evolveLVL = gameState.evolveLVL;
        offlineRPBought = gameState.offlineRPBought;
        permapower = gameState.permapower;
        power = gameState.power;
        powerprice = gameState.powerprice;
        autoTimerBought = gameState.autoTimerBought;
        CNneededcost = gameState.CNneededcost;
        FreePowerPrice = gameState.FreePowerPrice
        rank = gameState.rank;
        CNBought = gameState.CNBought;
        upgradesBoughtThisEvo = gameState.upgradesBoughtThisEvo
        totalExtraEvoloss = gameState.totalExtraEvoloss
        evolossBought = gameState.evolossBought
        autopower = gameState.autopower;
        freeEvosAllowed = gameState.freeEvosAllowed
        CNBought = gameState.CNBought
        autoprice = gameState.autoprice;
        mystery = gameState.mystery;
        mysteryprice = gameState.mysteryprice;
        powerupgrades = gameState.powerupgrades;
        autoupgrades = gameState.autoupgrades;
        priceMultiplier = gameState.priceMultiplier;
        pricemultiplier2 = gameState.pricemultiplier2
        autoSaveToggle = gameState.autoSaveToggle;
        soundToggle = gameState.soundToggle
        musicToggle = gameState.musicToggle
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
        Offlinecost = gameState.Offlinecost;
        Offlinebought = gameState.Offlinebought;
        coinneeded = gameState.coinneeded;
        allTimeClicks = gameState.allTimeClicks;
        allTimePoints = gameState.allTimePoints;
        multiplier2 = gameState.multiplier2;
        quartered = gameState.quartered;
        specialty = gameState.specialty
        ogModeFound = gameState.ogModeFound
        totalPermaClicksBonus = gameState.totalPermaClicksBonus
        extraClickMultiplier = gameState.extraClickMultiplier
        totalAutoclickTimeReductionBonus = gameState.totalAutoclickTimeReductionBonus
        maxPermaPower = gameState.maxPermaPower
        coinMultiplier = gameState.coinMultiplier
        upgradesSinceLastMEGA = gameState.upgradesSinceLastMEGA
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


        ExchangeCost = 20;
        neededClicks = newCoin - timesClicked;
        
        if (mgBought === maxMGperEvo) {
            mysteryprice = null;
        }

        firstload = false;
       

        toggle = 1;
        upgtoggle();
      
        startautoclick();
        startrankpoints();
        updateRank();
        UpdateShopUI();
        UpdateUI();
        priceChanges();
        setInterval(checkAchievements, 5000);
        checkAchievements()

        showPopup("otherPopUps", "Save loaded!", 2500);
}


const resetAupdate = document.getElementById("resetAupdate")
const changelogPopup = document.getElementById("changelogPopup")

if (showChangeLogsButton) {
    showChangeLogsButton.addEventListener("click", function () {
        const changelogPopup = document.getElementById("changelogPopup");
        if (changelogPopup) {
            changelogPopup.style.display = "block";
            changelogPopup.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
}

resetAupdate.onclick = function() {
        resetGame();
        closeChangelog();
    }

function closeChangelog() {
    changelogPopup.style.display = 'none';   
    localStorage.setItem('cc_changelog_V12.3', 'seen');  // Change on new updates
}

const changelogVersion = "V12.3"; // Change on new updates
window.addEventListener('load', () => {
if (localStorage.getItem('cc_changelog_V12.3') === 'seen') { // Change on new updates
    const popup = document.getElementById('changelogPopup');
    if (popup) popup.style.display = 'none';
    }
});


function resetGame() {


    resetPopUp.style.display = 'block';
    resetPopUp.classList.remove("hidden");

    cancelreset.onclick = function() {
        resetPopUp.style.display = 'none';
        resetPopUp.classList.add("hidden");
        return
    }
    confirmreset.onclick = function() {
        resetPopUp.style.display = 'none';
        resetPopUp.classList.add("hidden");
     
        order66activated = false;
        statusbarPercent = 0;
        clicks = 0;
        increasePower = 1;
        increaseAuto = 50;
        increaseEvolve = 500;
        increasePerma = 2500;
        evolveLVL = 0;
        evopower = 1;
        permapower = 0;
        priceMultiplier = 1;
        evogoal = null;
        evogoalcompleted = false;
        upgradesBoughtThisEvo = 0;
        CNBought = false;
        pricemultiplier2 = 1; 
        extraFreeAuto = 0
        extraFreePower = 0
        offlineRPBought = false
        coinBoughtMaxPermaPower = 0;
        CNBought = 0;
        power = 1 ;
        powerprice = 1;
        coinMultiplier = 1;
        freeEvosAllowed = 0
        evoloss = 1
        screenToggle = 1;
        toggle = 1;
        groupNumber = null;
        achievementsCompleted = 0;
        evolossBought = 0;
        totalExtraEvoloss = 0;
        autopower = 0 ;
        autoprice = 25;
        upgradesSinceLastMEGA = 0;
        mysteryprice = 1000
        gamesaved = false
        mystery = Math.random();
        powerupgrades = 0;
        CNneededcost = 500;
        autoupgrades = 0;
        coins = 0;
        totalcoins = 0;
        isSpecialShop = false;
        ELMcost = 15;
        ogModeFound = false
        autoclick = 750;
        totalPermaClicksBonus = 0
        extraClickMultiplier = 0
        FreePowerPrice = 250;
        FreeAutoPrice = 500;
        ExtraMGCost = 2500
        autotimerCost = 45;
        newCoin = 150
        timesClicked = 0;
        reduceMysterycost = 150;
        mgBought = 0;
        maxMGperEvo = 1;
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
        multiplier2 = 0.1;
        ExchangeCost = 20;
        quartered = false;
        maxMGupgradesBought = 0;
        totalExtraMGs = 0;
        mayEvolve = null;
        mainEvoGoalCompleted = false;
        maxPermaPower = 0
   

            unlockedAchievements.clear();
            claimedAchievements.clear();

            // Remove achievement classes from buttons
            document.querySelectorAll('#Basic-Achievments button').forEach(btn => {
            btn.classList.remove('achieved', 'received');
            });

            // Remove saved game from localStorage
            localStorage.removeItem("GameState");

        
        upgtoggle();
        priceChanges();
        startautoclick();
        startrankpoints();
        updateRank();
        UpdateUI();
        UpdateShopUI();
        checkAchievements()
    } 
}


toggleAutoSave.onclick = function() {
    autoSaveToggle = !autoSaveToggle;
    autosave();
    UpdateUI();
}

toggleSound.onclick = function() {
    soundToggle = !soundToggle;
    UpdateUI(); 
}

toggleMusic.onclick = function() {
    musicToggle = !musicToggle
    backgroundMusic();
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
  if (autosaveMessageFlag === 1) {
    showPopup('popupAutoSave', 'Game Saved', 3000);
    autosaveMessageFlag = 0;
  }
}


saveGameButton.onclick = saveGame;
loadGameButton.onclick = loadGame;
resetGameButton.onclick = resetGame;
