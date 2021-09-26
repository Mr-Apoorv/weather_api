import React, { useState } from "react";

export default function InputForm(props) {
  const [inputState, setInputState] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.setSearch(inputState); //
    setInputState("");
  };

  const inputHandler = (event) => {
    setInputState(event.target.value);
  };

  const clearHandler = (event) => {
    localStorage.removeItem("newData"); //
    window.location.reload();
    // props.setSearch("bangalore");
  };
  return (
    <div>
      <h2 className="text-center my-5">Weather stats!</h2>
      <div className="container">
        <form onSubmit={submitHandler} className="p-4 bg-light rounded-3">
          <div className="mb-3">
            <label htmlFor="searchCity" className="form-label">
              Enter city
            </label>
            <input
              type="text"
              className="form-control"
              id="searchCity"
              onChange={inputHandler}
              value={inputState}
            />
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-dark mx-3"
            onClick={clearHandler}
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
}
