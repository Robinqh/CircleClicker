//#region --- Functions ---
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

    let rawPowerPrice = (15 * powerupgrades + increasePower) * priceMultiplier;
    let rawAutoPrice  = (37.5 * autoupgrades + increaseAuto) * priceMultiplier;
    let roundingFactorPower;
    let roundingFactorAuto;

    if (rawPowerPrice < 10000) {
        roundingFactorPower = 1;
    } else if (rawPowerPrice >= 10000 && rawPowerPrice < 75000) {
        roundingFactorPower = 100;
    } else if (rawPowerPrice >= 75000 && rawPowerPrice < 250000) {
        roundingFactorPower = 250;
    } else if (rawPowerPrice >= 250000 && rawPowerPrice < 2500000) {
        roundingFactorPower = 5000;
    } else if (rawPowerPrice >= 2500000 && rawPowerPrice < 10000000) {
        roundingFactorPower = 100000;
    } else {
        roundingFactorPower = 500000;
    }

    if (rawAutoPrice < 10000) {
        roundingFactorAuto = 5;
    } else if (rawAutoPrice >= 10000 && rawAutoPrice < 75000) {
        roundingFactorAuto = 250;
    } else if (rawAutoPrice >= 75000 && rawAutoPrice < 250000) {
        roundingFactorAuto = 1000;
    } else if (rawAutoPrice >= 250000 && rawAutoPrice < 2500000) {
        roundingFactorAuto = 25000;
    } else if (rawAutoPrice >= 2500000 && rawAutoPrice < 10000000) {
        roundingFactorAuto = 100000;
    } else {
        roundingFactorAuto = 500000;
    }

    powerprice = Math.round(rawPowerPrice / roundingFactorPower) * roundingFactorPower;
    autoprice  = Math.round(rawAutoPrice / roundingFactorAuto) * roundingFactorAuto;



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
        let pointsGain = Math.floor(clicks * 0.01); 
        let millions = Math.floor(pointsGain / 500000);
        ExchangeCost = 20 + (10 * millions);
        ExchangeCost = Math.round(ExchangeCost * pricemultiplier2);
    }
    if (ExtraMGCost != null) {
        ExtraMGCost = 2500 + (2500 * maxMGupgradesBoughtRP)
        ExtraMGCost = Math.round(ExtraMGCost * pricemultiplier2)
    }
    if (OfflineRPCost != null) {
        OfflineRPCost = 5000
        OfflineRPCost = Math.round(OfflineRPCost * pricemultiplier2)
    }
    if (ELMcost !== null) {
        ELMcost = 15 + (15 * evolossBought)
        ELMcost = Math.round(ELMcost *pricemultiplier2)
    }
    if (ExtraMaxPermaPowerCost !== null) {
        ExtraMaxPermaPowerCost = 300 + (300 * coinBoughtMaxPermaPower)
        ExtraMaxPermaPowerCost = Math.round(ExtraMaxPermaPowerCost * pricemultiplier2)
    }
    if (FreePowerPrice !== null) {
        FreePowerPrice = 250 + (250 * extraFreePower)
        FreePowerPrice = Math.round(FreePowerPrice * pricemultiplier2)
    }
    if (FreeAutoPrice !== null) {
        FreeAutoPrice = 500 + (500 * extraFreeAuto)
        FreeAutoPrice = Math.round(FreeAutoPrice * pricemultiplier2)
    }
    if (autotimerCost != null) {
        autotimerCost = 45 + (autoTimerBought * 30)
        autotimerCost = Math.round(autotimerCost * pricemultiplier2);
    }
    if (reduceMysterycost != null) {
        reduceMysterycost = 150 + (75 * maxMGupgradesBought)
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

    if (soundToggle) {
    const clickSoundInstance = new Audio(clickSound.src);
    clickSoundInstance.play();
    }
    
    circle.addEventListener('pointerdown', () => {
    circle.classList.add('tapped');
        setTimeout(() => {
            circle.classList.remove('tapped');
        }, 150)});


    if (timesClicked == newCoin) {
        coins += coinMultiplier * 15;
        totalcoins += coinMultiplier * 15;
        timesClicked = 0;
        newCoin = Math.floor(Math.random() * coinneeded) + 1;
        neededClicks = newCoin - timesClicked;

        showPopup("popupNC", "New Coins!", 2000)
    }

priceChanges();
UpdateUI();
}

