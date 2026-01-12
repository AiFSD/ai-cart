import "../styles/navbar.css";
import logo from "../media/logo.png";
import { Link } from "react-router-dom";
import PlugIn from "../pages/PlugIn";
const NavBar = () => {
  return (
    <div>
      <div className=" con-nav bg-transparent container-fluid text-center ">
        <div className=" row ">
          <div className=" col-lg-2 col-md-3 col-1">
            <a className="navbar-brand" href="#">
              <img
                className="logo"
                src={logo}
                alt="Bootstrap"
                width="30"
                height="24"
              />
            </a>
          </div>

          <div className="col-lg-5 col-md-8 col-12">
            <div className="address">
              <label>Delivery to: </label>
              <a style={{ color: "unset" }}>
                <p className="adrs"></p>
              </a>
            </div>
          </div>
          <div className="col-lg-2 d-none  d-lg-block">
            <h4 className="heading">Farm2Home</h4>
          </div>
          <div className="col-lg-3 col-md-12 col-12 btn-con">
            <div className="buttons">
          
              <button className="btn">LogIn</button>
              <Link to={"/cartpage"}>
                <button
                  style={{ justifyContent: "center", padding: "20px" }}
                  type="button"
                  className="btn-link"
                >
                  View Cart
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>
    </div>
  );
};

export default NavBar;
