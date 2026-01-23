import "../styles/products.css";
import { dairyData } from "../datas/dairyData";
import { useDispatch, useSelector } from "react-redux";
import { addLogic, increaseQty, decreaseQty } from "../redux/cartSlice";


const Dairy = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.addLogic.products);

  return (
    <div className="container-fluid veg-con">
      <Link to={"/"}>
        <button className="btn btn-primary" type="button">
          Go Back To Category
        </button>
      </Link>

      <div className="row g-3 mt-3">
        {dairyData.map((dairy) => {
          const inCart = products.find((p) => p.id === dairy.id);

          return (
            <div key={dairy.id} className="col-12 col-md-12 col-lg-6">
              <div
                style={{ height: "100%" }}
                className="card shadow-sm border-secondary-subtle"
              >
                <div className="row g-0 h-100 align-dairy-center">
                  <div className="col-4 h-100">
                    {/* {console.log(dairy.image)} */}
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

                      {inCart && inCart.quantity > 0 ? (
                        <div className="d-flex align-items-center gap-2">
                          <button
                            className="btn btn-dark btn-sm"
                            onClick={() => dispatch(decreaseQty(dairy.id))}
                          >
                            -
                          </button>
                          <span>{inCart.quantity}</span>
                          <button
                            className="btn btn-dark btn-sm"
                            onClick={() => dispatch(increaseQty(dairy.id))}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          className="btn btn-dark btn-sm mt-2"
                          onClick={() => dispatch(addLogic(dairy))}
                        >
                          Add To Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dairy;
