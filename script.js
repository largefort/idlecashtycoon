let cash = 10;
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
let amusementParkCount = 0;
let casinoCount = 0;
let airportCount = 0;
let hospitalCount = 0;
let breweryCount = 0;
let tvStudioCount = 0;
let megaMallCount = 0;
let militaryBaseCount = 0;
let spaceXCount = 0;
let cyberneticsLabCount = 0;

// Building costs
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
const amusementParkCost = 10000000000;
const casinoCost = 50000000000;
const airportCost = 100000000000;
const hospitalCost = 500000000000;
const breweryCost = 1000000000000;
const tvStudioCost = 5000000000000;
const megaMallCost = 10000000000000;
const militaryBaseCost = 50000000000000;
const spaceXCost = 100000000000000;
const cyberneticsLabCost = 500000000000000;

// Building incomes per second
const companyIncome = 1;
const factoryIncome = 5;
const bankIncome = 10;
const skyscraperIncome = 50;
const mallIncome = 100;
const hotelIncome = 500;
const restaurantIncome = 1000;
const stadiumIncome = 5000;
const techParkIncome = 10000;
const universityIncome = 50000;
const shoppingCenterIncome = 100000;
const themeParkIncome = 500000;
const researchLabIncome = 1000000;
const spaceportIncome = 5000000;
const arcadeIncome = 10000;
const filmStudioIncome = 50000;
const carFactoryIncome = 100000;
const rocketFactoryIncome = 500000;
const nanoFactoryIncome = 1000000;
const fusionReactorIncome = 5000000;
const amusementParkIncome = 10000000;
const casinoIncome = 50000000;
const airportIncome = 100000000;
const hospitalIncome = 500000000;
const breweryIncome = 1000000000;
const tvStudioIncome = 5000000000;
const megaMallIncome = 10000000000;
const militaryBaseIncome = 50000000000;
const spaceXIncome = 100000000000;
const cyberneticsLabIncome = 500000000000;

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
const buildAmusementParkBtn = document.getElementById('build-amusementpark-btn');
const buildCasinoBtn = document.getElementById('build-casino-btn');
const buildAirportBtn = document.getElementById('build-airport-btn');
const buildHospitalBtn = document.getElementById('build-hospital-btn');
const buildBreweryBtn = document.getElementById('build-brewery-btn');
const buildTvStudioBtn = document.getElementById('build-tvstudio-btn');
const buildMegaMallBtn = document.getElementById('build-megamall-btn');
const buildMilitaryBaseBtn = document.getElementById('build-militarybase-btn');
const buildSpaceXBtn = document.getElementById('build-spacex-btn');
const buildCyberneticsLabBtn = document.getElementById('build-cyberneticslab-btn');

// Counter elements
const companyCountElement = document.getElementById('company-count');
const factoryCountElement = document.getElementById('factory-count');
const bankCountElement = document.getElementById('bank-count');
const skyscraperCountElement = document.getElementById('skyscraper-count');
const mallCountElement = document.getElementById('mall-count');
const hotelCountElement = document.getElementById('hotel-count');
const restaurantCountElement = document.getElementById('restaurant-count');
const stadiumCountElement = document.getElementById('stadium-count');
const techParkCountElement = document.getElementById('techpark-count');
const universityCountElement = document.getElementById('university-count');
const shoppingCenterCountElement = document.getElementById('shoppingcenter-count');
const themeParkCountElement = document.getElementById('themepark-count');
const researchLabCountElement = document.getElementById('researchlab-count');
const spaceportCountElement = document.getElementById('spaceport-count');
const arcadeCountElement = document.getElementById('arcade-count');
const filmStudioCountElement = document.getElementById('filmstudio-count');
const carFactoryCountElement = document.getElementById('carfactory-count');
const rocketFactoryCountElement = document.getElementById('rocketfactory-count');
const nanoFactoryCountElement = document.getElementById('nanofactory-count');
const fusionReactorCountElement = document.getElementById('fusionreactor-count');
const amusementParkCountElement = document.getElementById('amusementpark-count');
const casinoCountElement = document.getElementById('casino-count');
const airportCountElement = document.getElementById('airport-count');
const hospitalCountElement = document.getElementById('hospital-count');
const breweryCountElement = document.getElementById('brewery-count');
const tvStudioCountElement = document.getElementById('tvstudio-count');
const megaMallCountElement = document.getElementById('megamall-count');
const militaryBaseCountElement = document.getElementById('militarybase-count');
const spaceXCountElement = document.getElementById('spacex-count');
const cyberneticsLabCountElement = document.getElementById('cyberneticslab-count');

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
buildAmusementParkBtn.addEventListener('click', buildAmusementPark);
buildCasinoBtn.addEventListener('click', buildCasino);
buildAirportBtn.addEventListener('click', buildAirport);
buildHospitalBtn.addEventListener('click', buildHospital);
buildBreweryBtn.addEventListener('click', buildBrewery);
buildTvStudioBtn.addEventListener('click', buildTvStudio);
buildMegaMallBtn.addEventListener('click', buildMegaMall);
buildMilitaryBaseBtn.addEventListener('click', buildMilitaryBase);
buildSpaceXBtn.addEventListener('click', buildSpaceX);
buildCyberneticsLabBtn.addEventListener('click', buildCyberneticsLab);