//#endregion --- Circle ---


    //#region --- Progress Bar ---
function updateProgressBar() {
    let statusbarPercent = 0;
    const neededUpgrades = evolveLVL * 5 - upgradesBoughtThisEvo;

    const upgradesDone = neededUpgrades <= 0;
    const evoCompleted = evogoalcompleted;
    const readyToEvolve = mainEvoGoalCompleted; 

    if (evogoal === "None") {
        if ((evolveLVL > 0 && upgradesDone) || (evolveLVL === 0 && upgradesBoughtThisEvo >= 3)) {
            statusbarPercent += 50;
        }
        if (readyToEvolve) {
            statusbarPercent += 50;
        }
    } else {
        if (upgradesDone && evolveLVL > 0) statusbarPercent += 33;
        if (evolveLVL === 0 && upgradesBoughtThisEvo >= 3) statusbarPercent += 33;
        if (evoCompleted) statusbarPercent += 33;
        if (readyToEvolve) statusbarPercent += 34;
    }

    document.getElementById("progress-bar").style.width = statusbarPercent + "%";

    if (evolveLVL < 25 && (evogoal === false || evogoal === "None")) {
        document.getElementById("progress-text").innerHTML = "No Optional Evogoal Available";
    } else if (evolveLVL > 25) {
        document.getElementById("progress-text").innerHTML = "All Optional Evogoals Passed!";
    }
    else if (evoCompleted) {
        document.getElementById("progress-text").innerHTML = "EvoGoal achieved";
    } else {
        document.getElementById("progress-text").innerHTML = "Optional EvoGoal: " + evogoal;
    }
}


  


//#endregion --- Progress Bars ---


    //#region --- Clicker, Auto, and Perma upgrade ---
powerupgrade.onclick = function(){
        if (clicks >= powerprice) {
            clicks -= powerprice;
            powerupgrades += 1;

            if (upgradesSinceLastMEGA === 15) {
                power += 5 * evopower
                powerupgradeButton.classList.remove("MEGA")

                showPopup('otherPopUps', "MEGA-upgrade bought", 2000);

                const effect = document.getElementById('megaEffect');
                effect.style.animation = 'MEGALINK 1.5s forwards ease-out';

                setTimeout(() => {
                effect.style.animation = 'none';
                }, 3100);

            } else {
                power += 1 * evopower
            }
            
            upgradesBoughtThisEvo ++
            increasePower *= 1.15;
            upgradesSinceLastMEGA += 1;

            if (upgradesSinceLastMEGA > 15) {
                upgradesSinceLastMEGA = 0;
            }

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
            increaseAuto *= 1.15;

        if (upgradesSinceLastMEGA === 15) {
                autopower += 5 * evopower
                powerupgradeButton.classList.remove("MEGA")

                showPopup('otherPopUps', "MEGA-upgrade bought", 2000);

                const effect = document.getElementById('megaEffect');
                effect.style.animation = 'MEGALINK 1.5s forwards ease-out';

                setTimeout(() => {
                effect.style.animation = 'none';
                }, 3100);

            } else {
                autopower += 1 * evopower
            }

            upgradesBoughtThisEvo ++ 
            upgradesSinceLastMEGA ++;

            if (upgradesSinceLastMEGA > 15) {
                upgradesSinceLastMEGA = 0;
            }


            priceChanges();
            UpdateUI();
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
        return;
    } else if (clicks >= mysteryprice) {
        mystery = Math.random();
        mgBought += 1;

        if (mystery < 0.4) { 
            clicksgained = Math.round(clicks);
            clicks += clicksgained;
            allTimePoints += clicksgained;
            rewardMessage = "Points Doubled!";
            clicksgained = null;
        } 
        else if (mystery < 0.50) { 
            clicksgained = Math.round(clicks * 2); 
            clicks += clicksgained;
            allTimePoints += clicksgained;
            rewardMessage = "Points times 3!";
            clicksgained = null;
        } 
        else if (mystery < 1) { 
            clicks -= mysteryprice;
            rewardMessage = "No reward";
        } 

        showPopup("popupmysterygift", rewardMessage, 2500);

        if (maxMGperEvo === mgBought) {
            mysteryprice = null;
        }

        UpdateUI();
        saveGame();
        priceChanges();
    }
}
//#endregion --- Mystery Gifts ---





    //#region --- Auto Systems ---
