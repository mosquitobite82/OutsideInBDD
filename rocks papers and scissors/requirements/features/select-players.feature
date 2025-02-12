Feature: Select Players

  Scenario: The player choose to play against the computer
    Given the player is on "select players" screen
    And the player selects to play against the computer
    When the player starts the game
    Then the player should get a message that you are playing against the computer

  Scenario: The player wants to play against another human player
    Given the player is on the "select players" screen
    And the player choose two players
    When the opponent starts the game
    Then the players should get a message that they are playing against each other

  Scenario: The player wants to play with more than one other player
    Given the machine has at least three controls
    And the player selects 3 players
    When the players start the game
    Then the players should get a message of how many players are playing against each other

    Given the machine has 3 controls
    And the player enters 4 players
    Then the number of players should stay at 3
