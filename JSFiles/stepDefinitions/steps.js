"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const cucumber_1 = require("cucumber");
const chai_1 = __importDefault(require("chai"));
const nbaPage_1 = require("../pageObjets/nbaPage");
//browser.get('http://http://www.nba.com/#/')
//browser.sleep(3000);
var expect = chai_1.default.expect;
var assert = chai_1.default.assert;
let objHomeP = new nbaPage_1.NBAHomePage();
let countScore = -1;
let stringPlayer = "";
let numBasketItems = 0;
var arrayPointPlayers = new Array(0);
cucumber_1.Given('I will navigate to {string} pages', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    //debugger;
    if (string == "NBA SCORE") {
        yield protractor_1.browser.get(nbaPage_1.NBA_HOME);
        yield objHomeP.tabScore.click();
    }
    else if (string == "league leaders") {
        yield protractor_1.browser.get(nbaPage_1.leagueleaders);
    }
    else if (string == "shop") {
        //await objHomeP.ArrayShopButton.get(0).click();
        //await objHomeP.shopMen.click();
        yield protractor_1.browser.get('https://www.nbastore.eu/stores/nba/en/c/mens');
    }
}));
cucumber_1.When('I get all the games', () => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    //await browser.sleep(3000);
    countScore = yield objHomeP.gamesScoreAll.count();
    yield console.log(countScore);
}));
cucumber_1.Then('Number of games shoud be from {string} to {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    let boolTestValue = false;
    if (string <= countScore <= string2) {
        boolTestValue = true;
    }
    else {
        boolTestValue = false;
    }
    yield expect(boolTestValue).to.equal(true);
}));
//2) Scenario: Check Lead Players in all top statiscis categories # Features\NBA.feature:11
//countScore =  -1;
cucumber_1.When('I check all top categorise', () => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield objHomeP.seassonLeadersBut.click();
    yield protractor_1.browser.sleep(3000);
    countScore = yield objHomeP.allLeadersCategories.count();
    yield console.log(countScore);
}));
cucumber_1.Then('the output displayed should be {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield assert.equal(countScore, string);
}));
//3) Scenario: Check is some player present in top categorie # Features\NBA.feature:26
cucumber_1.When('I will check {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield objHomeP.seassonLeadersBut.click();
    if (string == "points") {
        yield objHomeP.allLeadersCategories.get(0).click();
        yield protractor_1.browser.sleep(3000);
        let str = yield objHomeP.seasonLePoints.get(0).getAttribute("data-ng-href");
        //stringPlayer = await str.slice(12, 0); 
        //await console.log(stringPlayer);
        yield protractor_1.browser.sleep(3000);
        yield console.log(str);
        stringPlayer = yield str;
        yield arrayPointPlayers.push(stringPlayer);
        let num = yield objHomeP.sesLeArryPoint.count();
        for (let i = yield 0; i < num; i++) {
            let str1 = yield objHomeP.sesLeArryPoint.get(i).getAttribute("data-ng-href");
            yield arrayPointPlayers.push(str1);
        }
    }
    else if (string == "assists") {
        yield objHomeP.allLeadersCategories.get(3).click();
        yield protractor_1.browser.sleep(3000);
        let str = yield objHomeP.seasonLeAssist.get(0).getAttribute("data-ng-href");
        yield protractor_1.browser.sleep(3000);
        yield console.log(str);
        stringPlayer = yield str;
        //stringPlayer = await str.slice(5, 0); 
        //await console.log(stringPlayer);
        yield arrayPointPlayers.push(stringPlayer);
        let num = yield objHomeP.sesLeArryAssist.count();
        for (let i = yield 0; i < num; i++) {
            let str1 = yield objHomeP.sesLeArryAssist.get(i).getAttribute("data-ng-href");
            yield arrayPointPlayers.push(str1);
            yield console.log(str1);
        }
    }
}));
cucumber_1.Then('you will check is  {string} in that categorie', (string) => __awaiter(this, void 0, void 0, function* () {
    // 
    let num = yield arrayPointPlayers.length;
    let boolISplayerPresent = false;
    for (let i = yield 0; i < num; i++) {
        if (arrayPointPlayers[i] == string) {
            boolISplayerPresent = yield true;
            //exit for 
            break;
        }
    }
    yield expect(boolISplayerPresent).to.equal(true);
    arrayPointPlayers = yield [];
}));
/*When('I will choose two productds', async () => {
   // Write code here that turns the phrase above into concrete actions
   await objHomeP.DenverShopMen.click();
   await objHomeP.jerseyJokic.click();
   
   return 'pending';
 });*/
