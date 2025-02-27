export class RadioButtonPage {
    elements = {
        yesRadioBtn: () => cy.get('#yesRadio'),
        impressiveRadioBtn: () => cy.get('#impressiveRadio'),
        noRadioBtn: () => cy.get('#noRadio'),
        yesLabel: () => cy.get('[for="yesRadio"]'),
        impressiveLabel: () => cy.get('[for="impressiveRadio"]'),
        noLabel: () => cy.get('[for="noRadio"]'),
        message: () => cy.get('p.mt-3')
    };
}