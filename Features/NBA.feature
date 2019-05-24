Feature: I am going to validate NBA site


    Scenario: Check number of games for today

        Given I will navigate to "NBA SCORE" pages
        When I get all the games
        Then Number of games shoud be from "3" to "7"


    Scenario: Check Lead Players in all top statiscis categories

        Given I will navigate to "league leaders" pages
        When I check all top categorise
        Then the output displayed should be "9"


    Scenario Outline:  Check is some player present in top categorie

        Given I will navigate to "league leaders" pages
        When I will check "<category>"
        Then you will check is  "<player>" in that categorie

        Examples:
            | category | player    |
            | assists  | westbrook |
            | points   | harden    |
            | points   | joel    |

    Scenario: Choose products from shop

        Given I will navigate to "shop" pages
        When I choose "2" productds
        Then The number of check item in Basket shold be 2
