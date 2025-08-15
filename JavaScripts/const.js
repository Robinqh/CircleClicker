
/// Body / Stylesheets
const body = document.getElementById("body")
const styleSheet = document.getElementById("stylesheet")
const styleSheetOG = document.getElementById("stylesheetOG")

//screens
const gameScreen = document.getElementById("game-container")
const achievementScreen = document.getElementById("achievmentScreen")
const OGVERSIONScreen = document.getElementById("OG-Version")
const largePopUps = document.getElementById("large-pop-ups") //name should be changed - but stops people from clicking elsewhere
const sidelineLeft = document.getElementById("left-line")
const sidelineRight = document.getElementById("right-line")

//settings
const settings = document.getElementById("settings")
const settingsScreenButtoon = document.getElementById("settingsScreen")
const leaveSettings = document.getElementById("leaveSettings")

//stats
    //Stats A
const ClickPowerElement = document.getElementById("ClickPower");
const AutoPowerElement = document.getElementById("AutoPower");
const evolutionLevelElement = document.getElementById("EvolutionLevel");

    //Stats B
const offlinemultiplierstat = document.getElementById("offlinemultiplier")
const priceMultiplierElement = document.getElementById("pricemultiplier")
const totalClicksPoints = document.getElementById("totalClicksPoints");

    //Ranks
const currentRankElement = document.getElementById("currentRank");
const RANK_CLASSES = ['wood', 'bronze', 'iron', 'gold', 'platinum', "champion"];

//Buttons
    //Normal Upgrades
const powerupgradeButton = document.getElementById("powerupgrade");
const autoupgradeButton = document.getElementById("autoupgrade");
const permanentupgradeButton = document.getElementById("permanentupgrade");

const mysterygiftButton = document.getElementById("mysterygift");

        //Evolve Logic
const evolveButton = document.getElementById("evolve");
const evolvedPopUp = document.getElementById("evolved")
const message = document.getElementById("evolved-message");
const choose = document.getElementById("choose")
const clickerSpecialty = document.getElementById("clicker")
const offlinerSpecialty = document.getElementById("offliner")
const buyerSpeciality = document.getElementById("buyer")
const evolverSpeciality = document.getElementById("evolver")
const closeEvolvedPopupButton = document.getElementById("closeEvolvedPopup")


            //Confirm Evolution
const confirmEvolvePopup = document.getElementById("confirm-evolve-popup");
const confirmEvolveYesButton = document.getElementById("confirm-evolve-yes");
const confirmEvolveNoButton = document.getElementById("confirm-evolve-no");

    //Coinshop 
const ELMButton = document.getElementById('ELM');
const autotimeButton = document.getElementById('autotime');
const mysterypriceButton = document.getElementById('mysteryprice');

const ExtraMaxPermaPower = document.getElementById("ExtraMaxPermaPower")
const XX = document.getElementById("X2")
const XXX = document.getElementById("X3")

    //Rankshop 
const CoinACButton = document.getElementById("CoinAC");
const OffButton = document.getElementById("Offline");
const CNButton = document.getElementById("CN");
const RPexchangeButton = document.getElementById("RPexchange");

const XXXX = document.getElementById("X4")
const XXXXX = document.getElementById("X5")
const XXXXXX = document.getElementById("X6")
const XXXXXXX = document.getElementById("X7")

    //Shops
const btnNormal = document.getElementById('btnNormal');
const btnSpecial = document.getElementById('btnSpecial');
const btnRank = document.getElementById('btnRank');

const coinShop1 = document.getElementById("special-buttons-group")
const coinShop2 = document.getElementById("special-buttons-group2")

const rankShop1 = document.getElementById("rank-buttons-group")
const rankShop2 = document.getElementById("rank-buttons-group2")
//Pop-Ups
const popupmysterygiftElement = document.getElementById("popupmysterygift");
const popupNCElement = document.getElementById("popupNC")
const exchangeMessage = document.getElementById("exchangeMessage")
const showChangeLogsButton = document.getElementById("showChangeLogs");
const popupAutoSave = document.getElementById("popupAutoSave")
const resetPopUp = document.getElementById("reset")
const loadPopUp = document.getElementById("load")


//Circle
const circle = document.getElementById("circle");
const pointValueElement = document.getElementById("pointValue");

//Progress Bars
const progressBarRanks = document.getElementById("progress-bar-RANKS")
const progressTextRanks = document.getElementById("progress-text-RANKS")

//Achievements
const unlockedAchievements = new Set();
const claimedAchievements = new Set();

//Extra
    //Multipliers
const pricemultiplier = document.getElementById("pricemultiplier")
const offlinemultiplier = document.getElementById("offlinemultiplier")

    //Upgrade Containers
