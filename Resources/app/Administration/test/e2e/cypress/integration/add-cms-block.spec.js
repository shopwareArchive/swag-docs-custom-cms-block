// / <reference types="Cypress" />
describe('PluginExtendJsPlugin: Test is extended', () => {
    beforeEach(() => {
        cy.loginViaApi();
    });

    it('checks for a new cms block element to be there', () => {
        cy.visit('/admin#/sw/cms/index?limit=9&page=1&term&sortBy=createdAt&sortDirection=DESC&naturalSorting=false');

        cy.get('.sw-cms-list-item--0').click();

        cy.get('.sw-sidebar').within(() => {
            cy.get('.icon--default-basic-plus-circle').click()
        });

        cy.get('#sw-field--currentBlockCategory').select('Text & images');

        cy.get('.sw-cms-sidebar__block-selection').scrollTo('bottom')
            .within(() => {
                cy.contains('Text next to image').should('be.visible');
            });
    });
});
