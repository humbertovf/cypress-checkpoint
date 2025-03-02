import { ElementsPage } from "../support/page_objects/elements.page";
import { SelectablePage } from "../support/page_objects/selectable.page";

describe('Tab scenarios', () => {
    const elementsPage = new ElementsPage();
    const selectablePage = new SelectablePage();

    beforeEach(() => {
        cy.navigateFromHomeToPage('Interaction');
        elementsPage.leftPanelItems.selectable().should('be.visible').click();
        cy.url().should('include', `/selectable`);
    });

    describe('Tab - Single selection', () => {
        it('Validate single selection in List Tab', () => {
            selectablePage.validateSingleSelection(selectablePage.elements.tab.list(), selectablePage.elements.listItems());
        });
    
        it('Validate single selection in Grid Tab', () => {
            selectablePage.validateSingleSelection(selectablePage.elements.tab.grid(), selectablePage.elements.gridItems());
        });
    });

    describe('Multiple Selection', () => {
        it('Validate multiple selection in List Tab', () => {
            selectablePage.validateMultipleSelection(selectablePage.elements.tab.list(), selectablePage.elements.listItems());
        });
    
        it('Validate multiple selection in List Tab', () => {
            selectablePage.validateMultipleSelection(selectablePage.elements.tab.grid(), selectablePage.elements.gridItems());
        });
    });
});