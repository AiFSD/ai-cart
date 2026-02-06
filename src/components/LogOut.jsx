import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    alert("You have been logged out");
    navigate("/login"); 
  };

  return (
    <button onClick={handleLogout} className="logout-btn">
      Logout
    </button>
  );
};

export default Logout;
