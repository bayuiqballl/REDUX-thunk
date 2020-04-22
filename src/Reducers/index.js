import { combineReducers } from "redux";
import reducerAPI from "./reducerAPI";
import reducerMock from "./reducerMock";
import counterReduce from "./counterReduce";

const rootReducer = combineReducers({
  reducerAPI,
  reducerMock,
  counterReduce,
});

export default rootReducer;