const normalUpgradesContainer = document.getElementById('normal-upgrades');
const specialUpgradesContainer = document.getElementById('special-upgrades');
const rankUpgradesContainer = document.getElementById("rank-upgrades")

    //Toggles
const toggleStats = document.getElementById("toggleStats")
const toggleScreenButton = document.getElementById("toggleScreen");
const toggleScreenButton2 = document.getElementById("toggleScreen2");

    //Save - Load- Reset Logic
const loadconfirmed = false
const toggleAutoSave = document.getElementById("toggleAutoSave")
let  gamesaved = false

const confirmreset = document.getElementById("confirmreset")
const cancelreset = document.getElementById("cancelreset")

const confirmload = document.getElementById("confirmload")
const cancelload = document.getElementById("cancelload")

    //Sound Logic
const clickSound = new Audio("Sounds/clickSound.mp3");
const popupSound = new Audio("Sounds/PopUp.mp3")

const backgroundSong = new Audio("Sounds/backgroundmusic.mp3")
backgroundSong.loop = true;
backgroundSong.volume = 0.3;

    ///Easter Eggs
const OGVERSIONButton = document.getElementById("currentRank")
const backToGameScreen = document.getElementById("backToGameScreen")

//Locked Prices/Rewards
    //Permaprices
const permaprice = { //not effected by price multipliers
  1: 1500,
  2: 1900,
  3: 2400,
  4: 4500,
  5: 7500,
  6: 28000,
  7: 50000,
  8: 80000,
  9: 160000,
  10: 270000,
  11: 420000,
  12: 680000,
  13: 1150000,
  14: 1800000,
  15: 2900000,
  16: 4600000,
  17: 6500000,
  18: 8500000,
  19: 11300000,
  20: 14800000,
  21: 19500000,
  22: 26000000,
  23: 34000000,
  24: 45000000,
  25: 60000000,
};

    //#region --- Evolution Rewards ---

const rankData = { //evoloss needs to be positive to turn negative! Also for autoclicktimer - multiplier2 = offlinemultiplier
 1: { flag: 1 }, //unlocks autopower
 2: { flag: 2 }, //unlocks mysterygifts
 3: {
  flag: 3, maxPermaPower: 3, chooseSpecialty: true,
  specialtyBonuses: { //all other bonuses are done outside of this const
   buyer: { pricemultiplier2: -0.20, RPpS: 0.05 },
   evolver: {evoloss: 0.60}
  } //unlocks permapower
 },
 4: { flag: 4, //Coin shop unlock for other specs 
    specialtyBonuses: {
        buyer: {RPpS: 0.15},
        clicker: {clicksMultiplier: 0.15},
    }
 },
 5: {
  flag: 5, priceMultiplier: -0.15, clicksMultiplier: 0.15, autoMultiplier: 0.15, RPpS: 0.75, maxPermaPower: 5
 },
 6: { flag: 6, evoloss: 0.05 },
 7: { flag: 7, maxMysteryGifts: 1 },
 8: { flag: 8, //Rank shop unlock for other specs
        specialtyBonuses: {
        buyer: {RPpS: 0.35}
        }
  },
 9: {
  flag: 9,
  specialtyBonuses: {
   clicker: { clicksMultiplier: 0.25 },
   offliner: { multiplier2: 0.1, maxOffTime: +3600 },
   buyer: { priceMultiplier: -0.05, pricemultiplier2: -0.05 },
   evolver: { evoloss: 0.075 }
  }
 },
10: {
  flag: 10, priceMultiplier: -0.1, clicksMultiplier: 0.15, autoMultiplier: 0.15, RPpS: 1.75, multiplier2: 0.1, maxPermaPower: 8
 },
11: {
  flag: 11,
  specialtyBonuses: {
   clicker: { clicksMultiplier: 0.175 },
   offliner: { autoclickerTime: 100, autoMultiplier: 0.2 },
   buyer: { priceMultiplier: -0.125 },
   evolver: { RPpS: 1 }
  }
 },
12: { flag: 12, maxMysteryGifts: 1 },
13: { flag: 13 },
14: { flag: 14, evoloss: 0.05 },
15: {
  flag: 15, priceMultiplier: -0.1, clicksMultiplier: 0.35, autoMultiplier: 0.35, RPpS: 5, multiplier2: 0.15, maxPermaPower: 12
 },
16: { flag: 16 }, //coinmultiplier is done outisde of this const (in the evolve.onclick logic)
17: { flag: 17, pricemultiplier: -0.05 },
18: {
  flag: 18,
  specialtyBonuses: { //coinmultiplier for "clicker" is done outsife of this const (in the evolve.onclick logic)
   offliner: { multiplier2: 0.1, autoclickerTime: 50,  maxOffTime: +7200},
   buyer: { priceMultiplier: -0.05, pricemultiplier2: -0.05 },
   evolver: { evoloss: 0.05 }
  }
 },
19: { flag: 19, pricemultiplier: -0.05 },
20: {
  flag: 20,
  specialtyBonuses: {
   clicker: { clicksMultiplier: 0.5 },
   offliner: { multiplier2: 0.25, autoMultiplier: 0.25 },
   buyer: { priceMultiplier: -0.25 },
   evolver: { evoloss: 0.20 }
  }
 },
21: { flag: 21 },
22: {
  flag: 22,
  specialtyBonuses: {
   clicker: { clicksMultiplier: 0.1 },
   offliner: { multiplier2: 0.1 },
   buyer: { priceMultiplier: -0.025, pricemultiplier2: -0.025 },
   evolver: { evoloss: 0.05 }
  }
 },
23: { flag: 23, maxMysteryGifts: 1 },
24: { flag: 24, autoclickerTime: 75 },
25: {
  flag: 25, priceMultiplier: -0.15, clicksMultiplier: 0.6, autoMultiplier: 0.6, multiplier2: 0.15, maxPermaPower: 20, RPpS: 2.5
 },
26: {flag: 26,
    specialtyBonuses: {
        clicker: { clicksMultiplier: 0.25 },
        offliner: { multiplier2: 0.25 },
        buyer: { priceMultiplier: -0.05, pricemultiplier2: -0.05 },
        evolver: { evoloss: 0.05 }
    }
},
27: {flag: 27, maxMysteryGifts: 1},
28: {flag: 28, clicksMultiplier: 1, autoMultiplier: 1},
};

