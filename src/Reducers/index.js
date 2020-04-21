import { combineReducers } from "redux";
import reducerAPI from "./reducerAPI";
import reducerMock from "./reducerMock";

const rootReducer = combineReducers({
  reducerAPI,
  reducerMock,
});

export default rootReducer;
