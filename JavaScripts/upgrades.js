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

function smartRound(value) {
    if (value > 250) {
        return Math.round(value / 10) * 10; 
    } else {
        return Math.round(value / 5) * 5;   
    }
}

if (CoinACcost != null) {
    CoinACcost = 3000;
    CoinACcost = smartRound(CoinACcost * pricemultiplier2);
}
if (Offlinecost != null) {
    Offlinecost = 750;
    Offlinecost = smartRound(Offlinecost * pricemultiplier2);
}
if (CNneededcost != null) {
    CNneededcost = 500 + (CNBought * 250);
    CNneededcost = smartRound(CNneededcost * pricemultiplier2);
}
if (ExchangeCost != null) {
    let pointsGain = Math.floor(clicks * 0.01); 
    let millions = Math.floor(pointsGain / 500000);
    ExchangeCost = 20 + (10 * millions);
    ExchangeCost = smartRound(ExchangeCost * pricemultiplier2);
}
if (ExtraMGCost != null) {
    ExtraMGCost = 2500 + (2500 * maxMGupgradesBoughtRP);
    ExtraMGCost = smartRound(ExtraMGCost * pricemultiplier2);
}
if (OfflineRPCost != null) {
    OfflineRPCost = 5000;
    OfflineRPCost = smartRound(OfflineRPCost * pricemultiplier2);
}
if (ELMcost !== null) {
    ELMcost = 15 + (15 * evolossBought);
    ELMcost = smartRound(ELMcost * pricemultiplier2);
}
if (ExtraMaxPermaPowerCost !== null) {
    ExtraMaxPermaPowerCost = 300 + (300 * coinBoughtMaxPermaPower);
    ExtraMaxPermaPowerCost = smartRound(ExtraMaxPermaPowerCost * pricemultiplier2);
}
if (FreePowerPrice !== null) {
    FreePowerPrice = 250 + (250 * extraFreePower);
    FreePowerPrice = smartRound(FreePowerPrice * pricemultiplier2);
}
if (FreeAutoPrice !== null) {
    FreeAutoPrice = 500 + (500 * extraFreeAuto);
    FreeAutoPrice = smartRound(FreeAutoPrice * pricemultiplier2);
}
if (autotimerCost != null) {
    autotimerCost = 45 + (autoTimerBought * 30);
    autotimerCost = smartRound(autotimerCost * pricemultiplier2);
}
if (reduceMysterycost != null) {
    reduceMysterycost = 150 + (75 * maxMGupgradesBought);
    reduceMysterycost = smartRound(reduceMysterycost * pricemultiplier2);
}


    UpdateUI();
}

//#endregion --- Price Fixing ---


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

            totalPermaClicksBonus += 0.1;

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








