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


export let RECEIVE_SINGLE_PIN = "RECEIVE_SINGLE_PIN"

export const receiveSinglePin = (pin) => {
  return { type: RECEIVE_SINGLE_PIN, payload: pin }
};

export const fetchSinglePin = () => dispatch => {
  return pinsUtil.fetchSinglePin()
    .then(res => {
      return dispatch(receiveSinglePin(res.data.data))
    })
}