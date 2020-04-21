import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducerAPI from "./Reducers/reducerAPI";

// const store = ;

export default createStore(reducerAPI, applyMiddleware(thunk));
