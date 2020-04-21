import {
  GET_DATA_BEGIN,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
} from "../Actions/getAPI";

const initialState = {
  data: [],
  error: null,
};

const reducerAPI = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_BEGIN:
      return {
        ...state,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.result,
      };
    case GET_DATA_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducerAPI;
