import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./Reducers/";

// const store = ;

export default createStore(rootReducer, applyMiddleware(thunk));
