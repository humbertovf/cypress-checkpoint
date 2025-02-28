import { ElementsPage } from "../support/page_objects/elements.page";
import { LinksPage } from "../support/page_objects/links.page";

describe('Links scenarios', () => {
    const elementsPage = new ElementsPage();
    const linksPage = new LinksPage();

    beforeEach(() => {
        cy.navigateFromHomeToPage('Elements');
        elementsPage.leftPanelItems.links().should('be.visible').click();
        cy.url().should('include', `/links`);
    });
        
    describe('Links - Positive Testing', () => {
        it('Validate "Home" link opens HomePage in new tab', () => {
            linksPage.elements.homeLink()
            .should('have.attr', 'href', 'https://demoqa.com')
            .and('have.attr', 'target', '_blank')
            .and('contain.text', 'Home');
        });

        it('Validate dynamic "Home" link opens HomePage in new tab', () => {
            linksPage.elements.dynamicHomeLink()
            .should('have.attr', 'href', 'https://demoqa.com')
            .and('have.attr', 'target', '_blank')
            .and('contain.text', 'Home');
        });

        it('Validate created link text response', () => {
            linksPage.elements.createdLink().click();
            linksPage.validateResponse('201', 'Created');
        });

        it('Validate moved link text response', () => {
            linksPage.elements.noContentLink().click();
            linksPage.validateResponse('204', 'No Content');
        });

        it('Validate moved link text response', () => {
            linksPage.elements.movedLink().click();
            linksPage.validateResponse('301', 'Moved Permanently');
        });
    });

    describe('Links - Negative Testing', () => {
        it('Validate Bad Request text response', () => {
            linksPage.elements.badRequestLink().click();
            linksPage.validateResponse('400', 'Bad Request');
        });

        it('Validate Unauthorized link text response', () => {
            linksPage.elements.unauthorizedLink().click();
            linksPage.validateResponse('401', 'Unauthorized');
        });

        it('Validate Forbidden link text response', () => {
            linksPage.elements.forbiddenLink().click();
            linksPage.validateResponse('403', 'Forbidden');
        });

        it('Validate Not Found link text response', () => {
            linksPage.elements.notFoundLink().click();
            linksPage.validateResponse('404', 'Not Found');
        });
    });
});