/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const playerList = '[data-testid="player-list"]';

Given(/^the player is on "([^"]*)" screen$/, function () {
  cy.visit('http://localhost:5173/select-players');
});
Given(/^the player selects to play against the computer$/, function () {
  cy.selectNumberOfPlayers(1);
});
When(/^the player starts the game$/, function () {
  cy.startGame();
});
Then(/^the player should get a message that you are playing against the computer$/, function () {
  cy.get(playerList)
  .should('contain', 'Player 1')
  .should('contain', 'Computer');
});
Given(/^the player is on the "([^"]*)" screen$/, function () {
  cy.visit('http://localhost:5173/select-players');
});
Given(/^the player choose two players$/, function () {
  cy.selectNumberOfPlayers(2);
});
Then(/^the players should get a message that they are playing against each other$/, function () {
  cy.get(playerList)
  .should('contain', 'Player 1')
  .should('contain', 'Player 2');
});
