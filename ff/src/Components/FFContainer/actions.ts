import axios from "axios";
import {GET_FF_DATA} from "./constants";
import {ActionCreator, Dispatch} from "redux";

export const getFantasyFootballData: ActionCreator<any> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({type: GET_FF_DATA.REQUEST, payload: false});
    axios
      .get("https://fantasy.premierleague.com/api/bootstrap-static/")
      .then(res => {
        dispatch({type: GET_FF_DATA.SUCCESS, payload: res.data});
      })
      .catch(err => {
        dispatch({type: GET_FF_DATA.FAIL});
      });
  };
};
