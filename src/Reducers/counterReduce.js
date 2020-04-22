import {
  addCounter,
  minCounter,
  INCREMENT,
  DECREMENT,
} from "../Actions/getCounter";

const initialState = {
  counter: 0,
};

const counterReduce = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default counterReduce;
