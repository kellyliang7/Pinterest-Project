import { RECEIVE_PINS } from "../actions/pinsAction"

let defaultState = {}; 

const pinsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case RECEIVE_PINS:
            return action.payload 
            break;
    
        default: return state 
            break;
    }
}

export default pinsReducer; 