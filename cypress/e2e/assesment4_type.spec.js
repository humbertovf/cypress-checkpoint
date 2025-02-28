import { ElementsPage } from "../support/page_objects/elements.page";
import { TextboxPage } from "../support/page_objects/textbox.page";

describe('Buttons scenarios', () => {
    const elementsPage = new ElementsPage();
    const textboxPage = new TextboxPage();

    const data = {
        valid: {
          fullName: 'John Doe',
          email: 'john.doe@example.com',
          currentAddress: '123 Main Street New York, NY 10001',
          permanentAddress: '456 Oak Avenue Los Angeles, CA 90001'
        },
        invalid: {
          email: 'invalid-email',
          currentAddress: '!@#$%^&*()_+',
          permanentAddress: '<script>alert("test")</script>'
        }
    };

    beforeEach(() => {
        cy.navigateFromHomeToPage('Elements');
        elementsPage.leftPanelItems.textBox().should('be.visible').click();
        cy.url().should('include', `/text-box`);
    });
        
    describe('Textbox - Positive Testing', () => {
        it('Happy Path, Submit form', () => {
            textboxPage.fillAndSubmitForm(data.valid);
            textboxPage.elements.outputName().should('contain', `Name:${data.valid.fullName}`);
            textboxPage.elements.outputEmail().should('contain', `Email:${data.valid.email}`);
            textboxPage.elements.outputCurrentAddress().should('contain.text', `Current Address :${data.valid.currentAddress}`);
            textboxPage.elements.outputPermanentAddress().should('contain.text', `Permananet Address :${data.valid.permanentAddress}`); //aquí hay un typo en la página web
        });

        it('Validate placeholders displayed', () => {
            textboxPage.elements.fullName().should('have.attr', 'placeholder', 'Full Name');
            textboxPage.elements.email().should('have.attr', 'placeholder', 'name@example.com');
            textboxPage.elements.currentAddress().should('have.attr', 'placeholder', 'Current Address');
        });

        it('Validate labels are displayed', () => {
            textboxPage.elements.fullNameLabel().should('be.visible').and('contain', 'Full Name');
            textboxPage.elements.emailLabel().should('be.visible').and('contain', 'Email');
            textboxPage.elements.currentAddressLabel().should('be.visible').and('contain', 'Current Address');
            textboxPage.elements.permanentAddressLabel().should('be.visible').and('contain', 'Permanent Address');
        });
    });

    describe('Textbox - Negative Testing', () => {
        it('Invalid email', () => {
            textboxPage.fillAndSubmitForm({
                ...data.valid,
                email: data.invalid.email
            });
            textboxPage.elements.outputName().should('not.exist');
            textboxPage.elements.outputEmail().should('not.exist');
            textboxPage.elements.outputCurrentAddress().should('not.exist');
            textboxPage.elements.outputPermanentAddress().should('not.exist');
            textboxPage.elements.email().should('have.class', 'field-error');
        });
    });
});