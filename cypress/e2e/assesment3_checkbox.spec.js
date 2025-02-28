import { ElementsPage } from "../support/page_objects/elements.page";
import { CheckboxPage } from "../support/page_objects/checkbox.page";

describe('Checkbox scenarios', () => {
    const elementsPage = new ElementsPage();
    const checkboxPage = new CheckboxPage();

    beforeEach(() => {
        cy.navigateFromHomeToPage('Elements');
        elementsPage.leftPanelItems.checkBox().should('be.visible').click();
        cy.url().should('include', `/checkbox`);
    });
        
    describe('Checkbox - Positive Testing', () => {
        it('Select checkboxes individually', () => {
            checkboxPage.elements.toggle(checkboxPage.options.home).click();
            checkboxPage.elements.checkboxLabel(checkboxPage.options.desktop).click();
            checkboxPage.validateSelection(checkboxPage.options.desktop);
            checkboxPage.elements.itemsSelected().should('contain.text', checkboxPage.options.desktop.toLowerCase());
        });

        it('Select folder with children elements', () => {
            checkboxPage.elements.toggle(checkboxPage.options.home).click();
            checkboxPage.elements.checkboxLabel(checkboxPage.options.desktop).click();
            checkboxPage.validateSelection(checkboxPage.options.desktop);
            checkboxPage.elements.result()
            .should('contain.text', checkboxPage.options.desktop.toLowerCase())
            .and('contain.text', checkboxPage.options.notes.toLowerCase())
            .and('contain.text', checkboxPage.options.commands.toLowerCase());
        });
    });

    describe('Checkbox - Negative Testing', () => {
        it('Validate elements not selected', () => {
            checkboxPage.elements.toggle(checkboxPage.options.home).click();
            checkboxPage.elements.checkboxLabel(checkboxPage.options.desktop).click();
            checkboxPage.validateSelection(checkboxPage.options.desktop);
            checkboxPage.validateSelection(checkboxPage.options.documents, false);
            checkboxPage.validateSelection(checkboxPage.options.downloads, false);
        });

        it('Elements not selected should not be displayed in results', () => {
            checkboxPage.elements.toggle(checkboxPage.options.home).click();
            checkboxPage.elements.checkboxLabel(checkboxPage.options.desktop).click();
            checkboxPage.elements.result()
            .should('not.contain.text', checkboxPage.options.documents.toLowerCase())
            .and('not.contain.text', checkboxPage.options.downloads.toLowerCase());
        });
    });
});