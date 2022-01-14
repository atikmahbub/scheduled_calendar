import { combineReducers } from "redux";
import appointmentReducer from "./appointmentSlice";

export const rootReducers = combineReducers({
  appointments: appointmentReducer,
});
