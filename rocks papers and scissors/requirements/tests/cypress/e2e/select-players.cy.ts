/// <reference types="cypress" />
const playerList = '[data-testid="player-list"]';

describe('Scenario: Single Player against the computer', () => {
  describe('When the player starts the game', () => {
    it('Then the player should get a message that you are playing against the computer', () => {

      cy.gotoSelectPlayers();
      cy.selectNumberOfPlayers(1);
      cy.get(playerList)
        .should('contain', 'Player 1')
        .should('contain', 'Computer');
    });
  });
})

describe('Scenario: Multiplayer', () => {
  describe('When the opponent starts the game', () => {
    it('Then the players should get a message that they are playing against each other', () => {

      cy.gotoSelectPlayers();
      cy.selectNumberOfPlayers(2);
      cy.startGame();
      cy.get(playerList)
        .should('contain', 'Player 1')
        .should('contain', 'Player 2');
    });
  });
});

// Scenario: The player wants to play with more than one other player
// Given the machine has at least three controls
// And the player selects 3 players
// When the players start the game
// Then the players should get a message of how many players are playing against each other

// Given the machine has 3 controls
// And the player enters 4 players
// Then the number of players should stay at 3
