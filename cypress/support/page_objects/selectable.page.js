export class SelectablePage {
    elements = {
        tab: {
            list: () => cy.get('#demo-tab-list'),
            grid: () => cy.get('#demo-tab-grid')
        },
        listItems: () => cy.get('#verticalListContainer li'),
        gridItems: () => cy.get('#gridContainer li'),
    };

    validateSingleSelection(tab, itemsList) {
        tab.click();
        itemsList.then($items => {
            for (let index = 0; index < $items.length; index++) {
                cy.wrap($items[index]).click();
                cy.wrap($items[index]).should('have.class', 'active');

                $items.each((differentIndex, $differentItem)=> {
                    if(differentIndex !== index){
                        cy.wrap($differentItem).should('not.have.class', 'active');
                    }
                });
                cy.wrap($items[index]).click();
            }
        });
    }

    validateMultipleSelection(tab, itemsList) {
        tab.click();
        itemsList.then($items => {
            const itemsAmount = $items.length;
            const randomIndex1 = Math.floor(Math.random() * itemsAmount);
            let randomIndex2 = Math.floor(Math.random() * itemsAmount);
            while (randomIndex2 === randomIndex1) { randomIndex2 = Math.floor(Math.random() * itemsAmount); }

            cy.wrap($items[randomIndex1]).click();
            cy.wrap($items[randomIndex2]).click();

            cy.wrap($items[randomIndex1]).should('have.class', 'active');
            cy.wrap($items[randomIndex2]).should('have.class', 'active');

            $items.each((differentIndex, $differentItem) => {
                if(differentIndex !== randomIndex1 && differentIndex !== randomIndex2) {
                    cy.wrap($differentItem).should('not.have.class', 'active');
                }
            });
        });
    }
}