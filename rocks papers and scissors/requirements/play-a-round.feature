Feature: Play a Round
  Scenario: The players enter a new round
    Given the players have been redirected from the previous round's result screen
    And the the new round starts
    Then the players should get a count down screen of "ROCK", "PAPER", "SCISSORS"

  Scenario: The players make their draw
    Given Both players have selected "Rock", "Paper" or "Scissors"
    When the "SCISSORS" count down text has been shown
    Then the players should get a screen that shows both players draw

    Given Not all players has selected "Rock", "Paper" or "Scissors"
    When the "SCISSORS" count down text has been shown
    Then the players should get a result screen that shows players' draws
    And a message that the shows which players were too slow

