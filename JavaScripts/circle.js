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