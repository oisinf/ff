import {FFListState, FFListActionTypes, GET_FF_DATA} from "./constants";

const INITIAL_STATE: FFListState = {
  data: false
};

export default (state = INITIAL_STATE, action: FFListActionTypes) => {
  switch (action.type) {
    case GET_FF_DATA.SUCCESS:
      return {...state, data: action.payload};
    case GET_FF_DATA.FAIL:
      return {...state, data: false};
    default:
      return {...state};
  }
};
