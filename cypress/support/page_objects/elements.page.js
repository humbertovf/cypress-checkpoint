export class ElementsPage {
    leftPanelItems = {
        textBox: () => cy.get('span:contains("Text Box")'),
        checkBox: () => cy.get('span:contains("Check Box")'),
        radioBtn: () => cy.get('span:contains("Radio Button")'),
        buttons: () => cy.get('span:contains("Buttons")'),
        links: () => cy.get('span:contains("Links")').eq(0),
        brokenLinks: () => cy.get('span:contains("Broken Links - Images")').eq(1),
        uploadAndDownload: () => cy.get('span:contains("Upload and Download")'),
        uploadAndDownload: () => cy.get('span:contains("Dynamic Properties")'),
        selectMenu: () => cy.get('span:contains("Select Menu")')
    };
}