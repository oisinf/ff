describe('Main test', () => {
  it('should display player cards, filter players correctly', () => {
    cy.visit('/');

    cy.server();

    //stub images res
    cy.route({
      method: 'GET',
      url: '/player_imgs?**',
      response: []
    });

    //alias images responses
    // cy.route({
    //   method: 'GET',
    //   url: '/player_imgs?**'
    // }).as('getPlayerImages');

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

    //wait for aliased response
    // cy.wait('@getPlayerImages');
    cy.document().toMatchImageSnapshot({
      threshold: 10,
      thresholdType: 'percent',
      name: 'mainTestGoalkeepers',
      createDiffImage: true
    });
  });
});
