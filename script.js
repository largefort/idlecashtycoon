let cash = 0;
let companyCount = 0;
let factoryCount = 0;
let bankCount = 0;
let skyscraperCount = 0;
let mallCount = 0;
let hotelCount = 0;
let restaurantCount = 0;
let stadiumCount = 0;
let techParkCount = 0;
let universityCount = 0;
let shoppingCenterCount = 0;
let themeParkCount = 0;
let researchLabCount = 0;
let spaceportCount = 0;
let arcadeCount = 0;
let filmStudioCount = 0;
let carFactoryCount = 0;
let rocketFactoryCount = 0;
let nanoFactoryCount = 0;
let fusionReactorCount = 0;

const companyCost = 10;
const factoryCost = 100;
const bankCost = 1000;
const skyscraperCost = 10000;
const mallCost = 100000;
const hotelCost = 500000;
const restaurantCost = 1000000;
const stadiumCost = 5000000;
const techParkCost = 10000000;
const universityCost = 50000000;
const shoppingCenterCost = 100000000;
const themeParkCost = 500000000;
const researchLabCost = 1000000000;
const spaceportCost = 5000000000;
const arcadeCost = 10000000;
const filmStudioCost = 50000000;
const carFactoryCost = 100000000;
const rocketFactoryCost = 500000000;
const nanoFactoryCost = 1000000000;
const fusionReactorCost = 5000000000;

const companyIncome = 1;
const factoryIncome = 10;
const bankIncome = 100;
const skyscraperIncome = 1000;
const mallIncome = 10000;
const hotelIncome = 50000;
const restaurantIncome = 100000;
const stadiumIncome = 500000;
const techParkIncome = 1000000;
const universityIncome = 10000000;
const shoppingCenterIncome = 50000000;
const themeParkIncome = 100000000;
const researchLabIncome = 500000000;
const spaceportIncome = 1000000000;
const arcadeIncome = 100000;
const filmStudioIncome = 500000;
const carFactoryIncome = 1000000;
const rocketFactoryIncome = 5000000;
const nanoFactoryIncome = 10000000;
const fusionReactorIncome = 50000000;

const cashDisplay = document.getElementById('cash-display');
const buildCompanyBtn = document.getElementById('build-company-btn');
const buildFactoryBtn = document.getElementById('build-factory-btn');
const buildBankBtn = document.getElementById('build-bank-btn');
const buildSkyscraperBtn = document.getElementById('build-skyscraper-btn');
const buildMallBtn = document.getElementById('build-mall-btn');
const buildHotelBtn = document.getElementById('build-hotel-btn');
const buildRestaurantBtn = document.getElementById('build-restaurant-btn');
const buildStadiumBtn = document.getElementById('build-stadium-btn');
const buildTechParkBtn = document.getElementById('build-techpark-btn');
const buildUniversityBtn = document.getElementById('build-university-btn');
const buildShoppingCenterBtn = document.getElementById('build-shoppingcenter-btn');
const buildThemeParkBtn = document.getElementById('build-themepark-btn');
const buildResearchLabBtn = document.getElementById('build-researchlab-btn');
const buildSpaceportBtn = document.getElementById('build-spaceport-btn');
const buildArcadeBtn = document.getElementById('build-arcade-btn');
const buildFilmStudioBtn = document.getElementById('build-filmstudio-btn');
const buildCarFactoryBtn = document.getElementById('build-carfactory-btn');
const buildRocketFactoryBtn = document.getElementById('build-rocketfactory-btn');
const buildNanoFactoryBtn = document.getElementById('build-nanofactory-btn');
const buildFusionReactorBtn = document.getElementById('build-fusionreactor-btn');

// Initialize IndexedDB
const dbName = 'incremental_game_db';
const dbVersion = 1;
let db;

const request = indexedDB.open(dbName, dbVersion);

request.onerror = function(event) {
    console.log('Database error: ' + event.target.errorCode);
};

request.onsuccess = function(event) {
    console.log('Database opened successfully');
    db = event.target.result;
    loadGame();
};

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    const objectStore = db.createObjectStore('game_data', { keyPath: 'id' });

    objectStore.transaction.oncomplete = function(event) {
        console.log('Object store created');
    };
};

