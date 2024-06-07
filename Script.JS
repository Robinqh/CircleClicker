let clicks = 0;
const circle = document.getElementById("circle");

let evolveLVL = 1;
const evolve = document.getElementById("evolve");

let power = 1 * evolveLVL;
const upgrade = document.getElementById("upgrade");


let price = 10 * (power / evolveLVL);

let evoCost = evolveLVL * 1250;

document.getElementById("pointValue").innerText = clicks;
document.getElementById("pointCost").innerText = price;
document.getElementById("evoCost").innerText = evoCost;

circle.onclick = function(){
    clicks += power;
    document.getElementById("pointValue").innerText = clicks;
}

upgrade.onclick = function(){
    if (clicks >= price) {
        clicks -= price;
        power += 1 * evolveLVL;
         price = 10 * (power / evolveLVL);
        document.getElementById("pointValue").innerText = clicks;
        document.getElementById("pointCost").innerText = price;

    }
}

evolve.onclick = function() {
    if (clicks >= (evoCost = evolveLVL * 1250)) {
        clicks = 0;
        power == 1;
        evolveLVL ++;
        power = 1 * evolveLVL
        price = 10 * (power / evolveLVL)
        evoCost = evolveLVL * 1250;
        document.getElementById("pointValue").innerText = clicks;
        document.getElementById("pointCost").innerText = price;
        document.getElementById("evoCost").innerText = evoCost;
    }
}