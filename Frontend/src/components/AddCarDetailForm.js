import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCarDetailForm = () => {
  // let id = localStorage.getItem("id");
  const navigate = useNavigate();
  let [cardetail, setCardetail] = useState({
    car: "",
    price: "",
    phone: "",
    picturenomber: "",
  });
  const { car, price, phone, picturenomber } = cardetail;
  const data = (e) => {
    setCardetail({ ...cardetail, [e.target.name]: e.target.value });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8080/cardetaildata", cardetail)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      <div>
        <section className="">
          {/* Jumbotron */}
          <div
            className="px-4 py-5 px-md-5 text-center text-lg-start"
            style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
          >
            <div className="container">
              <div className="row gx-lg-5 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="card">
                    <div className="card-body py-5 px-md-5">
                      <form onSubmit={(e) => handleSignUp(e)}>
                        {/* date input */}
                        <div className="form-outline mb-4">
                          <input
                            required
                            type="text"
                            name="car"
                            value={car}
                            onChange={(e) => data(e)}
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example3">
                            Car Name
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            required
                            type="nomber"
                            name="price"
                            value={price}
                            onChange={(e) => data(e)}
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example3">
                            Price
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            required
                            type="nomber"
                            name="phone"
                            value={phone}
                            onChange={(e) => data(e)}
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example3">
                            Enter Nomber
                          </label>
                        </div>
                        {/* description input */}

                        <div className="form-outline mb-4">
                          <select
                            required
                            className="form-select"
                            aria-label="Default select example"
                            value={picturenomber}
                            onChange={(e) => data(e)}
                            name="picturenomber"
                          >
                            <option></option>
                            <option type="number" value="1">
                              1
                            </option>
                            <option type="number" value="2">
                              2
                            </option>
                            <option type="number" value="3">
                              3
                            </option>
                            <option type="number" value="4">
                              4
                            </option>
                            <option type="number" value="5">
                              5
                            </option>
                            <option type="number" value="6">
                              6
                            </option>
                          </select>
                          <label className="form-label" htmlFor="form3Example4">
                            Select Nomber of Pictures
                          </label>
                        </div>

                        {/* Submit button */}
                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                        >
                          Add Transaction
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Jumbotron */}
        </section>
      </div>
    </React.Fragment>
  );
};

export default AddCarDetailForm;
