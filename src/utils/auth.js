import axios from "axios";

const api = "http://localhost:8000/api/users";


export const logout = () => {
  localStorage.removeItem("token"); 
};


export const register = async (name, email, password) => {
  try {
    const res = await axios.post(`${api}/register`, {
      name,
      email,
      password,
    });
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Registration Failed");
  }
};

export const login = async (email, password) => {
  try {
    const res = await axios.post(`${api}/login`, {
      email,
      password,
    });
    const token = res.data.token;
    localStorage.setItem("token", token);
    console.log("Received token:", token); 
    return token;
  } catch (err) {
    throw new Error(err.response?.data?.message || "login failed");
  }
};

export const verify = async () => {
  const token = localStorage.getItem("token");
  if (!token) return { valid: false };

  try {
    const res = await axios.post(
      `${api}/verifyToken`,
      {},
      { headers: { Authorization: `Bearer ${token}` } } 
    );
    return res.data;
    
    
  } catch (err) {
    localStorage.removeItem("token");
    console.log(err);
    return { valid: false };
  }
};

