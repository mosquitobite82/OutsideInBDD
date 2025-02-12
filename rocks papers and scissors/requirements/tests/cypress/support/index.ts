import './commands';
declare global {
  namespace Cypress {
    interface Chainable {
      gotoMainMenu(): Chainable<JQuery<HTMLElement>>
      gotoSelectPlayers(): Chainable<JQuery<HTMLElement>>
      selectNumberOfPlayers(count: number): Chainable<JQuery<HTMLElement>>
      startGame(): Chainable<JQuery<HTMLElement>>
    }
  }
}
