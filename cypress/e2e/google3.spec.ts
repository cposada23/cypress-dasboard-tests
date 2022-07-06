describe('search id', () => {
  it('should have a title with failure', () => {
    cy.visit('https://www.google.com/');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000);
    cy.title().should('eq', 'Google');
    cy.get('[name="q"]').type(Cypress.env('container') || 'NO_CONTAINER');
    cy.get('[name="q"]').type(Cypress.env('PROJECT_ID') || 'NO_PROJECT_ID');
    cy.get('[name="q"]').should('have.text', 'notext');
  });
});
