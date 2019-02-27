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
    // return dispatch(receiveCurrentUser(null))
    return loginUser(user)
  })
};

export const loginUser = (user) => dispatch => {
  console.log("log in user")
  return sessionUtil.loginUser(user)
  .then(res => {
    Auth.authenticateUser(res.data.email)
    return dispatch(receiveCurrentUser(res.data))
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
  axios.get("/users/isLoggedIn").then(user => {
    if (user.data.username === Auth.getToken()) {
      
      dispatch({
        type: Auth.isUserAuthenticated(),
        payload: Auth.getToken()
      });
    } else {
      if (user.data.username) {
        this.logoutUser();
      } else {
        Auth.deauthenticateUser();
      }
    }
  });
};
