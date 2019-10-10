import axios from "axios";
import {GET_FF_DATA} from "./constants";
import {Dispatch} from "redux";

export const getFantasyFootballData = (dispatch: Dispatch) => {
  return axios({
    method: "GET",
    url: "api/bootstrap-static/"
  })
    .then(res => {
      return dispatch({type: GET_FF_DATA.SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log("error", err);
      return dispatch({type: GET_FF_DATA.FAIL});
    });
};
