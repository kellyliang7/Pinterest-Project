const Auth = {
  authenticateUser: token => {
    localStorage.setItem("token", token);
  },
  isUserAuthenticated: () => {
    return localStorage.getItem("token") !== null; // if key doesnt exist in local storage; no user is logged in 
  },
  deauthenticateUser: () => {
    localStorage.removeItem("token");
  },
  getToken: () => {
    return localStorage.getItem("token");
  }
};

export default Auth;