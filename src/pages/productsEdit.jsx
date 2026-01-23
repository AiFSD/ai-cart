import { useEffect, useState } from "react";
import { useParams, useNavigate, Links } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/patchForm.css"
import { Link } from "react-router-dom";
const ProductsEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    productName: "",
    productPrice: "",
    productOffer: "",
    productImage: "",
    quantity: "",
  });

  useEffect(() => {
    fetch(`http://localhost:8000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/api/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully updated");
        navigate("/Patchwork");
      })
      .catch((err) => {
        toast.error("Update failed");
        console.error(err);
      });
  };

  return (
    <div className="edit-container">
     
      <ToastContainer />
      <form onSubmit={handleUpdate} className="edit-form">
        <h2 className="form-title">Edit Product</h2>
        <input
          type="text"
          className="form-input"
          value={product.productName}
          onChange={(e) =>
            setProduct({ ...product, productName: e.target.value })
          }
          placeholder="Name"
        />
        <input
          type="number"
          className="form-input"
          value={product.productPrice}
          onChange={(e) =>
            setProduct({ ...product, productPrice: e.target.value })
          }
          placeholder="Price"
        />
        <input
          type="text"
          className="form-input"
          value={product.productOffer}
          onChange={(e) =>
            setProduct({ ...product, productOffer: e.target.value })
          }
          placeholder="Offer"
        />
        <input
          type="text"
          className="form-input"
          value={product.productImage}
          onChange={(e) =>
            setProduct({ ...product, productImage: e.target.value })
          }
          placeholder="Image URL"
        />
        <input
          type="number"
          className="form-input"
          value={product.quantity}
          onChange={(e) =>
            setProduct({ ...product, quantity: e.target.value })
          }
          placeholder="Quantity"
        />
        <button type="submit" className="form-button">
          Update
        </button>

          <Link to={"/patchwork"}>
        <button className="btn btn-primary" style={{marginLeft:"70px"}} type="button">
          Go Back To Category
        </button>
      </Link>
      </form>
     
    </div>
  );
};

export default ProductsEdit;
