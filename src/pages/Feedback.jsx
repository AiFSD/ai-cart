import { ToastContainer,toast } from "react-toastify";


const Feedback = () => {
     const feedbackSubmit = (e) => {
e.preventDefault();
const feed = e.target;
const productName = feed.name.value;
const purchaseId = feed.id.value;
const feedback = feed.message.value;

if(productName === "" || purchaseId==="" || feedback==="") {
     toast.warn('fill the details')
} else  {
      const details = { productName , purchaseId , feedback };
      console.log(details);
      fetch("http://localhost:8000/api/feedbacks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      }).then((data) => {
        toast.success("uploaded successfully");
        feed.reset();
        console.log(data);
      });
    }
     }
  return (
    <div className="container">
<form onSubmit={feedbackSubmit}>
<div className="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm">Product Name</span>
  <input type="text" name="name" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default">Purchase Id</span>
  <input type="number" name="id" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>

<div className="input-group ">
  <span className="input-group-text" id="inputGroup-sizing-lg">Feed Back</span>
  <input type="text" name="message" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
</div>
<div className="btn">
     <button type="submit"> Sumbit </button>
</div>
</form>
    </div>
  )
}

export default Feedback