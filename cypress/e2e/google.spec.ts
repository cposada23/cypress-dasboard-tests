describe.skip('search id', () => {
  it('should have a title with id', () => {
    cy.visit('https://www.google.com/');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(10000);
    cy.title().should('eq', 'Google');
    cy.get('[name="q"]').type(Cypress.env('container') || 'NO_CONTAINER');
    cy.get('[name="q"]').type(Cypress.env('PROJECT_ID') || 'NO_PROJECT_ID');
    cy.should('be.true', false);
  });
  it('should have a title with failure', () => {
    cy.visit('https://www.google.com/');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(10000);
    cy.title().should('eq', 'Google');
    cy.get('[name="q"]').type(Cypress.env('container') || 'NO_CONTAINER');
    cy.get('[name="q"]').type(Cypress.env('PROJECT_ID') || 'NO_PROJECT_ID');
    cy.should('be.true', false);
  });
});