function saveGame() {
    const transaction = db.transaction(['game_data'], 'readwrite');
    const objectStore = transaction.objectStore('game_data');

    const gameData = {
        id: 1,
        cash: cash,
        companyCount: companyCount,
        factoryCount: factoryCount,
        bankCount: bankCount,
        skyscraperCount: skyscraperCount,
        mallCount: mallCount,
        hotelCount: hotelCount,
        restaurantCount: restaurantCount,
        stadiumCount: stadiumCount,
        techParkCount: techParkCount,
        universityCount: universityCount,
        shoppingCenterCount: shoppingCenterCount,
        themeParkCount: themeParkCount,
        researchLabCount: researchLabCount,
        spaceportCount: spaceportCount,
        arcadeCount: arcadeCount,
        filmStudioCount: filmStudioCount,
        carFactoryCount: carFactoryCount,
        rocketFactoryCount: rocketFactoryCount,
        nanoFactoryCount: nanoFactoryCount,
        fusionReactorCount: fusionReactorCount
    };

    const request = objectStore.put(gameData);

    request.onsuccess = function(event) {
        console.log('Game saved successfully');
    };

    request.onerror = function(event) {
        console.log('Error saving game: ' + event.target.errorCode);
    };
}

function loadGame() {
    const transaction = db.transaction(['game_data'], 'readonly');
    const objectStore = transaction.objectStore('game_data');
    const request = objectStore.get(1);

    request.onsuccess = function(event) {
        const gameData = event.target.result;
        if (gameData) {
            cash = gameData.cash;
            companyCount = gameData.companyCount;
            factoryCount = gameData.factoryCount;
            bankCount = gameData.bankCount;
            skyscraperCount = gameData.skyscraperCount;
            mallCount = gameData.mallCount;
            hotelCount = gameData.hotelCount;
            restaurantCount = gameData.restaurantCount;
            stadiumCount = gameData.stadiumCount;
            techParkCount = gameData.techParkCount;
            universityCount = gameData.universityCount;
            shoppingCenterCount = gameData.shoppingCenterCount;
            themeParkCount = gameData.themeParkCount;
            researchLabCount = gameData.researchLabCount;
            spaceportCount = gameData.spaceportCount;
            arcadeCount = gameData.arcadeCount;
            filmStudioCount = gameData.filmStudioCount;
            carFactoryCount = gameData.carFactoryCount;
            rocketFactoryCount = gameData.rocketFactoryCount;
            nanoFactoryCount = gameData.nanoFactoryCount;
            fusionReactorCount = gameData.fusionReactorCount;

            cashDisplay.textContent = `$${cash}`;
        }
    };

    request.onerror = function(event) {
        console.log('Error loading game: ' + event.target.errorCode);
    };
}

buildCompanyBtn.addEventListener('click', buildCompany);
buildFactoryBtn.addEventListener('click', buildFactory);
buildBankBtn.addEventListener('click', buildBank);
buildSkyscraperBtn.addEventListener('click', buildSkyscraper);
buildMallBtn.addEventListener('click', buildMall);
buildHotelBtn.addEventListener('click', buildHotel);
buildRestaurantBtn.addEventListener('click', buildRestaurant);
buildStadiumBtn.addEventListener('click', buildStadium);
buildTechParkBtn.addEventListener('click', buildTechPark);
buildUniversityBtn.addEventListener('click', buildUniversity);
buildShoppingCenterBtn.addEventListener('click', buildShoppingCenter);
buildThemeParkBtn.addEventListener('click', buildThemePark);
buildResearchLabBtn.addEventListener('click', buildResearchLab);
buildSpaceportBtn.addEventListener('click', buildSpaceport);
buildArcadeBtn.addEventListener('click', buildArcade);
buildFilmStudioBtn.addEventListener('click', buildFilmStudio);
buildCarFactoryBtn.addEventListener('click', buildCarFactory);
buildRocketFactoryBtn.addEventListener('click', buildRocketFactory);
buildNanoFactoryBtn.addEventListener('click', buildNanoFactory);
buildFusionReactorBtn.addEventListener('click', buildFusionReactor);

