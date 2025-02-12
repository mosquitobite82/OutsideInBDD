declare namespace Cypress {
  interface Chainable<Subject = any> {
    gotoMainMenu(): Chainable<Window>;
    gotoSelectPlayers(): Chainable<Window>;
    selectNumberOfPlayers(count: number): Chainable<Window>;
    startGame(): Chainable<Window>;
  }
}
