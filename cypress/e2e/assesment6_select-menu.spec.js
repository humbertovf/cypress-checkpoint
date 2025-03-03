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
            selectMenuPage.selectGroupOption(0, 1);
            selectMenuPage.selectTitle(2, 'Mrs.');
            selectMenuPage.selectOldStyle('Yellow', 3);
            selectMenuPage.selectColors(['Black'], 2);
            const carOptions = ['Saab']
            selectMenuPage.selectCars(carOptions);
        });

        it('Second Scenario', () => {
            selectMenuPage.selectRootOption(2);
            selectMenuPage.selectTitle(5, 'Other');
            selectMenuPage.selectOldStyle('Blue', 1);
            selectMenuPage.selectColors(['Black', 'Blue', 'Green'], 2, 1, 0);
            const carOptions = ['Opel', 'Audi']
            selectMenuPage.selectCars(carOptions);
        });
    });
});