import axios from "axios";

export const createUser = (user) => {
  return axios.post("/api/users/new", user)
};

export const loginUser = (user) => {
  return axios.post("/api/users/login", user)
};

export const verifyLogin = () => {
  return axios.get("/api/users/isLoggedIn")
};

export const logoutUser = (user) => {
  return axios.post("/api/users/logout", user)
};

