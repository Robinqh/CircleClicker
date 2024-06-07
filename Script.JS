let clicks = 0;
const circle = document.getElementById("circle");

let evolveLVL = 1;
const evolve = document.getElementById("evolve");

let power = 1 * evolveLVL;
const upgrade = document.getElementById("upgrade");


let price = 10 * (power / evolveLVL);

let evoCost = evolveLVL * 1250;

let rank = "Skere gozer"

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
//Wtf gebeurt hieronder ): Chatgpt red levens: ik leer dit later wel.
// Fix for showing/hiding rank and updating button text
const rankButton = document.getElementById("rankButton");
const currentRank = document.getElementById("currentRank");

currentRank.style.display = "none"; 
rankButton.innerText = "Show rank"; 
//dit stuk is niet om te janken
rankButton.onclick = function() {
    if (evolveLVL >= 5) {
        rank = "Beginner"
    }
    if (evolveLVL >= 10) {
        rank = "Enge tatta"
    }
}
//vanaf hier gaat janken verder
rankButton.addEventListener("click", function() {
    if (currentRank.style.display === "none") {
        currentRank.style.display = "block";
        currentRank.innerText = "Your rank is: " + rank;
        rankButton.innerText = "Hide rank";
    } else {
        currentRank.style.display = "none";
        rankButton.innerText = "Show rank";
    }
});
//Tot hier ben ik aan het janken (: