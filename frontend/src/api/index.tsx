import axios from "axios";
import { getCookie } from "../utils/cookieHandler";
axios.defaults.baseURL = process.env.REACT_APP_BE_SERVER;
const instance = axios.create({
  baseURL: process.env.REACT_APP_BE_SERVER,
  timeout: 3000,
  headers: {
    "Access-Control-Allow-Origin": process.env.REACT_APP_BE_SERVER,
  },
  withCredentials: true
});

export const axiosPost = (url, payload, cb?: Function) => {
  return instance.post(url, payload)
};

instance.interceptors.request.use(function (config) {
  const token = getCookie("token");
  if(token) {
    config.headers.Authorization =  token;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});