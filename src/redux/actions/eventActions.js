import axios from "axios";
import { GET_EVENT_FAILED, GET_EVENT_SUCCESS } from "../types";

export const getEvent = () => {
  const url = "http://localhost:3001/events";
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      console.log(response);
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
