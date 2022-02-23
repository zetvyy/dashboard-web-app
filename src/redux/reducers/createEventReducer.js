import { CREATE_EVENT_FAILED, CREATE_EVENT_SUCCESS } from "../types";

const initialState = {
  data: [],
  error: null,
};

const createEventReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_EVENT_SUCCESS: {
      return {
        ...state,
        data: payload,
      };
    }
    case CREATE_EVENT_FAILED: {
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

export default createEventReducer;
