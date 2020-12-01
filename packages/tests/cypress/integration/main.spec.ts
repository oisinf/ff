describe('Main test', () => {
  it('should display player cards, filter players by team/position/stats correctly', () => {
    cy.visit('/');

    cy.server();

    cy.contains('Fantasy Football');
    cy.contains('Loading...');

    cy.route('/football-stuff', 'fixture:matchweek10DataDump.json').as('getAllData');
    cy.wait('@getAllData');
    cy.wait(10000);

    cy.dataQa('filter_position').click();
    cy.dataQa('filter_position').click();

    cy.contains('Defender').click();

    cy.dataQa('filter_position').should('contain', 'Defender');
    cy.dataQa('player_card').should('be.visible');
    cy.dataQa('player_position').should('contain', 'DEF');

    cy.dataQa('filter_team').click();
    cy.contains('Chelsea').click();

    cy.dataQa('filter_team').should('contain', 'Chelsea');
    cy.dataQa('player_card').should('be.visible');
    cy.dataQa('player_team').should('contain', 'CHE');

    cy.percySnapshot('Display Chelsea defenders from filter by position/team');

    cy.dataQa('info_button_Chilwell').click();
    cy.dataQa('player_modal');

    cy.percySnapshot('Display player modal with correct info');
    cy.dataQa('player_modal_close_button').click();
    cy.percySnapshot('Display Chelsea defenders after close modal');

    cy.dataQa('filter_stats').click();
    cy.contains('Points Per Game').click();

    cy.percySnapshot('Players should be ordered by points per game');

    cy.dataQa('info_button_Chilwell').click();
    cy.dataQa('player_modal');

    cy.percySnapshot('Display player modal with correct info');
    cy.dataQa('player_modal_close_button').click();
    cy.percySnapshot('Display Chelsea goalkeepers after close modal');
  });
});
