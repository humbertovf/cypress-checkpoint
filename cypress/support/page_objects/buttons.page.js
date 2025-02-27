export class ButtonsPage {
    elements = {
        doubleClickBtn: () => cy.get('#doubleClickBtn'),
        rightClickBtn: () => cy.get('#rightClickBtn'),
        clickMeBtn: () => cy.get('button:contains("Click Me")').eq(2),
        doubleClickMessage: () => cy.get('#doubleClickMessage'),
        rightClickMessage: () => cy.get('#rightClickMessage'),
        dynamicClickMessage: () => cy.get('#dynamicClickMessage')
    };
}