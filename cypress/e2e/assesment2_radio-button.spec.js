import { ElementsPage } from "../support/page_objects/elements.page";
import { RadioButtonPage } from "../support/page_objects/radio-button.page";

describe('Radio Buttons scenarios', () => {
    const elementsPage = new ElementsPage();
    const radioButtonPage = new RadioButtonPage();

    beforeEach(() => {
        cy.navigateFromHomeToPage('Elements');
        elementsPage.leftPanelItems.radioBtn().should('be.visible').click();
        cy.url().should('include', `/radio-button`);
        radioButtonPage.elements.yesRadioBtn().should('exist').and('not.be.checked');
        radioButtonPage.elements.impressiveRadioBtn().should('exist').and('not.be.checked');
        radioButtonPage.elements.noRadioBtn().should('exist').and('not.be.checked');
        radioButtonPage.elements.noRadioBtn().should('be.disabled').and('not.be.checked');
        radioButtonPage.elements.message().should('not.exist');
    });
        
    describe('Radio Buttons - Positive Testing', () => {
        it('Select Yes radio button and message should be displayed', () => {
            radioButtonPage.elements.yesRadioBtn().should('not.be.checked');
            radioButtonPage.elements.yesLabel().should('be.visible').click();
            radioButtonPage.elements.yesRadioBtn().should('be.checked');
            radioButtonPage.elements.message().should('be.visible').and('contain', 'Yes');
        });

        it('Select Impressive radio button and message should be displayed', () => {
            radioButtonPage.elements.impressiveRadioBtn().should('not.be.checked');
            radioButtonPage.elements.impressiveLabel().should('be.visible').click();
            radioButtonPage.elements.impressiveRadioBtn().should('be.checked');
            radioButtonPage.elements.yesRadioBtn().should('not.be.checked');
            radioButtonPage.elements.noRadioBtn().should('not.be.checked');
            radioButtonPage.elements.message().should('be.visible').and('contain', 'Impressive');
        });
    });

    describe('Radio Buttons - Negative Testing', () => {
        it('Should not be able to select "No" radio button', () => {
            radioButtonPage.elements.noLabel().click({ force: true });
            radioButtonPage.elements.noRadioBtn().should('be.disabled').and('not.be.checked');
            radioButtonPage.elements.message().should('not.exist');
        });

        it('Not multiple selections allowed', () => {
            radioButtonPage.elements.yesLabel().should('be.visible').click();
            radioButtonPage.elements.yesRadioBtn().should('be.checked');
            radioButtonPage.elements.impressiveRadioBtn().should('not.be.checked');
            radioButtonPage.elements.noRadioBtn().should('not.be.checked');
            radioButtonPage.elements.message().should('be.visible').and('contain', 'Yes');

            radioButtonPage.elements.impressiveLabel().should('be.visible').click();
            radioButtonPage.elements.impressiveRadioBtn().should('be.checked');
            radioButtonPage.elements.yesRadioBtn().should('not.be.checked');
            radioButtonPage.elements.noRadioBtn().should('not.be.checked');
            radioButtonPage.elements.message().should('be.visible').and('contain', 'Impressive');
        });
    });
});