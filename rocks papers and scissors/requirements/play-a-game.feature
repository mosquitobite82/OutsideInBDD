Feature: Play a Game

  Scenario: The player or players enter a new game and the game starts
    Given the game has started
    When the players have left the confirmation of how many players they are
    Then the players shoud get a screen that says "Are you ready?" and a count down of 3 seconds

  Scenario: The players have played all rounds
    Given There the game has started
    When the players have left the confirmation of how may players they are
    Then the players shoud get a screen that says "Are you ready?" and a count down of 3 seconds

    Given the ""Are you ready-count down" is done
    And the first round has started
    Then the players should get a a count down screen of "ROCK", "PAPER", "SCISSORS"

  Scenario: Last round has been played
    Given the game last round has been played
    When the game ends
    Then the players should be redirected to a result page

  Scenario: The Game is over
    Given all round have been played to the end
    When when the players have been redirected to the result page
    Then a message should be displayed which player has won
