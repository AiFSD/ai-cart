import "../styles/upload.css";
import { ToastContainer, toast } from "react-toastify";

const Upload = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productPrice = form.productPrice.value;
    const productImage = form.productImage.value;
    const quantity = form.productQuantity.value
    const productOffer = form.productOffer.value;

    if (productName === "" || productPrice === "" || productImage === "" || quantity==="" || productOffer === "") {
      toast.warn("fill the details");
    } else {
      const items = { productName , productPrice, productImage, productOffer,quantity };
      console.log(items);
      fetch("http://localhost:8000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(items),
      }).then((data) => {
        toast.success("added successfully");
        form.reset();
        console.log(data);
      });
    }
  };
  return (
    <div className="container mt-5">
      <ToastContainer />
      <div className="formCon">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input1">
            <label className="name">Product Name</label>
            <input type="text" name="productName" className="pname" />
          </div>
          <div className="input2">
            <label className="cost">Product Price</label>
            <input type="number" name="productPrice" className="price" />
          </div>
          <div className="input3">
            <label className="img">Product image</label>
            <input type="text" name="productImage" className="image" />
          </div>
           <div className="input4">
            <label className="offer">Product Quantity</label>
            <input type="number" name="productQuantity" className="discount" />
          </div>
          <div className="input5">
            <label className="offer">Product Offer</label>
            <input type="number" name="productOffer" className="discount" />
          </div>
          <div className="input6">
            <button type="submit">Upload Products To Database</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;
