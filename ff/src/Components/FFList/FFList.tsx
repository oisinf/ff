import React, {useReducer} from "react";
import reducer from "./reducer";
import {INITIAL_STATE} from "./constants";
const FFList = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <>
      <button
        onClick={() => dispatch({type: "INCREMENT", payload: state.count})}
      >
        Click To Increment
      </button>
      <button
        onClick={() => dispatch({type: "DECREMENT", payload: state.count})}
      >
        Click To Increment
      </button>
      <div>Current Count {state.count}</div>
    </>
  );
};

export default FFList;
