import * as sessionUtil from "../utils/sessionUtil";
import Auth from "../utils/loginUtil";
import axios from "axios";

export let RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"

export const receiveCurrentUser = (user) => {
  return { type: RECEIVE_CURRENT_USER, payload: user }
};

export const createUser = (user) => dispatch => {
  return sessionUtil.createUser(user)
  .then(()=> {
    debugger
    // return dispatch(receiveCurrentUser(null))
    return dispatch(loginUser(user))
  })
  .catch(err => {
    debugger
    console.log(err)
  })
};

export const loginUser = (user) => dispatch => {
  debugger
  console.log("log in user")
  return sessionUtil.loginUser(user)
  .then(res => {
    Auth.authenticateUser(res.data.email)
    return dispatch(receiveCurrentUser(res.data))
  })
  .then(() => {
    checkAuthenticateStatus(); 
  })
  .catch(err => {
    Auth.deauthenticateUser() //doesn't take an argument 
  })
};

// export const verifyLogin = (user) => dispatch => {
//   return sessionUtil.verifyLogin(user)
//   .then(res => {
    
//   })
// } 

export const checkAuthenticateStatus = () => dispatch => {
  axios.get("/api/users/isLoggedIn").then(user => {
    // debugger
    if (user.data.email === Auth.getToken()) {
      dispatch({
        type: RECEIVE_CURRENT_USER,
        payload: user
      });
    } else {
      if (user.data.email) {
        this.logoutUser();
      } else {
        Auth.deauthenticateUser();
      }
    }
  });
};
