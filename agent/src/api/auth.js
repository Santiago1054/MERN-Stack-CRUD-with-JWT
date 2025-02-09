import axios from "./axios";

const API = "https://mern-stack-crud-with-jwt.onrender.com";

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get("/verify");
