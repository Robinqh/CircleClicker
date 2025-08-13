

// --- Core Game Economy & Progress ---
let clicks = 0;
let coins = 0;
let rankPoints = 0;
let permapower = 0;
let maxPermaPower = 0;
let totalPermaClicksBonus = 0;
let extraClickMultiplier = 0
let totalcoins = 0;
let allTimeClicks = 0;
let allTimePoints = 0;
let rank = "Your rank: Loading";
let RPpS = 0;
let upgradesBoughtThisEvo = 0; //only counts clicker/auto power

// --- Evolution System ---
let evolveLVL = 0;
let evopower = evolveLVL + 1;
let specialty = null;
let evoloss = 1;
let evolossBought = 0;
let totalExtraEvoloss = 0;
let ELMcost = 15;
let mayEvolve = null;
let MainGoalAchieved = null;
let noEVOallowedReason = "";
let evolutionReached = new Set();
let freeEvosAllowed = 0;
let evogoal = null;
let evogoalcompleted = false;
let mainEvoGoalCompleted = false;

// --- Click & Auto-Click Mechanics ---
let power = 1 * evopower;
let powerprice = 1;
let powerupgrades = 0;

let autoclick = 750;
let autopower = 0 * evopower;
let autoprice = 25;
let autoupgrades = 0;
let autotimerCost = 45;
let autoTimerBought = 0;
let totalAutoclickTimeReductionBonus = 0;
let increaseAuto = 50;

let upgradesSinceLastMEGA = 0

// --- Multipliers & Bonuses ---
let clicksMultiplier = 1;
let autoMultiplier = 1;
let coinMultiplier = 1;
let priceMultiplier = 1;
let pricemultiplier2 = 1;

let increasePower = 1;
let increaseEvolve = 500;
let increasePerma = 2500;

let plusOneMultiplier = false;
let quartered = false;

// --- Coin Generation & Mystery Box ---
let coinneeded = 400;
let newCoin = 150;
let timesClicked = 0;
let neededClicks = newCoin - timesClicked;


let mysteryprice = 1000 + (clicks * 0.75);
let mystery = Math.random();
let rewardMessage = "";
let mgBought = 0;
let maxMGperEvo = 1;
let maxMGupgradesBought = 0;
let totalExtraMGs = 0;
let reduceMysterycost = 150;
let coinBoughtMaxPermaPower = 0;

// --- Offline Progress ---
let lastPlayedTime = null;
let firstload = true;
let stat = 1;
let multiplier2 = 0.1; //offline multiplier
let maxOffTime = 3600;

// --- Game State & UI Management ---
let autoSaveToggle = true;
let autoSaveInterval;
let autosaveMessageFlag = 0;
let autosaveMessageInterval;

let toggle = 1;
let isSpecialShop = false; //coinshop
let isRankShop = false;
let screenToggle = 1;
let groupNumber = null; //coinshops

// --- Rank Shop Purchases & Costs ---
let totalRankPoints = 0;
let CoinACbought = false;
let Offlinebought = false;
let CNBought = 0;

let CoinACcost = 3000;
let Offlinecost = 750;
let CNneededcost = 500;
let ExchangeCost = 20;
let ExtraMaxPermaPowerCost = 300;

// --- Other Stuff ---
let achievementsCompleted = 0;
let soundToggle = true;
let musicToggle = false;
let ogModeFound = false;