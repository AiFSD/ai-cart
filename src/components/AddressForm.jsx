

const AddressForm = () => {
  
  return (
    <div>
      <form >
        <label for="inputAddress" class="form-label">
          Address
        </label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        ></input>
        <button type="submit" class="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
