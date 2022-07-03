describe('This is my first cypress test', () => {
  it('should have a title', () => {
    cy.visit('https://www.google.com/');
    cy.log(Cypress.env('CONTAINER') || 'NO_CONTAINER');
    cy.title().should('eq', 'Google');
  });
  it('should have a title2', () => {
    cy.visit('https://www.google.com/');
    cy.log(Cypress.env('CONTAINER') || 'NO_CONTAINER');
    cy.title().should('eq', 'Google');
  });
});
