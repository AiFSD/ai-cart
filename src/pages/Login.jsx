import "../styles/login.css"

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <div className="form-group">
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" />
        </div>
        <button className="login-btn">Sign In</button>
      </div>
    </div>
  );
};

export default Login;
