/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Authenticatoin } from "./Providers/FakeAuthentication";
import { useEffect } from "react";

const ProtectApp = ({ children }) => {
  const { isAuthenticated } = Authenticatoin();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
};

export default ProtectApp;
