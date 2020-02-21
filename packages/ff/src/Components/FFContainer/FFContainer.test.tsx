import React from "react";
import FFContainer from "./FFContainer";
import {renderWithRedux} from "../../testUtils";
import {GET_FF_DATA} from "./constants";
import initialStore from "../../reduxConfig/store";
describe("FFContainer", () => {
  it("Should call getFFData on render, display data div if request is successful and error div if not or requesting", async () => {
    let {getByTestId, store} = renderWithRedux(<FFContainer />, initialStore);
    expect(getByTestId("error-message")).toBeDefined();

    store.dispatch({
      type: GET_FF_DATA.SUCCESS,
      payload: {
        element_stats: {
          stub1: 1
        },
        element_types: {
          stub1: 1
        }
      }
    });
    expect(getByTestId("ff-info")).toBeDefined();

    store.dispatch({
      type: GET_FF_DATA.FAIL,
      payload: false
    });

    expect(getByTestId("error-message")).toBeDefined();
  });
});
