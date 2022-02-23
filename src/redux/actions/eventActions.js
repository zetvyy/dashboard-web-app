import axios from "axios";
import {
  CREATE_EVENT_FAILED,
  CREATE_EVENT_SUCCESS,
  GET_EVENT_FAILED,
  GET_EVENT_SUCCESS,
} from "../types";

export const getEvent = () => {
  const url = "http://localhost:3001/events";
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      dispatch({
        type: GET_EVENT_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: GET_EVENT_FAILED,
        error: err,
      });
    }
  };
};

export const postEvent = () => {
  const url = "http://localhost:3001/events";
  return async (dispatch) => {
    try {
      const response = await axios.post(url);
      console.log(response);
      dispatch({
        type: CREATE_EVENT_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: CREATE_EVENT_FAILED,
        error: err,
      });
    }
  };
};