cucumber_1.When('I choose {string} productds', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield objHomeP.DenverShopMen.click();
    yield protractor_1.browser.sleep(5000);
    yield objHomeP.jerseyJokic.click();
    yield protractor_1.browser.sleep(5000);
    let num = yield objHomeP.sizeClotes.count();
    yield protractor_1.browser.sleep(5000);
    for (let i = yield 0; i < num; i++) {
        let str1 = yield objHomeP.sizeClotes.get(i).getAttribute("class");
        if (!str1.includes("disabled")) {
            yield objHomeP.sizeClotes.get(i).click();
            break;
        }
        else {
            yield console.log("There is no any size of choosed product ");
        }
    }
    yield objHomeP.AddToBasketBut.click();
    // Add onother on product 
    yield protractor_1.browser.get('https://www.nbastore.eu/stores/nba/en/basket');
    yield objHomeP.ContinueShopingLink.click();
    yield objHomeP.jersyShopImage.click();
    yield objHomeP.dallasMavericks.click();
    yield protractor_1.browser.sleep(5000);
    yield objHomeP.dallasShort.click();
    yield protractor_1.browser.sleep(5000);
    let num1 = yield objHomeP.sizeClotes.count();
    for (let i = yield 0; i < num1; i++) {
        let str1 = yield objHomeP.sizeClotes.get(i).getAttribute("class");
        if (!str1.includes("disabled")) {
            yield objHomeP.sizeClotes.get(i).click();
            break;
        }
        else {
            yield console.log("There is no any size of choosed product ");
        }
    }
    yield objHomeP.AddToBasketBut.click();
    yield protractor_1.browser.get('https://www.nbastore.eu/stores/nba/en/basket');
    numBasketItems = yield objHomeP.basketItems.count();
}));
cucumber_1.Then('The number of check item in Basket shold be {int}', (int) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield expect(numBasketItems).to.equal(int);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUNyQyx1Q0FBNEM7QUFDNUMsZ0RBQXdCO0FBQ3hCLG1EQUE2RTtBQUs3RSw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLFFBQVEsR0FBRyxJQUFJLHFCQUFXLEVBQUUsQ0FBQztBQUNqQyxJQUFJLFVBQVUsR0FBTyxDQUFDLENBQUMsQ0FBQTtBQUN2QixJQUFJLFlBQVksR0FBRyxFQUFFLENBQUE7QUFDckIsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFBO0FBQ3RCLElBQUksaUJBQWlCLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFckMsZ0JBQUssQ0FBQyxtQ0FBbUMsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQzFELG9FQUFvRTtJQUNwRSxXQUFXO0lBQ1gsSUFBSSxNQUFNLElBQUksV0FBVyxFQUN6QjtRQUNFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNqQztTQUNJLElBQUksTUFBTSxJQUFJLGdCQUFnQixFQUNuQztRQUNFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsdUJBQWEsQ0FBQyxDQUFDO0tBQ2xDO1NBQ0ksSUFBSSxNQUFNLElBQUksTUFBTSxFQUN6QjtRQUNFLGdEQUFnRDtRQUNoRCxpQ0FBaUM7UUFDakMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO0tBQ25FO0FBRUgsQ0FBQyxDQUFBLENBQUMs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