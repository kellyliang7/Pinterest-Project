import pinsReducer from "./pinsReducer";
import { combineReducers } from "redux";

export default combineReducers({
    pins: pinsReducer});