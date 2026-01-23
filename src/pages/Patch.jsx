import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "../styles/edit.css"

const Patch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json(); 
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again.");
        setLoading(false);
        toast.error("Error loading products");
      });
  }, []);

  const DeleteItems = (id) => {
    fetch(`http://localhost:8000/api/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Deleted successfully");
        setProducts((prev) =>
          prev.filter((product) => product._id !== id)
        );
      })
      .catch((err) => {
        toast.error("Error deleting item");
        console.error(err);
      });
  };

  if (loading) {
    return <div className="container">Loading products...</div>; 
  }

  if (error) {
    return <div className="container">{error}</div>; 
  }

  return (
    <div className="container lists">
 <Link to={"/"}>
        <button className="btn btn-primary" type="button">
          Go Back To Category
        </button>
      </Link>

  <table className="product-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Discount</th>
        <th>Image</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {products.length > 0 ? (
        products.map((product) => (
          <tr key={product._id}>
            <td>{product.productName}</td>
            <td>{product.productPrice}</td>
            <td>{product.productOffer}</td>
            <td>
              <img
                src={product.productImage}
                className="product-image"
                alt={product.productName}
              />
            </td>
            <td>{product.quantity}</td>
            <td>
              <button className="btn delete-btn" onClick={() => DeleteItems(product._id)}>Delete</button>
              <button className="btn edit-btn" onClick={() => navigate(`/edit/${product._id}`)}>Edit</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="6" className="no-products">No products found.</td>
        </tr>
      )}
    </tbody>
  </table>
</div>

  );
};

export default Patch;