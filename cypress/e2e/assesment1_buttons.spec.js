import { ElementsPage } from "../support/page_objects/elements.page";
import { ButtonsPage } from "../support/page_objects/buttons.page";

describe('Buttons scenarios', () => {
    const elementsPage = new ElementsPage();
    const buttonsPage = new ButtonsPage();

    beforeEach(() => {
        cy.navigateFromHomeToPage('Elements');
        elementsPage.leftPanelItems.buttons().should('be.visible').click();
        cy.url().should('include', `/buttons`);
    });

    describe('Buttons - Positive Testing', () => {
        it('Correct interaction with buttons - validation', () => {
            buttonsPage.elements.doubleClickMessage().should('not.exist');
            buttonsPage.elements.rightClickMessage().should('not.exist');
            buttonsPage.elements.dynamicClickMessage().should('not.exist');
            
            buttonsPage.elements.doubleClickBtn().should('be.visible').dblclick();
            buttonsPage.elements.doubleClickMessage().should('be.visible').and('contain', 'You have done a double click');
    
            buttonsPage.elements.rightClickBtn().should('be.visible').rightclick();
            buttonsPage.elements.rightClickMessage().should('be.visible').and('contain', 'You have done a right click');
    
            buttonsPage.elements.clickMeBtn().should('be.visible').click();
            buttonsPage.elements.dynamicClickMessage().should('be.visible').and('contain', 'You have done a dynamic click');
        });
    });

    describe('Buttons - Negative Testing', () => {
        it('Incorrect interaction with buttons - validation', () => {
            buttonsPage.elements.doubleClickMessage().should('not.exist');
            buttonsPage.elements.rightClickMessage().should('not.exist');
            buttonsPage.elements.dynamicClickMessage().should('not.exist');
    
            buttonsPage.elements.rightClickBtn().click().should('not.have.class', 'active');
            buttonsPage.elements.rightClickMessage().should('not.exist');

            buttonsPage.elements.doubleClickBtn().should('be.visible').click();
            buttonsPage.elements.doubleClickMessage().should('not.exist');

            buttonsPage.elements.clickMeBtn().should('be.visible').rightclick();
            buttonsPage.elements.dynamicClickMessage().should('not.exist');
        });
    });
});
