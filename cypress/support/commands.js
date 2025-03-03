import { HomePage } from "./page_objects/home.page";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('openHomePage', () => {
    cy.visit('/');
});

Cypress.Commands.add('navigateFromHomeToPage', (sectionName) => {
    cy.visit('/');
    cy.contains(HomePage.elementsCard, sectionName).should('be.visible').click({ force: true });
    cy.url().should('include', `/${sectionName.toLowerCase()}`);
});

Cypress.Commands.add("selectSidebarItem", (itemName) => {
    cy.contains('li', itemName).should('be.visible').click();
});

Cypress.Commands.add('freezeUi', () => {
    cy.window().then(win => {
        win.addEventListener('blur', e => e.stopImmediatePropagation(), true);
    });
});