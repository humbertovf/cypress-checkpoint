export class TextboxPage {
    elements = {
        fullName: () => cy.get('#userName'),
        email: () => cy.get('#userEmail'),
        currentAddress: () => cy.get('#currentAddress'),
        permanentAddress: () => cy.get('#permanentAddress'),
        submit: () => cy.get('#submit'),
        outputName: () => cy.get('#output #name'),
        outputEmail: () => cy.get('#output #email'),
        outputCurrentAddress: () => cy.get('#output #currentAddress'),
        outputPermanentAddress: () => cy.get('#output #permanentAddress'),
        emailValidation: () => cy.get('#userEmail').siblings('.field-error'),
        fullNameLabel: () => cy.get('#userName-label'),
        emailLabel: () => cy.get('#userEmail-label'),
        currentAddressLabel: () => cy.get('#currentAddress-label'),
        permanentAddressLabel: () => cy.get('#permanentAddress-label')
      };

    fillAndSubmitForm(data) {
        this.elements.fullName().type(data.fullName);
        this.elements.email().type(data.email);
        this.elements.currentAddress().type(data.currentAddress);
        this.elements.permanentAddress().type(data.permanentAddress);
        this.submitForm();
    }

    submitForm() {
        this.elements.submit().click();
    }
}