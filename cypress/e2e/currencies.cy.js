describe('Currencies App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.intercept('https://api.nbp.pl/api/exchangerates/tables/A/?format=json', {
      fixture: 'currencies-today'
    });
    cy.intercept('https://api.nbp.pl/api/exchangerates/tables/A/?format=json', {
      fixture: 'currencies-01-07-2022'
    });
    cy.intercept('https://api.nbp.pl/api/exchangerates/tables/A/1700-07-01/?format=json', {
      fixture: 'error'
    });
    cy.get('.p-selectbutton .p-button').first().as('darkBtn');
    cy.get('.p-selectbutton .p-button').last().as('lightBtn');
    cy.get('table tbody tr').as('rows');
  });

  it('should have dark theme', () => {
    cy.get('@darkBtn').click();
    cy.get('@darkBtn').should('have.class', 'p-highlight');
    cy.get('@lightBtn').should('not.have.class', 'p-highlight');
    cy.get('#app-theme').should('have.attr', 'href').and('eq', 'dark.css');
  });

  it('should have light theme', () => {
    cy.get('@lightBtn').click();
    cy.get('@lightBtn').should('have.class', 'p-highlight');
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
  })
});
