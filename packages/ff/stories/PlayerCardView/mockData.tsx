import { PlayerInfo } from '../../src/components/PlayerGridView/PlayerGridView';

export const testPlayer: PlayerInfo = {
  web_name: 'Test Name',
  photo: '37605.jpg',
  id: 1,
  goals_scored: 5,
  assists: 4,
  total_points: 50,
  points_per_game: 10,
  clean_sheets: 5,
  yellow_cards: 5,
  minutes: 5,
  element_type: 1,
  team: 1,
  bps: 5
};

export const imgFailPlayer: PlayerInfo = {
  ...testPlayer,
  id: 9999,
  photo: 'fail.jpg'
};
