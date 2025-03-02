import { ElementsPage } from "../support/page_objects/elements.page";
import { SelectMenuPage } from "../support/page_objects/select-menu.page";

describe('Select Menu scenarios', () => {
    const elementsPage = new ElementsPage();
    const selectMenuPage = new SelectMenuPage();

    beforeEach(() => {
        cy.navigateFromHomeToPage('Widgets');
        elementsPage.leftPanelItems.selectMenu().should('be.visible').click();
        cy.url().should('include', `/select-menu`);
    });
        
    describe('Select Menu - Two scenarios', () => {
        it('First Scenario', () => {
            selectMenuPage.selectGroupOption('Group 1', 'option 2');
            selectMenuPage.elements.selectValueOptions('Group 1, option 2').should('be.visible');
        });
    });
});