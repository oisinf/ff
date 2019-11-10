import {restRequest} from "../../reduxConfig/utilities";
export const GET_FF_DATA = restRequest("FFList.GET_FF_DATA_ALL_DATA");

// TODO: Will need to correctly define data types after investigating data types
export type FFListState = {data: FFData | boolean; requesting: boolean};

export interface FFData {
  data: FFDataNodes;
}
export type FFDataNodes = {
  element_stats: Array<StatsLabels>;
  element_types: Array<PositionInfo>;
  elements: Array<PlayerInfo>;
  events: Array<JSON>;
  game_settings: JSON;
  phases: Array<JSON>;
  teams: Array<JSON>;
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
