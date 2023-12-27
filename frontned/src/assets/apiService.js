// apiService.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // Replace with your backend API base URL
});

export const login = async (formData) => {
  return api
    .post("/auth/login", formData)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const register = async (formData) => {
  return api
    .post("/auth/register", formData)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
