
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeLogic , increaseQty, decreaseQty } from "../redux/cartSlice";
const CartPage = () => {
 const dispatch = useDispatch()
 const products = useSelector((state) => state.addLogic.products)
 const totalAmount = products.reduce((sum , item ) => sum + item.quantity * item.price , 0)
  return (
    <div>
      <Link to={"/"}>
        <button>
          <h2>back to category</h2>
        </button>
      </Link>
      <Link to={"/dairy"}>
        <button>
          <h2>back to dairy</h2>
        </button>
      </Link>

      <div className="container">
    
      {products.length === 0 ? "cart is empty" : products.map((item)=> (
       <div style={{display:"flex" , gap:"10px"}} className="ke" key={item.id}>
        <h1>product name: {item.name}</h1>
        <h1>price : {item.price}</h1>
        <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
        <h1>{item.quantity}</h1>
        <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
        <button onClick={() => dispatch(removeLogic(item.id))}>
          remove
        </button>
       </div>
      
      ))}
      <h1> sub total: {totalAmount}</h1>
      </div>
    </div>
  );
};

export default CartPage;
