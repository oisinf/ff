import { FFListState, FFListActionTypes, GET_FF_DATA } from "./constants";

export const INITIAL_STATE: FFListState = {
  data: false,
  requesting: false
};

export default (state = INITIAL_STATE, action: FFListActionTypes) => {
  switch (action.type) {
    case GET_FF_DATA.REQUEST:
      return { ...state, requesting: true, data: false };
    case GET_FF_DATA.SUCCESS:
      return { ...state, requesting: false, data: action.payload };
    case GET_FF_DATA.FAIL:
      return { ...state, requesting: false, data: false };
    default:
      return { ...state };
  }
};
