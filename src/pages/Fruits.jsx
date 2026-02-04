import { useSelector, useDispatch } from "react-redux";
import { fruitsData } from "../datas/fruits";
import { addLogic , increaseQty , decreaseQty } from "../redux/cartSlice";

import "../styles/products.css";

const Fruits = () => {
  const products = useSelector((state) => state.addLogic.products);
  const dispatch = useDispatch();
  return (
    <div className="container-fluid veg-con">
      <a href="/">
        <button className="btn btn-primary" type="button">
          Go Back To Category
        </button>
      </a>
      <div className="row g-3 mt-3">
        {fruitsData.map((fruit) => {
         const inCart = products.find((p) => p.id === fruit.id) 
       return (
         <div key={fruit.id} className="col-12 col-md-12 col-lg-6">
           <div
             style={{ height: "100%" }}
             className="card  shadow-sm border-secondary-subtle"
           >
             <div className="row g-0 h-100 align-fruit-center">
               <div className="col-4 h-100">
                 <img
                   src={fruit.image}
                   className="img-fluid rounded-start product-img"
                   alt={fruit.name}
                 />
               </div>
               <div className="col-8">
                 <div className="card-body">
                   <h5 className="card-title fw-bold">{fruit.name}</h5>
                   <p className="mb-1 text-muted">Price: ₹{fruit.price}/kg</p>
                   <p className="text-success fw-bold">{fruit.offer}% Off</p>
                   {inCart && inCart.quantity > 0 ? (
                     <div className="d-flex align-items-center gap-2">
                       <button
                         className="btn btn-dark btn-sm"
                         onClick={() => dispatch(decreaseQty(fruit.id))}
                       >
                         -
                       </button>
                       <span>{inCart.quantity}</span>
                       <button
                         className="btn btn-dark btn-sm"
                         onClick={() => dispatch(increaseQty(fruit.id))}
                       >
                         +
                       </button>
                     </div>
                   ) : (
                     <button
                       onClick={() => dispatch(addLogic(fruit))}
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

  );
};

export default Fruits;
