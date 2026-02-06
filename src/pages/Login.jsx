import { Link , useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/login.css"
import { login } from "../utils/auth";

const Login = () => {
const [ email , setEmail ] = useState("")
const [password , setPassword ] = useState("")
const navigate = useNavigate()

const handleLogin = async () => {
  try {
    const token = await login(email , password)
    console.log(token)
    alert("logged in")
    navigate("/")
  } catch(err) {
    throw new Error({message: err})
  }
}
  return (
  
    
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <div className="form-group">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button onClick={handleLogin} className="login-btn">Sign In</button> <br /> <br />
        <Link to={"/register"}> <p>New to farm2home ? <button  className="button">register</button></p></Link>
       
      </div>
    
    </div>
   
  

  );
};

export default Login;
