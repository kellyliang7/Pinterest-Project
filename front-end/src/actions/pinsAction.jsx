import * as pinsUtil from "../utils/pinsUtil";

export const RECEIVE_PINS = "RECEIVE_PINS" 

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
      console.log(err)
      // debugger 
    })
}


export const RECEIVE_SINGLE_PIN = "RECEIVE_SINGLE_PIN"

export const receiveSinglePin = (pin) => {
  return { type: RECEIVE_SINGLE_PIN, payload: pin }
};

export const fetchSinglePin = (id) => dispatch => {
  return pinsUtil.fetchSinglePin(id)
    .then(res => {
      console.log(res)
      return dispatch(receiveSinglePin(res.data.pin))
    })
    .catch(err => {
      console.log(err)
    })
}