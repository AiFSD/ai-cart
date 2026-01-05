import "../styles/products.css";
import { useSelector, useDispatch } from "react-redux";
import { loadOffer } from "../redux/productSlice";
import { useEffect } from "react";

const OfferProducts = () => {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offer.offerProducts);

  useEffect(() => {
    dispatch(loadOffer());
  }, [dispatch]);

  return (
    <div className="container-fluid veg-con">
      <a href="/">
        <button className="btn btn-primary" type="button">
          Go Back To Category
        </button>
      </a>
      <div className="row g-3 mt-3">
        {
          offers.map((offer) => (
          <div key={offer.id} className="col-12 col-md-12 col-lg-6">
            <div className="card shadow-sm border-secondary-subtle" style={{ height: "80%" }}>
              <div className="row g-0 h-100 align-offer-center">
                <div className="col-4 h-100">
                  <img
                    src={offer.image}
                    className="img-fluid rounded-start product-img"
                    alt={offer.name}
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{offer.name}</h5>
                    <p className="mb-1 text-muted">Price: ₹{offer.price}/kg</p>
                    <p className="text-success fw-bold">{offer.offer}% Off</p>
                    <button className="btn btn-dark btn-sm mt-2">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default OfferProducts;
