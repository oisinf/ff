import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from ".";

export default (initialState = {}) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};
