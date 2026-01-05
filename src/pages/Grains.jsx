import { grainsData } from "../datas/grains";
import "../styles/products.css"
const Grains = () => {
  return (
    <div className="container-fluid veg-con">
      <a href="/">
        <button className="btn btn-primary" type="button">
          Go Back To Category
        </button>
      </a>
      <div className="row g-3 mt-3">
        {grainsData.map((grain) => (
          <div key={grain.id} className="col-12 col-md-12 col-lg-6">
            <div
              style={{ height: "100%" }}
              className="card  shadow-sm border-secondary-subtle"
            >
              <div className="row g-0 h-100 align-grain-center">
                <div className="col-4 h-100">
                  <img
                    src={grain.image}
                    className="img-fluid rounded-start product-img"
                    alt={grain.name}
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{grain.name}</h5>
                    <p className="mb-1 text-muted">Price: ₹{grain.price}/kg</p>
                    <p className="text-success fw-bold">{grain.offer}% Off</p>
                    <button className="btn btn-dark btn-sm mt-2">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grains;
