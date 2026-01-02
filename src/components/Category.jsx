import "../styles/cat.css";
import { category } from "../datas/category";

const Category = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row g-5">
          {category.map((item) => (
            <div className="col-4">
              <a href="">
                <div key={item.id} className="card cat-card text-bg-dark">
                  <img src={item.img} className="cat-img" alt="..." />
                  <div className="card-img-overlay">
                    <h3 className="card-title">{item.title}</h3>
                  </div>
                </div>
              </a>
            </div>
          ))}
      
        </div>
      </div>
    </div>
  );
};

export default Category;
