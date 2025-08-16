
function formatNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return ""; 
    }
    return num.toLocaleString('de-DE');
}


function UpdateUI() {
    // Update point value display
    if (pointValueElement) {
        if (toggle === 1 ) {
            pointValueElement.innerHTML = "Points: <br>" + formatNumber(Math.round(clicks));
        } else if (toggle === 2) {
            pointValueElement.innerHTML = "Coins (+" + (neededClicks) + " clicks - " + coinMultiplier + "*): <br>" + formatNumber(Math.round(coins));
        }
        else if (toggle === 3) {
            pointValueElement.innerHTML = "Rankpoints (" + formatNumber(Number(RPpS.toFixed(2))) + "/S): <br>" + formatNumber(rankPoints);
        }
    }

    // Update current click power display
    if (ClickPowerElement) {
        ClickPowerElement.innerHTML = "Current Clicking Power: " + formatNumber(Math.round(power)) + "<br>*" + (clicksMultiplier * 100).toFixed(1) + "%";
    }

    // Update current auto power display
    if (AutoPowerElement) {
        AutoPowerElement.innerHTML = "Current Autopower: " + formatNumber(Math.round(autopower)) + "<br>*" + (autoMultiplier * 100).toFixed(1) + "%" + " - " + (autoclick) + "ms";
    }

    // Update current rank display
    if (currentRankElement) {
        currentRankElement.innerText = rank;
    }


    // Update evolution level display
    if (evolutionLevelElement) {
        evolutionLevelElement.innerHTML = "Current evolution level: " + formatNumber(evolveLVL) + "<br> Evoloss: " + Math.round(evoloss * 100) + "%";
    }

    // Update auto save status
    if (toggleAutoSave) {
        toggleAutoSave.innerText = "Autosave: " + (autoSaveToggle ? "ON" : "OFF");
    }

    if (toggleSound) {
        toggleSound.innerText = "Sound: " + (soundToggle ? "ON" : "OFF");
    }

    if (toggleMusic) {
        toggleMusic.innerText = "Music " + (musicToggle ? "ON" : "OFF")
    }
    // Update price multiplier display
    if (priceMultiplierElement) {
        priceMultiplierElement.innerHTML = "Points: " + (priceMultiplier * 100).toFixed(1) + "%<br> " + "Coins/RankPoints: " + (pricemultiplier2 * 100).toFixed(1) + "%";
    }

    // Update offline multiplier stat
    if (offlinemultiplierstat) {
        offlinemultiplierstat.innerText = "Offline Multiplier: " + formatNumber(Number((multiplier2 * 100).toFixed(1))) + "%" + " - max time: " + (maxOffTime / 3600) + " hours";
    }

    // Update click power upgrade button
    if (powerupgradeButton) {
        if (clicks >= powerprice) {
            powerupgradeButton.classList.remove("buyoff");
            powerupgrade.classList.remove("MEGA")
            powerupgradeButton.innerHTML = "ClickPower: " + formatNumber(powerprice);
            if (upgradesSinceLastMEGA === 15) {
                powerupgrade.classList.add("MEGA")
                powerupgradeButton.innerHTML = "ClickPower - MEGA UPGRADE (*5): " + formatNumber(powerprice);
            }
        } else {
            powerupgradeButton.classList.add("buyoff");
            powerupgradeButton.innerHTML = "ClickPower: " + formatNumber(powerprice);
            powerupgrade.classList.remove("MEGA")
        }
    }

    // Update RP exchange button
    if (RPexchangeButton) {
        if (!(evolveLVL >= 13 || specialty === "buyer")) {
            RPexchangeButton.classList.add("not-unlocked");
            RPexchangeButton.classList.remove("buyoff");
            RPexchangeButton.innerHTML = "Unlocks at evo-13";
        } else if (rankPoints < ExchangeCost) {
            RPexchangeButton.classList.add("buyoff")
            RPexchangeButton.classList.remove("not-unlocked");
            RPexchangeButton.innerHTML = "Trade RankPoints for a Click Bonus<br>" + ExchangeCost + " RP ➤ +1% clicks!";
        } else {
            RPexchangeButton.classList.remove("buyoff");
            RPexchangeButton.classList.remove("not-unlocked");
            RPexchangeButton.innerHTML = "Trade RankPoints for a Click Bonus<br>" + ExchangeCost + " RP ➤ +1% clicks!";
        }
        
    }

    // Update total clicks display
    if (totalClicksPoints) {
        totalClicksPoints.innerHTML = "All-time Clicks: " + formatNumber(allTimeClicks) +"<br>All-time Points: " + formatNumber(Math.round(allTimePoints));
    }

    // Update autopower upgrade button
    if (autoupgradeButton) {
        if (evolveLVL < 1) {
            autoupgradeButton.classList.add("not-unlocked");
            autoupgradeButton.classList.remove("MEGA")
            autoupgradeButton.classList.remove("buyoff");
            autoupgradeButton.innerText = "Unlocks after evolution 1";
        } else if (clicks >= autoprice) {
            autoupgradeButton.classList.remove("buyoff");
            autoupgradeButton.classList.remove("MEGA")
            autoupgradeButton.classList.remove("not-unlocked");
            autoupgradeButton.innerText = "Autopower: " + formatNumber(autoprice);
                if (upgradesSinceLastMEGA === 15) {
                    autoupgradeButton.classList.add("MEGA")
                    autoupgradeButton.innerHTML = "Autopower - MEGA UPGRADE (*5): " + formatNumber(autoprice);
            }

        } else {
            autoupgradeButton.classList.add("buyoff");
            autoupgradeButton.classList.remove("not-unlocked");
            autoupgradeButton.innerText = "Autopower: " + formatNumber(autoprice);
            autoupgradeButton.classList.remove("MEGA")
        }
    }

    // Update permanent upgrade button
    if (permanentupgradeButton) {
        const currentPermapowerPrice = permaprice[permapower + 1];

        if (evolveLVL < 3) {
            permanentupgradeButton.classList.add("not-unlocked");
            permanentupgradeButton.classList.remove("completed");
            permanentupgradeButton.classList.remove("out-of-stock");
            permanentupgradeButton.classList.remove("buyoff");
            permanentupgrade.innerText = "Unlocks after evolution 3";
        } else if (permapower === 25) { // Assuming 25 is the absolute max
            permanentupgradeButton.classList.remove("buyoff");
            permanentupgradeButton.classList.remove("not-unlocked");
            permanentupgradeButton.classList.add("completed");
            permanentupgradeButton.classList.remove("out-of-stock");
            permanentupgrade.innerText = "Permapower: MAXED ";
        } else if (permapower === maxPermaPower) { // If reached max for current rank
            permanentupgradeButton.classList.remove("buyoff");
            permanentupgradeButton.classList.remove("not-unlocked");
            permanentupgradeButton.classList.add("out-of-stock");
            permanentupgrade.innerText = "Unlock more permapower upon reaching the next rank, or by buying more from the coin shop! ";
        } else if (currentPermapowerPrice !== undefined && currentPermapowerPrice !== null) {
            if (clicks < currentPermapowerPrice) {
                permanentupgradeButton.classList.add("buyoff");
                permanentupgradeButton.classList.remove("not-unlocked");
                permanentupgradeButton.classList.remove("completed");
                permanentupgradeButton.classList.remove("out-of-stock");
            } else {
                permanentupgradeButton.classList.remove("buyoff");
                permanentupgradeButton.classList.remove("not-unlocked");
                permanentupgradeButton.classList.remove("completed");
                permanentupgradeButton.classList.remove("out-of-stock");
            }
            permanentupgrade.innerText = "Permapower - adds 7.5% click/auto multiplier (" + (maxPermaPower - permapower) + " left): " + formatNumber(currentPermapowerPrice);
        }
    }

    // Update evolve button
    if (evolveButton) {
        if (mayEvolve !== true) {
            evolveButton.innerText = "Evolving is not allowed: " + noEVOallowedReason;
            
            evolveButton.classList.add("out-of-stock");
            evolveButton.classList.remove("completed");
            evolveButton.classList.remove("buyoff");
            evolveButton.classList.remove("order66");
        } else {
            evolveButton.innerText = "Evolve"
            evolveButton.classList.remove("out-of-stock");
            evolveButton.classList.remove("order66");
            evolveButton.classList.remove("completed");

            if (mayEvolve && evolveLVL === 0 && allTimePoints === 66) {
                evolveButton.innerText = "EXECUTE ORDER SIXTY-SIX";
                evolveButton.classList.add("order66");
                evolveButton.classList.remove("completed"); 
            }
        }
        if (evolveLVL === 35) {
            evolveButton.classList.add("completed");
            evolveButton.classList.remove("out-of-stock");
            evolveButton.classList.remove("buyoff");
            evolveButton.classList.remove("order66");
            evolveButton.innerHTML = "Max Evolution Reached"
        }

        if (evolveLVL === 3 && specialty === null) {
            evolveButton.innerText = "Choose Specialty"
            evolveButton.classList.remove("out-of-stock");
            evolveButton.classList.remove("order66");
            evolveButton.classList.remove("completed");
        }
    }

    // Update mystery gift button
    if (mysterygiftButton) {
        if (evolveLVL < 2) {
            mysterygiftButton.classList.add("not-unlocked");
            mysterygift.innerText = "Unlocks after evolution 2";
            mysterygiftButton.classList.remove("buyoff");
            mysterygiftButton.classList.remove("out-of-stock");
        } else if (mgBought >= maxMGperEvo) {
            mysterygiftButton.classList.add("out-of-stock");
            mysterygiftButton.classList.remove("buyoff");
            mysterygiftButton.classList.remove("not-unlocked");
            mysterygift.innerText = "Mystery gift: Out of stock";
        } else {
            mysterygiftButton.classList.remove("out-of-stock");
            if (clicks < mysteryprice) {
                mysterygiftButton.classList.add("buyoff");
                mysterygiftButton.classList.remove("not-unlocked");
            } else {
                mysterygiftButton.classList.remove("buyoff");
                mysterygiftButton.classList.remove("not-unlocked");
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
            ELMButton.innerText = "Evolve loss multiplier -0.05: " + ELMcost + " coins";
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
            autotimeButton.innerText = "Reduce autotimer -50ms: " + formatNumber(autotimerCost) + " coins";
        }
    }

    if (mysterypriceButton) {
        if (evolveLVL < 20 && specialty !== "buyer") {
            mysterypriceButton.classList.add("not-unlocked");
            mysterypriceButton.innerText = "Unlocked at evolution level 20!";
        } else if (reduceMysterycost === null) {
            mysterypriceButton.classList.remove("buyoff");
            mysterypriceButton.classList.add("completed");
            mysterypriceButton.classList.remove("not-unlocked");
            mysterypriceButton.innerText = "Increase max mystergifts per evo: MAX";
        } else {
            if (coins < reduceMysterycost) {
                mysterypriceButton.classList.add("buyoff");
                mysterypriceButton.classList.remove("not-unlocked");
                mysterypriceButton.classList.remove("completed");
            } else {
                mysterypriceButton.classList.remove("buyoff");
                mysterypriceButton.classList.remove("not-unlocked");
                mysterypriceButton.classList.remove("completed");
            }
            mysterypriceButton.innerText = "Increase max mystergifts per evo: " + formatNumber(reduceMysterycost) + " coins";
        }
    }

    if (ExtraMaxPermaPower) {
         if (ExtraMaxPermaPowerCost === null) {
            ExtraMaxPermaPower.classList.remove("buyoff");
            ExtraMaxPermaPower.classList.add("completed");
            ExtraMaxPermaPower.innerText = "Increase Max PermaPower: MAX";
         } else {
            if (coins < ExtraMaxPermaPowerCost) {
                ExtraMaxPermaPower.classList.add("buyoff");
                ExtraMaxPermaPower.classList.remove("completed");
            } else {
                ExtraMaxPermaPower.classList.remove("buyoff");
                ExtraMaxPermaPower.classList.remove("completed");
            }
            ExtraMaxPermaPower.innerText = "Increase Max PermaPower: " + formatNumber(ExtraMaxPermaPowerCost) + " coins";
         }
    }
    if (FreePower) {
        if (evolveLVL < 15 && specialty !== "buyer") {
            FreePower.classList.add("not-unlocked");
            FreePower.innerText = "Unlocked at evolution level 15!";
        } else if (FreePowerPrice === null) {
            FreePower.classList.remove("buyoff");
            FreePower.classList.add("completed");
            FreePower.classList.remove("not-unlocked");
            FreePower.innerText = "Free Power Upgrades: MAX";
        } else {
            if (coins < FreePowerPrice) {
                FreePower.classList.add("buyoff");
                FreePower.classList.remove("not-unlocked");
                FreePower.classList.remove("completed");
            } else {
                FreePower.classList.remove("buyoff");
                FreePower.classList.remove("not-unlocked");
                FreePower.classList.remove("completed");
            }
            FreePower.innerText = "Free Power Upgrades: " + formatNumber(FreePowerPrice) + " coins";
        }
    }
    if (FreeAuto) {
        if (evolveLVL < 15 && specialty !== "buyer") {
            FreeAuto.classList.add("not-unlocked");
            FreeAuto.innerText = "Unlocked at evolution level 15!";
        } else if (FreeAutoPrice === null) {
            FreeAuto.classList.remove("buyoff");
            FreeAuto.classList.add("completed");
            FreeAuto.classList.remove("not-unlocked");
            FreeAuto.innerText = "Free AutoPower Upgrades: MAX";
        } else {
            if (coins < FreeAutoPrice) {
                FreeAuto.classList.add("buyoff");
                FreeAuto.classList.remove("not-unlocked");
                FreeAuto.classList.remove("completed");
            } else {
                FreeAuto.classList.remove("buyoff");
                FreeAuto.classList.remove("not-unlocked");
                FreeAuto.classList.remove("completed");
            }
            FreeAuto.innerText = "Free AutoPower Upgrades: " + formatNumber(FreeAutoPrice) + " coins";
        }
    }


    // Update rank upgrades
    if (CoinACButton) {
        if (evolveLVL < 12 && specialty !== "buyer" && specialty !== "offliner") {
            CoinACButton.classList.add("not-unlocked");
            CoinACButton.innerText = "Unlock at evo level 12";
        } else if (CoinACbought === true) {
            CoinACButton.classList.remove("buyoff");
            CoinACButton.classList.add("completed");
            CoinACButton.classList.remove("not-unlocked");
            CoinACButton.innerText = "Coin autoclicker: Activated";
        } else {
            if (rankPoints < CoinACcost) {
                CoinACButton.classList.add("buyoff");
                CoinACButton.classList.remove("completed");
                CoinACButton.classList.remove("not-unlocked");
            } else {
                CoinACButton.classList.remove("buyoff");
                CoinACButton.classList.remove("completed");
                CoinACButton.classList.remove("not-unlocked");
            }
            CoinACButton.innerText = "Coin autoclicker: " + formatNumber(CoinACcost) + "RP";
        }
    }

    if (OffButton) {
        if (Offlinebought === true) {
            OffButton.classList.remove("buyoff");
            OffButton.classList.add("completed");
            OffButton.innerText = "Offline Autoclick; Activated";
        } else {
            if (rankPoints < Offlinecost) {
                OffButton.classList.add("buyoff");
                OffButton.classList.remove("completed");
            } else {
                OffButton.classList.remove("buyoff");
                OffButton.classList.remove("completed");
            }
            OffButton.innerText = "Offline Autoclick: " + formatNumber(Offlinecost) + "RP";
        }
    }

    if (CNButton) {
        if (!(evolveLVL >= 8 || specialty === "buyer")) {
            CNButton.classList.remove("buyoff");
            CNButton.classList.remove("completed");
            CNButton.classList.add("not-unlocked");
            CNButton.innerText = "Unlocked at evo-8";
        } else {
            if (CNneededcost === null) {
                CNButton.classList.remove("buyoff");
                CNButton.classList.add("completed");
                CNButton.classList.remove("not-unlocked");
                CNButton.innerText = "Lowest range reached (" + coinneeded + ")";
            } else {
                if (rankPoints < CNneededcost) {
                    CNButton.classList.add("buyoff");
                    CNButton.classList.remove("completed");
                    CNButton.classList.remove("not-unlocked");
                } else {
                    CNButton.classList.remove("buyoff");
                    CNButton.classList.remove("completed");
                    CNButton.classList.remove("not-unlocked");
                }
                CNButton.innerText = "Decrease next coin range (-50): " + formatNumber(CNneededcost) + "RP " + "(0-" + coinneeded + ")";
            }
        }
    }

        if (OfflineRP) {
            if (evolveLVL < 14 && specialty !== "buyer" && specialty !== "offliner") {
            OfflineRP.classList.add("not-unlocked");
            OfflineRP.innerText = "Unlock at evo level 14";
        } else if (Offlinebought === false) {
            OfflineRP.classList.add("not-unlocked");
            OfflineRP.innerText = "Buy Offline Autoclick First";
        }
        else if (offlineRPBought === true) {
            OfflineRP.classList.remove("buyoff");
            OfflineRP.classList.add("completed");
            OfflineRP.innerText = "Offline Rankpoints: Activated";
        } else {
            if (rankPoints < OfflineRPCost) {
                OfflineRP.classList.add("buyoff");
                OfflineRP.classList.remove("completed");
                OfflineRP.classList.remove("not-unlocked");
            } else {
                OfflineRP.classList.remove("buyoff");
                OfflineRP.classList.remove("completed");
                OfflineRP.classList.remove("not-unlocked");
            }
            OfflineRP.innerText = "Offline RankPoints: " + formatNumber(OfflineRPCost) + "RP";
        }
    }

        if (ExtraMG
        ) {if (evolveLVL < 30 && specialty !== "buyer") {
            ExtraMG.classList.add("not-unlocked");
            ExtraMG.innerText = "Unlocked at evolution level 30!";
        } else if (ExtraMGCost === null) {
            ExtraMG.classList.remove("buyoff");
            ExtraMG.classList.add("completed");
            ExtraMG.classList.remove("not-unlocked");
            ExtraMG.innerText = "Increase max mystergifts per evo: MAX";
        } else {
            if (rankPoints < ExtraMGCost) {
                ExtraMG.classList.add("buyoff");
                ExtraMG.classList.remove("not-unlocked");
                ExtraMG.classList.remove("completed");
            } else {
                ExtraMG.classList.remove("buyoff");
                ExtraMG.classList.remove("not-unlocked");
                ExtraMG.classList.remove("completed");
            }
            ExtraMG.innerText = "Increase max mystergifts per evo: " + formatNumber(ExtraMGCost) + " RP";
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
         progressBarRanks.style.width = (evolveLVL / 25 * 100) + "%"
    }

    // Toggle stat visibility
    if (stat === 1) {
        EvolutionLevel.classList.remove("hidden-stats");
        ClickPower.classList.remove("hidden-stats");
        AutoPowerElement.classList.remove("hidden-stats");

        pricemultiplier.classList.add("hidden-stats");
        offlinemultiplier.classList.add("hidden-stats");
        totalClicksPoints.classList.add("hidden-stats");
    } else if (stat === 2) {
        EvolutionLevel.classList.add("hidden-stats");
        ClickPower.classList.add("hidden-stats");
        AutoPowerElement.classList.add("hidden-stats");

        pricemultiplier.classList.remove("hidden-stats");
        offlinemultiplier.classList.remove("hidden-stats");
        totalClicksPoints.classList.remove("hidden-stats");
    }

    updateProgressBar();
    checkEvoRequirements();
}

function UpdateShopUI() {
    if (btnNormal) {
        btnNormal.innerText = "Base Shop";
        if (toggle === 1) {
            btnNormal.classList.add("active-shop")
        } else {
            btnNormal.classList.remove("active-shop")
        }
    }


    if (btnSpecial) {
        const requiredEvoSpecial = (specialty === "buyer" || specialty === "clicker") ? 3 : 4;

        if (evolveLVL < requiredEvoSpecial) {
            btnSpecial.classList.add("not-unlocked");
            btnSpecial.innerText = `Unlocks after evo- ${requiredEvoSpecial}`;
        } else {
            btnSpecial.classList.remove("not-unlocked");
            btnSpecial.innerText = "Coin Shop";
        }

        if (toggle === 2) {
            btnSpecial.innerText = "Toggle Upgrades!";
            btnSpecial.classList.add("active-shop");
        } else {
            btnSpecial.classList.remove("active-shop");
        }
    }

    if (btnRank) {
        const requiredEvoRank = (specialty === "buyer" || specialty === "offliner") ? 3 : 8;

        if (evolveLVL < requiredEvoRank) {
            btnRank.classList.add("not-unlocked");
            btnRank.innerText = `Unlocks after evo- ${requiredEvoRank}`;
        } else {
            btnRank.classList.remove("not-unlocked");
            btnRank.innerText = "Rank Shop";
        }

        if (toggle === 3) {
            btnRank.innerText = "Toggle Upgrades!";
            btnRank.classList.add("active-shop");
        } else {
            btnRank.classList.remove("active-shop");
        }
    }



        if (evolveLVL < 3) {
            progressTextRanks.innerText = "🏅 Next rank: Bronze";
        } else if (evolveLVL < 5) {
            progressTextRanks.innerText = "🥈 Next rank: Iron";
        } else if (evolveLVL < 10) {
            progressTextRanks.innerText = "🥇 Next rank: Gold";
        } else if (evolveLVL < 15) {
            progressTextRanks.innerText = "💎 Next rank: Platinum";
        } else if (evolveLVL < 25) {
            progressTextRanks.innerText = "🌟 Next rank: [REDACTED]";
        } else {
            progressTextRanks.innerText = "🏆 Rank maxed!";
        }
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