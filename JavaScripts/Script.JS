



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

    powerprice = Math.round(15 * powerupgrades + increasePower);
    powerprice = Math.round(powerprice * priceMultiplier);
    powerprice = Math.round(powerprice / 1) * 1;

    autoprice = Math.round(37.5 * autoupgrades + increaseAuto);
    autoprice = Math.round(autoprice * priceMultiplier);
    autoprice = Math.round(autoprice / 5) * 5;



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
        ExchangeCost = 20;
        ExchangeCost = Math.round(ExchangeCost * pricemultiplier2);
    }
    if (ELMcost !== null) {
        ELMcost = 15 + (15 * evolossBought)
        ELMcost = Math.round(ELMcost *pricemultiplier2)
    }
    if (ExtraMaxPermaPowerCost !== null) {
        ExtraMaxPermaPowerCost = 300 + (300 * coinBoughtMaxPermaPower)
        ExtraMaxPermaPowerCost = Math.round(ExtraMaxPermaPowerCost * pricemultiplier2)
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

if (upgradesDone && evolveLVL > 0) statusbarPercent += 33;
    if (evolveLVL === 0 && upgradesBoughtThisEvo >= 3) {
        statusbarPercent += 33;
    }

if (evogoal === "None" && (evolveLVL === 3 && specialty !== null)|| evoCompleted ) {
  statusbarPercent += 33;
}

if (readyToEvolve) statusbarPercent += 34;

document.getElementById("progress-bar").style.width = statusbarPercent + "%";

if (evogoal === false || evogoal === "None") {
  document.getElementById("progress-text").innerHTML = "No Evogoal Available";
} else if (evoCompleted) {
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
        else if (mystery < 0.55) { 
            clicksgained = Math.round(clicks * 4); 
            clicks += clicksgained;
            allTimePoints += clicksgained;
            rewardMessage = "Points times 5!";
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




    //#region --- Evolve System ---
    //Fix the indents!



let order66activated = false
evolve.onclick = function() {
if (mayEvolve === true && !(evolveLVL === 3 && specialty === null)) {

if (mayEvolve && evolveLVL === 0 && allTimePoints === 66) {
    showPopup('otherPopUps', '🟥 EXECUTE ORDER 66\n\nYou feel a disturbance in the clicking force...\n\n– Click & Autopower +66% (after evo-1)\n\nUse this gift wisely, Commander.', 5000);
    const effect = document.getElementById('order66Effect');

    effect.style.animation = 'order66Blink 1.2s ease-out';


    order66activated = true
    setTimeout(() => {
        effect.style.animation = 'none';
    }, 1300);


}

    document.getElementById('evolved').style.display = 'block';
    largePopUps.style.display = 'block';
    largePopUps.classList.remove("hidden");
    confirmEvolvePopup.classList.remove("hidden");
    evolvedPopUp.style.display = "none";
  } 

  if (mayEvolve === true && evolveLVL === 3 && specialty === null) {
    largePopUps.style.display = 'block';
    largePopUps.classList.remove("hidden");
    executeEvolutionLogic()
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


    if (evolveLVL === 3 && specialty === null) {
        message.innerHTML = `Choose your speciality:<br>
        - <strong>Clicker:</strong> specializes in clicking and coins — Coin Multiplier += 1, opens up Coin Shop<br>
        - <strong>Offliner:</strong> specializes in autoclickers and offline time — activates Offline and Coin Autoclicker<br>
        - <strong>Buyer:</strong> specializes in cheap upgrades — unlocks price multipliers for Coin Shop and Rank Shop (starts at -20%), +0.05 RPpS, and all shops/upgrades<br>
        - <strong>Evolver:</strong> specializes in evolving and evoloss — lowers minimum evoloss and starts with a much lower evoloss`;


        evolvedPopUp.style.display = "block";
        choose.classList.remove("hidden")
        offlinerSpecialty.classList.remove("hidden")
        clickerSpecialty.classList.remove("hidden")
        buyerSpeciality.classList.remove("hidden")
        evolverSpeciality.classList.remove("hidden")
    } 
    else {

  priceChanges();


  if (evolveLVL === 0 && order66activated) {
    totalPermaClicksBonus += 0.66;
  }


    evolveLVL++;
    currentRewards = evoRewards[evolveLVL] || "No rewards recorded";
    evopower = evolveLVL + 1;
    updateRank();

    if (specialty === "clicker") {
        power = 10 * (evolveLVL + 1)
    } else {
        power = 1 * (evolveLVL + 1)
    }

    if (specialty === "offliner") {
        autopower = 10 * (evolveLVL + 1)
    } else {
        autopower = 0  
    }
   

    clicks -= Math.round(clicks * evoloss);

    increaseEvolve *= 1.4;
    increasePower = 1;
    increaseAuto = 50;

    powerupgrades = 0;
    autoupgrades = 0;

    mgBought = 0;


    if (evolveLVL === 16) {
        coinMultiplier ++
        if (specialty === "clicker") {
            coinMultiplier ++
        }
    }

    if (evolveLVL === 18 && specialty === "clicker") {
        coinMultiplier += 1;
    }

    if (evogoalcompleted) {
        message.innerHTML = "You evolved! <br> New evolution level: " + (evolveLVL) + "<br> EvoGoal Completed: +2.5% clicks/auto multiplier!" + " <br><div style='text-align: left; border-bottom: 1px solid black; padding-bottom: 5px; margin-bottom: 5px;'>Rewards:</div>" + "<div style='text-align: left;'>" + (currentRewards) + "</div>";
    } else {
        message.innerHTML = "You evolved! <br> New evolution level: " + (evolveLVL) + " <br><div style='text-align: left; border-bottom: 1px solid black; padding-bottom: 5px; margin-bottom: 5px;'>Rewards:</div>" + "<div style='text-align: left;'>" + (currentRewards) + "</div>";

    }


    evolvedPopUp.style.display = "block";

    closeEvolvedPopupButton.classList.remove("hidden")
    choose.classList.add("hidden");
    offlinerSpecialty.classList.add("hidden");
    clickerSpecialty.classList.add("hidden");
    buyerSpeciality.classList.add("hidden")
    evolverSpeciality.classList.add("hidden")

    if (evogoalcompleted === true) {
        totalPermaClicksBonus += 0.025;
    }

    evogoalcompleted = false;
    mainEvoGoalCompleted = false;
    upgradesBoughtThisEvo = 0;
    
    statusbarPercent = 0;

    priceChanges();
    UpdateUI();
    startautoclick();
    UpdateShopUI();
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
    power += 10 * (evolveLVL + 1)

  updateRank()
  UpdateUI();
  priceChanges();
  UpdateShopUI();
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

  autopower += 10 * (evolveLVL + 1)

  updateRank()
  UpdateUI();
  priceChanges();
  UpdateShopUI();
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
  UpdateShopUI();
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
  UpdateShopUI();
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
  UpdateShopUI();
}


function updateRank() {
 priceMultiplier = 1;
 pricemultiplier2 = 1;
 clicksMultiplier = 1;
 autoMultiplier = 1;
 RPpS = 0;
 multiplier2 = 0.1;
 maxPermaPower = 0;
 autoclick = 750;
 maxMGperEvo = 1
 evoloss = 1;
 maxOffTime = 3600

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
   if (data.maxOffTime !== undefined) {
    maxOffTime += data.maxOffTime
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
         break
         case "maxOffTime":
            maxOffTime += value
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
 clicksMultiplier += extraClickMultiplier

  autoMultiplier += totalPermaClicksBonus;
  autoclick -= totalAutoclickTimeReductionBonus;
  maxMGperEvo += totalExtraMGs;
  evoloss -= totalExtraEvoloss;
  maxPermaPower += coinBoughtMaxPermaPower



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

  if (autoclick <= 350 && specialty !== "offliner") {
    autotimerCost = null;
    autoclick = 333;
  } else if (autoclick <= 200) {
    autotimerCost = null;
    autoclick = 200;
  }


    if (specialty === "evolve") {
        if (evoloss < 0.05) {
            evoloss = 0.05;
        }
    } else {
        if (evoloss < 0.20) {
            evoloss = 0.20;
        }
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
        let clicksgained = Math.round(clicks * 0.01);
        let clicksGainedCapped = false;
   

        clicks += clicksgained;
        allTimePoints += clicksgained; // clicks and points are used interchangeably

        showPopup("exchangeMessage", "You gained" +clicksgained + "clicks!", 2500 )

        clicksGainedCapped = false;
        clicksgained = 0;

        UpdateUI();
        priceChanges();
    }
};
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


    //#region --- Save - Load - Reset ---

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
        rank,
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
    let loadconfirmed = false;

    if (!firstload) {
        loadPopUp.style.display = 'block';
        loadPopUp.classList.remove("hidden");

        cancelload.onclick = function() {
            loadPopUp.style.display = 'none';
            loadPopUp.classList.add("hidden");
            return
        }
        confirmload.onclick = function() {
            loadPopUp.style.display = 'none';
            loadPopUp.classList.add("hidden");
            loadconfirmed = true

            if (gamesaved) {
                loadgamePart2()
            } else {
                showPopup("otherPopUps", "No Safe Found!", 2500);
            }
        }
    } else {
        loadgamePart2()
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
        coinBoughtMaxPermaPower = gameState.coinBoughtMaxPermaPower 
        increasePerma = gameState.increasePerma;
        evolveLVL = gameState.evolveLVL;
        permapower = gameState.permapower;
        power = gameState.power;
        powerprice = gameState.powerprice;
        autoTimerBought = gameState.autoTimerBought;
        CNneededcost = gameState.CNneededcost;
        rank = gameState.rank;
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
        }
    });
}

resetAupdate.onclick = function() {
        resetGame();
        closeChangelog();
    }

function closeChangelog() {
    changelogPopup.style.display = 'none';   
    localStorage.setItem('cc_changelog_V12.0', 'seen'); 
}

const changelogVersion = "V12.0"; // Change on new updates
window.addEventListener('load', () => {
if (localStorage.getItem('cc_changelog_V12.0') === 'seen') {
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
        pricemultiplier2 = 1; 
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
    if (soundToggle) {
        const settingsSoundInstance = new Audio(settingsSound.src);
        settingsSoundInstance.play();
        }
}

toggleSound.onclick = function() {
    soundToggle = !soundToggle;
    UpdateUI(); 
    if (soundToggle) {
        const settingsSoundInstance = new Audio(settingsSound.src);
        settingsSoundInstance.play();
        }
}

toggleMusic.onclick = function() {
    musicToggle = !musicToggle
    backgroundMusic();
    UpdateUI(); 
    if (soundToggle) {
        const settingsSoundInstance = new Audio(settingsSound.src);
        settingsSoundInstance.play();
        }
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

//#endregion --- Save - Load - Reset ---


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
            
            clicks += Math.round(clicksGainedOffline); 
            allTimePoints += Math.round(clicksGainedOffline);
            allTimeClicks += (autoClicksPerSecondRate * timeElapsedS)

            coins += Math.round(coinsGainedOffline);
            totalcoins += Math.round(coinsGainedOffline);

            // Gebruik de juiste popup
            const backmessagePopup = document.getElementById('backmessage');
            if (backmessagePopup) {
                if (!maxOffTimeOverlapped) {
                    backmessagePopup.innerHTML = `Welcome back! You gained<br> ${formatNumber(Math.round(clicksGainedOffline))} clicks and<br> ${Math.round(coinsGainedOffline)} coins! (time away: ${(timeElapsedS / 60).toFixed(0)} minutes)`;
                } else {
                    backmessagePopup.innerHTML = `Welcome back! You gained<br> ${formatNumber(Math.round(clicksGainedOffline))} clicks and ${Math.round(coinsGainedOffline)} coins! (time away: capped by max offline time!)`;
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
  // Evolutions: reward in rankPoints = required * 50
    evolve3: () => {
    const reward = 3 * 50;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },
    evolve5: () => {
    const reward = 5 * 50;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },
    evolve10: () => {
    const reward = 10 * 50;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },
    evolve15: () => {
    const reward = 15 * 50;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },
    evolve25: () => {
    const reward = 25 * 50;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },

    click1000: () => {
    const reward = 1000 / 50;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },
    click2500: () => {
    const reward = 2500 / 50;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },
    click10000: () => {
    const reward = 10000 / 50;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },
    click25000: () => {
    const reward = 25000 / 50;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },
    click100000: () => {
    const reward = 100000 / 50;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },

    points100000: () => {
    const reward = 100000 * 0.2;
    clicks += reward;
    allTimePoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} points`);
    },
    points250000: () => {
    const reward = 250000 * 0.2;
    clicks += reward;
    allTimePoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} points`);
    },
    points1000000: () => {
    const reward = 1000000 * 0.2;
    clicks += reward;
    allTimePoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} points`);
    },
    points2500000: () => {
    const reward = 2500000 * 0.2;
    clicks += reward;
    allTimePoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} points`);
    },
    points10000000: () => {
    const reward = 10000000 * 0.2;
    clicks += reward;
    allTimePoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} points`);
    },

    coin20: () => {
    const reward = 20 * 0.2;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },
    coin50: () => {
    const reward = 50 * 0.2;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },
    coin200: () => {
    const reward = 200 * 0.2;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },
    coin500: () => {
    const reward = 500 * 0.2;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },
    coin2000: () => {
    const reward = 2000 * 0.2;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },

    rp500: () => {
    const reward = 500 * 0.2;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },
    rp1250: () => {
    const reward = 1250 * 0.2;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },
    rp5000: () => {
    const reward = 5000 * 0.2;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },
    rp12500: () => {
    const reward = 12500 * 0.2;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },
    rp50000: () => {
    const reward = 50000 * 0.2;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },
}


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

        updateRank();
        UpdateUI();
        priceChanges();
      }
    });
  });
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

    if (soundToggle) {
        const settingsSoundInstance = new Audio(settingsSound.src);
        settingsSoundInstance.play();
        }

    }

//#endregion --- Settings ---


    //#region --- OG VERSION LOGIC ---

OGVERSIONButton.onclick = function() {
    gameScreen.classList.add("hidden")
    OGVERSIONScreen.classList.remove("hidden")
    sidelineLeft.classList.add("hidden")
    sidelineRight.classList.add("hidden")
    settings.classList.add("hidden")
    styleSheet.disabled = true;
    styleSheetOG.disabled = false;

}


let clicksOG = 0;
const circleOG = document.getElementById("circleOG");

let evolveLVLOG = 1;
const evolveOG = document.getElementById("evolveOG");

let powerOG = 1 * evolveLVLOG;
const upgradeOG = document.getElementById("upgradeOG");

let priceOG = 10 * (powerOG / evolveLVLOG);
let evoCostOG = evolveLVLOG * 1250;

document.getElementById("pointValueOG").innerText = clicksOG;
document.getElementById("pointCostOG").innerText = priceOG;
document.getElementById("evoCostOG").innerText = evoCostOG;

circleOG.onclick = function () {
    clicksOG += powerOG;
    document.getElementById("pointValueOG").innerText = clicksOG;
};

upgradeOG.onclick = function () {
    if (clicksOG >= priceOG) {
        clicksOG -= priceOG;
        powerOG += 1 * evolveLVLOG;
        priceOG = 10 * (powerOG / evolveLVLOG);
        document.getElementById("pointValueOG").innerText = clicksOG;
        document.getElementById("pointCostOG").innerText = priceOG;
    }
};

evolveOG.onclick = function () {
    if (clicksOG >= (evoCostOG = evolveLVLOG * 1250)) {
        clicksOG = 0;
        powerOG = 1; // fixed: use = instead of ==
        evolveLVLOG++;
        powerOG = 1 * evolveLVLOG;
        priceOG = 10 * (powerOG / evolveLVLOG);
        evoCostOG = evolveLVLOG * 1250;
        document.getElementById("pointValueOG").innerText = clicksOG;
        document.getElementById("pointCostOG").innerText = priceOG;
        document.getElementById("evoCostOG").innerText = evoCostOG;
    }
};


//#endregion --- OG VERSION LOGIC ---


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