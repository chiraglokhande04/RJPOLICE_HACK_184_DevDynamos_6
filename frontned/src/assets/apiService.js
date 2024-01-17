// apiService.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://geolocation-backend.onrender.com/api", 
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
