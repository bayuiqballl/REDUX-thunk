import axios from "axios";

export const MOCK_BEGIN = "MOCK_BEGIN";
export const MOCK_SUCCESS = "MOCK_SUCCESS";
export const MOCK_FAILED = "MOCK_FAILED";

export const MockBegin = () => {
  return {
    type: MOCK_BEGIN,
  };
};

export const MockSucces = (result) => {
  return {
    type: MOCK_SUCCESS,
    result,
  };
};

export const MockFailed = (error) => {
  return {
    type: MOCK_FAILED,
    error,
  };
};

export const getMockData = () => {
  return (dispatch) => {
    dispatch(MockBegin());

    axios
      .get("https://5e9f6f2311b078001679c810.mockapi.io/articles")
      .then((result) => dispatch(MockSucces(result.data)))
      .catch((error) => dispatch(MockFailed(error.massage)));
  };
};

export const postMock = (obj) => {
  return function (dispatch) {
    dispatch(MockBegin());

    axios
      .post("https://5e9f6f2311b078001679c810.mockapi.io/articles", obj)
      .then(() => dispatch(getMockData()))
      .catch((error) => dispatch(MockFailed(error.massage)));
  };
};

export const deleteMock = (id) => {
  return function (dispatch) {
    dispatch(MockBegin());
    axios
      .delete(`https://5e9f6f2311b078001679c810.mockapi.io/articles/${id}`)
      .then(() => dispatch(getMockData()))
      .catch((error) => dispatch(MockFailed(error.massage)));
  };
};
