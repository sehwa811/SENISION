import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "http://ec2-3-34-83-149.ap-northeast-2.compute.amazonaws.com:8080",
  withCredentials: true,
});

export const apiWithAuth = axios.create({
  baseURL: "http://ec2-3-34-83-149.ap-northeast-2.compute.amazonaws.com:8080",
  withCredentials: true,
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  // },
});
