describe('title', () => {
  it('should have a title', () => {
    cy.visit('/');
    cy.title().should('eq', 'Google');
    cy.log(Cypress.env('CONTAINER') || 'NO_CONTAINER');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(10000);
    cy.get('[name="q"]').type(Cypress.env('container') || 'NO_CONTAINER');
    cy.get('[name="q"]').type(Cypress.env('NUMBER') || 'NO_NUMBER');
    cy.get('[name="q"]').type(Cypress.env('TEST') || 'NOTEST');
    cy.get('[name="q"]').type(Cypress.env('apiPort') || 'NOapiPort');
    cy.get('[name="q"]').type(Cypress.env('USER') || 'NOUSER');
    cy.get('[name="q"]').type(Cypress.env('ORG_ID') || 'NOORG_ID');
  });
  it('should have a title', () => {
    cy.visit('/');
    cy.title().should('eq', 'Google');
    cy.log(Cypress.env('CONTAINER') || 'NO_CONTAINER');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(10000);
    cy.get('[name="q"]').type(Cypress.env('container') || 'NO_CONTAINER');
    cy.get('[name="q"]').type(Cypress.env('NUMBER') || 'NO_NUMBER');
    cy.get('[name="q"]').type(Cypress.env('TEST') || 'NOTEST');
    cy.get('[name="q"]').type(Cypress.env('apiPort') || 'NOapiPort');
    cy.get('[name="q"]').type(Cypress.env('USER') || 'NOUSER');
    cy.get('[name="q"]').type(Cypress.env('ORG_ID') || 'NOORG_ID');
  });
});
