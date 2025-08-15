
//achievements:
// Click achievements
const click1000 = document.getElementById("click1000");
const click2500 = document.getElementById("click2500");
const click10000 = document.getElementById("click10000");
const click25000 = document.getElementById("click25000");
const click100000 = document.getElementById("click100000");

// Points achievements
const points100000 = document.getElementById("points100000");
const points250000 = document.getElementById("points250000");
const points1000000 = document.getElementById("points1000000");
const points2500000 = document.getElementById("points2500000");
const points10000000 = document.getElementById("points10000000");

// Coins achievements
const coin20 = document.getElementById("coin20");
const coin50 = document.getElementById("coin50");
const coin200 = document.getElementById("coin200");
const coin500 = document.getElementById("coin500");
const coin2000 = document.getElementById("coin2000");

// RankPoints achievements
const rp500 = document.getElementById("rp500");
const rp1250 = document.getElementById("rp1250");
const rp5000 = document.getElementById("rp5000");
const rp12500 = document.getElementById("rp12500");
const rp50000 = document.getElementById("rp50000");

// Evolutions achievements
const evolve3 = document.getElementById("evolve3");
const evolve5 = document.getElementById("evolve5");
const evolve10 = document.getElementById("evolve10");
const evolve15 = document.getElementById("evolve15");
const evolve25 = document.getElementById("evolve25");

//
const click_1000 = 1000;
const click_2500 = 2500;
const click_10000 = 10000;
const click_25000 = 25000;
const click_100000 = 100000;

const points_100000 = 100000;
const points_250000 = 250000;
const points_1000000 = 1000000;
const points_2500000 = 2500000;
const points_10000000 = 10000000;

const coin_20 = 20;
const coin_50 = 50;
const coin_200 = 200;
const coin_500 = 500;
const coin_2000 = 2000;

const rp_500 = 500;
const rp_1250 = 1250;
const rp_5000 = 5000;
const rp_12500 = 12500;
const rp_50000 = 50000;

const evolve_3 = 3;
const evolve_5 = 5;
const evolve_10 = 10;
const evolve_15 = 15;
const evolve_25 = 25;


//
function checkAchievements() {
  // Click achievements
  checkClickAchievement(click1000, allTimeClicks, click_1000);
  checkClickAchievement(click2500, allTimeClicks, click_2500);
  checkClickAchievement(click10000, allTimeClicks, click_10000);
  checkClickAchievement(click25000, allTimeClicks, click_25000);
  checkClickAchievement(click100000, allTimeClicks, click_100000);

  // Points achievements
  checkClickAchievement(points100000, allTimePoints, points_100000);
  checkClickAchievement(points250000, allTimePoints, points_250000);
  checkClickAchievement(points1000000, allTimePoints, points_1000000);
  checkClickAchievement(points2500000, allTimePoints, points_2500000);
  checkClickAchievement(points10000000, allTimePoints, points_10000000);

  // Coins achievements
  checkClickAchievement(coin20, totalcoins, coin_20);
  checkClickAchievement(coin50, totalcoins, coin_50);
  checkClickAchievement(coin200, totalcoins, coin_200);
  checkClickAchievement(coin500, totalcoins, coin_500);
  checkClickAchievement(coin2000, totalcoins, coin_2000);

  // RankPoints achievements
  checkClickAchievement(rp500, totalRankPoints, rp_500);
  checkClickAchievement(rp1250, totalRankPoints, rp_1250);
  checkClickAchievement(rp5000, totalRankPoints, rp_5000);
  checkClickAchievement(rp12500, totalRankPoints, rp_12500);
  checkClickAchievement(rp50000, totalRankPoints, rp_50000);

  // Evolutions achievements
  checkClickAchievement(evolve3, evolveLVL, evolve_3);
  checkClickAchievement(evolve5, evolveLVL, evolve_5);
  checkClickAchievement(evolve10, evolveLVL, evolve_10);
  checkClickAchievement(evolve15, evolveLVL, evolve_15);
  checkClickAchievement(evolve25, evolveLVL, evolve_25);
}

const achievementRewards = {
  // Evolutions: reward in rankPoints = required * 50
    evolve3: () => {
    const reward = 3 * 50;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },
    evolve5: () => {
    const reward = 5 * 50;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },
    evolve10: () => {
    const reward = 10 * 50;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },
    evolve15: () => {
    const reward = 15 * 50;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },
    evolve25: () => {
    const reward = 25 * 50;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },

    click1000: () => {
    const reward = 1000 / 50;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },
    click2500: () => {
    const reward = 2500 / 50;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },
    click10000: () => {
    const reward = 10000 / 50;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },
    click25000: () => {
    const reward = 25000 / 50;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },
    click100000: () => {
    const reward = 100000 / 50;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },

    points100000: () => {
    const reward = 100000 * 0.2;
    clicks += reward;
    allTimePoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} points`);
    },
    points250000: () => {
    const reward = 250000 * 0.2;
    clicks += reward;
    allTimePoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} points`);
    },
    points1000000: () => {
    const reward = 1000000 * 0.2;
    clicks += reward;
    allTimePoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} points`);
    },
    points2500000: () => {
    const reward = 2500000 * 0.2;
    clicks += reward;
    allTimePoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} points`);
    },
    points10000000: () => {
    const reward = 10000000 * 0.2;
    clicks += reward;
    allTimePoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} points`);
    },

    coin20: () => {
    const reward = 20 * 0.2;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },
    coin50: () => {
    const reward = 50 * 0.2;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },
    coin200: () => {
    const reward = 200 * 0.2;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },
    coin500: () => {
    const reward = 500 * 0.2;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },
    coin2000: () => {
    const reward = 2000 * 0.2;
    coins += reward;
    totalcoins += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} coins`);
    },

    rp500: () => {
    const reward = 500 * 0.2;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },
    rp1250: () => {
    const reward = 1250 * 0.2;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },
    rp5000: () => {
    const reward = 5000 * 0.2;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },
    rp12500: () => {
    const reward = 12500 * 0.2;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },
    rp50000: () => {
    const reward = 50000 * 0.2;
    rankPoints += reward;
    totalRankPoints += reward;
    showPopup('otherPopUps', `+${formatNumber(reward)} RankPoints`);
    },
}


function checkClickAchievement(button, currentValue, threshold) {
  if (
    currentValue >= threshold &&
    !button.classList.contains("achieved") &&
    !button.classList.contains("received")
  ) {
    button.classList.add("achieved");
    unlockedAchievements.add(button.id);
  }
}

function setupAchievementClicks() {
  const allButtons = document.querySelectorAll("#Basic-Achievments button");

  allButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("achieved")) {
        claimAchievement(button);
      }
    });
  });
}

function claimAchievement(id) {
    if (unlockedAchievements.has(id) && !claimedAchievements.has(id)) {
        unlockedAchievements.delete(id);
        claimedAchievements.add(id);
        const btn = document.getElementById(id);
        if (btn) {
            btn.classList.remove("achieved");
            btn.classList.add("received");
        }
    }
}



function setupAchievementButtons() {
  document.querySelectorAll('#Basic-Achievments button').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.id;

      if (unlockedAchievements.has(id) && !claimedAchievements.has(id)) {

        claimedAchievements.add(id);

        btn.classList.remove('achieved');
        btn.classList.add('received');

        //trigger award
        if (achievementRewards[id]) {
          achievementRewards[id]();
        }
        achievementsCompleted ++;

        updateRank();
        UpdateUI();
        priceChanges();
      }
    });
  });
}