const evoRewards = {
  1: "Autopower unlocked!",
  2: "Mystery gift unlocked!",
3: `Bronze rank:<br>+3 max permapower<br>
    Choose your speciality!`,
  4: "Coin Shop unlocked!*<br>Buyer: +0.15 RPpS<br>Clicker: +15% click multiplier",
  5: `Iron rank:<br>-15% price multiplier<br>+15% clicks multiplier<br>+15% auto multiplier<br>+0.75 RankPoints per second<br>+2 max permapower`,
  6: "Evoloss -5%",
  7: "+1 max mystery gift per evo",
  8: "Rank Shop unlocked!*<br>Buyer: +0.35 RPpS",
  9: `Clicker: +25% click multiplier<br>Offliner: +10% offline multiplier, +1 hour offline time<br>Buyer: -5% on both price multipliers<br>Evolver: -7.5% evoloss`,
  10: `Gold rank:<br>-10% price multiplier<br>+15% clicks multiplier<br>+15% auto multiplier<br>+1.75 RankPoints per second<br>+10% offline multiplier<br>+3 max permapower`,
  11: `Clicker: +17.5% click multiplier<br>Offliner: -100MS on autoclick<br>Auto multiplier +20%<br>Buyer: -12.5% on normal prices<br>Evolver: +1 RPpS`,
  12: "+1 max mystery gift per evo",
  13: "Nothing",
  14: "Evoloss -5%",
  15: `Platinum rank:<br>-10% price multiplier<br>+35% clicks multiplier<br>+35% auto multiplier<br>+5 RPpS per second<br>+15% offline multiplier<br>+4 max permapower`,
  16: "+1 coin multiplier (+2 for clicker)",
  17: "-5% pricemultiplier",
  18: `Clicker: +1 coin multiplier<br>Offliner: +10% offline multiplier, -50MS on autoclick, +2 hours max offline time<br>Buyer: -5% on both price multipliers<br>Evolver: -5% evoloss`,
  19: "-5% pricemultiplier",
  20: `Clicker: +50% clicks multiplier<br>Offliner: +25% offline multiplier, +25% auto multiplier<br>Buyer: -25% on normal upgrades<br>Evolver: -20% evoloss`,
  21: "Nothing",
  22: `Clicker: +10% click multiplier<br>Offliner: +10% offline multiplier<br>Buyer: -2.5% on both price multipliers<br>Evolver: -5% evoloss`,
  23: "+1 max mystery gift per evo",
  24: "-75MS on autoclicker",
  25: `Champion rank:<br>-15% price multiplier<br>+60% clicks multiplier<br>+60% auto multiplier<br>+15% offline multiplier<br>+8 max permapower<br>+2.5 RPpS`,
  26: `Clicker: +25% click multiplier<br>Offliner: +25% offline multiplier<br>Buyer: -5% on both price multipliers<br>Evolver: -5% evoloss`,
  27: "+1 max mystery gift per evo",
  28: "+100% clicksmultiplier<br>+100% automultiplier"
};
//#endregion --- Evolution Rewards ---