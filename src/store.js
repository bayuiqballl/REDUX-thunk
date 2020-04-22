import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./Reducers/";
import logger from "redux-logger";
// const store = ;

export default createStore(rootReducer, applyMiddleware(thunk, logger));
