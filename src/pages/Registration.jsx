import { Link , useNavigate } from "react-router-dom";
import "../styles/registration.css"
import { useState } from "react";
import { register } from "../utils/auth";

const Registration = () => {

  const [ name , setName ] = useState("")
   const [ email , setEmail ] = useState("")
    const [ password , setPassword ] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async () => {
          try{
await register(name , email , password)
          alert("user created")
          navigate("/login")
          } catch(err){
            alert(err.message)
          }
    }

  return (
    <div className="registration-page">
      <div className="registration-card">
        <h2>Register</h2>
        <div className="form-group">
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button  onClick={handleSubmit} className="register-btn">Sign Up</button>
           <div className="exist mt-5">
        <p>existing user ? </p> 
        <Link to={"/login"}><button className="btn">Click here</button></Link>
        
      </div>
      </div>
     
    </div>
  );
};

export default Registration;
