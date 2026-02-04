import "../styles/registration.css"

const Registration = () => {
  return (
    <div className="registration-page">
      <div className="registration-card">
        <h2>Register</h2>
        <div className="form-group">
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" />
        </div>
        <button className="register-btn">Sign Up</button>
      </div>
    </div>
  );
};

export default Registration;
