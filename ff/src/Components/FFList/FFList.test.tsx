import React from "react";
import {Provider} from "react-redux";
import {shallow, ShallowWrapper} from "enzyme";
import {findDataQA, mockStore} from "../../testUtils/utils";
import moxios from "moxios";
import FFList from "./FFList";
import {INITIAL_STATE} from "./reducer";
import {MockStore} from "redux-mock-store";
import {getFantasyFootballData} from "./actions";
import {GET_FF_DATA} from "./constants";
// Test axios call on render
// success, state = mocked data
// fail = ui show 'Uh Oh, something went wrong'

const FFListReducer = INITIAL_STATE;

const setup = (store: MockStore) => {
  return shallow(
    <Provider store={store}>
      <FFList />
    </Provider>
  ).dive();
};

describe("FFList Component on render", () => {
  let wrapper: ShallowWrapper, store: MockStore;
  beforeEach(() => {
    store = mockStore({
      FFListReducer
    });
    wrapper = setup(store);
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it("should display data if dispatch success", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: true
      });
    });
    return store.dispatch(getFantasyFootballData()).then(() => {
      const newState = store.getState().FFListReducer;
      console.log("new state", newState);
      expect(newState).toEqual({data: true, requesting: false});
    });
  });
  it("should display 'Error' if dispatch fail", () => {
    const newState = store.getState().FFListReducer;
    console.log("new state", newState);
    expect(newState).toEqual({data: false, requesting: false});
  });
});
