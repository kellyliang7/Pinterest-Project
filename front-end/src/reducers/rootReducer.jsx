import pinsReducer from "./pinsReducer";
import sessionReducer from "./sessionReducer";
import { combineReducers } from "redux";

export default combineReducers({
    pins: pinsReducer,
    session: sessionReducer
});