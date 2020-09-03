import { restRequest } from "../../reduxConfig/utilities";

export const GET_FF_DATA = restRequest("FFList.GET_FF_DATA_ALL_DATA");

export type FFListState = { data: FFData | boolean; requesting: boolean };

export interface FFData {
  data: FFDataNodes;
}
export type FFDataNodes = {
  element_stats: Array<StatsLabels>;
  element_types: Array<PositionInfo>;
  elements: Array<PlayerInfo>;
  events: Array<JSON>;
  game_settings: GameSettings;
  phases: Array<Phases>;
  teams: Array<Team>;
  total_players: number;
};
export interface GetFFDataAction {
  type: string;
  payload: FFData;
}
export type FFListActionTypes = GetFFDataAction;

export type StatsLabels = {
  key: string;
  label: string;
};

export type PositionInfo = {
  id: number;
  plural_name: string;
  plural_name_short: string;
  squad_select: string;
  squad_min_play: string;
  squad_max_play: string;
};

export type PlayerInfo = {
  assists: number;
  bonus: number;
  bps: number;
  chance_of_playing_next_round: number;
  chance_of_playing_this_round: number;
  clean_sheets: number;
  code: number;
  cost_change_event: number;
  cost_change_event_fall: number;
  cost_change_start: number;
  cost_change_start_fall: number;
  creativity: string;
  dreamteam_count: number;
  element_type: number;
  ep_next: string;
  ep_this: string;
  event_points: number;
  first_name: string;
  form: string;
  goals_conceded: number;
  goals_scored: number;
  ict_index: string;
  id: number;
  in_dreamteam: boolean;
  influence: string;
  minutes: number;
  news: string;
  news_added: string;
  now_cost: number;
  own_goals: number;
  penalties_missed: number;
  penalties_saved: number;
  photo: string;
  points_per_game: string;
  red_cards: number;
  saves: number;
  second_name: string;
  selected_by_percent: string;
  special: boolean;
  squad_number: boolean;
  status: string;
  team: number;
  team_code: number;
  threat: string;
  total_points: number;
  transfers_in: number;
  transfers_in_event: number;
  transfers_out: number;
  transfers_out_event: number;
  value_form: string;
  value_season: string;
  web_name: string;
  yellow_cards: number;
};
export type GameSettings = {
  cup_start_event_id: number;
  league_join_private_max: number;
  league_join_public_max: number;
  league_max_ko_rounds_private_h2h: number;
  league_max_size_private_h2h: number;
  league_max_size_public_classic: number;
  league_max_size_public_h2h: number;
  league_points_h2h_draw: number;
  league_points_h2h_lose: number;
  league_points_h2h_win: number;
  league_prefix_public: string;
  squad_squadplay: number;
  squad_squadsize: number;
  squad_team_limit: number;
  squad_total_spend: number;
  stats_form_days: number;
  sys_vice_captain_enabled: boolean;
  timezone: string;
  transfers_sell_on_fee: number;
  ui_currency_multiplier: number;
  ui_special_shirt_exclusions: Array<any>;
  ui_use_special_shirts: boolean;
};

export type Phases = {
  id: number;
  name: string;
  start_event: number;
  stop_event: number;
};
export type Team = {
  code: number;
  draw: number;
  form: null;
  id: number;
  loss: number;
  name: string;
  played: number;
  points: number;
  position: number;
  short_name: string;
  strength: number;
  strength_attack_away: number;
  strength_attack_home: number;
  strength_defence_away: number;
  strength_defence_home: number;
  strength_overall_away: number;
  strength_overall_home: number;
  team_division: number;
  unavailable: boolean;
};
