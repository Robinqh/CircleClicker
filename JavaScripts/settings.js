// ------------------------------
// SCREEN SWITCHING
// ------------------------------

backToGameScreen.onclick = function() {
    gameScreen.classList.remove("hidden");
    OGVERSIONScreen.classList.add("hidden");
    sidelineLeft.classList.remove("hidden");
    sidelineRight.classList.remove("hidden");
    settings.classList.add("hidden");
    styleSheet.disabled = false;
    styleSheetOG.disabled = true;

    if (!ogModeFound) {
        showPopup("otherPopUps", "OG-MODE found, +15% clicksmultiplier!", 3000);
        extraClickMultiplier += 0.15;
        ogModeFound = true; 
        priceChanges();
        UpdateUI();
        updateRank();
    }
};

leaveSettings.onclick = function() {
    gameScreen.classList.remove("hidden");
    OGVERSIONScreen.classList.add("hidden");
    sidelineLeft.classList.remove("hidden");
    sidelineRight.classList.remove("hidden");
    settings.classList.add("hidden");
    styleSheet.disabled = false;
    styleSheetOG.disabled = true;
};

settingsScreen.onclick = function() {
    gameScreen.classList.add("hidden");
    OGVERSIONScreen.classList.add("hidden");
    sidelineLeft.classList.add("hidden");
    sidelineRight.classList.add("hidden");
    settings.classList.remove("hidden");
};

// Toggle between game and achievement screens
toggleScreenButton.onclick = togglescreen;
toggleScreenButton2.onclick = togglescreen;

function togglescreen() {
    if (screenToggle === 1) {
        screenToggle = 2;
        gameScreen.classList.add("hidden");
        achievementScreen.classList.remove("hidden");
        sidelineLeft.classList.add("hidden");
        sidelineRight.classList.add("hidden");
    } else if (screenToggle === 2) {
        screenToggle = 1;
        gameScreen.classList.remove("hidden");
        achievementScreen.classList.add("hidden");
        sidelineLeft.classList.remove("hidden");
        sidelineRight.classList.remove("hidden");
    }
}

// ------------------------------
// MUSIC TOGGLE
// ------------------------------

function backgroundMusic() {
    if (musicToggle) {
        backgroundSong.play();
    } else {
        backgroundSong.pause();
    }
}

// ------------------------------
// SHOP TOGGLE
// ------------------------------

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

// ------------------------------
// SHOP BUTTONS
// ------------------------------

btnNormal.onclick = function() {
    toggle = 1;
    upgtoggle();
};

btnSpecial.onclick = function () {
    if ((evolveLVL >= 4 || (evolveLVL >= 3 && (specialty === "clicker" || specialty === "buyer"))) && toggle !== 2) {
        toggle = 2;
        groupNumber = 2;
        upgtoggle();
    }
    if (toggle === 2) {
        groupNumber = (groupNumber === 1) ? 2 : 1;

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
        groupNumber = (groupNumber === 3) ? 4 : 3;

        if (groupNumber === 3) {
            rankShop1.classList.remove('hidden-upgrades');
            rankShop2.classList.add('hidden-upgrades');
        } else if (groupNumber === 4) {
            rankShop1.classList.add('hidden-upgrades');
            rankShop2.classList.remove('hidden-upgrades');
        }
    }
};

// ------------------------------
// STAT TOGGLE
// ------------------------------

toggleStats.onclick = function() {
    stat = (stat === 1) ? 2 : 1;
    UpdateUI();
};

//
//start game
//

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