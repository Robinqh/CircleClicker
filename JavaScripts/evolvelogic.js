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
