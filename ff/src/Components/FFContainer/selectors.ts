import {createSelector} from "reselect";
import {
  FFDataNodes,
  StatsLabels,
  PlayerInfo,
  PositionInfo,
  GameSettings,
  Phases,
  Team
} from "./constants";
export const selectFFDataComplete = ({FFListReducer}: any) => {
  console.log("data", FFListReducer.data);
  return FFListReducer.data;
};
// TODO: Create types for data...
export const selectPlayerStatsLabels = createSelector(
  [selectFFDataComplete],
  (data: FFDataNodes): Array<StatsLabels> | false => {
    if (data.element_stats) {
      return data.element_stats;
    } else {
      return false;
    }
  }
);

export const selectPlayerPositionInfo = createSelector(
  [selectFFDataComplete],
  (data: FFDataNodes): Array<PositionInfo> | false => {
    if (data.element_types) {
      return data.element_types;
    } else {
      return false;
    }
  }
);

export const SelectPlayers = createSelector(
  [selectFFDataComplete],
  (data: FFDataNodes): Array<PlayerInfo> | false => {
    if (data.elements) {
      return data.elements;
    } else {
      return false;
    }
  }
);
export const selectGameSettings = createSelector(
  [selectFFDataComplete],
  (data: FFDataNodes): GameSettings | false => {
    if (data.game_settings) {
      return data.game_settings;
    } else {
      return false;
    }
  }
);

export const selectPhases = createSelector(
  [selectFFDataComplete],
  (data: FFDataNodes): Array<Phases> | false => {
    if (data.phases) {
      return data.phases;
    } else {
      return false;
    }
  }
);
export const selectTeams = createSelector(
  [selectFFDataComplete],
  (data: FFDataNodes): Array<Team> | false => {
    if (data.teams) {
      return data.teams;
    } else {
      return false;
    }
  }
);