function updateAuto() {
        clicks += autopower * autoMultiplier;
        allTimePoints += autopower * autoMultiplier
        clicks = Math.round(clicks);
        if (autopower !== 0) {
            allTimeClicks ++
        }


        if (CoinACbought === true) {
            timesClicked += 1;
            neededClicks = newCoin-timesClicked
     
if (timesClicked == newCoin) {
    coins += coinMultiplier * 15;
    totalcoins += coinMultiplier * 15;
    timesClicked = 0;
    newCoin = Math.floor(Math.random() * coinneeded) + 1;
    neededClicks = newCoin - timesClicked;

    showPopup("popupNC", "New Coins!", 2000)
}
        }
    priceChanges();
    UpdateUI();
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
        totalExtraEvoloss += 0.05;
        evolossBought += 1;

        
        UpdateUI ();
        priceChanges();
        updateRank();

        if (evolossBought >= 5) {
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
        totalAutoclickTimeReductionBonus += 50;
        autoTimerBought ++;

        startautoclick();
        UpdateUI();
        updateRank();
        priceChanges();

        if (autoclick <= 350 && specialty !== "offliner") {
            autotimerCost = null;
            autoclick = 333;
        } else if (autoclick <= 200) {
            autotimerCost = null;
            autoclick = 200;
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
    maxMGperEvo += 1
    maxMGupgradesBought += 1
    totalExtraMGs += 1
    }

    if (maxMGupgradesBought >= 3) {
        reduceMysterycost = null; //old variable name but still works
    }

     UpdateUI(); 
     priceChanges();  
     updateRank();
}

ExtraMaxPermaPower.onclick = function() {
    if (ExtraMaxPermaPowerCost === null) {
        return
    } 

    if (coins >= ExtraMaxPermaPowerCost) {
        coins -= ExtraMaxPermaPowerCost
        coinBoughtMaxPermaPower += 1
    }

    if (coinBoughtMaxPermaPower === 5) {
        ExtraMaxPermaPowerCost = null;
    }

     UpdateUI(); 
     priceChanges();  
     updateRank();
}

FreePower.onclick = function() {
    if (FreePowerPrice === null) {
        return
    }

    if (coins >= FreePowerPrice) {
        coins -= FreePowerPrice
        extraFreePower += 1
    }

    if (extraFreePower === 3) {
        FreePowerPrice = null
    }

     UpdateUI(); 
     priceChanges();  
     updateRank();
}

FreeAuto.onclick = function() {
    if (FreeAutoPrice === null) {
        return
    }

    if (coins >= FreeAutoPrice) {
        coins -= FreeAutoPrice
        extraFreeAuto += 1
    }

    if (extraFreeAuto === 3) {
        FreeAutoPrice = null
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

OfflineRP.onclick = function() {
    if (rankPoints >= OfflineRPCost) {
        rankPoints -= OfflineRPCost;
        offlineRPBought = true;
        OfflineRPCost = null
    }
    priceChanges()
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
        let clicksgained = Math.round(clicks * 0.01);


        clicks += clicksgained;
        allTimePoints += clicksgained; // clicks and points are used interchangeably

        showPopup("exchangeMessage", "You gained " + clicksgained + " clicks!", 2500 )

        clicksgained = 0;

        UpdateUI();
        priceChanges();
    }
};

ExtraMG.onclick = function() { //old variable name but still works 
    if (ExtraMGCost === null) {
        return; 
    }


    if (rankPoints >= ExtraMGCost) {  //old variable name but still works
    rankPoints -= ExtraMGCost; //old variable name but still works
    maxMGperEvo += 1
    maxMGupgradesBoughtRP += 1
    totalExtraMGs += 1
    }

    if (maxMGupgradesBoughtRP >= 3) {
        ExtraMGCost = null; //old variable name but still works
    }

     UpdateUI(); 
     priceChanges();  
     updateRank();
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

    UpdateShopUI();
}



btnNormal.onclick = function() {
    toggle = 1;
    upgtoggle();
}

btnSpecial.onclick = function () {
    if ((evolveLVL >= 4 || (evolveLVL >= 3 && (specialty === "clicker" || specialty === "buyer"))) && toggle !== 2) {
        toggle = 2;
        groupNumber = 2
        upgtoggle();
    }
    if (toggle === 2) {
        if (groupNumber === 1) {
            groupNumber = 2
        } else {
            groupNumber = 1
        }

        if (groupNumber === 1) {
            coinShop1.classList.remove('hidden-upgrades');
            coinShop2.classList.add('hidden-upgrades');
        } else if (groupNumber === 2) {
            coinShop1.classList.add('hidden-upgrades');
            coinShop2.classList.remove('hidden-upgrades');
        }
    }
};

btnRank.onclick = function () {
    if ((evolveLVL >= 8 || (evolveLVL >= 3 && (specialty === "buyer" || specialty === "offliner"))) && toggle !== 3) {
        toggle = 3;
        groupNumber = 4;
        upgtoggle();
    }
    if (toggle === 3) {
        if (groupNumber === 3) {
            groupNumber = 4;
        } else {
            groupNumber = 3;
        }

        if (groupNumber === 3) {
            rankShop1.classList.remove('hidden-upgrades');
            rankShop2.classList.add('hidden-upgrades');
        } else if (groupNumber === 4) {
            rankShop1.classList.add('hidden-upgrades');
            rankShop2.classList.remove('hidden-upgrades');
        }
    }
};


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





    //#region --- Offline Logic ---

function OfflineProgress() { 
    if (lastPlayedTime) {
        if (Offlinebought === true) {
            const currentTime = Date.now();
            let timeElapsedMs = currentTime - lastPlayedTime;
            let maxOffTimeOverlapped = false;

            let timeElapsedS = timeElapsedMs / 1000;

            if (timeElapsedS >= maxOffTime) {
                timeElapsedS = maxOffTime;
                maxOffTimeOverlapped = true;
            }

            const autoClicksPerSecondRate = autoclick > 0 ? (1000 / autoclick) : 0;
            const clicksGainedOffline = autopower * autoClicksPerSecondRate * autoMultiplier * timeElapsedS * multiplier2;
            let coinsGainedOffline = 0;

            if (CoinACbought === true) {
                coinsGainedOffline = autoClicksPerSecondRate / (coinneeded * 0.66) * timeElapsedS * multiplier2 * 15;
            } else {
                coinsGainedOffline = 0;
            }

            let RPGainedOffline = 0
            
            if (offlineRPBought === true) {
                RPGainedOffline = Math.round(RPpS * timeElapsedS) 
            } else {
                RPGainedOffline = 0
            }
            
            clicks += Math.round(clicksGainedOffline); 
            allTimePoints += Math.round(clicksGainedOffline);
            allTimeClicks += Math.round(autoClicksPerSecondRate * timeElapsedS)
            rankPoints += Math.round(RPGainedOffline)

            coins += Math.round(coinsGainedOffline);
            totalcoins += Math.round(coinsGainedOffline);

            const backmessagePopup = document.getElementById('backmessage');
            if (backmessagePopup) {
                if (!maxOffTimeOverlapped) {
                    backmessagePopup.innerHTML = `Welcome back! You gained<br> ${formatNumber(Math.round(clicksGainedOffline))} clicks, ${Math.round(coinsGainedOffline)} coins and ${Math.round(RPGainedOffline)} RankPoints! (time away: ${(timeElapsedS / 60).toFixed(0)} minutes)`;
                } else {
                    backmessagePopup.innerHTML = `Welcome back! You gained<br> ${formatNumber(Math.round(clicksGainedOffline))} clicks, ${Math.round(coinsGainedOffline)} coins and ${Math.round(RPGainedOffline)} RankPoints! (time away: capped by max offline time!)`;
                }
                backmessagePopup.classList.remove('hidden');
                backmessagePopup.classList.add('show');

                setTimeout(() => {
                    backmessagePopup.classList.remove('show');
                    backmessagePopup.classList.add('hidden');
                    backmessagePopup.innerHTML = "";
                }, 5000);
            }

            UpdateUI();
        }   
    }
}

//#endregion --- Offline Logic ---


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



toggleScreenButton.onclick = togglescreen
toggleScreenButton2.onclick = togglescreen

 function togglescreen() {
    if (screenToggle === 1) {
        screenToggle = 2;
        gameScreen.classList.add("hidden")
        achievementScreen.classList.remove("hidden")
        sidelineLeft.classList.add("hidden")
        sidelineRight.classList.add("hidden")
      
    }
    else if (screenToggle === 2) {
        screenToggle = 1;
        gameScreen.classList.remove("hidden")
        achievementScreen.classList.add("hidden")
        sidelineLeft.classList.remove("hidden")
        sidelineRight.classList.remove("hidden")

    }
}


function backgroundMusic() {
    if (musicToggle) {
        backgroundSong.play();
    } else {
        backgroundSong.pause();
    }
}


    //#region --- PopUps ---

function showPopup(popupId, message, duration = 3000) {
  const popup = document.getElementById(popupId);
  if (!popup) return;

  if (popup.hideTimeout) {
    clearTimeout(popup.hideTimeout);
  }

  popup.innerText = message;
  popup.classList.remove('hidden');
  popup.classList.add('show');

  if (soundToggle) {
    popupSound.play();
  }

  popup.hideTimeout = setTimeout(() => {
    popup.classList.remove('show');
    popup.classList.add('hidden');
    popup.innerText = '';
    popup.hideTimeout = null;
  }, duration);
}

//#endregion --- PopUps ---


    //#region --- Change Screens ---

backToGameScreen.onclick = function() {
    gameScreen.classList.remove("hidden")
    OGVERSIONScreen.classList.add("hidden")
    sidelineLeft.classList.remove("hidden")
    sidelineRight.classList.remove("hidden")
    settings.classList.add("hidden")
    styleSheet.disabled = false;
    styleSheetOG.disabled = true;

    if (!ogModeFound) {
        showPopup("otherPopUps", "OG-MODE found, +15% clicksmultiplier!", 3000)
        extraClickMultiplier += 0.15;
        ogModeFound = true; 
        priceChanges();
        UpdateUI();
        updateRank();
    }
}

leaveSettings.onclick = function() {
    gameScreen.classList.remove("hidden")
    OGVERSIONScreen.classList.add("hidden")
    sidelineLeft.classList.remove("hidden")
    sidelineRight.classList.remove("hidden")
    settings.classList.add("hidden")
    styleSheet.disabled = false;
    styleSheetOG.disabled = true;

}

//#endregion --- Change Screens ---


    //#region --- Settings ---


    settingsScreen.onclick = function() {
        gameScreen.classList.add("hidden")
        OGVERSIONScreen.classList.add("hidden")
        sidelineLeft.classList.add("hidden")
        sidelineRight.classList.add("hidden")
        settings.classList.remove("hidden")
    }

//#endregion --- Settings ---



//#endregion --- Unordened Function ---



//#endregion --- Functions ---


//#region --- Starting Functions ---
priceChanges();
upgtoggle();
startautoclick();
startrankpoints();
autosave();
FirstLoadGame();
OfflineProgress(); 
UpdateShopUI();
updateRank();
backgroundMusic();
UpdateUI();
checkAchievements();
setInterval(checkAchievements, 5000);
setupAchievementButtons();
//#endregion --- Starting Functions ---