function buildCompany() {
    if (cash >= companyCost) {
        cash -= companyCost;
        companyCount++;
        cashDisplay.textContent = `$${cash}`;
        companyCountElement.textContent = companyCount;
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
        factoryCountElement.textContent = factoryCount;
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
        bankCountElement.textContent = bankCount;
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
        skyscraperCountElement.textContent = skyscraperCount;
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
        mallCountElement.textContent = mallCount;
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
        hotelCountElement.textContent = hotelCount;
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
        restaurantCountElement.textContent = restaurantCount;
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
        stadiumCountElement.textContent = stadiumCount;
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
        techParkCountElement.textContent = techParkCount;
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
        universityCountElement.textContent = universityCount;
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
        shoppingCenterCountElement.textContent = shoppingCenterCount;
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
        themeParkCountElement.textContent = themeParkCount;
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
        researchLabCountElement.textContent = researchLabCount;
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
        spaceportCountElement.textContent = spaceportCount;
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
        arcadeCountElement.textContent = arcadeCount;
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
        filmStudioCountElement.textContent = filmStudioCount;
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
        carFactoryCountElement.textContent = carFactoryCount;
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
        rocketFactoryCountElement.textContent = rocketFactoryCount;
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
        nanoFactoryCountElement.textContent = nanoFactoryCount;
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
        fusionReactorCountElement.textContent = fusionReactorCount;
        updateIncome();
    } else {
        alert("You don't have enough cash to build a fusion reactor!");
    }
}

function buildAmusementPark() {
    if (cash >= amusementParkCost) {
        cash -= amusementParkCost;
        amusementParkCount++;
        cashDisplay.textContent = `$${cash}`;
        amusementParkCountElement.textContent = amusementParkCount;
        updateIncome();
    } else {
        alert("You don't have enough cash to build an amusement park!");
    }
}

function buildCasino() {
    if (cash >= casinoCost) {
        cash -= casinoCost;
        casinoCount++;
        cashDisplay.textContent = `$${cash}`;
        casinoCountElement.textContent = casinoCount;
        updateIncome();
    } else {
        alert("You don't have enough cash to build a casino!");
    }
}

function buildAirport() {
    if (cash >= airportCost) {
        cash -= airportCost;
        airportCount++;
        cashDisplay.textContent = `$${cash}`;
        airportCountElement.textContent = airportCount;
        updateIncome();
    } else {
        alert("You don't have enough cash to build an airport!");
    }
}

function buildHospital() {
    if (cash >= hospitalCost) {
        cash -= hospitalCost;
        hospitalCount++;
        cashDisplay.textContent = `$${cash}`;
        hospitalCountElement.textContent = hospitalCount;
        updateIncome();
    } else {
        alert("You don't have enough cash to build a hospital!");
    }
}

function buildBrewery() {
    if (cash >= breweryCost) {
        cash -= breweryCost;
        breweryCount++;
        cashDisplay.textContent = `$${cash}`;
        breweryCountElement.textContent = breweryCount;
        updateIncome();
    } else {
        alert("You don't have enough cash to build a brewery!");
    }
}

function buildTvStudio() {
    if (cash >= tvStudioCost) {
        cash -= tvStudioCost;
        tvStudioCount++;
        cashDisplay.textContent = `$${cash}`;
        tvStudioCountElement.textContent = tvStudioCount;
        updateIncome();
    } else {
        alert("You don't have enough cash to build a TV studio!");
    }
}

