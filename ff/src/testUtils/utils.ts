import {ShallowWrapper, ReactWrapper} from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

const middlewares = [thunk];

export const mockStore = configureStore(middlewares);

export const findDataQA = (
  wrapper: ShallowWrapper | ReactWrapper,
  val: string
) => {
  return wrapper.find(`[data-qa="${val}"]`);
};
