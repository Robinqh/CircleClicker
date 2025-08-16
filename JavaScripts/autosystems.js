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