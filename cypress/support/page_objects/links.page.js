export class LinksPage {
    elements = {
        homeLink: () => cy.get('#simpleLink'),
        dynamicHomeLink: () => cy.get('#dynamicLink'),
        createdLink: () => cy.get('#created'),
        noContentLink: () => cy.get('#no-content'),
        movedLink: () => cy.get('#moved'),
        badRequestLink: () => cy.get('#bad-request'),
        unauthorizedLink: () => cy.get('#unauthorized'),
        forbiddenLink: () => cy.get('#forbidden'),
        notFoundLink: () => cy.get('#invalid-url'),
        linkResponse: () => cy.get('#linkResponse'),
        errorResponse: () => cy.get('#errorResponse')
    };

    validateResponse(expectedStatus, expectedText) {
        this.elements.linkResponse()
        .should('be.visible')
        .invoke('text')
        .then(text => {
            expect(text).to.include(`Link has responded with staus ${expectedStatus}`); // otro typo en la pagina
            expect(text).to.include(expectedText);
        });
    }
}