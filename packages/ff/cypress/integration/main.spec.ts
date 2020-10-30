describe('Main test', () => {
  it('should visit localhost', () => {
    cy.visit('/');

    cy.contains('Fantasy Football');
    cy.contains('Loading...');

    cy.dataQa('filter-position').click();
    cy.contains('Goalkeeper').click();

    cy.dataQa('filter-position').should('contain', 'Goalkeeper');
    cy.dataQa('player-card').should('be.visible');
    cy.dataQa('player-position').should('contain', 'GKP');

    cy.dataQa('filter-team').click();
    cy.contains('Arsenal').click();

    cy.dataQa('filter-team').should('contain', 'Arsenal');
    cy.dataQa('player-card').should('be.visible');
    cy.dataQa('player-team').should('contain', 'ARS');
    cy.document().toMatchImageSnapshot({
      threshold: 5, // Amount in pixels or percentage before snapshot image is invalid
      thresholdType: 'percent'
    });
  });
});
