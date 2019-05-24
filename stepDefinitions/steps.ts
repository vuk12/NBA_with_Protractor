import { browser } from "protractor";
import { Given,When, Then } from "cucumber";
import chai from "chai";
import { NBAHomePage, NBA_HOME, leagueleaders } from "../pageObjets/nbaPage";
//import { async } from "q";
import * as nodemailer from 'nodemailer';
import {Transporter} from 'nodemailer'; // @types/nodemailer

//browser.get('http://http://www.nba.com/#/')
//browser.sleep(3000);
var expect = chai.expect;
var assert = chai.assert;
let objHomeP = new NBAHomePage();
let countScore:any = -1
let stringPlayer = ""
let numBasketItems = 0
var arrayPointPlayers = new Array(0);

Given('I will navigate to {string} pages', async (string) => {
  // Write code here that turns the phrase above into concrete actions
  //debugger;
  if (string == "NBA SCORE") 
  {
    await browser.get(NBA_HOME);
    await objHomeP.tabScore.click();
  }
  else if (string == "league leaders") 
  {
    await browser.get(leagueleaders);
  }
  else if (string == "shop") 
  {
    //await objHomeP.ArrayShopButton.get(0).click();
    //await objHomeP.shopMen.click();
    await browser.get('https://www.nbastore.eu/stores/nba/en/c/mens');
  }

});


When('I get all the games', async () => 
{
  // Write code here that turns the phrase above into concrete actions
  //await browser.sleep(3000);
  countScore = await objHomeP.gamesScoreAll.count();
  await console.log(countScore);
});



Then('Number of games shoud be from {string} to {string}', async (string, string2) => 
{
  // Write code here that turns the phrase above into concrete actions
  let boolTestValue: boolean = false;
  if (string <= countScore <= string2) 
  {
    boolTestValue = true;
  }
  else 
  {
    boolTestValue = false;
  }
  await expect(boolTestValue).to.equal(true);
});


//2) Scenario: Check Lead Players in all top statiscis categories # Features\NBA.feature:11

        //countScore =  -1;
         When('I check all top categorise', async ()=> {
           // Write code here that turns the phrase above into concrete actions
           await objHomeP.seassonLeadersBut.click();
           await browser.sleep(3000);
           countScore = await objHomeP.allLeadersCategories.count();
           await console.log(countScore);
         });

         Then('the output displayed should be {string}', async (string)=> {
           // Write code here that turns the phrase above into concrete actions
           await assert.equal(countScore,string);
         });


//3) Scenario: Check is some player present in top categorie # Features\NBA.feature:26



         When('I will check {string}', async (string)=> {
           // Write code here that turns the phrase above into concrete actions
           await objHomeP.seassonLeadersBut.click();
           if(string == "points")
           {
            await objHomeP.allLeadersCategories.get(0).click();
            await browser.sleep(3000);
            let str = await objHomeP.seasonLePoints.get(0).getAttribute("data-ng-href");
            //stringPlayer = await str.slice(12, 0); 
            //await console.log(stringPlayer);
            await browser.sleep(3000);
            await console.log(str);
            stringPlayer = await str;
            await arrayPointPlayers.push(stringPlayer);
            let num = await objHomeP.sesLeArryPoint.count();

            for(let i=await 0;i<num;i++)
            {
              let str1 = await objHomeP.sesLeArryPoint.get(i).getAttribute("data-ng-href");
              await arrayPointPlayers.push(str1);
            }

           }
           else if(string == "assists")
           {
              await objHomeP.allLeadersCategories.get(3).click();
              await browser.sleep(3000);
              let str = await objHomeP.seasonLeAssist.get(0).getAttribute("data-ng-href");
              await browser.sleep(3000);
              await console.log(str);
              stringPlayer= await str;
              //stringPlayer = await str.slice(5, 0); 
              //await console.log(stringPlayer);
              await arrayPointPlayers.push(stringPlayer);
              let num = await objHomeP.sesLeArryAssist.count();

              for(let i=await 0;i<num;i++)
              {
                let str1 = await objHomeP.sesLeArryAssist.get(i).getAttribute("data-ng-href");
                await arrayPointPlayers.push(str1);
                await console.log(str1)
              }

           }
  

         });

Then('you will check is  {string} in that categorie', async (string) => 
{
  // 
  let num = await arrayPointPlayers.length
  let boolISplayerPresent = false
  for(let i=await 0;i<num;i++)
  {
    if (arrayPointPlayers[i] == string)
    {
      boolISplayerPresent = await true;
      //exit for 
      break; 
    }
  }
  await expect(boolISplayerPresent).to.equal(true);
   arrayPointPlayers = await [];

  });


 /*When('I will choose two productds', async () => {
    // Write code here that turns the phrase above into concrete actions
    await objHomeP.DenverShopMen.click();
    await objHomeP.jerseyJokic.click();
    
    return 'pending';
  });*/

 

    When('I choose {string} productds', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    await objHomeP.DenverShopMen.click();
    await browser.sleep(5000);
    await objHomeP.jerseyJokic.click();
    await browser.sleep(5000);
    let num = await objHomeP.sizeClotes.count();
    await browser.sleep(5000);
    for(let i=await 0;i<num;i++)
    {
      let str1 = await objHomeP.sizeClotes.get(i).getAttribute("class");
      if (! str1.includes("disabled"))
      {
        await objHomeP.sizeClotes.get(i).click();
        break;
      }
      else
      {
          await console.log("There is no any size of choosed product ")
      }

    }
    await objHomeP.AddToBasketBut.click();

    // Add onother on product 
    await browser.get('https://www.nbastore.eu/stores/nba/en/basket');
    await objHomeP.ContinueShopingLink.click();
    await objHomeP.jersyShopImage.click();
    await objHomeP.dallasMavericks.click();
    await browser.sleep(5000);
    await objHomeP.dallasShort.click();
    await browser.sleep(5000);
    let num1 = await objHomeP.sizeClotes.count();

    for(let i=await 0;i<num1;i++)
    {
      let str1 = await objHomeP.sizeClotes.get(i).getAttribute("class");
      if (! str1.includes("disabled"))
      {
        await objHomeP.sizeClotes.get(i).click();
        break;
      }
      else
      {
          await console.log("There is no any size of choosed product ")
      }

    }

    await objHomeP.AddToBasketBut.click();
    await browser.get('https://www.nbastore.eu/stores/nba/en/basket');
    numBasketItems = await objHomeP.basketItems.count();

    });


  

    Then('The number of check item in Basket shold be {int}', async (int) =>{
      // Write code here that turns the phrase above into concrete actions
      await expect(numBasketItems).to.equal(int);
    });

    