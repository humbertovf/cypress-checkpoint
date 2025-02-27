export class CheckboxPage {
    elements = {
        expandAll: () => cy.get('[aria-label="Expand all"]'),
        collapseAll: () => cy.get('[aria-label="Collapse all"]'),
        itemsSelected: () => cy.get('.text-success'),
        result: () => cy.get('#result'),
        toggle: (section) => cy.contains('.rct-title', section).parentsUntil('.rct-text').siblings('button.rct-collapse'),
        checkboxLabel: (option) => cy.contains('.rct-text', option).find('.rct-title'),
        checkboxInput: (option) => cy.contains('.rct-text', option).find('input')
    };

    options = {
        home: 'Home',
        desktop: 'Desktop',
        notes: 'Notes',
        commands: 'Commands',
        documents: 'Documents',
        workspace: 'WorkSpace',
        react: 'React',
        angular: 'Angular',
        veu: 'veu',
        office: 'Office',
        public: 'Public',
        private: 'Private',
        classified: 'Classified',
        general: 'General',
        downloads: 'Downloads',
        wordFile: 'Word File.doc',
        excelFile: 'Excel File.doc'
    }

    validateSelection(option, shouldBeChecked = true) {
        const assertion = shouldBeChecked ? 'be.checked' : 'not.be.checked';
        this.elements.checkboxInput(option).should(assertion);
    }
}