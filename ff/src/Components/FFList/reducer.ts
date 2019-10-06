import {FFListState, FFAction} from "./constants";

export default (state: FFListState, action: FFAction) => {
  switch (action.type) {
    case "INCREMENT": {
      return {...state, count: action.payload + 1};
    }
    case "DECREMENT": {
      return {...state, count: action.payload - 1};
    }
    default: {
      return {...state};
    }
  }
};
