import axios from "axios";
import {GET_FF_DATA} from "./constants";
import {AnyAction, ActionCreator, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

export const getFantasyFootballData: ActionCreator<
  ThunkAction<Promise<void>, {}, {}, AnyAction>
> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({type: GET_FF_DATA.REQUEST, payload: false});
    axios({
      method: "GET",
      url: "api/bootstrap-static/"
    })
      .then(res => {
        dispatch({type: GET_FF_DATA.SUCCESS, payload: res.data});
      })
      .catch(err => {
        dispatch({type: GET_FF_DATA.FAIL});
      });
  };
};
