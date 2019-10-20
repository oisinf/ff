import {restRequest} from "../../reduxConfig/utilities";
export const GET_FF_DATA = restRequest("FFList.GET_FF_DATA_ALL_DATA");

// TODO: Will need to correctly define data types after investigating data types
export type FFListState = FFData & {requesting: boolean};

export type FFData = {
  data: any;
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

export type PlayerPositionInfo = {
  id: number;
  plural_name: string;
  plural_name_short: string;
  squad_select: string;
  squad_min_play: string;
  squad_max_play: string;
};
