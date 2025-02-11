Feature: Select Players

  Scenario: The player choose to play against the computer
    Given the player choose single player
    When the player starts the game
    Then the player should get a message that you are playing against the computer

  Scenario: The player wants to play against another human player
    Given the player choose two players
    When the opponent starts the game
    Then the players should get a message that they are playing against each other

  Scenario: The player wants to play with more than one other player
    Given the machine has at least three controls
    When the player selects 3 players
    And the players start the game
    Then the players should get a message of how many players are playing against each other

    Given the machine has 3 controls
    When the player enters 4 players
    Then the number of players should stay at 3
