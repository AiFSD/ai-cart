import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeLogic, increaseQty, decreaseQty } from "../redux/cartSlice";
import "../styles/cartPage.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const CartPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.addLogic.products);
  const totalAmount = products.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  return (
    <>
    <NavBar/>
    <div>
      <div className="container back-con mt-5 ">
        <Link to={"/"}>
          <button className="btn ">
            <p>back to category</p>
          </button>
        </Link>
        <Link to={"/dairy"}>
          <button className="btn">
            <p>back to dairy</p>
          </button>
        </Link>
      </div>

      <div className="  container mt-5">
        {products.length === 0
          ? "cart is empty"
          : products.map((item) => (
              <div className="cart-con " key={item.id}>
                <div className="cardss">
                  <ul className="list-group list-group-horizontal ">
                    {console.log(item.image)}
                    <li className="list-group-item list-group-item-primary">
                      <img style={{border:"2px solid green"}} src={item.image} width={100} height={100} />
                    </li>
                    <li className="list-group-item list-group-item-primary">
                      {item.name}
                    </li>
                    <li className="list-group-item list-group-item-primary">
                      {item.price}
                    </li>
                    <li className="list-group-items list-group-item-primary d-flex">
                      <button
                        className="list-group-item-primary btn btn-cal"
                        onClick={() => dispatch(decreaseQty(item.id))}
                      >
                        -
                      </button>
                      <p style={{ textAlign: "center" }}>{item.quantity}</p>
                      <button
                        className=" btn btn-cal"
                        onClick={() => dispatch(increaseQty(item.id))}
                      >
                        +
                      </button>
                    </li>
                    <li className="list-group-item list-group-item-primary d-flex">
                      {" "}
                      <button
                        className="btn "
                        onClick={() => dispatch(removeLogic(item.id))}
                      >
                        remove
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
        <div className="card-footer mt-5 text-center">
          {" "}
          <h4> Total : {totalAmount}</h4>
        </div>
      </div>
    </div>
   <Footer/>
    </>
  );
};

export default CartPage;
