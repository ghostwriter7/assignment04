describe('Currencies App', () => {
  beforeEach(() => {
    cy.intercept('https://api.nbp.pl/api/exchangerates/tables/A/?format=json', {
      fixture: 'currencies-today'
    });
    cy.visit('http://localhost:4200');
    cy.get('.p-selectbutton .p-button').first().as('darkBtn');
    cy.get('.p-selectbutton .p-button').last().as('lightBtn');
    cy.get('table tbody tr').as('rows');
  });

  it('should have dark theme', () => {
    cy.get('@lightBtn').click();
    cy.get('@darkBtn').click();
    cy.get('@darkBtn').should('have.class', 'p-highlight').should(() => {
      expect(localStorage.getItem('theme')).to.eq('dark');
    });
    cy.get('@lightBtn').should('not.have.class', 'p-highlight');
    cy.get('#app-theme').should('have.attr', 'href').and('eq', 'dark.css');
  });

  it('should have light theme', () => {
    cy.get('@lightBtn').click();
    cy.get('@lightBtn').should('have.class', 'p-highlight').should(() => {
      expect(localStorage.getItem('theme')).to.eq('light');
    });
    cy.get('@darkBtn').should('not.have.class', 'p-highlight');
    cy.get('#app-theme').should('have.attr', 'href').and('eq', 'light.css');
  });

  it('should display 5 rows', () => {
    cy.get('@rows').should('have.length', 5);
  });

  it('should display 10 rows', () => {
    cy.get('p-dropdown').as('dropdown').click();
    cy.get('@dropdown').find('p-dropdownitem').eq(1).click();
    cy.get('@rows').should('have.length', 10);
  });

  context('Datepicker', () => {
    beforeEach(() => {
      cy.intercept('https://api.nbp.pl/api/exchangerates/tables/A/2022-07-01/?format=json', {
        fixture: 'currencies-01-07-2022'
      });
      cy.intercept('https://api.nbp.pl/api/exchangerates/tables/A/1700-07-01/?format=json', {
        fixture: 'error'
      }).as('error');
      cy.get('p-calendar').as('calendar');
    });

    it('should display error notification after manually typing too old date', () => {
      cy.get('@calendar').find('input').type('{selectall}{backspace}1700-07-01');
      cy.wait('@error').then(() => {
        cy.get('p-messages').children().should('have.length', 1);
      });
    });

    it('should display date-picker', () => {
      cy.get('@calendar').click();
      cy.get('.p-datepicker').should('be.visible');
    });
  });
});
