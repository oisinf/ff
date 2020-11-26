describe('Main test', () => {
  it('should display player cards, filter players by team/position correctly (full e2e)', () => {
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

    cy.dataQa('filter_position').click();
    cy.contains('Goalkeeper').click();

    cy.dataQa('filter_position').should('contain', 'Goalkeeper');
    cy.dataQa('player_card').should('be.visible');
    cy.dataQa('player_position').should('contain', 'GKP');

    cy.dataQa('filter_team').click();
    cy.contains('Arsenal').click();

    cy.dataQa('filter_team').should('contain', 'Arsenal');
    cy.dataQa('player_card').should('be.visible');
    cy.dataQa('player_team').should('contain', 'ARS');

    //wait for aliased response
    // cy.wait('@getPlayerImages');

    cy.percySnapshot('Display Arsenal goalkeepers from filter by position/team');

    cy.dataQa('info_button_Leno').click();
    cy.dataQa('player_modal');

    cy.percySnapshot('Display player modal with correct info');
    cy.dataQa('player_modal_close_button').click();
    cy.percySnapshot('Display Arsenal goalkeepers after close modal');
  });

  it('should display cards and filter by stats with mock data', () => {
    cy.visit('/');

    cy.server();

    cy.contains('Fantasy Football');
    cy.contains('Loading...');

    cy.percySnapshot('Loading icon displayed as no data');

    //stub data and img res
    cy.route('/football-stuff', 'fixture:matchweek10DataDump.json').as('getAllData');
    cy.route({
      method: 'POST',
      url: '/player_imgs',
      response: []
    });

    cy.percySnapshot('Display cards with mock data data');

    cy.dataQa('filter_stats').click();
    cy.contains('Points Per Game').click();

    cy.percySnapshot('Players should be orderd by points per game');

    cy.dataQa('info_button_Kane').click();
    cy.dataQa('player_modal');

    cy.percySnapshot('Display player modal with correct info');
    cy.dataQa('player_modal_close_button').click();
    cy.percySnapshot('Display Arsenal goalkeepers after close modal');
  });
});
