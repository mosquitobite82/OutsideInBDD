/// <reference types="cypress" />

Cypress.Commands.add('gotoMainMenu' as keyof Cypress.Chainable,() => {
  return cy.visit('http://localhost:5173/');
});

Cypress.Commands.add('gotoSelectPlayers' as keyof Cypress.Chainable,() => {
  return cy.visit('http://localhost:5173/select-players');
});

Cypress.Commands.add('selectNumberOfPlayers' as keyof Cypress.Chainable,(count: number) => {
  cy.get('[data-testid="player-count"]').click()
  return cy.get('[data-testid="player-count"]').type(`${count}`);
});

Cypress.Commands.add('startGame' as keyof Cypress.Chainable,() => {
  return cy.get('[data-testid="start-game"]').click();
});
