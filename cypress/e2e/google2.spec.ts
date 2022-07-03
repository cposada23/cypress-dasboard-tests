describe('This is my first cypress test', () => {
  it('should have a title', () => {
    cy.visit('https://www.google.com/');
    cy.title().should('eq', 'Google');
    cy.log(Cypress.env('CONTAINER') || 'NO_CONTAINER');

    cy.get('[name="q"]').type(Cypress.env('container') || 'NO_CONTAINER');
    cy.get('[name="q"]').type(Cypress.env('NUMBER') || 'NO_NUMBER');
    cy.get('[name="q"]').type(Cypress.env('TEST') || 'NOTEST');
    cy.get('[name="q"]').type(Cypress.env('apiPort') || 'NOapiPort');
    cy.get('[name="q"]').type(Cypress.env('USER') || 'NOUSER');
  });
});
