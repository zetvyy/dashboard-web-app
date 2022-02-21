import { GET_EVENT_FAILED, GET_EVENT_SUCCESS } from "../types";

const initialState = {
  data: [],
  error: null,
};

const eventReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_EVENT_SUCCESS: {
      return {
        ...state,
        data: payload,
      };
    }
    case GET_EVENT_FAILED: {
      return {
        ...state,
        error: payload,
      };
    }
    default: {
      return {
        ...state,
        payload,
      };
    }
  }
};

export default eventReducer;
