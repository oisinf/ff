import React from "react";
import {Store} from "redux";
import {Provider} from "react-redux";
import {render} from "@testing-library/react";

export const renderWithRedux = (ui: JSX.Element, store: Store) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
};
