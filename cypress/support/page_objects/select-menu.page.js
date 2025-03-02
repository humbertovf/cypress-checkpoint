export class SelectMenuPage {
    elements = {
        selectValueDropdown: () => cy.get('#withOptGroup'),
        selectValueOptions: (optionText) => cy.contains('[class^="css-"][class$="-menu"]', optionText),
        selectOneDropdown: () => cy.get('#selectOne'),
        selectOneOptions: (optionText) => cy.contains('.css-1uccc91-singleValue', optionText),
        oldStyleSelect: () => cy.get('#oldSelectMenu'),
        multiselectDropdown: () => cy.get('[class^="css-"][class$="-control"]'),
        multiselectOptions: (optionText) => cy.contains('.css-12jo7m5', optionText),
        selectedBadges: () => cy.get('.css-1rhbuit-multiValue'),
        standardMultiSelect: () => cy.get('#cars'),
    };

    selectGroupOption(group, option) {
        this.elements.selectValueDropdown().click();
        this.elements.selectValueDropdown().then(() => {
            debugger;
          });
        cy.pause();
        cy.contains('.css-1n7v3ny-option', group).click();
        cy.contains('.css-1n7v3ny-option', option).click();
      }
}