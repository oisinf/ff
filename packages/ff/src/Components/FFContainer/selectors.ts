import { createSelector } from "reselect";
import {
  FFDataNodes,
  StatsLabels,
  PlayerInfo,
  PositionInfo,
  GameSettings,
  Phases,
  Team
} from "./constants";

export const selectFFDataComplete = ({ FFListReducer }: any) => {
  console.log("data", FFListReducer.data);
  return FFListReducer.data;
};
export const selectPlayerStatsLabels = createSelector(
  [selectFFDataComplete],
  (data: FFDataNodes): Array<StatsLabels> | false => {
    return data.element_stats ?? false;
  }
);

export const selectPlayerPositionInfo = createSelector(
  [selectFFDataComplete],
  (data: FFDataNodes): Array<PositionInfo> | false => {
    return data.element_types ?? false;
  }
);

export const SelectPlayers = createSelector(
  [selectFFDataComplete],
  (data: FFDataNodes): Array<PlayerInfo> | false => {
    return data.elements ?? false;
  }
);
export const selectGameSettings = createSelector(
  [selectFFDataComplete],
  (data: FFDataNodes): GameSettings | false => {
    return data.game_settings ?? false;
  }
);

export const selectPhases = createSelector(
  [selectFFDataComplete],
  (data: FFDataNodes): Array<Phases> | false => {
    return data.phases ?? false;
  }
);
export const selectTeams = createSelector(
  [selectFFDataComplete],
  (data: FFDataNodes): Array<Team> | false => {
    return data.teams ?? false;
  }
);
