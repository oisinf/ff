import {createSelector} from "reselect";
export const selectFFDataComplete = ({FFListReducer}: any) => {
  return FFListReducer.data;
};
// TODO: Create types for data...
export const selectPlayerStatsLabels = createSelector(
  [selectFFDataComplete],
  data => {
    if (data.element_stats) {
      return data.element_stats;
    } else {
      return false;
    }
  }
);

export const selectPlayerPositionInfo = createSelector(
  [selectFFDataComplete],
  data => {
    if (data.element_types) {
      return data.element_types;
    } else {
      return data;
    }
  }
);

export const selectElementElements = createSelector(
  [selectFFDataComplete],
  data => {
    return data;
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