function buildMegaMall() {
    if (cash >= megaMallCost) {
        cash -= megaMallCost;
        megaMallCount++;
        cashDisplay.textContent = `$${cash}`;
        megaMallCountElement.textContent = megaMallCount;
        updateIncome();
    } else {
        alert("You don't have enough cash to build a mega mall!");
    }
}

function buildMilitaryBase() {
    if (cash >= militaryBaseCost) {
        cash -= militaryBaseCost;
        militaryBaseCount++;
        cashDisplay.textContent = `$${cash}`;
        militaryBaseCountElement.textContent = militaryBaseCount;
        updateIncome();
    } else {
        alert("You don't have enough cash to build a military base!");
    }
}

function buildSpaceX() {
    if (cash >= spaceXCost) {
        cash -= spaceXCost;
        spaceXCount++;
        cashDisplay.textContent = `$${cash}`;
        spaceXCountElement.textContent = spaceXCount;
        updateIncome();
    } else {
        alert("You don't have enough cash to build SpaceX!");
    }
}

function buildCyberneticsLab() {
    if (cash >= cyberneticsLabCost) {
        cash -= cyberneticsLabCost;
        cyberneticsLabCount++;
        cashDisplay.textContent = `$${cash}`;
        cyberneticsLabCountElement.textContent = cyberneticsLabCount;
        updateIncome();
    } else {
        alert("You don't have enough cash to build a cybernetics lab!");
    }
}

function updateIncome() {
    const totalIncome = companyCount * companyIncome + factoryCount * factoryIncome + bankCount * bankIncome + skyscraperCount * skyscraperIncome + mallCount * mallIncome + hotelCount * hotelIncome + restaurantCount * restaurantIncome + stadiumCount * stadiumIncome + techParkCount * techParkIncome + universityCount * universityIncome + shoppingCenterCount * shoppingCenterIncome + themeParkCount * themeParkIncome + researchLabCount * researchLabIncome + spaceportCount * spaceportIncome + arcadeCount * arcadeIncome + filmStudioCount * filmStudioIncome + carFactoryCount * carFactoryIncome + rocketFactoryCount * rocketFactoryIncome + nanoFactoryCount * nanoFactoryIncome + fusionReactorCount * fusionReactorIncome + amusementParkCount * amusementParkIncome + casinoCount * casinoIncome + airportCount * airportIncome + hospitalCount * hospitalIncome + breweryCount * breweryIncome + tvStudioCount * tvStudioIncome + megaMallCount * megaMallIncome + militaryBaseCount * militaryBaseIncome + spaceXCount * spaceXIncome + cyberneticsLabCount * cyberneticsLabIncome;
    cash += totalIncome;
    cashDisplay.textContent = `$${cash}`;
}

setInterval(updateIncome, 1000); // Update income every second

// Function to update counter
function updateBuildingCounters() {
    companyCountElement.textContent = companyCount;
    factoryCountElement.textContent = factoryCount;
    bankCountElement.textContent = bankCount;
    skyscraperCountElement.textContent = skyscraperCount;
    mallCountElement.textContent = mallCount;
    hotelCountElement.textContent = hotelCount;
    restaurantCountElement.textContent = restaurantCount;
    stadiumCountElement.textContent = stadiumCount;
    techParkCountElement.textContent = techParkCount;
    universityCountElement.textContent = universityCount;
    shoppingCenterCountElement.textContent = shoppingCenterCount;
    themeParkCountElement.textContent = themeParkCount;
    researchLabCountElement.textContent = researchLabCount;
    spaceportCountElement.textContent = spaceportCount;
    arcadeCountElement.textContent = arcadeCount;
    filmStudioCountElement.textContent = filmStudioCount;
    carFactoryCountElement.textContent = carFactoryCount;
    rocketFactoryCountElement.textContent = rocketFactoryCount;
    nanoFactoryCountElement.textContent = nanoFactoryCount;
    fusionReactorCountElement.textContent = fusionReactorCount;
    amusementParkCountElement.textContent = amusementParkCount;
    casinoCountElement.textContent = casinoCount;
    airportCountElement.textContent = airportCount;
    hospitalCountElement.textContent = hospitalCount;
    breweryCountElement.textContent = breweryCount;
    tvStudioCountElement.textContent = tvStudioCount;
    megaMallCountElement.textContent = megaMallCount;
    militaryBaseCountElement.textContent = militaryBaseCount;
    spaceXCountElement.textContent = spaceXCount;
    cyberneticsLabCountElement.textContent = cyberneticsLabCount;
}

updateBuildingCounters(); // Initial update of building counters
