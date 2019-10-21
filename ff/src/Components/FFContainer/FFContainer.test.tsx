import React from "react";
import {mount, ReactWrapper} from "enzyme";
import FFContainer from "./FFContainer";
import {MockStore} from "redux-mock-store";
import {Provider} from "react-redux";
import {mockStore, findDataQA} from "../../testUtils/utils";

const setup = (store: MockStore) => {
  return mount(
    <Provider store={store}>
      <FFContainer />
    </Provider>
  );
};
describe("FFList", () => {
  describe("FFList ui unit tests", () => {
    let wrapper: ReactWrapper, store: MockStore;
    it("Initial render", () => {
      //TODO: Get rid of enzyme and work with react-testing-library https://testing-library.com/docs/react-testing-library/intro
      store = mockStore({
        FFListReducer: {
          data: false,
          requesting: true
        }
      });
      wrapper = setup(store);
      const errorMessage = findDataQA(wrapper, "error-message");
      expect(errorMessage.length).toBe(1);
    });
  });
});
