import "../styles/products.css"
import { dairyData } from "../datas/dairyData"
const Dairy = () => {
  return (
      <div>
          
            <div>
                    
                    <div className="container-fluid veg-con">
                          <a href="/">
                            <button className="btn btn-primary" type="button">
                              Go Back To Category
                            </button>
                          </a>
                          <div className="row g-3 mt-3">
                            {dairyData.map((dairy) => (
                              <div key={dairy.id} className="col-12 col-md-12 col-lg-6">
                                <div
                                  style={{ height: "100%" }}
                                  className="card  shadow-sm border-secondary-subtle"
                                >
                                  <div className="row g-0 h-100 align-dairy-center">
                                    <div className="col-4 h-100">
                                      <img
                                        src={dairy.image}
                                        className="img-fluid rounded-start product-img"
                                        alt={dairy.name}
                                      />
                                    </div>
                                    <div className="col-8">
                                      <div className="card-body">
                                        <h5 className="card-title fw-bold">{dairy.name}</h5>
                                        <p className="mb-1 text-muted">Price: ₹{dairy.price}/kg</p>
                                        <p className="text-success fw-bold">{dairy.offer}% Off</p>
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
          
              </div>

    </div>
  )
}

export default Dairy