function buildCompany() {
    if (cash >= companyCost) {
        cash -= companyCost;
        companyCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a company!");
    }
}

function buildFactory() {
    if (cash >= factoryCost) {
        cash -= factoryCost;
        factoryCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a factory!");
    }
}

function buildBank() {
    if (cash >= bankCost) {
        cash -= bankCost;
        bankCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a bank!");
    }
}

function buildSkyscraper() {
    if (cash >= skyscraperCost) {
        cash -= skyscraperCost;
        skyscraperCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a skyscraper!");
    }
}

function buildMall() {
    if (cash >= mallCost) {
        cash -= mallCost;
        mallCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a mall!");
    }
}

function buildHotel() {
    if (cash >= hotelCost) {
        cash -= hotelCost;
        hotelCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a hotel!");
    }
}

function buildRestaurant() {
    if (cash >= restaurantCost) {
        cash -= restaurantCost;
        restaurantCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a restaurant!");
    }
}

function buildStadium() {
    if (cash >= stadiumCost) {
        cash -= stadiumCost;
        stadiumCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a stadium!");
    }
}

function buildTechPark() {
    if (cash >= techParkCost) {
        cash -= techParkCost;
        techParkCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a tech park!");
    }
}

function buildUniversity() {
    if (cash >= universityCost) {
        cash -= universityCost;
        universityCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a university!");
    }
}

function buildShoppingCenter() {
    if (cash >= shoppingCenterCost) {
        cash -= shoppingCenterCost;
        shoppingCenterCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a shopping center!");
    }
}

function buildThemePark() {
    if (cash >= themeParkCost) {
        cash -= themeParkCost;
        themeParkCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a theme park!");
    }
}

function buildResearchLab() {
    if (cash >= researchLabCost) {
        cash -= researchLabCost;
        researchLabCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a research lab!");
    }
}

function buildSpaceport() {
    if (cash >= spaceportCost) {
        cash -= spaceportCost;
        spaceportCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a spaceport!");
    }
}

function buildArcade() {
    if (cash >= arcadeCost) {
        cash -= arcadeCost;
        arcadeCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build an arcade!");
    }
}

function buildFilmStudio() {
    if (cash >= filmStudioCost) {
        cash -= filmStudioCost;
        filmStudioCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a film studio!");
    }
}

function buildCarFactory() {
    if (cash >= carFactoryCost) {
        cash -= carFactoryCost;
        carFactoryCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a car factory!");
    }
}

function buildRocketFactory() {
    if (cash >= rocketFactoryCost) {
        cash -= rocketFactoryCost;
        rocketFactoryCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a rocket factory!");
    }
}

function buildNanoFactory() {
    if (cash >= nanoFactoryCost) {
        cash -= nanoFactoryCost;
        nanoFactoryCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a nano factory!");
    }
}

function buildFusionReactor() {
    if (cash >= fusionReactorCost) {
        cash -= fusionReactorCost;
        fusionReactorCount++;
        cashDisplay.textContent = `$${cash}`;
        saveGame();
        updateIncome();
    } else {
        alert("You don't have enough cash to build a fusion reactor!");
    }
}

function updateIncome() {
    const totalIncome = companyCount * companyIncome + factoryCount * factoryIncome + bankCount * bankIncome + skyscraperCount * skyscraperIncome + mallCount * mallIncome + hotelCount * hotelIncome + restaurantCount * restaurantIncome + stadiumCount * stadiumIncome + techParkCount * techParkIncome + universityCount * universityIncome + shoppingCenterCount * shoppingCenterIncome + themeParkCount * themeParkIncome + researchLabCount * researchLabIncome + spaceportCount * spaceportIncome + arcadeCount * arcadeIncome + filmStudioCount * filmStudioIncome + carFactoryCount * carFactoryIncome + rocketFactoryCount * rocketFactoryIncome + nanoFactoryCount * nanoFactoryIncome + fusionReactorCount * fusionReactorIncome;
    cash += totalIncome;
    cashDisplay.textContent = `$${cash}`;
}

setInterval(updateIncome, 1000); // Update income every second
