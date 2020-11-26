describe('Main test', () => {
  it('should display player cards, filter players correctly', () => {
    cy.visit('/');

    cy.server();

    //stub images res
    cy.route({
      method: 'POST',
      url: '/player_imgs',
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

    cy.percySnapshot('Display Arsenal goalkeepers from filter by position/team');

    cy.dataQa('info_button_Leno').click();
    cy.dataQa('player_modal');

    cy.percySnapshot('Display player modal with correct info');
    cy.dataQa('player_modal_close_button').click();
    cy.percySnapshot('Display Arsenal goalkeepers after close modal');
  });
});
