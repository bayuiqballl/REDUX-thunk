import { MOCK_FAILED, MOCK_BEGIN, MOCK_SUCCESS } from "../Actions/getMock";

const initState = {
  data: [],
  error: null,
};

const reducerMock = (state = initState, action) => {
  switch (action.type) {
    case MOCK_BEGIN:
      return {
        ...state,
      };
    case MOCK_SUCCESS:
      return {
        ...state,
        data: action.result,
      };
    case MOCK_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducerMock;
