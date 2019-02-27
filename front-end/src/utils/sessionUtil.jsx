
import axios from "axios"

export const createUser = (user) => {
  return axios.post("/api/users/new", user)
};

export const loginUser = (user) => {
  return axios.post("/api/users/login", user)
};