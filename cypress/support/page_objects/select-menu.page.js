export class SelectMenuPage {
    elements = {
        selectOptionDropdown: () => cy.get('div#withOptGroup'),
        groupOption: (groupIndex, optionIndex) => cy.get(`#react-select-2-option-${groupIndex}-${optionIndex}`),
        rootOption: (rootIndex) => cy.get(`#react-select-2-option-${rootIndex}`),
        selectedGroup: () => cy.get('div#withOptGroup [class$="-singleValue"]'),
        titleDropdown: () => cy.get('#selectOne'),
        titleOption: (index) => cy.get(`#react-select-3-option-0-${index}`),
        titleSelected: (index) => cy.get(`#selectOne [class$="-singleValue"]`),
        oldStyleDropdown: () => cy.get('#oldSelectMenu'),
        multiselectDropdown: () => cy.get('.css-1hwfws3').eq(2),
        multiselectOption: (index) => cy.get(`#react-select-4-option-${index}`),
        allMultiselectOptions: () => cy.get('[id^="react-select-4-option-"]'),
        selectedColors: () => cy.get('.css-1rhbuit-multiValue'),
        standardMultiSelect: () => cy.get('#cars'),
    };

    selectGroupOption(groupIndex, optionIndex) {
        const expectedText = `Group ${groupIndex + 1}, option ${optionIndex + 1}`;
        this.elements.selectOptionDropdown().click();
        this.elements.groupOption(groupIndex, optionIndex).click();
        this.elements.selectedGroup().should('be.visible').and('have.text', expectedText);
    }

    selectRootOption(index) {
      const expectedText = index === 2 ? `A root option` : `Another root option`;
      this.elements.selectOptionDropdown().click();
      this.elements.rootOption(index).click();
      this.elements.selectedGroup().should('be.visible').and('have.text', expectedText);
    }

    selectTitle(index, expectedText) {
      this.elements.titleDropdown().click();
      this.elements.titleOption(index).click();
      this.elements.titleSelected().should('be.visible').and('have.text', expectedText);
    }

    selectOldStyle(option, indexValue) {
      this.elements.oldStyleDropdown().select(option);
      this.elements.oldStyleDropdown().should('have.value', indexValue);
    }

    selectColors(expectedColors, ...indexes) {
      this.elements.multiselectDropdown().click();

      this.elements.allMultiselectOptions().then($options => {
          const totalOptions = $options.length;
          
          indexes.forEach(index => {
              if (index >= totalOptions || index < 0) {
                  throw new Error(`Invalid value; index should be in range > 0 and < ${totalOptions}`);
              }
              
              this.elements.multiselectOption(index).scrollIntoView().click({ force: true });
          });
      });
      cy.get('body').type('{esc}');
      this.elements.selectedColors().should('have.length', expectedColors.length)
      .each(($el, index) => {
        expect($el.text()).to.contain(expectedColors[index]);
      });
  }

  selectCars(options) {
    this.elements.standardMultiSelect().select(options);
    this.elements.standardMultiSelect()
    .find('option:selected')
    .should('have.length', options.length)
    .then($selected => {
        const actualOptions = Cypress.$.makeArray($selected).map(el => el.text);
        expect(actualOptions).to.deep.eq(options);
    });
  }


}