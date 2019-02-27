import * as pinsUtil from "../utils/pinsUtil";

export let RECEIVE_PINS = "RECEIVE_PINS" 

export const receivePins = (pins) => {
    return { type: RECEIVE_PINS, payload: pins }
};

export const fetchAllPins = () => dispatch => { //asynchronous call from utils 
    // debugger
    return pinsUtil.fetchAllPins()
    .then(res => {
        // debugger
        return dispatch(receivePins(res.data.pins))
    })
    .catch(err => {
        // debugger 
    })
}