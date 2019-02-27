import * as sessionUtil from "../utils/sessionUtil";
import Auth from "../utils/loginUtil";

export let RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"

export const receiveCurrentUser = (user) => {
  return { type: RECEIVE_CURRENT_USER, payload: user }
};

export const createUser = (user) => dispatch => {
  return sessionUtil.createUser(user)
  .then(()=> {
    return dispatch(receiveCurrentUser(null))
  })
};

export const loginUser = (user) => dispatch => {
  return sessionUtil.loginUser(user)
  .then(res => {
    Auth.authenticateUser(res.data.email)
    return dispatch(receiveCurrentUser(res.data))
  })
  .catch(err => {
    Auth.deauthenticateUser() //doesn't take an argument 
  })
};

check auth 


