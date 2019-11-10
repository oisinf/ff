import {createSelector} from "reselect";
import {FFDataNodes, StatsLabels} from "./constants";
export const selectFFDataComplete = ({FFListReducer}: any) => {
  return FFListReducer.data;
};
// TODO: Create types for data...
export const selectPlayerStatsLabels = createSelector(
  [selectFFDataComplete],
  (data: FFDataNodes) => {
    if (data.element_stats) {
      return data.element_stats;
    } else {
      return false;
    }
  }
);

export const selectPlayerPositionInfo = createSelector(
  [selectFFDataComplete],
  (data: FFDataNodes) => {
    if (data.element_types) {
      return data.element_types;
    } else {
      return false;
    }
  }
);

export const SelectPlayers = createSelector(
  [selectFFDataComplete],
  (data: FFDataNodes) => {
    if (data.elements) {
      return data.elements;
    } else {
      return false;
    }
  }
);
export const selectGameSettings = createSelector(
  [selectFFDataComplete],
  data => {
    return data;
  }
);

export const selectPhases = createSelector(
  [selectFFDataComplete],
  data => {
    return data;
  }
);
export const selectElementTeams = createSelector(
  [selectFFDataComplete],
  data => {
    return data;
  }
);
