import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [profile, setProfile] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const getProfile = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/user/camdetails"
    );
    setProfile(response.data);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    toast("Logged Out Successfully");
  };

  const value = {
    getProfile,
    profile,
    isAuthenticated,
    setIsAuthenticated,
    logoutHandler,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
