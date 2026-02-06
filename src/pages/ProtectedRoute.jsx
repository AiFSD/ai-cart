import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { verify } from "../utils/auth"

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      const result = await verify();
      setIsValid(result.valid);
    };
    checkToken();
  }, []);

  if (isValid === null) {
    return <p>Loading...</p>; 
  }

  return isValid ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
