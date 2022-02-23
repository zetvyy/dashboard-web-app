import { combineReducers } from "redux";
import createEventReducer from "./createEventReducer";
import eventReducer from "./eventReducer";

export default combineReducers({
  event: eventReducer,
  createEvent: createEventReducer,
});
