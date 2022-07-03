describe('This is my first cypress test', () => {
  it('should have a title', () => {
    cy.visit('https://www.google.com/');
    cy.title().should('eq', 'Google');
    cy.log(Cypress.env('CONTAINER') || 'NO_CONTAINER');
    cy.get('[name="q"]').type(Cypress.env('CONTAINER') || 'NO_CONTAINER');
    cy.get('input[type="submit"]').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
  });
});
