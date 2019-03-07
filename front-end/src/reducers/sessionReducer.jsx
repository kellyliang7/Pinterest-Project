import { RECEIVE_CURRENT_USER} from "../actions/sessionAction";
import Auth from "../utils/loginUtil";

let defaultState = {
    email: null,
    age: null,
    isLoggedIn: null
}

const sessionReducer = (state = defaultState, action) => {
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                ...state,
                isloggedIn: Auth.isUserAuthenticated(),
                email: Auth.getToken()
            }
        default: return state

    }
}

export default sessionReducer;