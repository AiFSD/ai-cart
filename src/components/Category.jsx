import "../styles/cat.css";
import { category } from "../datas/category";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <div className="container mt-5">
             <div className="col cartbtn-con">
              <button style={{height:"60px" , width:"80%", justifyContent:"center",padding:"20px" }} type="button" className="btn-link">
                View Cart
              </button>
          </div>
        <div className="row g-5 mt-5">
     
          {category.map((item) => (
            <div className="col-lg-4 col-md-6 col-12 ">
              <Link to={item.route}>
                <div key={item.id} className="card cat-card text-bg-dark">
                  <img src={item.img} className="cat-img" alt="..." />
                  <div className="card-img-overlay">
                    <h3 className="card-title">{item.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
