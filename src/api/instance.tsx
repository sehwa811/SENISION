import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "http://ec2-54-180-81-17.ap-northeast-2.compute.amazonaws.com:8080",
  withCredentials: false,
});

export const apiWithAuth = axios.create({
  baseURL: "http://ec2-54-180-81-17.ap-northeast-2.compute.amazonaws.com:8080",
  withCredentials: true,
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  // },
});