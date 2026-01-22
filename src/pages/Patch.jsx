import { useState, useEffect } from "react";

const Patch = () => {
  const [products, setPoducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((data) => setPoducts(data));
  }, []);

  
  return (
    <div>
      <div className="container lists">
        <table>
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
    {products.map((product) => (
      <tr key={product.id}>
        <td>{product.productName}</td>
        <td>{product.productPrice}</td>
        <td>{product.productOffer}</td>
        <td>
          <img
            src={product.productImage}
            className="img-fluid rounded-start"
            alt={product.productName} 
          />
        </td>
        <td>{product.quantity}</td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
};

export default Patch;
