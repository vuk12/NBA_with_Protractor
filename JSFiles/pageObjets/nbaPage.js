"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class NBAHomePage {
    constructor() {
        this.tabScore = protractor_1.element(protractor_1.by.css("a[href='/scores']"));
        this.tabStandings = protractor_1.element(protractor_1.by.css("a[href='/standings']"));
        this.gamesScoreAll = protractor_1.element.all(protractor_1.by.css("section[data-game-id*='0']"));
        this.seassonLeadersBut = protractor_1.element(protractor_1.by.css("span[data-ng-i18next='leagueLeaders.season']"));
        this.allLeadersCategories = protractor_1.element.all(protractor_1.by.css("div[data-ng-click*='setSeasonCategory(']"));
        //ret = element(by.css("div.season-leaders")).all(by.css(""));
        this.seasonLePoints = protractor_1.element.all(protractor_1.by.css(".season-leaders a[sib-player-urls=''][team='starPlayer.teamProfile']"));
        this.seasonLeAssist = protractor_1.element.all(protractor_1.by.css(".season-leaders a[sib-player-urls=''][team='starPlayer.teamProfile']"));
        this.sesLeArryPoint = protractor_1.element.all(protractor_1.by.css(".col-lg-8 .visible-sm a"));
        this.sesLeArryAssist = protractor_1.element.all(protractor_1.by.css(".col-lg-8 .hidden-sm a"));
        this.ArrayShopButton = protractor_1.element.all(protractor_1.by.css("li .nba-nav__store"));
        this.shopMen = protractor_1.element(protractor_1.by.css("[href='http://global.nba.com/store-link-handler/?cat=nba_mens']"));
        this.DenverShopMen = protractor_1.element(protractor_1.by.css("[title='Denver Nuggets']"));
        this.jerseyJokic = protractor_1.element(protractor_1.by.css("[src='//image2.kbobject.com/nba-242677.jpg?width=250&height=250&quality=80']"));
        this.sizeClotes = protractor_1.element.all(protractor_1.by.css("[ng-repeat='variation in vm.variations']"));
        this.AddToBasketBut = protractor_1.element(protractor_1.by.css("button.addToBasket"));
        this.ContinueShopingLink = protractor_1.element(protractor_1.by.css("a.continueShopping"));
        this.jersyShopImage = protractor_1.element(protractor_1.by.css("[src='//static1.kbobject.com/stores/nba/artwork/english/banners/christmas_sidebanner1_JERSEYS.jp']"));
        this.dallasMavericks = protractor_1.element(protractor_1.by.css("[title='Dallas Mavericks']"));
        this.dallasShort = protractor_1.element(protractor_1.by.css("img.productImage[alt='Dallas Mavericks Nike Icon Swingman Shorts - Mens']"));
        this.basketItems = protractor_1.element.all(protractor_1.by.css(".basketItem"));
    }
}
exports.NBAHomePage = NBAHomePage;
exports.NBA_HOME = 'http://www.nba.com/#/';
exports.leagueleaders = 'https://watch.global.nba.com/statistics/leagueleaders/';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmJhUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmpldHMvbmJhUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUEwRTtBQUkxRSxNQUFhLFdBQVc7SUFTeEI7UUFHSSxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLGlCQUFpQixHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQyxDQUFDO1FBQzVGLDhEQUE4RDtRQUM5RCxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0VBQXNFLENBQUMsQ0FBQyxDQUFDO1FBQ2xILElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDLENBQUM7UUFFbEgsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBRXJFLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUVBQWlFLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4RUFBOEUsQ0FBQyxDQUFDLENBQUM7UUFDbkgsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQztRQUVsRixJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0dBQW9HLENBQUMsQ0FBQyxDQUFDO1FBQzVJLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywyRUFBMkUsQ0FBQyxDQUFDLENBQUM7UUFFaEgsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUVBO0FBeENELGtDQXdDQztBQUVZLFFBQUEsUUFBUSxHQUFHLHVCQUF1QixDQUFDO0FBQ25DLFFBQUEsYUFBYSxHQUFHLHdEQUF3RCxDQUFBIn0=