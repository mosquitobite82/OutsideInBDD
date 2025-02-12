/// <reference types="cypress" />

Cypress.Commands.add('gotoMainMenu' as keyof Cypress.Chainable,() => {
  return cy.visit('http://localhost:5173/select-players');
});

Cypress.Commands.add('gotoSelectPlayers' as keyof Cypress.Chainable,() => {
  return cy.gotoMainMenu();
});

Cypress.Commands.add('selectNumberOfPlayers' as keyof Cypress.Chainable,(count: number) => {
  return cy.get('[data-testid="player-count"]').click().type('2');
});

Cypress.Commands.add('startGame' as keyof Cypress.Chainable,() => {
  return cy.get('[data-testid="start-game"]').click();
});
