import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartPage = () => {
  const items = useSelector((state) => state.addTo.items);
  console.log(items);
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
        <div className="table">
          <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Offer</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan="4">No items in cart</td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>₹{item.price}</td>
                    <td>{item.offer}%</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
