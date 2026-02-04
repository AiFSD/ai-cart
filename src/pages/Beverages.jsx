import "../styles/products.css";
import { beveragesData } from "../datas/beveragesData";
import { useDispatch, useSelector } from "react-redux";
import { addLogic, increaseQty, decreaseQty } from "../redux/cartSlice";

const Beverages = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => 
    state.addLogic.products
  );
  return (
    <div>
      <div className="container-fluid veg-con">
        <a href="/">
          <button className="btn btn-primary" type="button">
            Go Back To Category
          </button>
        </a>
        <div className="row g-3 mt-3">
          {beveragesData.map((drink) => {
            const inCart = products.find((p) => p.id === drink.id);
            return (
              <div key={drink.id} className="col-12 col-md-12 col-lg-6">
                <div
                  style={{ height: "100%" }}
                  className="card  shadow-sm border-secondary-subtle"
                >
                  <div className="row g-0 h-100 align-drink-center">
                    <div className="col-4 h-100">
                      <img
                        src={drink.image}
                        className="img-fluid rounded-start product-img"
                        alt={drink.name}
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">{drink.name}</h5>
                        <p className="mb-1 text-muted">
                          Price: ₹{drink.price}/kg
                        </p>
                        <p className="text-success fw-bold">
                          {drink.offer}% Off
                        </p>
                        {inCart && inCart.quantity > 0 ? (
                          <div className="d-flex align-items-center gap-2">
                            <button
                              className="btn btn-dark btn-sm"
                              onClick={() => dispatch(decreaseQty(drink.id))}
                            >
                              -
                            </button>
                            <span>{inCart.quantity}</span>
                            <button
                              className="btn btn-dark btn-sm"
                              onClick={() => dispatch(increaseQty(drink.id))}
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              dispatch(addLogic(drink));
                            }}
                            className="btn btn-dark btn-sm mt-2"
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
    </div>
  );
};

export default Beverages;
