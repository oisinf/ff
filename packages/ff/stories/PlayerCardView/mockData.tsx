import { PlayerInfo } from '../../src/components/PlayerGridView/PlayerGridView';

export const testPlayer: PlayerInfo = {
  bonus: 10,
  first_name: 'Test',
  goals_conceded: 0,
  news: 'Here is some news about stuff, pretty long, test player out till the 15th',
  own_goals: 10,
  penalties_saved: 10,
  red_cards: 10,
  saves: 10,
  second_name: 'Name',
  selected_by_percent: '50',
  web_name: 'Test',
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
  bps: 5,
  penalties_missed: 10
};

export const imgFailPlayer: PlayerInfo = {
  ...testPlayer,
  id: 9999,
  photo: 'fail.jpg'
};
