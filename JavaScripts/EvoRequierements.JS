function checkEvoRequirements() {
    if (evolveLVL === 0 ) {
        mayEvolve = false;
        mainEvoGoalCompleted = allTimePoints >= 100;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Get " + formatNumber(Math.round(100 - allTimePoints)) + " more points!";
        } else if (upgradesBoughtThisEvo < 3) {
            const neededupgrades = 3 - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        }
        else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }

        evogoal = "Gain: " + formatNumber(Math.round(500 - allTimePoints)) + " more points!"
            if (allTimePoints >= 500) {
                evogoalcompleted = true;
            }

            if (evolveLVL === 0 && allTimePoints === 66) { //special order66 easter egg
        mayEvolve = true
        }
    }
    else if (evolveLVL === 1) {
        mainEvoGoalCompleted = allTimePoints >= 750;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Get " + formatNumber(Math.round(750 - allTimePoints)) + " more points!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Gain: " + formatNumber(Math.round(2500 - allTimePoints)) + " more points!";
        evogoalcompleted = allTimePoints >= 2500;
    }
    else if (evolveLVL === 2) {
        const pointsNeeded = 5000 - allTimePoints;
        mainEvoGoalCompleted = allTimePoints >= 5000;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Get " + formatNumber(Math.round(pointsNeeded)) + " more points!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Buy " + (maxMGperEvo - mgBought) + " more mystery gifts!";
        evogoalcompleted = mgBought === maxMGperEvo;
    }
    else if (evolveLVL === 3 && specialty === null) {
        mayEvolve = true;
        evogoal = "None";
        evogoalcompleted = false;
    }
    else if (evolveLVL === 3 && specialty !== null) {
        const powerNeeded = 100 - power;
        mainEvoGoalCompleted = power >= 100;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain " + formatNumber(Math.round(powerNeeded)) + " more clicking power!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Buy " + (30 - upgradesBoughtThisEvo) + " more upgrades!";
        evogoalcompleted = upgradesBoughtThisEvo >= 30;
    }
    else if (evolveLVL === 4) {
        const pointsNeeded = 35000 - allTimePoints;
        mainEvoGoalCompleted = allTimePoints >= 35000;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain " + formatNumber(Math.round(pointsNeeded)) + " more points!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Click " + (800 - allTimeClicks) + " more times!";
        evogoalcompleted = allTimeClicks >= 800;
    }
    else if (evolveLVL === 5) {
        const achievementsNeeded = 4 - achievementsCompleted;
        mainEvoGoalCompleted = achievementsCompleted >= 4;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Complete " + formatNumber(Math.round(achievementsNeeded)) + " more achievements!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Complete " + (6 - achievementsCompleted) + " more achievements!";
        evogoalcompleted = achievementsCompleted >= 6;
    }
    else if (evolveLVL === 6) {
        const clicksNeeded = 1000 - allTimeClicks;
        mainEvoGoalCompleted = allTimeClicks >= 1000;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Click " + formatNumber(Math.round(clicksNeeded)) + " more times!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Click " + (2000 - allTimeClicks) + " more times!";
        evogoalcompleted = allTimeClicks >= 2000;
    }
    else if (evolveLVL === 7) {
        const permapowerNeeded = 4 - permapower;
        mainEvoGoalCompleted = permapower >= 4;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain " + formatNumber(Math.round(permapowerNeeded)) + " more permapower!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Gain " + (5 - permapower) + " more permapower!";
        evogoalcompleted = permapower >= 5;
    }
    else if (evolveLVL === 8) {
        const pointsNeeded = 500000 - allTimePoints;
        mainEvoGoalCompleted = allTimePoints >= 500000;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain " + formatNumber(Math.round(pointsNeeded)) + " more points!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Gain " + formatNumber(Math.round(750000 - allTimePoints)) + " more points!";
        evogoalcompleted = allTimePoints >= 750000;
    }
    else if (evolveLVL === 9) {
        const achievementsNeeded = 7 - achievementsCompleted;
        mainEvoGoalCompleted = achievementsCompleted >= 7;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Complete " + formatNumber(Math.round(achievementsNeeded)) + " more achievements!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Click " + (2500 - allTimeClicks) + " more times!";
        evogoalcompleted = allTimeClicks >= 2500;
    }
    else if (evolveLVL === 10) {
        const coinsNeeded = 150 - totalcoins;
        mainEvoGoalCompleted = totalcoins >= 150;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain " + formatNumber(Math.round(coinsNeeded)) + " more coins!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Gain " + formatNumber(Math.round(225 - totalcoins)) + " more coins!";
        evogoalcompleted = totalcoins >= 225;
    }
    else if (evolveLVL === 11) {
        const autopowerNeeded = 500 - autopower;
        mainEvoGoalCompleted = autopower >= 500;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain " + formatNumber(Math.round(autopowerNeeded)) + " more autopower!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Gain " + formatNumber(Math.round(1000 - power)) + " more power!";
        evogoalcompleted = power >= 1000;
    }
    else if (evolveLVL === 12) { //change this one later
        const mysteryGiftsNeeded = maxMGperEvo - mgBought;
        mainEvoGoalCompleted = mgBought >= maxMGperEvo;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Buy " + formatNumber(Math.round(mysteryGiftsNeeded)) + " more mystery gifts!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Gain " + formatNumber(Math.round(1200 - autopower)) + " more autopower!";
        evogoalcompleted = autopower >= 1200;
    }
    else if (evolveLVL === 13) {
        const powerNeeded = 1400 - power;
        mainEvoGoalCompleted = power >= 1400;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain " + formatNumber(Math.round(powerNeeded)) + " more clicking power!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Buy " + (maxMGperEvo - mgBought) + " more mystery gifts!";
        evogoalcompleted = mgBought === maxMGperEvo;
    }
    else if (evolveLVL === 14) {
        const achievementsNeeded = 13 - achievementsCompleted;
        mainEvoGoalCompleted = achievementsCompleted >= 13;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Complete " + formatNumber(Math.round(achievementsNeeded)) + " more achievements!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Buy " + (100 - upgradesBoughtThisEvo) + " more upgrades!";
        evogoalcompleted = upgradesBoughtThisEvo >= 100;
    }
    else if (evolveLVL === 15) {
        const powerNeeded = 1500 - power;
        mainEvoGoalCompleted = power >= 1500;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain " + formatNumber(Math.round(powerNeeded)) + " more clicking power!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Gain " + formatNumber(Math.round(400 - totalcoins)) + " more coins!";
        evogoalcompleted = totalcoins >= 400;
    }
    else if (evolveLVL === 16) {
        const clicksNeeded = 2500 - allTimeClicks;
        mainEvoGoalCompleted = allTimeClicks >=2500;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Click " + formatNumber(Math.round(clicksNeeded)) + " more times!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Click " + (4000 - allTimeClicks) + " more times!";
        evogoalcompleted = allTimeClicks >= 4000;
    }
    else if (evolveLVL === 17) {
        const powerNeeded = 1600 - power;
        mainEvoGoalCompleted = power >= 1600;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain " + formatNumber(Math.round(powerNeeded)) + " more clicking power!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Buy " + (150 - upgradesBoughtThisEvo) + " more upgrades!";
        evogoalcompleted = upgradesBoughtThisEvo >= 150;
    }
    else if (evolveLVL === 18) {
        const coinsNeeded = 300 - totalcoins;
        mainEvoGoalCompleted = totalcoins >= 300;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain " + formatNumber(Math.round(coinsNeeded)) + " more coins!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Buy " + (maxMGperEvo - mgBought) + " more mystery gifts!";
        evogoalcompleted = mgBought === maxMGperEvo;
    }
    else if (evolveLVL === 19) {
        const permapowerNeeded = 11 - permapower;
        mainEvoGoalCompleted = permapower >= 11;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain " + formatNumber(Math.round(permapowerNeeded)) + " more permapower!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Gain " + formatNumber(Math.round(3500000 - allTimePoints)) + " more points!";
        evogoalcompleted = allTimePoints >= 3500000;
    }
    else if (evolveLVL === 20) {
        const pointsNeeded = 5000000 - allTimePoints;
        mainEvoGoalCompleted = allTimePoints >= 5000000;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain " + formatNumber(Math.round(pointsNeeded)) + " more points!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Gain " + formatNumber(Math.round(1500 - autopower)) + " more autopower!";
        evogoalcompleted = autopower >= 1500;
    }
    else if (evolveLVL === 21) {
        let spentRankPoints = totalRankPoints - rankPoints;
        const rankPointsNeeded = 2500 - spentRankPoints;
        mainEvoGoalCompleted = spentRankPoints >= 2500;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Spend " + formatNumber(Math.round(rankPointsNeeded)) + " more Rank Points!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Gain " + formatNumber(Math.round(1800 - power)) + " more power!";
        evogoalcompleted = power >= 1800;
    }
    else if (evolveLVL === 22) {
        const autopowerNeeded = 1900 - autopower;
        mainEvoGoalCompleted = autopower >= 1900;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain " + formatNumber(Math.round(autopowerNeeded)) + " more autopower!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Click " + (6000 - allTimeClicks) + " more times!";
        evogoalcompleted = allTimeClicks >= 6000;
    }
    else if (evolveLVL === 23) {
        const coinsNeeded = 500 - totalcoins;
        mainEvoGoalCompleted = totalcoins >= 500;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain " + formatNumber(Math.round(coinsNeeded)) + " more coins!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Buy " + (maxMGperEvo - mgBought) + " more mystery gifts!";
        evogoalcompleted = mgBought === maxMGperEvo;
    }
    else if (evolveLVL === 24) {
        const powerReq = power < 2750;
        const autoReq = autopower < 2250;
        mainEvoGoalCompleted = !powerReq && !autoReq;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain ";
            if (powerReq) noEVOallowedReason += formatNumber(Math.round(2500 - power)) + " more power";
            if (powerReq && autoReq) noEVOallowedReason += " and ";
            if (autoReq) noEVOallowedReason += formatNumber(Math.round(2000 - autopower)) + " more autopower";
            noEVOallowedReason += "!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Buy " + (250 - upgradesBoughtThisEvo) + " more upgrades!";
        evogoalcompleted = upgradesBoughtThisEvo >= 250;
    }
    else if (evolveLVL === 25) {
        const pointsNeeded = 15000000 - allTimePoints; 
        mainEvoGoalCompleted = allTimePoints >= 15000000

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = " Gain " + formatNumber(Math.round(pointsNeeded)) + " more points!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "None";
        evogoalcompleted = null;
    }
    else if (evolveLVL === 26) {
        let spentRankPoints = totalRankPoints - rankPoints;
        const rankPointsNeeded = 15000 - spentRankPoints;
        mainEvoGoalCompleted = spentRankPoints >= 15000;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Spend " + formatNumber(Math.round(rankPointsNeeded)) + " more Rank Points!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "None";
        evogoalcompleted = null;
    }
    else if (evolveLVL === 27) {
        const permapowerNeeded = 17 - permapower;
        mainEvoGoalCompleted = permapower >= 17;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain " + formatNumber(Math.round(permapowerNeeded)) + " more permapower!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "None";
        evogoalcompleted = null;
    }
    else if (evolveLVL === 28) {
        const powerReq = power < 4000;
        const autoReq = autopower < 3000;
        mainEvoGoalCompleted = !powerReq && !autoReq;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain ";
            if (powerReq) noEVOallowedReason += formatNumber(Math.round(4000 - power)) + " more power";
            if (powerReq && autoReq) noEVOallowedReason += " and ";
            if (autoReq) noEVOallowedReason += formatNumber(Math.round(3000 - autopower)) + " more autopower";
            noEVOallowedReason += "!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "None";
        evogoalcompleted = null;
    } 
    else if (evolveLVL === 29) {
        const pointsNeeded = 50000000 - allTimePoints; 
        mainEvoGoalCompleted = allTimePoints >= 50000000

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = " Gain " + formatNumber(Math.round(pointsNeeded)) + " more points!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "None";
        evogoalcompleted = null;
    }
    else if (evolveLVL === 30) {
        const permapowerNeeded = 20 - permapower;
        mainEvoGoalCompleted = permapower >= 20;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain " + formatNumber(Math.round(permapowerNeeded)) + " more permapower!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "None";
        evogoalcompleted = null;
    }
    else if (evolveLVL === 31) {
        const coinsNeeded = 1500 - totalcoins;
        mainEvoGoalCompleted = totalcoins >= 1500;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain " + formatNumber(Math.round(coinsNeeded)) + " more coins!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "None";
        evogoalcompleted = null;
    }
    else if (evolveLVL === 32) {
        const clicksNeeded = 7500 - allTimeClicks;
        mainEvoGoalCompleted = allTimeClicks >= 7500;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Click " + formatNumber(Math.round(clicksNeeded)) + " more times!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "None";
        evogoalcompleted = null;
    }
    else if (evolveLVL === 33) {
        mainEvoGoalCompleted = achievementsCompleted >= 25;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Complete all achievements! Achievements left: " + (25 - achievementsCompleted);
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "None";
        evogoalcompleted = null;
    }
    else if (evolveLVL === 34) {
        const powerNeeded = 5600;
        const autoPowerNeeded = 4900;
        const totalCoinsNeeded = 5000;
        const permapowerNeeded = 25;
        
        const powerReq = power < powerNeeded;
        const autoReq = autopower < autoPowerNeeded;
        const coinsReq = totalcoins < totalCoinsNeeded;
        const permapowerReq = permapower < permapowerNeeded;

        mainEvoGoalCompleted = !powerReq && !autoReq && !coinsReq && !permapowerReq;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Gain ";
            let requirements = [];
            if (powerReq) requirements.push(formatNumber(Math.round(powerNeeded - power)) + " more power");
            if (autoReq) requirements.push(formatNumber(Math.round(autoPowerNeeded - autopower)) + " more autopower");
            if (coinsReq) requirements.push(formatNumber(Math.round(totalCoinsNeeded - totalcoins)) + " more coins");
            if (permapowerReq) requirements.push(formatNumber(Math.round(permapowerNeeded - permapower)) + " more permapower");
            
            noEVOallowedReason += requirements.join(", ") + "!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "None";
        evogoalcompleted = null;
    }
    else if (evolveLVL === 35) {
        mayEvolve = false;
        noEVOallowedReason = "Evolution level maxed out!";
    }
}