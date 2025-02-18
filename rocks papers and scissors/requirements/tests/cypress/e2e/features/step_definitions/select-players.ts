/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^the player is on "([^"]*)" screen$/, function () {
  cy.visit('http://localhost:5173/select-players');
});
Given(/^the player selects to play against the computer$/, function () {
  cy.visit('http://localhost:5173/select-players');
});
When(/^the player starts the game$/, function () {
  cy.visit('http://localhost:5173/select-players');
});
Then(/^the player should get a message that you are playing against the computer$/, function () {
  cy.visit('http://localhost:5173/select-players');
});
Given(/^the player is on the "([^"]*)" screen$/, function () {
  cy.visit('http://localhost:5173/select-players');
});
Given(/^the player choose two players$/, function () {
  cy.visit('http://localhost:5173/select-players');
});
When(/^the opponent starts the game$/, function () {
  cy.visit('http://localhost:5173/select-players');
});
Then(/^the players should get a message that they are playing against each other$/, function () {
  cy.visit('http://localhost:5173/select-players');
});
Given(/^the machine has at least three controls$/, function () {
  cy.visit('http://localhost:5173/select-players');
});
Given(/^the player selects (\d+) players$/, function () {
  cy.visit('http://localhost:5173/select-players');
});
When(/^the players start the game$/, function () {
  cy.visit('http://localhost:5173/select-players');
});
Then(/^the players should get a message of how many players are playing against each other$/, function () {
  cy.visit('http://localhost:5173/select-players');
});
Given(/^the machine has (\d+) controls$/, function () {
  cy.visit('http://localhost:5173/select-players');
});
Given(/^the player enters (\d+) players$/, function () {
  cy.visit('http://localhost:5173/select-players');
});
Then(/^the number of players should stay at (\d+)$/, function () {
  cy.visit('http://localhost:5173/select-players');
});
