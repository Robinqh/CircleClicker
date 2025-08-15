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