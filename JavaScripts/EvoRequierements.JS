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

            if (evolveLVL === 0 && allTimePoints === 66) {
        mayEvolve = true
        }
    }
    //fix the const XXX, it should be hard coded into the text, not a const (Done: 1, )
    else if (evolveLVL === 1) {
        mainEvoGoalCompleted = allTimePoints >= 1250;

        if (!mainEvoGoalCompleted) {
            mayEvolve = false;
            noEVOallowedReason = "Get " + formatNumber(Math.round(1250 - allTimePoints)) + " more points!";
        } else if (upgradesBoughtThisEvo < 5 * evolveLVL) {
            const neededupgrades = 5 * evolveLVL - upgradesBoughtThisEvo;
            mayEvolve = false;
            noEVOallowedReason = "Buy " + neededupgrades + " more upgrades!";
        } else {
            mayEvolve = true;
            noEVOallowedReason = "";
        }
        evogoal = "Gain: " + formatNumber(Math.round(3000 - allTimePoints)) + " more points!";
        evogoalcompleted = allTimePoints >= 3000;
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
        const powerNeeded = 75 - power;
        mainEvoGoalCompleted = power >= 75;

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
        evogoal = "Buy " + (25 - upgradesBoughtThisEvo) + " more upgrades!";
        evogoalcompleted = upgradesBoughtThisEvo >= 25;
    }
    else if (evolveLVL === 4) {
        const pointsNeeded = 25000 - allTimePoints;
        mainEvoGoalCompleted = allTimePoints >= 25000;

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
        const coinsNeeded = 100 - totalcoins;
        mainEvoGoalCompleted = totalcoins >= 100;

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
        evogoal = "Gain " + formatNumber(Math.round(200 - totalcoins)) + " more coins!";
        evogoalcompleted = totalcoins >= 200;
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
    else if (evolveLVL === 12) {
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
        const powerNeeded = 1200 - power;
        mainEvoGoalCompleted = power >= 1200;

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
        const achievementsNeeded = 9 - achievementsCompleted;
        mainEvoGoalCompleted = achievementsCompleted >= 9;

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
        const clicksNeeded = 1500 - allTimeClicks;
        mainEvoGoalCompleted = allTimeClicks >= 1500;

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
        const pointsNeeded = 4000000 - allTimePoints;
        mainEvoGoalCompleted = allTimePoints >= 4000000;

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
        const rankPointsNeeded = 1000 - spentRankPoints;
        mainEvoGoalCompleted = spentRankPoints >= 1000;

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
        const autopowerNeeded = 1750 - autopower;
        mainEvoGoalCompleted = autopower >= 1750;

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
        const powerReq = power < 2500;
        const autoReq = autopower < 2000;
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
        const rankPointsNeeded = 20000 - spentRankPoints;
        mainEvoGoalCompleted = spentRankPoints >= 20000;

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
        const permapowerNeeded = 16 - permapower;
        mainEvoGoalCompleted = permapower >= 16;

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
        mayEvolve = false;
        noEVOallowedReason = "Evolution level maxed out!";
    }
}