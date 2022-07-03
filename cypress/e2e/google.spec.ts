describe('search id', () => {
  it('should have a title with id', () => {
    cy.visit('https://www.google.com/');
    cy.title().should('eq', 'Google');
    cy.log(Cypress.env('CONTAINER') || 'NO_CONTAINER');
    cy.get('[name="q"]').type(Cypress.env('PROJECT_ID') || 'NO_PROJECT_ID');
  });
});
