import { ElementFinder,element,by, ElementArrayFinder } from "protractor";
import { browser } from "protractor";


export class NBAHomePage
{
tabScore;tabStandings:ElementFinder;
searchButton;jersyShopImage:ElementFinder;
gamesScoreAll;allLeadersCategories;ArrayShopButton;basketItems:ElementArrayFinder;
seassonLeadersBut;shopMen;DenverShopMen;jerseyJokic;AddToBasketBut;ContinueShopingLink;dallasMavericks;dallasShort:ElementFinder;
seasonLePoints;seasonLeAssist;sesLeArryPoint;sesLeArryAssist;sizeClotes:ElementArrayFinder;


constructor()
{
    
    this.tabScore=element(by.css("a[href='/scores']"));
    this.tabStandings=element(by.css("a[href='/standings']"));
    this.gamesScoreAll = element.all(by.css("section[data-game-id*='0']"));

    this.seassonLeadersBut= element(by.css("span[data-ng-i18next='leagueLeaders.season']"));
    this.allLeadersCategories = element.all(by.css("div[data-ng-click*='setSeasonCategory(']"));
    //ret = element(by.css("div.season-leaders")).all(by.css(""));
    this.seasonLePoints = element.all(by.css(".season-leaders a[sib-player-urls=''][team='starPlayer.teamProfile']"));
    this.seasonLeAssist = element.all(by.css(".season-leaders a[sib-player-urls=''][team='starPlayer.teamProfile']"));
    
    this.sesLeArryPoint = element.all(by.css(".col-lg-8 .visible-sm a"));
    this.sesLeArryAssist = element.all(by.css(".col-lg-8 .hidden-sm a"));
  
    this.ArrayShopButton = element.all(by.css("li .nba-nav__store"));
    this.shopMen = element(by.css("[href='http://global.nba.com/store-link-handler/?cat=nba_mens']"));
    this.DenverShopMen = element(by.css("[title='Denver Nuggets']"));
    this.jerseyJokic = element(by.css("[src='//image2.kbobject.com/nba-242677.jpg?width=250&height=250&quality=80']"));
    this.sizeClotes = element.all(by.css("[ng-repeat='variation in vm.variations']"));

    this.AddToBasketBut = element(by.css("button.addToBasket"));
    this.ContinueShopingLink = element(by.css("a.continueShopping"));
    this.jersyShopImage = element(by.css("[src='//static1.kbobject.com/stores/nba/artwork/english/banners/christmas_sidebanner1_JERSEYS.jp']"));
    this.dallasMavericks = element(by.css("[title='Dallas Mavericks']"));
    this.dallasShort = element(by.css("img.productImage[alt='Dallas Mavericks Nike Icon Swingman Shorts - Mens']"));

    this.basketItems = element.all(by.css(".basketItem"));
}

}

export const NBA_HOME = 'http://www.nba.com/#/';
export const leagueleaders = 'https://watch.global.nba.com/statistics/leagueleaders/'