import { RECEIVE_PINS, RECEIVE_SINGLE_PIN } from "../actions/pinsAction"

const normalizeData = (arr) => {
  let output = {}
  arr.forEach(pin => {
    output[pin.id] = pin
  })
  return output
};

let defaultState = { currentPin: {} };

const pinsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_PINS:
      // debugger
      return {
        ...state,
        ...normalizeData(action.payload)
      }
    case RECEIVE_SINGLE_PIN:
      return { 
        ...state,
        currentPin: action.payload 
      }
    default: return state
  }
}

// {
//     1: {id: 1, name: kelly},
//     3: {id: 3, name: corey }
// }
export default pinsReducer; 