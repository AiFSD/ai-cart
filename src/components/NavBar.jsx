import "../styles/navbar.css"
import logo from "../media/logo.png"
const NavBar = () => {
  return (
    <div>

<div className=" con-nav bg-transparent container-fluid text-center ">
  <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div className=" col">
     <a className="navbar-brand" href="#">
      <img className="logo" src={logo}alt="Bootstrap" width="30" height="24"/>
    </a>
    </div>
      
    <div className="col">
     <div className="address">
      <label>Delivery to: </label> 
      <a style={{color:"unset;"}} href="">
        
     <p className="adrs"> Lorem ipsum dolor sit amet consectetur adipisicing  </p>
      </a>
       
     
     </div>
    </div>
    <div className="col">
     <h4 className="heading">Farm2Home</h4> 
  
    </div>
    <div className="col btn-con">
         <div className="buttons">
     <button className="btn">
          LogIn
          </button>
          <button className="btn">Register</button>
          <button type="button" className="btn-link">View Cart</button>
    </div>
    </div>
  </div>
</div>

<hr></hr>

    </div>
  )
}

export default NavBar